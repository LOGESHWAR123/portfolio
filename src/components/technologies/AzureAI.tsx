export default function AzureAI() {
  return (
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="aai-a" x1="0.5" x2="0.5" y1="0" y2="1">
          <stop offset="0" stopColor="#0078d4"/>
          <stop offset="1" stopColor="#5ea0ef"/>
        </linearGradient>
        <linearGradient id="aai-b" x1="0" x2="1" y1="0.5" y2="0.5">
          <stop offset="0" stopColor="#773adc"/>
          <stop offset="1" stopColor="#0078d4"/>
        </linearGradient>
      </defs>

      {/* Base Azure shape */}
      <path d="M20 72 L44 12 L68 12 L44 52 L64 52 L24 92 Z" fill="url(#aai-a)"/>
      <path d="M52 72 L68 72 L80 92 L28 92 Z" fill="#0050a0" opacity="0.6"/>

      {/* AI spark / neural node overlay */}
      <circle cx="72" cy="28" r="14" fill="url(#aai-b)" opacity="0.95"/>
      <circle cx="72" cy="28" r="5" fill="#fff" opacity="0.9"/>
      <line x1="72" y1="10" x2="72" y2="18" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="72" y1="38" x2="72" y2="46" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="54" y1="28" x2="62" y2="28" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="82" y1="28" x2="90" y2="28" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="59" y1="15" x2="65" y2="21" stroke="#fff" strokeWidth="2" opacity="0.5"/>
      <line x1="79" y1="35" x2="85" y2="41" stroke="#fff" strokeWidth="2" opacity="0.5"/>
      <line x1="85" y1="15" x2="79" y2="21" stroke="#fff" strokeWidth="2" opacity="0.5"/>
      <line x1="65" y1="35" x2="59" y2="41" stroke="#fff" strokeWidth="2" opacity="0.5"/>
    </svg>
  );
}