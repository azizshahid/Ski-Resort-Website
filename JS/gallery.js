/* ─────────────────────────────────────────────────────────────
   SVG SCENE GENERATORS
───────────────────────────────────────────────────────────── */
function mkSnow(n = 20, col = "rgba(255,255,255,.6)") {
  return Array.from(
    { length: n },
    (_, i) =>
      `<circle cx="${Math.round(8 + ((i * 12.4) % 92))}%" cy="${Math.round(5 + ((i * 17.3) % 88))}%" r="${(0.4 + ((i * 0.07) % 1.1)).toFixed(1)}" fill="${col}" opacity="${(0.3 + ((i * 0.08) % 1)).toFixed(1)}"/>`,
  ).join("");
}
function mkStars(n = 30) {
  return Array.from(
    { length: n },
    (_, i) =>
      `<circle cx="${(5 + ((i * 11.7) % 90)).toFixed(1)}%" cy="${(2 + ((i * 7.3) % 55)).toFixed(1)}%" r="${(0.3 + ((i * 0.06) % 1.0)).toFixed(1)}" fill="white" opacity="${(0.2 + ((i * 0.1) % 0.9)).toFixed(1)}"/>`,
  ).join("");
}
function mkTrees(x, y, h, col = "#1a3a1a", n = 3, w = 16) {
  return Array.from(
    { length: n },
    (_, i) =>
      `<polygon points="${x + i * w * 2.2},${y} ${x - w / 2 + i * w * 2.2},${y + h} ${x + w / 2 + i * w * 2.2},${y + h}" fill="${col}"/><rect x="${x - 2 + i * w * 2.2}" y="${y + h}" width="4" height="${h * 0.18}" fill="${col}"/>`,
  ).join("");
}
function mkMtn(pts, fill, op = 1) {
  return `<polygon points="${pts}" fill="${fill}" opacity="${op}"/>`;
}
function skierFig(x, y, s = 1, col = "#ff6b6b") {
  return `<g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-18" r="5" fill="${col}"/>
    <line x1="0" y1="-13" x2="0" y2="2" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="0" y1="-8" x2="-7" y2="-3" stroke="${col}" stroke-width="2" stroke-linecap="round"/>
    <line x1="0" y1="-8" x2="8" y2="-4" stroke="${col}" stroke-width="2" stroke-linecap="round"/>
    <line x1="0" y1="2" x2="-6" y2="12" stroke="${col}" stroke-width="2" stroke-linecap="round"/>
    <line x1="0" y1="2" x2="7" y2="11" stroke="${col}" stroke-width="2" stroke-linecap="round"/>
    <line x1="-6" y1="8" x2="-16" y2="10" stroke="${col}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="7" y1="8" x2="18" y2="9" stroke="${col}" stroke-width="1.5" stroke-linecap="round"/>
  </g>`;
}

const SCENES = {
  slope_dawn(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d1b2e"/><stop offset="45%" stop-color="#c96b2e"/><stop offset="70%" stop-color="#e8a86a"/><stop offset="100%" stop-color="#f0d4a0"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#sd)"/>
      ${mkStars(18)}
      <circle cx="${W * 0.72}" cy="${H * 0.28}" r="${H * 0.12}" fill="#f5c842" opacity=".9" filter="url(#gl)"/>
      <ellipse cx="${W * 0.72}" cy="${H * 0.28}" rx="${H * 0.2}" ry="${H * 0.18}" fill="#f5c842" opacity=".15"/>
      ${mkMtn(`0,${H} ${W * 0.18},${H * 0.3} ${W * 0.38},${H * 0.55} ${W * 0.55},${H * 0.2} ${W * 0.72},${H * 0.42} ${W * 0.9},${H * 0.15} ${W},${H * 0.35} ${W},${H}`, "#1a2e42")}
      ${mkMtn(`0,${H} ${W * 0.22},${H * 0.45} ${W * 0.44},${H * 0.65} ${W * 0.62},${H * 0.35} ${W * 0.78},${H * 0.52} ${W},${H * 0.38} ${W},${H}`, "#253d52")}
      ${mkMtn(`0,${H} ${W * 0.3},${H * 0.58} ${W * 0.5},${H * 0.72} ${W * 0.7},${H * 0.55} ${W},${H * 0.62} ${W},${H}`, "rgba(240,240,255,.85)")}
      ${mkSnow(25, "rgba(255,255,255,.8)")}
      ${skierFig(W * 0.55, H * 0.78, 1.1)}
    </svg>`;
  },
  slope_action(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a3a5e"/><stop offset="100%" stop-color="#3a6a9e"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#sa)"/>
      ${mkMtn(`0,${H} ${W * 0.2},${H * 0.25} ${W * 0.45},${H * 0.5} ${W * 0.65},${H * 0.18} ${W * 0.85},${H * 0.38} ${W},${H * 0.22} ${W},${H}`, "#0d2840")}
      ${mkMtn(`0,${H} ${W * 0.25},${H * 0.42} ${W * 0.5},${H * 0.62} ${W * 0.75},${H * 0.38} ${W},${H * 0.5} ${W},${H}`, "rgba(220,235,255,.9)")}
      <path d="M${W * 0.1},${H * 0.85} Q${W * 0.35},${H * 0.65} ${W * 0.55},${H * 0.72} T${W * 0.9},${H * 0.88}" stroke="rgba(255,255,255,.4)" stroke-width="1.5" fill="none" stroke-dasharray="6 4"/>
      ${mkSnow(30)}
      ${skierFig(W * 0.55, H * 0.68, 1.2, "#ff6b6b")}
      <ellipse cx="${W * 0.55}" cy="${H * 0.82}" rx="${W * 0.08}" ry="${H * 0.02}" fill="rgba(255,255,255,.3)"/>
      <path d="M${W * 0.45},${H * 0.7} Q${W * 0.42},${H * 0.74} ${W * 0.38},${H * 0.8}" stroke="rgba(255,255,255,.5)" stroke-width="1.5" fill="none"/>
    </svg>`;
  },
  night_ski(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ns" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#040a14"/><stop offset="100%" stop-color="#0a1e38"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ns)"/>
      ${mkStars(45)}
      ${mkMtn(`0,${H} ${W * 0.15},${H * 0.35} ${W * 0.35},${H * 0.55} ${W * 0.55},${H * 0.2} ${W * 0.75},${H * 0.42} ${W},${H * 0.28} ${W},${H}`, "#06111e")}
      ${mkMtn(`0,${H} ${W * 0.25},${H * 0.52} ${W * 0.5},${H * 0.68} ${W * 0.75},${H * 0.48} ${W},${H * 0.58} ${W},${H}`, "rgba(200,220,240,.85)")}
      ${Array.from(
        { length: 6 },
        (_, i) => `
        <line x1="${W * (0.12 + i * 0.15)}" y1="${H * 0.45}" x2="${W * (0.12 + i * 0.15)}" y2="${H * 0.95}" stroke="rgba(255,220,80,.55)" stroke-width="1.5"/>
        <ellipse cx="${W * (0.12 + i * 0.15)}" cy="${H * 0.45}" rx="4" ry="4" fill="rgba(255,220,80,.8)"/>
        <ellipse cx="${W * (0.12 + i * 0.15)}" cy="${H * 0.95}" rx="${W * 0.04}" ry="${H * 0.015}" fill="rgba(255,220,80,.12)"/>
      `,
      ).join("")}
      ${skierFig(W * 0.48, H * 0.7, 1, "#ffffff")}
      <path d="M${W * 0.38},${H * 0.72} L${W * 0.28},${H * 0.82}" stroke="rgba(255,220,80,.6)" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>`;
  },
  snowboard(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a3a5c"/><stop offset="100%" stop-color="#4a7aa8"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#sb2)"/>
      ${mkMtn(`0,${H} ${W * 0.12},${H * 0.28} ${W * 0.3},${H * 0.48} ${W * 0.5},${H * 0.15} ${W * 0.68},${H * 0.38} ${W * 0.85},${H * 0.2} ${W},${H * 0.32} ${W},${H}`, "#0e2236")}
      ${mkMtn(`0,${H} ${W * 0.2},${H * 0.44} ${W * 0.42},${H * 0.62} ${W * 0.62},${H * 0.38} ${W * 0.82},${H * 0.54} ${W},${H * 0.44} ${W},${H}`, "rgba(225,238,255,.88)")}
      ${mkSnow(22)}
      <g transform="translate(${W * 0.5},${H * 0.68}) rotate(-12)">
        <circle cx="0" cy="-16" r="4.5" fill="#e8e8e8"/>
        <line x1="0" y1="-12" x2="0" y2="2" stroke="#cc4444" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="0" y1="-7" x2="-8" y2="-2" stroke="#cc4444" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="0" y1="-7" x2="9" y2="-3" stroke="#cc4444" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="0" y1="2" x2="-5" y2="10" stroke="#cc4444" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="0" y1="2" x2="6" y2="10" stroke="#cc4444" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="-14" y="10" width="28" height="5" rx="2.5" fill="#e8e8e8" transform="rotate(8,0,12)"/>
      </g>
      <path d="M${W * 0.3},${H * 0.72} Q${W * 0.4},${H * 0.62} ${W * 0.5},${H * 0.68}" stroke="rgba(255,255,255,.35)" stroke-width="2" fill="none"/>
    </svg>`;
  },
  cabin_ext(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ce" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0c1e34"/><stop offset="55%" stop-color="#1a3550"/><stop offset="100%" stop-color="#f0ede8"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ce)"/>
      ${mkStars(28)}
      <circle cx="${W * 0.78}" cy="${H * 0.18}" r="${H * 0.07}" fill="#fffadc" opacity=".75"/>
      ${mkMtn(`0,${H} ${W * 0.22},${H * 0.38} ${W * 0.42},${H * 0.55} ${W * 0.6},${H * 0.24} ${W * 0.78},${H * 0.44} ${W},${H * 0.3} ${W},${H}`, "#091625")}
      ${mkMtn(`0,${H} ${W * 0.28},${H * 0.5} ${W * 0.5},${H * 0.66} ${W * 0.72},${H * 0.46} ${W},${H * 0.56} ${W},${H}`, "rgba(225,232,245,.8)")}
      ${mkTrees(W * 0.08, H * 0.68, H * 0.22, "#0e2010", 4)}
      ${mkTrees(W * 0.72, H * 0.68, H * 0.2, "#0e2010", 3)}
      <rect x="${W * 0.3}" y="${H * 0.62}" width="${W * 0.4}" height="${H * 0.38}" fill="#2a1e12"/>
      <polygon points="${W * 0.25},${H * 0.62} ${W * 0.5},${H * 0.42} ${W * 0.75},${H * 0.62}" fill="#1a1208"/>
      <rect x="${W * 0.43}" y="${H * 0.74}" width="${W * 0.14}" height="${H * 0.26}" fill="#1a0e06"/>
      <rect x="${W * 0.34}" y="${H * 0.67}" width="${W * 0.1}" height="${H * 0.1}" rx="2" fill="#ffdb6e" opacity=".7"/>
      <rect x="${W * 0.56}" y="${H * 0.67}" width="${W * 0.1}" height="${H * 0.1}" rx="2" fill="#ffdb6e" opacity=".7"/>
      <ellipse cx="${W * 0.34}" cy="${H * 0.67 + H * 0.05}" rx="${W * 0.05}" ry="${H * 0.055}" fill="#ffdb6e" opacity=".12"/>
      <ellipse cx="${W * 0.66}" cy="${H * 0.67 + H * 0.05}" rx="${W * 0.05}" ry="${H * 0.055}" fill="#ffdb6e" opacity=".12"/>
      <rect x="0" y="${H * 0.9}" width="${W}" height="${H * 0.1}" fill="rgba(225,232,255,.12)"/>
      ${mkSnow(18, "rgba(255,255,255,.7)")}
      <path d="M${W * 0.5},${H * 0.28} Q${W * 0.52},${H * 0.1} ${W * 0.54},${H * 0.05}" stroke="rgba(180,180,200,.4)" stroke-width="2" fill="none"/>
    </svg>`;
  },
  cabin_int(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ci1" cx="50%" cy="80%" r="60%"><stop offset="0%" stop-color="#d44"/><stop offset="100%" stop-color="#1a0a04"/></radialGradient>
        <radialGradient id="ci2" cx="50%" cy="80%" r="40%"><stop offset="0%" stop-color="#ff8833" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="#120804"/>
      <rect width="${W}" height="${H}" fill="url(#ci1)"/>
      <rect x="${W * 0.25}" y="${H * 0.55}" width="${W * 0.5}" height="${H * 0.45}" fill="#2a1606"/>
      <rect x="${W * 0.3}" y="${H * 0.6}" width="${W * 0.4}" height="${H * 0.4}" fill="#1e1004"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.75}" rx="${W * 0.18}" ry="${H * 0.12}" fill="#ff5500" opacity=".6"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.75}" rx="${W * 0.1}" ry="${H * 0.07}" fill="#ffaa00" opacity=".8"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.78}" rx="${W * 0.06}" ry="${H * 0.04}" fill="#fff0a0" opacity=".9"/>
      ${Array.from({ length: 8 }, (_, i) => `<path d="M${W * (0.44 + i * 0.016)},${H * 0.75} Q${W * (0.44 + i * 0.016 + (i % 2 ? 0.015 : -0.015))},${H * (0.6 + i * 0.01)} ${W * (0.43 + i * 0.018)},${H * 0.52}" stroke="${i % 2 ? "#ff8800" : "#ffcc00"}" stroke-width="1.5" fill="none" opacity="${0.4 + i * 0.08}"/>`).join("")}
      <rect x="0" y="${H * 0.15}" width="${W * 0.14}" height="${H * 0.4}" fill="#1a0e06"/>
      <rect x="${W * 0.86}" y="${H * 0.15}" width="${W * 0.14}" height="${H * 0.4}" fill="#1a0e06"/>
      <rect x="${W * 0.08}" y="${H * 0.18}" width="${W * 0.06}" height="${H * 0.15}" rx="2" fill="#ffdb6e" opacity=".55"/>
      <rect x="${W * 0.86}" y="${H * 0.18}" width="${W * 0.06}" height="${H * 0.15}" rx="2" fill="#ffdb6e" opacity=".55"/>
      <rect x="${W * 0.2}" y="0" width="${W * 0.6}" height="${H * 0.15}" fill="#0e0804"/>
      <polygon points="${W * 0.2},0 ${W * 0.5},-${H * 0.08} ${W * 0.8},0" fill="#0a0604"/>
      <rect width="${W}" height="${H * 0.06}" fill="rgba(30,20,10,.6)"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.75}" rx="${W * 0.3}" ry="${H * 0.15}" fill="url(#ci2)"/>
    </svg>`;
  },
  dog_sled(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ds" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1a2e"/><stop offset="60%" stop-color="#1a3a5c"/><stop offset="100%" stop-color="#d8e8f4"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ds)"/>
      ${mkStars(24)}
      ${mkMtn(`0,${H} ${W * 0.16},${H * 0.3} ${W * 0.35},${H * 0.52} ${W * 0.54},${H * 0.18} ${W * 0.72},${H * 0.4} ${W * 0.9},${H * 0.22} ${W},${H * 0.35} ${W},${H}`, "#06101e")}
      ${mkMtn(`0,${H} ${W * 0.2},${H * 0.48} ${W * 0.42},${H * 0.64} ${W * 0.65},${H * 0.42} ${W * 0.85},${H * 0.56} ${W},${H * 0.46} ${W},${H}`, "rgba(210,228,248,.85)")}
      <path d="M${W * 0.05},${H * 0.78} Q${W * 0.3},${H * 0.72} ${W * 0.6},${H * 0.76} T${W * 0.95},${H * 0.8}" stroke="rgba(255,255,255,.3)" stroke-width="1.5" fill="none" stroke-dasharray="8 4"/>
      ${[-0.18, -0.06, 0.06]
        .map(
          (o, i) => `
        <ellipse cx="${W * (0.22 + o + i * 0.04)}" cy="${H * 0.74}" rx="6" ry="4" fill="#8b6914"/>
        <circle  cx="${W * (0.22 + o + i * 0.04)}" cy="${H * 0.7}" r="4" fill="#6b4a10"/>
        <line x1="${W * (0.22 + o + i * 0.04)}" y1="${H * 0.74}" x2="${W * 0.38}" y2="${H * 0.76}" stroke="#8b6914" stroke-width="1"/>
      `,
        )
        .join("")}
      <rect x="${W * 0.36}" y="${H * 0.72}" width="${W * 0.22}" height="${H * 0.08}" rx="3" fill="#3a2010"/>
      <polygon points="${W * 0.35},${H * 0.72} ${W * 0.5},${H * 0.66} ${W * 0.6},${H * 0.72}" fill="#2a1808"/>
      <circle cx="${W * 0.48}" cy="${H * 0.68}" r="4" fill="#8b4e14"/>
      ${mkSnow(20, "rgba(255,255,255,.75)")}
    </svg>`;
  },
  ice_climb(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ic" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#a8d4f0"/><stop offset="40%" stop-color="#6eb8e8"/><stop offset="100%" stop-color="#2a6a98"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ic)"/>
      ${Array.from({ length: 20 }, (_, i) => `<polygon points="${W * (0.05 + i * 0.05)},${i % 3 ? H * 0.1 : H * 0.25} ${W * (0.05 + i * 0.05 + 0.025)},${i % 2 ? H * 0.05 : H * 0.18} ${W * (0.05 + i * 0.05 + 0.05)},${i % 3 ? H * 0.12 : H * 0.28}" fill="rgba(255,255,255,${0.05 + i * 0.02})"/>`).join("")}
      <rect x="${W * 0.15}" y="0" width="${W * 0.7}" height="${H}" fill="rgba(100,180,230,.15)"/>
      ${Array.from({ length: 12 }, (_, i) => `<line x1="${W * (0.15 + i * 0.05)}" y1="0" x2="${W * (0.15 + i * 0.05 + 0.02)}" y2="${H}" stroke="rgba(255,255,255,.06)" stroke-width="${0.5 + i * 0.1}"/>`).join("")}
      <circle cx="${W * 0.5}" cy="${H * 0.35}" r="5" fill="#cc3333"/>
      <line x1="${W * 0.5}" y1="${H * 0.35 + 5}" x2="${W * 0.5}" y2="${H * 0.5}" stroke="#cc3333" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="${W * 0.5}" y1="${H * 0.4}" x2="${W * 0.38}" y2="${H * 0.44}" stroke="#cc3333" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="${W * 0.5}" y1="${H * 0.4}" x2="${W * 0.62}" y2="${H * 0.43}" stroke="#cc3333" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="${W * 0.5}" y1="${H * 0.5}" x2="${W * 0.44}" y2="${H * 0.62}" stroke="#cc3333" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="${W * 0.5}" y1="${H * 0.5}" x2="${W * 0.57}" y2="${H * 0.61}" stroke="#cc3333" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="${W * 0.38}" y1="${H * 0.44}" x2="${W * 0.28}" y2="${H * 0.48}" stroke="rgba(200,200,200,.6)" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="${W * 0.62}" y1="${H * 0.43}" x2="${W * 0.72}" y2="${H * 0.46}" stroke="rgba(200,200,200,.6)" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M${W * 0.5},${H * 0.35} L${W * 0.5},${H * 0.1}" stroke="rgba(200,200,220,.5)" stroke-width="1.5" stroke-dasharray="4 3"/>
      <path d="M${W * 0.5},${H * 0.63} L${W * 0.5},${H * 0.95}" stroke="rgba(200,200,220,.5)" stroke-width="1.5" stroke-dasharray="4 3"/>
    </svg>`;
  },
  snowmobile(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sm2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e1e32"/><stop offset="100%" stop-color="#c8dce8"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#sm2)"/>
      ${mkMtn(`0,${H} ${W * 0.18},${H * 0.3} ${W * 0.4},${H * 0.52} ${W * 0.58},${H * 0.18} ${W * 0.78},${H * 0.4} ${W},${H * 0.25} ${W},${H}`, "#080f18")}
      ${mkMtn(`0,${H} ${W * 0.24},${H * 0.46} ${W * 0.48},${H * 0.64} ${W * 0.68},${H * 0.4} ${W * 0.9},${H * 0.55} ${W},${H * 0.45} ${W},${H}`, "rgba(210,228,245,.85)")}
      <ellipse cx="${W * 0.52}" cy="${H * 0.78}" rx="${W * 0.18}" ry="${H * 0.04}" fill="#ff6b6b" opacity=".15"/>
      <rect x="${W * 0.35}" y="${H * 0.7}" width="${W * 0.3}" height="${H * 0.08}" rx="4" fill="#2a3a4a"/>
      <rect x="${W * 0.38}" y="${H * 0.65}" width="${W * 0.22}" height="${H * 0.07}" rx="3" fill="#3a5a6a"/>
      <ellipse cx="${W * 0.36}" cy="${H * 0.79}" rx="${W * 0.04}" ry="${H * 0.035}" fill="#1a2a3a"/>
      <ellipse cx="${W * 0.64}" cy="${H * 0.79}" rx="${W * 0.04}" ry="${H * 0.035}" fill="#1a2a3a"/>
      <circle cx="${W * 0.42}" cy="${H * 0.64}" r="4" fill="#ddd"/>
      <line x1="${W * 0.42}" y1="${H * 0.64 + 4}" x2="${W * 0.42}" y2="${H * 0.72}" stroke="#aaa" stroke-width="1.5"/>
      <path d="M${W * 0.15},${H * 0.79} Q${W * 0.3},${H * 0.74} ${W * 0.35},${H * 0.76}" stroke="rgba(255,255,255,.25)" stroke-width="2.5" fill="none"/>
      ${mkSnow(18, "rgba(255,255,255,.7)")}
      <circle cx="${W * 0.62}" cy="${H * 0.63}" r="3.5" fill="#ff8800" opacity=".9"/>
    </svg>`;
  },
  bonfire(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bf1" cx="50%" cy="75%" r="55%"><stop offset="0%" stop-color="#ff6600" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <linearGradient id="bf2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#040a14"/><stop offset="100%" stop-color="#0a1e38"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bf2)"/>
      ${mkStars(40)}
      <rect width="${W}" height="${H}" fill="url(#bf1)"/>
      ${mkMtn(`0,${H} ${W * 0.2},${H * 0.48} ${W * 0.42},${H * 0.64} ${W * 0.62},${H * 0.36} ${W * 0.82},${H * 0.54} ${W},${H * 0.44} ${W},${H}`, "rgba(200,218,240,.6)")}
      <ellipse cx="${W * 0.5}" cy="${H * 0.82}" rx="${W * 0.2}" ry="${H * 0.06}" fill="rgba(255,80,0,.12)"/>
      ${Array.from({ length: 6 }, (_, i) => `<path d="M${W * 0.5},${H * 0.82} Q${W * (0.46 + i * 0.014)},${H * (0.7 - i * 0.04)} ${W * (0.48 + i * 0.008)},${H * (0.52 - i * 0.02)}" stroke="${["#ff6600", "#ff8800", "#ffaa00", "#ffcc00", "#ff5500", "#ffdd00"][i]}" stroke-width="${2 - i * 0.25}" fill="none" opacity="${0.9 - i * 0.1}"/>`).join("")}
      <ellipse cx="${W * 0.5}" cy="${H * 0.82}" rx="${W * 0.05}" ry="${H * 0.02}" fill="#ff4400" opacity=".8"/>
      ${[-2, -1, 0, 1, 2]
        .map(
          (o, i) => `
        <g transform="translate(${W * (0.3 + o * 0.1)},${H * 0.8})">
          <circle cy="-16" r="5" fill="#1a0e06" opacity=".9"/>
          <line y1="-11" y2="2" stroke="#2a1808" stroke-width="2.2"/>
          <line y1="-6" x2="${o < 0 ? -7 : 7}" y2="-1" stroke="#2a1808" stroke-width="1.8"/>
          <line y1="2" x2="${o < 0 ? -5 : 6}" y2="10" stroke="#2a1808" stroke-width="1.8"/>
        </g>
      `,
        )
        .join("")}
    </svg>`;
  },
  dining(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="di1" cx="50%" cy="55%" r="45%"><stop offset="0%" stop-color="#c87020" stop-opacity=".35"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <linearGradient id="di2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0604"/><stop offset="100%" stop-color="#1a1008"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#di2)"/>
      <rect x="${W * 0.05}" y="${H * 0.5}" width="${W * 0.9}" height="${H * 0.5}" fill="#120c06"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.55}" rx="${W * 0.3}" ry="${H * 0.08}" fill="#1e1408"/>
      <rect width="${W}" height="${H}" fill="url(#di1)"/>
      <rect x="${W * 0.25}" y="${H * 0.05}" width="${W * 0.5}" height="${H * 0.8}" rx="4" fill="rgba(255,255,255,.03)" stroke="rgba(255,200,100,.12)" stroke-width=".5"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.55}" rx="${W * 0.22}" ry="${H * 0.06}" fill="#2a1e0e"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.55}" rx="${W * 0.2}" ry="${H * 0.055}" fill="#1e1408" stroke="rgba(255,200,100,.3)" stroke-width=".5"/>
      <ellipse cx="${W * 0.35}" cy="${H * 0.55}" rx="${W * 0.07}" ry="${H * 0.025}" fill="#2a2010" stroke="rgba(200,180,100,.25)" stroke-width=".5"/>
      <ellipse cx="${W * 0.65}" cy="${H * 0.55}" rx="${W * 0.07}" ry="${H * 0.025}" fill="#2a2010" stroke="rgba(200,180,100,.25)" stroke-width=".5"/>
      <circle cx="${W * 0.5}" cy="${H * 0.42}" r="${H * 0.03}" fill="#ffcc44" opacity=".9"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.42}" rx="${H * 0.055}" ry="${H * 0.06}" fill="#ffcc44" opacity=".08"/>
      ${Array.from({ length: 5 }, (_, i) => `<path d="M${W * 0.5},${H * 0.42} Q${W * (0.48 + i * 0.01)},${H * (0.3 + i * 0.02)} ${W * (0.49 + i * 0.005)},${H * (0.15 + i * 0.01)}" stroke="rgba(200,200,200,${0.08 + i * 0.02})" stroke-width="${1 - i * 0.15}" fill="none"/>`).join("")}
      <line x1="${W * 0.28}" y1="${H * 0.45}" x2="${W * 0.28}" y2="${H * 0.68}" stroke="rgba(255,200,100,.3)" stroke-width="1"/>
      <line x1="${W * 0.72}" y1="${H * 0.45}" x2="${W * 0.72}" y2="${H * 0.68}" stroke="rgba(255,200,100,.3)" stroke-width="1"/>
      <rect x="${W * 0.44}" y="${H * 0.38}" width="${W * 0.12}" height="${H * 0.02}" rx="1" fill="rgba(255,255,255,.15)"/>
    </svg>`;
  },
  spa(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sp1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e1e1e"/><stop offset="100%" stop-color="#1a3a3a"/></linearGradient>
        <radialGradient id="sp2" cx="50%" cy="65%" r="50%"><stop offset="0%" stop-color="#4ab8c4" stop-opacity=".3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#sp1)"/>
      <rect width="${W}" height="${H}" fill="url(#sp2)"/>
      <rect x="${W * 0.1}" y="${H * 0.55}" width="${W * 0.8}" height="${H * 0.45}" rx="4" fill="#0e2828"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.55}" rx="${W * 0.4}" ry="${H * 0.07}" fill="#1a3e3e"/>
      <rect x="${W * 0.12}" y="${H * 0.55}" width="${W * 0.76}" height="${H * 0.4}" rx="3" fill="#204040"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.55}" rx="${W * 0.35}" ry="${H * 0.05}" fill="#1e8888" opacity=".3"/>
      ${Array.from({ length: 12 }, (_, i) => `<path d="M${W * (0.2 + i * 0.055)},${H * 0.55} Q${W * (0.2 + i * 0.055 + (i % 2 ? 0.02 : -0.02))},${H * (0.4 + i * 0.015)} ${W * (0.2 + i * 0.056)},${H * 0.28}" stroke="rgba(200,240,245,${0.08 + i * 0.01})" stroke-width="1.2" fill="none"/>`).join("")}
      ${Array.from(
        { length: 4 },
        (_, i) => `
        <circle cx="${W * (0.22 + i * 0.2)}" cy="${H * 0.88}" r="${H * 0.025}" fill="#1a1818" stroke="#3a6060" stroke-width="1"/>
      `,
      ).join("")}
      <rect x="${W * 0.35}" y="${H * 0.4}" width="${W * 0.08}" height="${H * 0.15}" rx="2" fill="#2a1808"/>
      <rect x="${W * 0.57}" y="${H * 0.38}" width="${W * 0.08}" height="${H * 0.17}" rx="2" fill="#2a1808"/>
      <ellipse cx="${W * 0.39}" cy="${H * 0.4}" rx="${H * 0.02}" ry="${H * 0.025}" fill="#ffe4c4" opacity=".8"/>
      <ellipse cx="${W * 0.61}" cy="${H * 0.38}" rx="${H * 0.02}" ry="${H * 0.025}" fill="#ffe4c4" opacity=".8"/>
      ${Array.from({ length: 4 }, (_, i) => `<circle cx="${W * (0.35 + i * 0.03)}" cy="${H * 0.32}" r="${H * 0.012}" fill="#f8f0e0" opacity="${0.3 + i * 0.1}"/>`).join("")}
      ${mkStars(16)}
    </svg>`;
  },
  landscape(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d2440"/>
          <stop offset="25%" stop-color="#1a4a7a"/>
          <stop offset="50%" stop-color="#e8704a"/>
          <stop offset="70%" stop-color="#f0c080"/>
          <stop offset="100%" stop-color="#f5e8d0"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#ls)"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.38}" rx="${H * 0.18}" ry="${H * 0.16}" fill="#f5d060" opacity=".85"/>
      <ellipse cx="${W * 0.5}" cy="${H * 0.38}" rx="${H * 0.28}" ry="${H * 0.25}" fill="#f5d060" opacity=".12"/>
      ${mkMtn(`0,${H} ${W * 0.08},${H * 0.28} ${W * 0.22},${H * 0.45} ${W * 0.38},${H * 0.12} ${W * 0.52},${H * 0.32} ${W * 0.65},${H * 0.05} ${W * 0.78},${H * 0.28} ${W * 0.92},${H * 0.18} ${W},${H * 0.35} ${W},${H}`, "#0a1e36", 0.95)}
      ${mkMtn(`0,${H} ${W * 0.12},${H * 0.38} ${W * 0.28},${H * 0.55} ${W * 0.45},${H * 0.22} ${W * 0.62},${H * 0.42} ${W * 0.78},${H * 0.25} ${W * 0.92},${H * 0.45} ${W},${H * 0.38} ${W},${H}`, "#1a3450")}
      ${mkMtn(`0,${H} ${W * 0.18},${H * 0.5} ${W * 0.4},${H * 0.66} ${W * 0.62},${H * 0.46} ${W * 0.82},${H * 0.58} ${W},${H * 0.5} ${W},${H}`, "rgba(240,235,225,.88)")}
      ${mkSnow(12, "rgba(255,255,255,.6)")}
    </svg>`;
  },
  aerial(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ae" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a8c8e8"/><stop offset="100%" stop-color="#e8f0f8"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ae)"/>
      ${Array.from(
        { length: 8 },
        (_, i) => `
        <polygon points="${W * (i * 0.14)},0 ${W * (i * 0.14 + 0.22)},0 ${W * (i * 0.14 + 0.16)},${H} ${W * (i * 0.14 - 0.06)},${H}" fill="rgba(255,255,255,${0.08 + i * 0.015})"/>
      `,
      ).join("")}
      ${Array.from(
        { length: 6 },
        (_, i) => `
        <path d="M${W * (0.08 + i * 0.16)},0 Q${W * (0.15 + i * 0.16)},${H * 0.5} ${W * (0.06 + i * 0.16)},${H}" stroke="rgba(100,160,220,.2)" stroke-width="${0.8 + i * 0.1}" fill="none"/>
      `,
      ).join("")}
      ${Array.from(
        { length: 5 },
        (_, i) => `
        <path d="M0,${H * (0.15 + i * 0.17)} Q${W * 0.5},${H * (0.12 + i * 0.17)} ${W},${H * (0.18 + i * 0.17)}" stroke="rgba(0,80,160,.08)" stroke-width="1" fill="none"/>
      `,
      ).join("")}
      <path d="M${W * 0.2},${H * 0.35} Q${W * 0.35},${H * 0.28} ${W * 0.5},${H * 0.32} T${W * 0.8},${H * 0.3}" stroke="#1a4a7a" stroke-width="2.5" fill="none" opacity=".25"/>
      <path d="M${W * 0.1},${H * 0.55} Q${W * 0.3},${H * 0.48} ${W * 0.55},${H * 0.52} T${W * 0.9},${H * 0.5}" stroke="#1a4a7a" stroke-width="2" fill="none" opacity=".2"/>
      ${Array.from(
        { length: 20 },
        (_, i) =>
          `<rect x="${W * (0.05 + i * 0.05)}" y="${H * (0.2 + ((i * 0.03) % 0.6))}" width="${2 + (i % 3) * 2}" height="${2 + (i % 4) * 2}" rx="1" fill="rgba(20,80,160,.15)"/>`,
      ).join("")}
      <path d="M${W * 0.35},${H * 0.58} L${W * 0.42},${H * 0.42} L${W * 0.48},${H * 0.55} L${W * 0.54},${H * 0.38} L${W * 0.62},${H * 0.52}" stroke="rgba(255,80,80,.4)" stroke-width="1.5" fill="none"/>
    </svg>`;
  },
  ski_jump(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sj" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#87ceeb"/><stop offset="55%" stop-color="#c8dde8"/><stop offset="100%" stop-color="#e8eff5"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#sj)"/>
      ${mkMtn(`0,${H} ${W * 0.15},${H * 0.32} ${W * 0.35},${H * 0.52} ${W * 0.55},${H * 0.2} ${W * 0.75},${H * 0.42} ${W},${H * 0.28} ${W},${H}`, "rgba(180,200,220,.5)")}
      <path d="M0,${H * 0.88} Q${W * 0.3},${H * 0.82} ${W * 0.6},${H * 0.72} L${W * 0.6},${H * 0.65} Q${W * 0.62},${H * 0.55} ${W * 0.65},${H * 0.45}" stroke="rgba(255,255,255,.6)" stroke-width="3" fill="none"/>
      <path d="M0,${H * 0.88} Q${W * 0.3},${H * 0.82} ${W * 0.6},${H * 0.72} L${W * 0.6},${H * 0.65} Q${W * 0.62},${H * 0.55} ${W * 0.65},${H * 0.45}" stroke="rgba(100,150,200,.3)" stroke-width="5" fill="none"/>
      ${skierFig(W * 0.68, H * 0.35, 1.1, "#e74c3c")}
      <path d="M${W * 0.58},${H * 0.38} Q${W * 0.55},${H * 0.28} ${W * 0.52},${H * 0.18}" stroke="rgba(231,76,60,.35)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
      ${mkSnow(22)}
    </svg>`;
  },
  gondola(W, H) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="go" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a3560"/><stop offset="60%" stop-color="#3a6aaa"/><stop offset="100%" stop-color="#8ab8e0"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#go)"/>
      ${mkStars(20)}
      ${mkMtn(`0,${H} ${W * 0.18},${H * 0.35} ${W * 0.38},${H * 0.55} ${W * 0.58},${H * 0.22} ${W * 0.78},${H * 0.42} ${W},${H * 0.3} ${W},${H}`, "#0a1e3a")}
      ${mkMtn(`0,${H} ${W * 0.24},${H * 0.48} ${W * 0.46},${H * 0.64} ${W * 0.66},${H * 0.42} ${W * 0.86},${H * 0.56} ${W},${H * 0.46} ${W},${H}`, "rgba(215,230,250,.85)")}
      <line x1="0" y1="${H * 0.2}" x2="${W}" y2="${H * 0.35}" stroke="rgba(200,200,200,.45)" stroke-width="1.5"/>
      ${[0.18, 0.42, 0.66]
        .map(
          (x, i) => `
        <line x1="${W * x}" y1="${H * (0.2 + i * 0.05)}" x2="${W * x}" y2="${H * (0.35 + i * 0.04)}" stroke="rgba(200,200,200,.3)" stroke-width="1"/>
        <rect x="${W * x - 14}" y="${H * (0.32 + i * 0.04)}" width="28" height="18" rx="4" fill="#1a2a3a" stroke="rgba(100,150,200,.4)" stroke-width="1"/>
        <rect x="${W * x - 10}" y="${H * (0.33 + i * 0.04)}" width="8" height="10" rx="1" fill="rgba(135,206,235,.25)"/>
        <rect x="${W * x + 2}" y="${H * (0.33 + i * 0.04)}" width="8" height="10" rx="1" fill="rgba(135,206,235,.25)"/>
      `,
        )
        .join("")}
      ${mkSnow(15, "rgba(255,255,255,.65)")}
    </svg>`;
  },
};

/* ─────────────────────────────────────────────────────────────
   PHOTO DATA — 24 entries
───────────────────────────────────────────────────────────── */
const PHOTOS = [
  {
    id: 1,
    cat: "Slopes",
    title: "First Light on Powder",
    desc: "Sunrise breaking over the North Peak, painting the fresh powder in gold.",
    scene: "slope_dawn",
    W: 600,
    H: 400,
    featured: true,
    season: "Winter",
    loc: "North Peak",
    aspect: "landscape",
  },
  {
    id: 2,
    cat: "Slopes",
    title: "Alpine Snowboarder",
    desc: "Our resident snowboarding instructor carves a perfect heel-edge turn.",
    scene: "snowboard",
    W: 400,
    H: 560,
    featured: false,
    season: "Winter",
    loc: "Blue Diamond Run",
    aspect: "portrait",
  },
  {
    id: 3,
    cat: "Slopes",
    title: "Night Skiing at Midnight",
    desc: "The slopes come alive under floodlight — the most magical ski experience.",
    scene: "night_ski",
    W: 500,
    H: 500,
    featured: true,
    season: "Winter",
    loc: "All Zones",
    aspect: "square",
  },
  {
    id: 4,
    cat: "Slopes",
    title: "Groomed Runs at Dawn",
    desc: "Perfectly groomed corduroy before the crowds arrive.",
    scene: "slope_action",
    W: 600,
    H: 380,
    featured: false,
    season: "Winter",
    loc: "Beginner Bowl",
    aspect: "landscape",
  },
  {
    id: 5,
    cat: "Slopes",
    title: "Ski Jump Series",
    desc: "The annual Alpine Jump Competition — gravity at its most spectacular.",
    scene: "ski_jump",
    W: 400,
    H: 540,
    featured: false,
    season: "Winter",
    loc: "Competition Zone",
    aspect: "portrait",
  },
  {
    id: 6,
    cat: "Slopes",
    title: "Gondola at Dusk",
    desc: "Riding back to the village as alpenglow colours the valleys below.",
    scene: "gondola",
    W: 580,
    H: 400,
    featured: false,
    season: "Winter",
    loc: "Main Gondola",
    aspect: "landscape",
  },
  {
    id: 7,
    cat: "Cabins",
    title: "Spruce Ridge at Night",
    desc: "Our signature cabin glowing warmly against the winter dark.",
    scene: "cabin_ext",
    W: 560,
    H: 380,
    featured: true,
    season: "Winter",
    loc: "Spruce Ridge",
    aspect: "landscape",
  },
  {
    id: 8,
    cat: "Cabins",
    title: "Fireside Evening",
    desc: "Nothing beats an evening by the crackling fire after a day on the slopes.",
    scene: "cabin_int",
    W: 400,
    H: 560,
    featured: false,
    season: "Winter",
    loc: "Eagle's Nest",
    aspect: "portrait",
  },
  {
    id: 9,
    cat: "Cabins",
    title: "Snow-Covered Rooftops",
    desc: "Fresh snowfall transforms Birchwood Lodge into a fairytale scene.",
    scene: "cabin_ext",
    W: 480,
    H: 480,
    featured: false,
    season: "Winter",
    loc: "Birchwood Lodge",
    aspect: "square",
  },
  {
    id: 10,
    cat: "Cabins",
    title: "Frost Haven Interior",
    desc: "The warm glow of a winter afternoon inside Frost Haven Cabin.",
    scene: "cabin_int",
    W: 580,
    H: 400,
    featured: false,
    season: "Winter",
    loc: "Frost Haven",
    aspect: "landscape",
  },
  {
    id: 11,
    cat: "Cabins",
    title: "Aurora Chalet Twilight",
    desc: "Scandinavian lines meet alpine soul — the Aurora Chalet at golden hour.",
    scene: "cabin_ext",
    W: 400,
    H: 520,
    featured: false,
    season: "Winter",
    loc: "Aurora Chalet",
    aspect: "portrait",
  },
  {
    id: 12,
    cat: "Activities",
    title: "Dog Sledding Adventure",
    desc: "Our sled team threads through the quiet birch forests north of the resort.",
    scene: "dog_sled",
    W: 600,
    H: 400,
    featured: true,
    season: "Winter",
    loc: "Nordic Forest",
    aspect: "landscape",
  },
  {
    id: 13,
    cat: "Activities",
    title: "Ice Climbing Novice Wall",
    desc: "First-timers conquering the beginner ice wall with our certified guides.",
    scene: "ice_climb",
    W: 380,
    H: 560,
    featured: false,
    season: "Winter",
    loc: "Ice Park",
    aspect: "portrait",
  },
  {
    id: 14,
    cat: "Activities",
    title: "Snowmobile Trail Run",
    desc: "Racing across the open valley — snowmobile tours depart every morning.",
    scene: "snowmobile",
    W: 600,
    H: 380,
    featured: false,
    season: "Winter",
    loc: "Valley Trail",
    aspect: "landscape",
  },
  {
    id: 15,
    cat: "Activities",
    title: "Après-Ski Bonfire",
    desc: "The Friday night bonfire — the social heart of the Alpine village.",
    scene: "bonfire",
    W: 460,
    H: 460,
    featured: false,
    season: "Winter",
    loc: "Village Square",
    aspect: "square",
  },
  {
    id: 16,
    cat: "Activities",
    title: "Summit Snowboarding Park",
    desc: "Our terrain park opened last season with 12 new features.",
    scene: "slope_action",
    W: 580,
    H: 400,
    featured: false,
    season: "Winter",
    loc: "Terrain Park",
    aspect: "landscape",
  },
  {
    id: 17,
    cat: "Dining",
    title: "Summit Table Experience",
    desc: "Five courses at 9,200ft — our signature mountaintop dinner at sunset.",
    scene: "dining",
    W: 400,
    H: 560,
    featured: true,
    season: "All Year",
    loc: "Summit Table",
    aspect: "portrait",
  },
  {
    id: 18,
    cat: "Dining",
    title: "Alpine Breakfast Spread",
    desc: "Local honey, house-smoked meats and fresh mountain bread every morning.",
    scene: "dining",
    W: 480,
    H: 480,
    featured: false,
    season: "All Year",
    loc: "Main Lodge",
    aspect: "square",
  },
  {
    id: 19,
    cat: "Dining",
    title: "Fondue by Firelight",
    desc: "Traditional Swiss fondue, served fireside in the old lodge every Friday.",
    scene: "cabin_int",
    W: 580,
    H: 380,
    featured: false,
    season: "Winter",
    loc: "Old Lodge",
    aspect: "landscape",
  },
  {
    id: 20,
    cat: "Spa",
    title: "Thermal Stone Bath",
    desc: "Our natural thermal mineral bath — fed by mountain spring water year-round.",
    scene: "spa",
    W: 400,
    H: 560,
    featured: true,
    season: "All Year",
    loc: "Wellness Centre",
    aspect: "portrait",
  },
  {
    id: 21,
    cat: "Spa",
    title: "Outdoor Sauna at Dusk",
    desc: "Steam rising from the lakeside sauna as the sky turns pink.",
    scene: "spa",
    W: 560,
    H: 380,
    featured: false,
    season: "Winter",
    loc: "Lakeside Sauna",
    aspect: "landscape",
  },
  {
    id: 22,
    cat: "Spa",
    title: "Candlelit Recovery Suite",
    desc: "Our recovery suite uses local spruce essential oils and hot stone therapy.",
    scene: "spa",
    W: 460,
    H: 460,
    featured: false,
    season: "All Year",
    loc: "Wellness Centre",
    aspect: "square",
  },
  {
    id: 23,
    cat: "Landscape",
    title: "Golden Hour — North Peaks",
    desc: "The best 60 minutes of every day, from anywhere on the mountain.",
    scene: "landscape",
    W: 700,
    H: 400,
    featured: true,
    season: "All Year",
    loc: "North Peaks",
    aspect: "landscape",
  },
  {
    id: 24,
    cat: "Landscape",
    title: "Bird's Eye — Valley Floor",
    desc: "An aerial perspective on the resort — 2,400 skiable acres visible at once.",
    scene: "aerial",
    W: 600,
    H: 400,
    featured: false,
    season: "All Year",
    loc: "Alpine Valley",
    aspect: "landscape",
  },
];

/* ─────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────── */
let activeFilter = "All";
let activeSort = "default";
let liked = new Set();
let lbIndex = 0;
let lbPool = [];
const BATCH = 12;
let shown = BATCH;

/* ─────────────────────────────────────────────────────────────
   RENDER
───────────────────────────────────────────────────────────── */
function getSVG(p) {
  const fn = SCENES[p.scene];
  return fn
    ? fn(p.W, p.H)
    : `<svg viewBox="0 0 ${p.W} ${p.H}" xmlns="http://www.w3.org/2000/svg"><rect width="${p.W}" height="${p.H}" fill="#222"/></svg>`;
}

function renderGrid() {
  const grid = document.getElementById("masonryGrid");
  const empty = document.getElementById("galEmpty");
  const lmBtn = document.getElementById("loadMoreBtn");
  const vCnt = document.getElementById("visCount");

  let pool = [...PHOTOS];
  if (activeFilter !== "All") pool = pool.filter((p) => p.cat === activeFilter);
  if (activeSort === "liked")
    pool.sort((a, b) => (liked.has(b.id) ? 1 : 0) - (liked.has(a.id) ? 1 : 0));
  else if (activeSort === "newest") pool = [...pool].reverse();
  else pool.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  if (pool.length === 0) {
    grid.innerHTML = "";
    empty.classList.add("show");
    lmBtn.classList.add("hidden");
    vCnt.textContent = "0";
    return;
  }
  empty.classList.remove("show");
  const visible = pool.slice(0, shown);
  vCnt.textContent = visible.length;
  lmBtn.classList.toggle("hidden", shown >= pool.length);

  grid.innerHTML = visible
    .map(
      (p, idx) => `
    <div class="masonry-item" style="--delay:${Math.min(idx, 11) * 40}ms" onclick="openLightbox(${p.id},event)">
      ${p.featured ? '<div class="item-featured">Featured</div>' : ""}
      <button class="item-like ${liked.has(p.id) ? "liked" : ""}" id="like-${p.id}" onclick="toggleLike(event,${p.id})" title="Save photo">
        <i class="${liked.has(p.id) ? "fas" : "far"} fa-heart"></i>
      </button>
      ${getSVG(p)}
      <div class="item-overlay">
        <div class="item-cat-tag">${p.cat}</div>
        <div class="item-title">${p.title}</div>
        <div class="item-meta-row">
          <span style="font-size:.68rem;color:rgba(255,255,255,.5)"><i class="fas fa-map-marker-alt" style="margin-right:4px;font-size:.6rem"></i>${p.loc}</span>
          <div class="item-expand"><i class="fas fa-expand-alt"></i></div>
        </div>
      </div>
    </div>`,
    )
    .join("");

  lbPool = visible;
}

/* ─────────────────────────────────────────────────────────────
   FILTER / SORT / LAYOUT
───────────────────────────────────────────────────────────── */
function filterGallery(el) {
  document
    .querySelectorAll(".filter-tab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  activeFilter = el.dataset.cat;
  shown = BATCH;
  const grid = document.getElementById("masonryGrid");
  grid.classList.add("filtering");
  setTimeout(() => {
    renderGrid();
    grid.classList.remove("filtering");
  }, 220);
}

function applySortGal() {
  activeSort = document.getElementById("galSort").value;
  shown = BATCH;
  renderGrid();
}

function loadMore() {
  shown += BATCH;
  renderGrid();
}

function setLayout(v) {
  document.getElementById("masonryGrid").style.columns =
    v === "grid" ? "4 160px" : "4 220px";
  document
    .getElementById("masonryBtn")
    .classList.toggle("active", v === "masonry");
  document.getElementById("gridBtn").classList.toggle("active", v === "grid");
}

/* ─────────────────────────────────────────────────────────────
   LIKE / SAVE
───────────────────────────────────────────────────────────── */
function toggleLike(e, id) {
  e.stopPropagation();
  const btn = document.getElementById(`like-${id}`);
  if (!btn) return;
  if (liked.has(id)) {
    liked.delete(id);
    btn.classList.remove("liked");
    btn.querySelector("i").className = "far fa-heart";
  } else {
    liked.add(id);
    btn.classList.add("liked");
    btn.querySelector("i").className = "fas fa-heart";
    /* heart burst micro-animation */
    btn.style.transform = "scale(1.4)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.transition = "transform .3s ease";
    }, 150);
  }
}

/* ─────────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────────── */
function openLightbox(id, e) {
  if (e) e.stopPropagation();
  const idx = lbPool.findIndex((p) => p.id === id);
  if (idx < 0) return;
  lbIndex = idx;
  populateLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
  buildFilmstrip();
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function populateLightbox() {
  const p = lbPool[lbIndex];
  const wrap = document.getElementById("lbImageWrap");

  wrap.classList.add("transitioning");
  setTimeout(() => {
    document.getElementById("lbImage").innerHTML = getSVG(p);
    document.getElementById("lbCat").textContent = p.cat.toUpperCase();
    document.getElementById("lbTitle").textContent = p.title;
    document.getElementById("lbDesc").textContent = p.desc;
    document.getElementById("lbCounter").textContent =
      `${lbIndex + 1} / ${lbPool.length}`;
    document.getElementById("lbInfoCat").textContent = p.cat;
    document.getElementById("lbInfoLoc").textContent = p.loc;
    document.getElementById("lbInfoSeason").textContent = p.season;
    /* sync filmstrip */
    document.querySelectorAll(".lb-thumb").forEach((t, i) => {
      t.classList.toggle("active", i === lbIndex);
    });
    /* scroll filmstrip to active thumb */
    const track = document.getElementById("lbFilmstrip");
    const active = track.querySelector(".lb-thumb.active");
    if (active)
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    wrap.classList.remove("transitioning");
  }, 180);
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + lbPool.length) % lbPool.length;
  populateLightbox();
}

function buildFilmstrip() {
  const track = document.getElementById("lbFilmstrip");
  track.innerHTML = lbPool
    .map(
      (p, i) => `
    <div class="lb-thumb ${i === lbIndex ? "active" : ""}" onclick="lbGoTo(${i})">
      ${getSVG({ ...p, W: 68, H: 48 })}
    </div>`,
    )
    .join("");
}

function lbGoTo(i) {
  lbIndex = i;
  populateLightbox();
}

function toggleLbInfo() {
  document.getElementById("lbStage").classList.toggle("info-visible");
}

/* ─────────────────────────────────────────────────────────────
   HERO STRIP
───────────────────────────────────────────────────────────── */
function buildHeroStrip() {
  const strip = document.getElementById("heroStrip");
  if (!strip) return;
  const picks = [PHOTOS[22], PHOTOS[0], PHOTOS[6]];
  strip.innerHTML = picks
    .map(
      (p) =>
        `<div class="gal-strip-thumb"><svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg">${
          SCENES[p.scene]
            ? SCENES[p.scene](280, 320)
                .replace(/<svg[^>]*>/, "")
                .replace("</svg>", "")
            : ""
        }</svg></div>`,
    )
    .join("");
}

/* ─────────────────────────────────────────────────────────────
   KEYBOARD
───────────────────────────────────────────────────────────── */
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("open")) return;
  if (e.key === "ArrowRight") lbNavigate(1);
  else if (e.key === "ArrowLeft") lbNavigate(-1);
  else if (e.key === "Escape") closeLightbox();
});

/* ─────────────────────────────────────────────────────────────
   TOUCH SWIPE (lightbox)
───────────────────────────────────────────────────────────── */
let touchStartX = 0;
document.getElementById("lightbox").addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true },
);
document.getElementById("lightbox").addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 50) lbNavigate(dx < 0 ? 1 : -1);
});

/* ─────────────────────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────────────────────── */
const nlBtn = document.querySelector(".newsletter-btn"),
  nlInp = document.querySelector(".newsletter-input");
if (nlBtn && nlInp) {
  nlBtn.addEventListener("click", () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nlInp.value.trim())) {
      nlBtn.textContent = "Subscribed!";
      nlBtn.style.background = "#4CAF50";
      nlInp.value = "";
      setTimeout(() => {
        nlBtn.textContent = "Subscribe";
        nlBtn.style.background = "";
      }, 3000);
    } else alert("Please enter a valid email.");
  });
}

/* ─────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────── */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  buildHeroStrip();
  renderGrid();

  /* IntersectionObserver for .reveal elements */
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
});
