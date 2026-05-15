import React from 'react';

const thumbs = {
  'void-strike': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#050f1f" />
      <circle cx="170" cy="80" r="55" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" />
      <circle cx="170" cy="80" r="35" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.5" />
      <polygon points="60,40 70,35 78,44 72,55 58,52" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="0.8" />
      <polygon points="270,100 282,94 290,105 283,118 268,114" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="0.8" />
      <polygon points="100,110 108,104 115,112 110,122 98,119" fill="#1e2d4a" stroke="#38bdf8" strokeWidth="0.5" />
      <polygon points="170,48 160,72 170,66 180,72" fill="#38bdf8" />
      <line x1="170" y1="66" x2="170" y2="80" stroke="#fb923c" strokeWidth="2" opacity="0.8" />
      <rect x="169" y="30" width="2" height="10" rx="1" fill="#00ffff" opacity="0.9" />
      <circle cx="40" cy="20" r="1" fill="white" opacity="0.7" /><circle cx="120" cy="15" r="0.8" fill="white" opacity="0.5" />
      <circle cx="220" cy="25" r="1.2" fill="white" opacity="0.8" /><circle cx="300" cy="18" r="0.7" fill="white" opacity="0.6" />
      <circle cx="80" cy="130" r="0.9" fill="white" opacity="0.5" /><circle cx="250" cy="140" r="1.1" fill="white" opacity="0.7" />
      <circle cx="170" cy="56" r="6" fill="#38bdf8" opacity="0.15" />
      <text x="170" y="145" fontFamily="monospace" fontSize="8" fill="#38bdf8" opacity="0.4" textAnchor="middle" letterSpacing="3">VOID STRIKE</text>
    </svg>
  ),
  'crdt': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#08051a" />
      <rect x="40" y="20" width="120" height="8" rx="2" fill="#818cf8" opacity="0.15" />
      <rect x="40" y="34" width="90" height="6" rx="2" fill="#818cf8" opacity="0.1" />
      <rect x="40" y="46" width="110" height="6" rx="2" fill="#818cf8" opacity="0.1" />
      <rect x="40" y="58" width="70" height="6" rx="2" fill="#818cf8" opacity="0.1" />
      <rect x="113" y="54" width="2" height="14" rx="1" fill="#38bdf8" opacity="0.9" />
      <path d="M180 75 Q210 60 240 75" stroke="#818cf8" strokeWidth="1.5" fill="none" strokeDasharray="4 2" opacity="0.6" />
      <path d="M237 72 L240 75 L237 78" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M183 72 L180 75 L183 78" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="180" y="20" width="120" height="8" rx="2" fill="#818cf8" opacity="0.15" />
      <rect x="180" y="34" width="100" height="6" rx="2" fill="#818cf8" opacity="0.1" />
      <rect x="180" y="46" width="80" height="6" rx="2" fill="#818cf8" opacity="0.1" />
      <rect x="263" y="44" width="2" height="14" rx="1" fill="#fb923c" opacity="0.9" />
      <circle cx="100" cy="110" r="12" fill="#1e1060" stroke="#818cf8" strokeWidth="1" />
      <text x="100" y="114" fontFamily="monospace" fontSize="8" fill="#818cf8" textAnchor="middle">A</text>
      <circle cx="170" cy="110" r="12" fill="#1e1060" stroke="#818cf8" strokeWidth="1" />
      <text x="170" y="114" fontFamily="monospace" fontSize="8" fill="#818cf8" textAnchor="middle">B</text>
      <circle cx="240" cy="110" r="12" fill="#1e1060" stroke="#818cf8" strokeWidth="1" />
      <text x="240" y="114" fontFamily="monospace" fontSize="8" fill="#818cf8" textAnchor="middle">C</text>
      <line x1="112" y1="110" x2="158" y2="110" stroke="#818cf8" strokeWidth="0.8" opacity="0.4" />
      <line x1="182" y1="110" x2="228" y2="110" stroke="#818cf8" strokeWidth="0.8" opacity="0.4" />
      <text x="170" y="150" fontFamily="monospace" fontSize="8" fill="#818cf8" opacity="0.4" textAnchor="middle" letterSpacing="2">CRDT SYNC</text>
    </svg>
  ),
  'data-grid': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#050f0a" />
      <rect x="20" y="18" width="300" height="10" rx="1" fill="#639922" opacity="0.25" />
      {[32, 44, 56, 68, 80, 92, 104].map((y, i) => <rect key={i} x="20" y={y} width="300" height="8" rx="1" fill="#1a2a10" opacity={i % 2 === 0 ? 0.6 : 0.4} />)}
      <line x1="80" y1="18" x2="80" y2="115" stroke="#639922" strokeWidth="0.5" opacity="0.3" />
      <line x1="160" y1="18" x2="160" y2="115" stroke="#639922" strokeWidth="0.5" opacity="0.3" />
      <line x1="240" y1="18" x2="240" y2="115" stroke="#639922" strokeWidth="0.5" opacity="0.3" />
      <text x="30" y="26" fontFamily="monospace" fontSize="7" fill="#639922" opacity="0.8">ID</text>
      <text x="90" y="26" fontFamily="monospace" fontSize="7" fill="#639922" opacity="0.8">NAME</text>
      <text x="170" y="26" fontFamily="monospace" fontSize="7" fill="#639922" opacity="0.8">VALUE</text>
      <text x="250" y="26" fontFamily="monospace" fontSize="7" fill="#639922" opacity="0.8">STATUS</text>
      <rect x="20" y="56" width="300" height="8" rx="1" fill="#639922" opacity="0.12" />
      <text x="170" y="145" fontFamily="monospace" fontSize="9" fill="#639922" opacity="0.5" textAnchor="middle" letterSpacing="2">10,000,000 ROWS · 60FPS</text>
    </svg>
  ),
  'python-ide': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#0a0a0f" />
      <rect x="20" y="15" width="300" height="115" rx="3" fill="#111" stroke="#333" strokeWidth="0.8" />
      <rect x="20" y="15" width="300" height="18" rx="3" fill="#1a1a2e" />
      <circle cx="34" cy="24" r="4" fill="#ff5f57" opacity="0.8" />
      <circle cx="48" cy="24" r="4" fill="#febc2e" opacity="0.8" />
      <circle cx="62" cy="24" r="4" fill="#28c840" opacity="0.8" />
      <text x="32" y="48" fontFamily="monospace" fontSize="8" fill="#fb923c">def</text>
      <text x="55" y="48" fontFamily="monospace" fontSize="8" fill="#38bdf8">fibonacci</text>
      <text x="110" y="48" fontFamily="monospace" fontSize="8" fill="#cbd5e1">(n):</text>
      <text x="40" y="60" fontFamily="monospace" fontSize="8" fill="#fb923c">if</text>
      <text x="56" y="60" fontFamily="monospace" fontSize="8" fill="#cbd5e1">n &lt;= 1:</text>
      <text x="48" y="72" fontFamily="monospace" fontSize="8" fill="#fb923c">return</text>
      <text x="94" y="72" fontFamily="monospace" fontSize="8" fill="#818cf8">n</text>
      <text x="40" y="84" fontFamily="monospace" fontSize="8" fill="#fb923c">return</text>
      <text x="87" y="84" fontFamily="monospace" fontSize="8" fill="#38bdf8">fibonacci</text>
      <text x="142" y="84" fontFamily="monospace" fontSize="8" fill="#cbd5e1">(n-1) +</text>
      <text x="185" y="84" fontFamily="monospace" fontSize="8" fill="#38bdf8">fibonacci</text>
      <text x="240" y="84" fontFamily="monospace" fontSize="8" fill="#cbd5e1">(n-2)</text>
      <rect x="20" y="118" width="300" height="32" fill="#0d1117" stroke="#333" strokeWidth="0.5" />
      <text x="30" y="130" fontFamily="monospace" fontSize="7" fill="#639922">&gt;&gt;&gt; fibonacci(10)</text>
      <text x="30" y="142" fontFamily="monospace" fontSize="7" fill="#cbd5e1">55</text>
      <rect x="118" y="137" width="5" height="8" fill="#38bdf8" opacity="0.8" />
    </svg>
  ),
  'crema': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#0f0a06" />
      <path d="M130 40 L210 40 L200 120 L140 120 Z" fill="#1a0f06" stroke="#fb923c" strokeWidth="1.2" opacity="0.9" />
      <path d="M130 40 L210 40" stroke="#fb923c" strokeWidth="2" opacity="0.8" />
      <path d="M200 65 Q225 65 225 85 Q225 105 200 105" stroke="#fb923c" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M155 30 Q158 22 155 15" stroke="#fb923c" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M170 28 Q173 18 170 10" stroke="#fb923c" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M185 30 Q188 22 185 15" stroke="#fb923c" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
      <ellipse cx="170" cy="122" rx="42" ry="6" fill="#1a0f06" stroke="#fb923c" strokeWidth="1" opacity="0.8" />
      <ellipse cx="170" cy="55" rx="36" ry="5" fill="#3d1f0a" opacity="0.6" />
      <rect x="30" y="50" width="75" height="10" rx="2" fill="#fb923c" opacity="0.15" />
      <rect x="30" y="66" width="75" height="8" rx="2" fill="#fb923c" opacity="0.08" />
      <rect x="30" y="80" width="75" height="8" rx="2" fill="#fb923c" opacity="0.08" />
      <text x="170" y="148" fontFamily="monospace" fontSize="8" fill="#fb923c" opacity="0.4" textAnchor="middle" letterSpacing="3">CREMA</text>
    </svg>
  ),
  'bucket-list': (
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="160" fill="#050d12" />
      <line x1="0" y1="40" x2="340" y2="40" stroke="#0d2a3a" strokeWidth="0.8" />
      <line x1="0" y1="80" x2="340" y2="80" stroke="#0d2a3a" strokeWidth="0.8" />
      <line x1="0" y1="120" x2="340" y2="120" stroke="#0d2a3a" strokeWidth="0.8" />
      <line x1="85" y1="0" x2="85" y2="160" stroke="#0d2a3a" strokeWidth="0.8" />
      <line x1="170" y1="0" x2="170" y2="160" stroke="#0d2a3a" strokeWidth="0.8" />
      <line x1="255" y1="0" x2="255" y2="160" stroke="#0d2a3a" strokeWidth="0.8" />
      <circle cx="110" cy="65" r="8" fill="#38bdf8" opacity="0.2" /><circle cx="110" cy="65" r="4" fill="#38bdf8" opacity="0.8" />
      <line x1="110" y1="65" x2="110" y2="80" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
      <circle cx="200" cy="95" r="8" fill="#fb923c" opacity="0.2" /><circle cx="200" cy="95" r="4" fill="#fb923c" opacity="0.8" />
      <line x1="200" y1="95" x2="200" y2="110" stroke="#fb923c" strokeWidth="1.5" opacity="0.6" />
      <circle cx="270" cy="50" r="8" fill="#818cf8" opacity="0.2" /><circle cx="270" cy="50" r="4" fill="#818cf8" opacity="0.8" />
      <line x1="270" y1="50" x2="270" y2="65" stroke="#818cf8" strokeWidth="1.5" opacity="0.6" />
      <rect x="20" y="20" width="80" height="50" rx="3" fill="#07131a" stroke="#38bdf8" strokeWidth="0.8" opacity="0.9" />
      <rect x="26" y="27" width="40" height="4" rx="1" fill="#38bdf8" opacity="0.5" />
      <rect x="26" y="35" width="60" height="3" rx="1" fill="#475569" opacity="0.5" />
      <text x="170" y="150" fontFamily="monospace" fontSize="8" fill="#38bdf8" opacity="0.4" textAnchor="middle" letterSpacing="2">BUCKET LIST</text>
    </svg>
  ),
};

// export default function ProjectThumb({ id }) {
//   return <div className="proj__thumb">{thumbs[id] || null}</div>;
// }

export default function ProjectThumb({ src }) {
  return <div className="proj__thumb">
    <img src={src} alt="preview" /></div>;
}
