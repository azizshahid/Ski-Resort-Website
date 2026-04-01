const CABINS = [
  {
    id: 1,
    featured: true,
    name: "Spruce Ridge Cabin",
    type: "Cozy Cabin",
    sleeps: 2,
    beds: 1,
    baths: 1,
    price: 189,
    origPrice: 229,
    rating: 4.9,
    reviews: 142,
    amenities: ["Fireplace", "Mountain View", "Full Kitchen", "Pet Friendly"],
    desc: "A classic alpine hideaway nestled in a grove of towering spruce trees. Perfectly suited for couples seeking seclusion, with a wood-burning fireplace that crackles all night and floor-to-ceiling windows framing the North Peak.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 3 PM · Check-out by 11 AM",
      "No smoking inside the cabin",
      "Pets welcome with prior notice (fee applies)",
    ],
    gradient: ["#1a3a4a", "#2d6a8a", "#1e4a5c"],
    iconColor: "#87ceeb",
  },
  {
    id: 2,
    featured: false,
    name: "Summit Loft",
    type: "Studio Loft",
    sleeps: 2,
    beds: 1,
    baths: 1,
    price: 249,
    origPrice: null,
    rating: 4.8,
    reviews: 87,
    amenities: ["Hot Tub", "Mountain View", "Ski-in/Ski-out"],
    desc: "A sleek, architect-designed loft perched at 9,200 ft with ski-in/ski-out access to three groomed runs. The outdoor cedar hot tub overlooks the valley — best enjoyed just after sunset with a glass of something warm.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 4 PM · Check-out by 10 AM",
      "No pets",
      "Min. 2-night stay on weekends",
    ],
    gradient: ["#2a1a3e", "#4a2a6e", "#3a1a52"],
    iconColor: "#c9a8e8",
  },
  {
    id: 3,
    featured: false,
    name: "Glacier View Lodge",
    type: "Family Lodge",
    sleeps: 6,
    beds: 3,
    baths: 2,
    price: 449,
    origPrice: null,
    rating: 4.9,
    reviews: 203,
    amenities: [
      "Fireplace",
      "Hot Tub",
      "Mountain View",
      "Full Kitchen",
      "Ski-in/Ski-out",
    ],
    desc: "Our most sought-after family property — three bedrooms, two full bathrooms, a gourmet kitchen stocked on arrival, and a private hot tub with uninterrupted glacier views. Built with reclaimed timber for maximum warmth and character.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 3 PM · Check-out by 11 AM",
      "No smoking",
      "Pets on request",
    ],
    gradient: ["#0d2f1a", "#1a5c30", "#0a3d20"],
    iconColor: "#6dd49a",
  },
  {
    id: 4,
    featured: false,
    name: "Aurora Chalet",
    type: "Luxury Chalet",
    sleeps: 4,
    beds: 2,
    baths: 2,
    price: 389,
    origPrice: 459,
    rating: 4.7,
    reviews: 61,
    amenities: [
      "Fireplace",
      "Hot Tub",
      "Mountain View",
      "Ski-in/Ski-out",
      "Full Kitchen",
    ],
    desc: "Scandinavian-inspired luxury chalet with exposed oak beams, a statement stone fireplace, and heated floors throughout. The wrap-around deck is the best seat in the resort when the northern lights are out.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 4 PM · Check-out by 11 AM",
      "No smoking · No pets",
      "2-night minimum",
    ],
    gradient: ["#1a1a2e", "#16213e", "#0f3460"],
    iconColor: "#e0e0ff",
  },
  {
    id: 5,
    featured: false,
    name: "Pine Hollow Cottage",
    type: "Cozy Cabin",
    sleeps: 2,
    beds: 1,
    baths: 1,
    price: 159,
    origPrice: null,
    rating: 4.6,
    reviews: 118,
    amenities: ["Fireplace", "Pet Friendly", "Full Kitchen"],
    desc: "The most affordable gem in our collection. Pine Hollow is a true woodland cottage with hand-crafted pine furniture, a reading nook beside the fire, and a private forest trail to the main village.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 3 PM · Check-out by 11 AM",
      "Pets welcome (small/medium only)",
      "No smoking",
    ],
    gradient: ["#2e1a0a", "#5c3a18", "#3d2510"],
    iconColor: "#f5c57a",
  },
  {
    id: 6,
    featured: true,
    name: "Eagle's Nest Suite",
    type: "Penthouse Suite",
    sleeps: 2,
    beds: 1,
    baths: 2,
    price: 549,
    origPrice: null,
    rating: 5.0,
    reviews: 44,
    amenities: [
      "Hot Tub",
      "Mountain View",
      "Ski-in/Ski-out",
      "Full Kitchen",
      "Fireplace",
    ],
    desc: "Our crown jewel — a rooftop penthouse suite with 270° panoramic mountain views, a private plunge pool on the terrace, and dedicated butler service. Reserved for guests seeking an uncompromising alpine experience.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 5 PM · Check-out by 12 PM",
      "No smoking · No pets",
      "Complimentary airport transfer included",
    ],
    gradient: ["#1a0a0a", "#4a1010", "#3a0808"],
    iconColor: "#ff8a80",
  },
  {
    id: 7,
    featured: false,
    name: "Birchwood Retreat",
    type: "Family Lodge",
    sleeps: 8,
    beds: 4,
    baths: 3,
    price: 529,
    origPrice: 609,
    rating: 4.8,
    reviews: 156,
    amenities: [
      "Fireplace",
      "Hot Tub",
      "Mountain View",
      "Full Kitchen",
      "Pet Friendly",
    ],
    desc: "Our largest property — four bedrooms, three bathrooms, and a games room with a pool table and fireplace lounge. The lakeside setting makes Birchwood equally magical in every season.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 3 PM · Check-out by 11 AM",
      "Pets welcome with prior notice",
      "No smoking inside",
    ],
    gradient: ["#1e2d1a", "#3a5a2e", "#2a4020"],
    iconColor: "#a8d48a",
  },
  {
    id: 8,
    featured: false,
    name: "Frost Haven Cabin",
    type: "Cozy Cabin",
    sleeps: 4,
    beds: 2,
    baths: 1,
    price: 269,
    origPrice: null,
    rating: 4.7,
    reviews: 93,
    amenities: ["Fireplace", "Mountain View", "Pet Friendly", "Full Kitchen"],
    desc: "A generously-sized cabin that sleeps four in real comfort — two queen rooms, a bright open kitchen, and a screened porch perfect for morning coffee as snow falls through the pines.",
    policies: [
      "Free cancellation until 14 days before arrival",
      "Check-in from 3 PM · Check-out by 11 AM",
      "Pets welcome",
      "No smoking",
    ],
    gradient: ["#1a2a3a", "#2a4a5e", "#152035"],
    iconColor: "#87ceeb",
  },
];

const AMENITY_ICONS = {
  Fireplace: "fa-fire",
  "Hot Tub": "fa-hot-tub",
  "Mountain View": "fa-mountain",
  "Ski-in/Ski-out": "fa-skiing",
  "Pet Friendly": "fa-paw",
  "Full Kitchen": "fa-utensils",
};

const F = {
  type: "all",
  guests: null,
  price: null,
  amenities: new Set(),
  sort: "featured",
  view: "grid",
};

/* ── SVG illustrations ── */
function cabinSVG(c, h = 200) {
  const [c1, c2] = c.gradient;
  const s = Array.from(
    { length: 18 },
    (_, i) =>
      `<circle cx="${30 + i * 22}" cy="${10 + ((i * 17) % 25)}" r="${0.8 + ((i * 0.07) % 1.2)}" fill="${c.iconColor}" opacity="${0.3 + (i % 3) * 0.15}" />`,
  ).join("");
  return `<svg viewBox="0 0 400 ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="bg${c.id}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
  <rect width="400" height="${h}" fill="url(#bg${c.id}a)"/>
  ${s}
  <polygon points="0,${h} 80,${h * 0.38} 160,${h * 0.7} 240,${h * 0.25} 320,${h * 0.55} 400,${h * 0.32} 400,${h}" fill="rgba(0,0,0,.35)"/>
  <polygon points="40,${h} 120,${h * 0.5} 200,${h * 0.78} 280,${h * 0.38} 360,${h * 0.62} 400,${h * 0.48} 400,${h} 0,${h}" fill="rgba(0,0,0,.22)"/>
  <polygon points="80,${h * 0.38} 65,${h * 0.48} 95,${h * 0.48}" fill="rgba(255,255,255,.55)"/>
  <polygon points="240,${h * 0.25} 222,${h * 0.37} 258,${h * 0.37}" fill="rgba(255,255,255,.65)"/>
  <polygon points="320,${h * 0.55} 308,${h * 0.63} 332,${h * 0.63}" fill="rgba(255,255,255,.4)"/>
  <rect x="160" y="${h * 0.72}" width="80" height="${h * 0.28}" fill="rgba(0,0,0,.5)"/>
  <polygon points="148,${h * 0.72} 200,${h * 0.52} 252,${h * 0.72}" fill="rgba(0,0,0,.6)"/>
  <rect x="175" y="${h * 0.78}" width="18" height="14" rx="2" fill="${c.iconColor}" opacity=".7"/>
  <rect x="207" y="${h * 0.78}" width="18" height="14" rx="2" fill="${c.iconColor}" opacity=".7"/>
  <rect x="191" y="${h * 0.88}" width="18" height="${h * 0.12}" fill="rgba(0,0,0,.4)"/>
  <circle cx="340" cy="32" r="14" fill="${c.iconColor}" opacity=".5"/>
  <circle cx="349" cy="27" r="11" fill="${c1}" opacity=".9"/>
  <polygon points="50,${h} 58,${h * 0.74} 66,${h}" fill="rgba(0,0,0,.45)"/>
  <polygon points="55,${h * 0.82} 58,${h * 0.68} 61,${h * 0.82}" fill="rgba(0,0,0,.5)"/>
  <polygon points="316,${h} 324,${h * 0.7} 332,${h}" fill="rgba(0,0,0,.45)"/>
  <polygon points="321,${h * 0.8} 324,${h * 0.64} 327,${h * 0.8}" fill="rgba(0,0,0,.5)"/>
  </svg>`;
}

function thumbSVG(c, idx) {
  const shifts = [
    ["#2a1a0a", "#5c3814"],
    ["#0a1a2a", "#1a3a5c"],
    ["#0a2a1a", "#1a5c3a"],
  ];
  const [s1, s2] = shifts[idx % 3];
  return `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="th${c.id}_${idx}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${s1}"/><stop offset="100%" stop-color="${s2}"/></linearGradient></defs>
  <rect width="120" height="90" fill="url(#th${c.id}_${idx})"/>
  <polygon points="0,90 30,40 60,65 90,25 120,50 120,90" fill="rgba(0,0,0,.3)"/>
  <polygon points="0,90 20,52 40,72 70,38 100,58 120,44 120,90 0,90" fill="rgba(0,0,0,.2)"/>
  <polygon points="30,40 22,48 38,48" fill="rgba(255,255,255,.5)"/>
  <polygon points="90,25 82,34 98,34" fill="rgba(255,255,255,.55)"/>
  </svg>`;
}

/* ── Render ── */
function renderCards(list) {
  const grid = document.getElementById("cabinGrid");
  document.getElementById("resultCount").textContent = list.length;
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-search"></i></div><h3>No cabins match your filters</h3><p>Try adjusting your search — broaden the guest count or remove an amenity filter.</p><button class="empty-reset-btn" onclick="clearAllFilters()"><i class="fas fa-redo" style="margin-right:6px"></i>Reset Filters</button></div>`;
    return;
  }
  grid.innerHTML = list
    .map((c) => {
      const pills = c.amenities
        .slice(0, 3)
        .map(
          (a) =>
            `<span class="amenity-pill"><i class="fas ${AMENITY_ICONS[a] || "fa-star"}"></i>${a}</span>`,
        )
        .join("");
      const priceRow = c.origPrice
        ? `<span class="cabin-orig">$${c.origPrice}</span><span class="cabin-price">$${c.price}<span> / night</span></span>`
        : `<span class="cabin-price">$${c.price}<span> / night</span></span>`;
      return `<div class="cabin-card" onclick="openDrawer(${c.id})">
      ${c.featured ? '<div class="cabin-featured-ribbon">Featured</div>' : ""}
      <div class="cabin-img">${cabinSVG(c)}<div class="cabin-type-badge">${c.type}</div>
        <button class="cabin-heart" id="heart${c.id}" onclick="toggleHeart(event,${c.id})"><i class="far fa-heart"></i></button></div>
      <div class="cabin-body">
        <div class="cabin-name-row">
          <div class="cabin-name">${c.name}</div>
          <div class="cabin-rating"><i class="fas fa-star"></i><span>${c.rating} <span style="color:var(--text-light);font-weight:400">(${c.reviews})</span></span></div>
        </div>
        <div class="cabin-meta"><span><i class="fas fa-users"></i>Sleeps ${c.sleeps}</span><span><i class="fas fa-bed"></i>${c.beds} bed${c.beds > 1 ? "s" : ""}</span><span><i class="fas fa-bath"></i>${c.baths} bath${c.baths > 1 ? "s" : ""}</span></div>
        <div class="cabin-amenities">${pills}</div>
        <div class="cabin-footer">
          <div class="cabin-price-block">${priceRow}</div>
          <button class="cabin-book-btn" onclick="event.stopPropagation();location.href='./Booking.html'">Book Now</button>
        </div>
      </div></div>`;
    })
    .join("");
}

/* ── Filters ── */
function applyFilters() {
  let list = [...CABINS];
  if (F.type !== "all") list = list.filter((c) => c.type === F.type);
  if (F.guests) {
    if (F.guests === "1-2") list = list.filter((c) => c.sleeps <= 2);
    else if (F.guests === "3-4")
      list = list.filter((c) => c.sleeps >= 3 && c.sleeps <= 4);
    else if (F.guests === "5-6")
      list = list.filter((c) => c.sleeps >= 5 && c.sleeps <= 6);
    else if (F.guests === "7+") list = list.filter((c) => c.sleeps >= 7);
  }
  if (F.price) {
    const [lo, hi] = F.price.split("-").map(Number);
    list = list.filter((c) => c.price >= lo && c.price <= hi);
  }
  if (F.amenities.size > 0)
    list = list.filter((c) =>
      [...F.amenities].every((a) => c.amenities.includes(a)),
    );
  if (F.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (F.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (F.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else if (F.sort === "sleeps") list.sort((a, b) => b.sleeps - a.sleeps);
  else list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  renderCards(list);
  updateActivePills();
  updateClearBtn();
  updateFilterBadge();
}

function filterType(el) {
  document
    .querySelectorAll(".type-chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  F.type = el.dataset.type;
  applyFilters();
}
function filterGuests(el) {
  const was = el.classList.contains("active");
  document
    .querySelectorAll(".guest-chip")
    .forEach((c) => c.classList.remove("active"));
  if (!was) {
    el.classList.add("active");
    F.guests = el.dataset.guests;
  } else F.guests = null;
  applyFilters();
}
function filterPrice(el) {
  const was = el.classList.contains("active");
  document
    .querySelectorAll(".price-chip")
    .forEach((c) => c.classList.remove("active"));
  if (!was) {
    el.classList.add("active");
    F.price = el.dataset.price;
  } else F.price = null;
  applyFilters();
}
function filterAmenity(el) {
  const am = el.dataset.amenity;
  if (el.classList.contains("active")) {
    el.classList.remove("active");
    F.amenities.delete(am);
  } else {
    el.classList.add("active");
    F.amenities.add(am);
  }
  applyFilters();
}
function applySort() {
  F.sort = document.getElementById("sortSelect").value;
  applyFilters();
}

function clearAllFilters() {
  F.type = "all";
  F.guests = null;
  F.price = null;
  F.amenities.clear();
  document
    .querySelectorAll(".type-chip")
    .forEach((c) => c.classList.remove("active"));
  document.querySelector('[data-type="all"]').classList.add("active");
  document
    .querySelectorAll(".guest-chip,.price-chip,.amenity-item")
    .forEach((c) => c.classList.remove("active"));
  applyFilters();
}

function updateActivePills() {
  const wrap = document.getElementById("activePills");
  const pills = [];
  if (F.type !== "all")
    pills.push({
      label: F.type,
      clear: () => {
        F.type = "all";
        document
          .querySelectorAll(".type-chip")
          .forEach((c) => c.classList.remove("active"));
        document.querySelector('[data-type="all"]').classList.add("active");
        applyFilters();
      },
    });
  if (F.guests)
    pills.push({
      label: `Guests: ${F.guests}`,
      clear: () => {
        F.guests = null;
        document
          .querySelectorAll(".guest-chip")
          .forEach((c) => c.classList.remove("active"));
        applyFilters();
      },
    });
  if (F.price) {
    const lm = {
      "0-200": "Under $200",
      "200-350": "$200–$350",
      "350-500": "$350–$500",
      "500-9999": "$500+",
    };
    pills.push({
      label: lm[F.price] || F.price,
      clear: () => {
        F.price = null;
        document
          .querySelectorAll(".price-chip")
          .forEach((c) => c.classList.remove("active"));
        applyFilters();
      },
    });
  }
  F.amenities.forEach((a) =>
    pills.push({
      label: a,
      clear: () => {
        F.amenities.delete(a);
        document.querySelectorAll(".amenity-item").forEach((el) => {
          if (el.dataset.amenity === a) el.classList.remove("active");
        });
        applyFilters();
      },
    }),
  );
  wrap.innerHTML = pills
    .map(
      (p, i) =>
        `<button class="active-pill" onclick="_pc(${i})"><i class="fas fa-times"></i>${p.label}</button>`,
    )
    .join("");
  window._pillClears = pills.map((p) => p.clear);
}
window._pc = (i) => window._pillClears[i]();

function updateClearBtn() {
  const active =
    F.type !== "all" || F.guests || F.price || F.amenities.size > 0;
  document.getElementById("clearAllBtn").classList.toggle("visible", active);
}
function updateFilterBadge() {
  let n = 0;
  if (F.type !== "all") n++;
  if (F.guests) n++;
  if (F.price) n++;
  n += F.amenities.size;
  const b = document.getElementById("filterBadge");
  b.textContent = n;
  b.classList.toggle("visible", n > 0);
}

/* ── View ── */
function setView(v) {
  F.view = v;
  document
    .getElementById("cabinGrid")
    .classList.toggle("list-view", v === "list");
  document.getElementById("gridBtn").classList.toggle("active", v === "grid");
  document.getElementById("listBtn").classList.toggle("active", v === "list");
}

/* ── Heart ── */
const loved = new Set();
function toggleHeart(e, id) {
  e.stopPropagation();
  const btn = document.getElementById(`heart${id}`);
  if (loved.has(id)) {
    loved.delete(id);
    btn.classList.remove("loved");
    btn.querySelector("i").className = "far fa-heart";
  } else {
    loved.add(id);
    btn.classList.add("loved");
    btn.querySelector("i").className = "fas fa-heart";
  }
}

/* ── Drawer ── */
function openDrawer(id) {
  const c = CABINS.find((x) => x.id === id);
  if (!c) return;
  document.getElementById("drawerImg").innerHTML =
    cabinSVG(c, 260) +
    `<div class="drawer-img-dots">${[0, 1, 2].map((i) => `<div class="drawer-dot${i === 0 ? " active" : ""}" onclick="cycleDot(this)"></div>`).join("")}</div>`;
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(c.rating)
      ? '<i class="fas fa-star"></i>'
      : i < c.rating
        ? '<i class="fas fa-star-half-alt"></i>'
        : '<i class="far fa-star"></i>',
  ).join("");
  const amenGrid = c.amenities
    .map(
      (a) =>
        `<div class="drawer-amenity-item"><i class="fas ${AMENITY_ICONS[a] || "fa-check"}"></i>${a}</div>`,
    )
    .join("");
  const gallery = [0, 1, 2]
    .map((i) => `<div class="drawer-gallery-thumb">${thumbSVG(c, i)}</div>`)
    .join("");
  const pols = c.policies
    .map(
      (p) =>
        `<div class="drawer-policy"><i class="fas fa-check-circle"></i><span>${p}</span></div>`,
    )
    .join("");
  document.getElementById("drawerContent").innerHTML = `
    <div class="drawer-type-row"><span class="drawer-type-tag">${c.type}</span>
      <div class="drawer-rating">${stars}<strong style="margin-left:5px">${c.rating}</strong><span>(${c.reviews} reviews)</span></div></div>
    <h2 class="drawer-name serif">${c.name}</h2>
    <div class="drawer-meta"><span><i class="fas fa-users"></i>Sleeps ${c.sleeps}</span><span><i class="fas fa-bed"></i>${c.beds} bedroom${c.beds > 1 ? "s" : ""}</span><span><i class="fas fa-bath"></i>${c.baths} bathroom${c.baths > 1 ? "s" : ""}</span></div>
    <p class="drawer-desc">${c.desc}</p>
    <div class="drawer-section-title">Amenities</div><div class="drawer-amenity-grid">${amenGrid}</div>
    <div class="drawer-section-title">Photo Gallery</div><div class="drawer-gallery">${gallery}</div>
    <div class="drawer-section-title">Policies</div><div class="drawer-policies">${pols}</div>`;
  const orig = c.origPrice
    ? `<span style="text-decoration:line-through;color:#bbb;font-size:.8rem;font-family:'Poppins',sans-serif;letter-spacing:0;margin-right:5px">$${c.origPrice}</span>`
    : "";
  document.getElementById("drawerCta").innerHTML = `
    <div class="drawer-price-block">${orig}<span class="drawer-price">$${c.price}<span> / night</span></span><small>Taxes &amp; fees included</small></div>
    <button class="drawer-book-btn" onclick="location.href='./Booking.html'"><i class="fas fa-calendar-check" style="margin-right:6px;font-size:.82rem"></i>Reserve Now</button>`;
  document.getElementById("drawerOverlay").classList.add("open");
  document.getElementById("cabinDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  document.getElementById("drawerOverlay").classList.remove("open");
  document.getElementById("cabinDrawer").classList.remove("open");
  document.body.style.overflow = "";
}
function cycleDot(el) {
  el.closest(".drawer-img-dots")
    .querySelectorAll(".drawer-dot")
    .forEach((d) => d.classList.remove("active"));
  el.classList.add("active");
}

/* ── Mobile filter ── */
function openMobFilter() {
  document.getElementById("filterPanel").classList.add("mob-open");
  document.getElementById("mobOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobFilter() {
  document.getElementById("filterPanel").classList.remove("mob-open");
  document.getElementById("mobOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Newsletter ── */
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

/* ── Init ── */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  applyFilters();
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDrawer();
    closeMobFilter();
  }
});
