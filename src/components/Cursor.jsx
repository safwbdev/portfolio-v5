import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    let rafId;
    const tick = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => { dot.style.width = '18px'; dot.style.height = '18px'; dot.style.background = 'var(--c-orange,#fb923c)'; ring.style.width = '46px'; ring.style.height = '46px'; };
    const onLeave = () => { dot.style.width = '8px'; dot.style.height = '8px'; dot.style.background = '#38bdf8'; ring.style.width = '32px'; ring.style.height = '32px'; };

    document.querySelectorAll('a, button, .skills__pill').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor cursor--dot" />
      <div ref={ringRef} className="cursor cursor--ring" />
    </>
  );
}
