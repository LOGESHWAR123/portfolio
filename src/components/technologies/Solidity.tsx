export default function Solidity() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="sol-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8C8C8C"/>
          <stop offset="1" stopColor="#383838"/>
        </linearGradient>
        <linearGradient id="sol-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff"/>
          <stop offset="1" stopColor="#C0C0C0"/>
        </linearGradient>
      </defs>

      {/* Top diamond group */}
      {/* Top-left triangle */}
      <polygon
        points="64,8 102,8 83,40"
        fill="url(#sol-a)"
        opacity="0.5"
      />
      {/* Top-right triangle */}
      <polygon
        points="83,40 102,8 121,40"
        fill="url(#sol-a)"
        opacity="0.8"
      />
      {/* Top-center diamond */}
      <polygon
        points="26,8 64,8 83,40 45,40"
        fill="url(#sol-a)"
        opacity="1"
      />

      {/* Middle gap spacer — intentional whitespace between two diamond groups -->

      {/* Bottom diamond group */}
      {/* Bottom-left triangle */}
      <polygon
        points="45,88 83,88 64,120"
        fill="url(#sol-b)"
        opacity="0.5"
      />
      {/* Bottom-right triangle */}
      <polygon
        points="7,88 45,88 26,120"
        fill="url(#sol-b)"
        opacity="0.8"
      />
      {/* Bottom-center diamond */}
      <polygon
        points="83,88 121,88 102,120 64,120"
        fill="url(#sol-b)"
        opacity="1"
      />

      {/* Center connecting diamond */}
      <polygon
        points="45,40 83,40 64,72 26,72"
        fill="url(#sol-a)"
        opacity="0.9"
      />
      <polygon
        points="83,40 121,40 102,72 64,72"
        fill="url(#sol-a)"
        opacity="0.6"
      />
      <polygon
        points="26,72 64,72 45,88 7,88"
        fill="url(#sol-b)"
        opacity="0.6"
      />
      <polygon
        points="64,72 102,72 83,88 45,88"
        fill="url(#sol-b)"
        opacity="0.9"
      />
    </svg>
  );
}