import React from 'react';
import reviews from '../config/reviews';
import googleLogo from '../assets/googleLogo.png';

export default function ReviewLinks({ layout = 'row', size = 'md' }) {
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5',
    lg: 'px-5 py-3 text-lg',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const container = layout === 'row'
    ? 'flex flex-wrap items-center justify-center gap-3'
    : 'grid grid-cols-1 gap-3';

  return (
    <div className={container}>
      {reviews.platforms.map((p) => {
        const iconNode = p.key === 'google'
          ? (
              <img
                src={googleLogo}
                alt=""
                className={`${iconSizes[size]} object-contain`}
                loading="lazy"
                aria-hidden="true"
              />
            )
          : (p.icon ? <span aria-hidden="true">{p.icon}</span> : null);
        return (
        <a
          key={p.key}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 ${sizes[size]} transition-colors`}
          aria-label={`Leave a review on ${p.name}`}
        >
          {iconNode}
          <span className="font-medium">{p.name}</span>
        </a>
        );
      })}
    </div>
  );
}
