import { useRef, useState, useEffect, useCallback } from 'react';

export function useSlider(total) {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const clamped = Math.max(0, Math.min(idx, total - 1));
    const cards = slider.querySelectorAll(':scope > *');
    if (cards[clamped]) {
      slider.scrollTo({ left: cards[clamped].offsetLeft - slider.offsetLeft, behavior: 'smooth' });
    }
    setCurrent(clamped);
  }, [total]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const cards = slider.querySelectorAll(':scope > *');
      let closest = 0, minDist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - slider.offsetLeft - slider.scrollLeft);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setCurrent(closest);
    };

    let isDown = false, startX = 0, scrollLeft = 0;
    const onMouseDown = (e) => { isDown = true; slider.classList.add('grabbing'); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; };
    const onMouseLeave = () => { isDown = false; slider.classList.remove('grabbing'); };
    const onMouseUp = () => { isDown = false; slider.classList.remove('grabbing'); };
    const onMouseMove = (e) => { if (!isDown) return; e.preventDefault(); slider.scrollLeft = scrollLeft - (e.pageX - slider.offsetLeft - startX); };

    slider.addEventListener('scroll', onScroll, { passive: true });
    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('scroll', onScroll);
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return { sliderRef, current, goTo };
}
