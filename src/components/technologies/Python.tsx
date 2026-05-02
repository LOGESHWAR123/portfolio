export default function Python() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="py-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#387EB8"/>
          <stop offset="1" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE052"/>
          <stop offset="1" stopColor="#FFC331"/>
        </linearGradient>
      </defs>

      {/* Top snake (blue) */}
      <path
        d="M63.5 3C39.2 3 40.9 13.5 40.9 13.5V24.3H64V27H28.5S14 25.3 14 49.9s12.6 23.9 12.6 23.9H34V62.5s-.4-12.6 12.4-12.6H70s12-.2 12-11.6V22.4S83.8 3 63.5 3z"
        fill="url(#py-a)"
      />
      {/* Top eye */}
      <circle cx="63.5" cy="14.5" r="4" fill="#fff"/>
      <circle cx="63.5" cy="14.5" r="2" fill="#366994"/>

      {/* Bottom snake (yellow) */}
      <path
        d="M64.5 125c24.3 0 22.6-10.5 22.6-10.5V103.7H64V101H99.5s14.5 1.7 14.5-22.9-12.6-23.9-12.6-23.9H94V65.5s.4 12.6-12.4 12.6H58s-12 .2-12 11.6v27.5S44.2 125 64.5 125z"
        fill="url(#py-b)"
      />
      {/* Bottom eye */}
      <circle cx="64.5" cy="113.5" r="4" fill="#fff"/>
      <circle cx="64.5" cy="113.5" r="2" fill="#FFC331"/>

      {/* Connector bar */}
      <rect x="40.9" y="24.3" width="23.1" height="2.7" fill="url(#py-a)"/>
      <rect x="64" y="100.9" width="23.1" height="2.7" fill="url(#py-b)"/>
    </svg>
  );
}