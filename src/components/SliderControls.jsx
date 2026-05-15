import React from 'react';

export default function SliderControls({ current, total, onPrev, onNext, onDot, className = 'slider-controls' }) {
  return (
    <div className={className}>
      {onPrev && <button className="slider-btn" onClick={onPrev} disabled={current === 0} aria-label="Previous">←</button>}
      {onNext && <button className="slider-btn" onClick={onNext} disabled={current === total - 1} aria-label="Next">→</button>}
      <div className="slider-dots">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} className={`slider-dot${i === current ? ' active' : ''}`} onClick={() => onDot(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <span className="slider-count">{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
}
