import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${stuck ? ' nav--stuck' : ''}`}>
      <a href="#" className="nav__logo">SAFWBDEV</a>
      <ul className="nav__links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav__link">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
