// Losslessly remove metadata segments (EXIF/GPS, XMP, comments) from JPEGs.
// Usage: node scripts/strip-exif.mjs <in.jpg> <out.jpg>
// JPEGs are a sequence of segments: FFD8 (start), then FF-marked segments.
// APP1..APP15 (FFE1-FFEF) and COM (FFFE) hold metadata; dropping them leaves
// the image data untouched. APP0 (JFIF header) is kept.

import fs from 'node:fs';

const [inPath, outPath] = process.argv.slice(2);
const buf = fs.readFileSync(inPath);
if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error(`${inPath}: not a JPEG`);

const parts = [buf.subarray(0, 2)];
let i = 2;
while (i < buf.length) {
  if (buf[i] !== 0xff) throw new Error(`${inPath}: bad segment at ${i}`);
  const marker = buf[i + 1];
  // Start of scan: everything from here to EOF is image data. Keep it all.
  if (marker === 0xda) {
    parts.push(buf.subarray(i));
    break;
  }
  const len = buf.readUInt16BE(i + 2);
  const seg = buf.subarray(i, i + 2 + len);
  const isMetadata = (marker >= 0xe1 && marker <= 0xef) || marker === 0xfe;
  if (!isMetadata) parts.push(seg);
  i += 2 + len;
}

fs.writeFileSync(outPath, Buffer.concat(parts));
console.log(`${outPath}: ${buf.length} -> ${Buffer.concat(parts).length} bytes`);
