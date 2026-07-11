# Lazzati Restaurant | A Taste of Indus Heritage, Redefined

A premium, highly aesthetic, and responsive single-page marketing website for **Lazzati Restaurant**, located in the historic city of Sukkur, Sindh, Pakistan. 

This application is built using **React**, **Vite**,, translating the rich architectural lines and traditional flavors of the Indus Valley into a modern, minimalist digital experience.

---

## 🍽️ Brand Identify & Design Philosophy
Lazzati blends ancestral culinary traditions with refined modern gastronomy. The interface design reflects this harmony:
- **Color Palette:** Rich Terracotta Orange (`#c35a33`), Warm Sand (`#fcf9f3`), and Umber Charcoal (`#14110f`) dark elements.
- **Architectural Motifs:** Clean curved UI components and structural arches inspired by the historic Sukkur Barrage and Lab-e-Mehran riverfront.
- **Ajrak Geometrics:** Subtle, elegant SVG-based background patterns referencing Sindhi Ajrak heritage textures.
- **Typography:** Elegant serif headings paired with clean, lightweight sans-serif body copy for premium editorial reading.

---

## 🚀 Features & Interactivity
1. **Light/Dark Mode Toggler:** Seamless theme swapping class transitions, synced automatically with system preferences and persisted in local storage.
2. **Floating Glassmorphic Navbar:** Pill-shaped sticky header with a fully responsive slide-down drawer overlay for mobile screens.
3. **Parallax Hero Banner:** Immersive scaling background photography responding to user scroll.
4. **Synced Booking Details:** A quick availability selector widget on the Hero section that automatically synchronizes selections with the main reservation form.
5. **Interactive Story & Kitchen Tabs:** Asymmetrical columns displaying Lazzati's origins, kitchen processes, and supply chain details with zero-latency tab switching.
6. **Filterable Menu Catalog:** Interactive tabs to filter culinary creations (Sajji, Biryani, Desserts, Drinks) with smooth opacity fade transitions.
7. **WhatsApp Reservation Concierge:** A styled booking form that handles reservation details and generates a pre-formatted direct message to the restaurant's WhatsApp concierge on submission.

---

## 🛠️ Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v3) + PostCSS + Autoprefixer
- **Icons:** Material Symbols Outlined
- **Fonts:** Libre Caslon Text & Plus Jakarta Sans via Google Fonts

---

## 📁 Directory Structure
```text
Lazzati Restaurant/
├── public/
│   └── assets/
│       └── images/             # High-resolution bespoke images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header & theme toggle controls
│   │   ├── Hero.jsx            # Headline banner & quick selection
│   │   ├── Story.jsx           # Heritage tabs
│   │   ├── Menu.jsx            # Category tab selector and item cards
│   │   ├── ReservationForm.jsx # Details form and WhatsApp dispatch
│   │   └── Footer.jsx          # Working hours & social links
│   ├── data/
│   │   └── menu.js             # Localized menu database
│   ├── App.jsx                 # App coordinator & states
│   ├── index.css               # CSS variables, patterns, and base reveals
│   └── main.jsx                # React mount entrypoint
├── package.json                # Project configurations & dependency files
├── tailwind.config.js          # Design system classes configuration
├── vite.config.js              # Vite compiler configuration
└── README.md                   # Project specifications document
```

---

## 💻 Local Setup & Execution

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your local machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Mukhtiar22/Lazzati-Restaurant-.git
   cd Lazzati-Restaurant-
   ```
2. Install the node packages:
   ```bash
   npm install
   ```

### Development Server
Spin up the local hot-reloading development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
Build and optimize the application files for production deployment:
```bash
npm run build
```
Vite will compile and output build artifacts inside a flat `/dist` folder.
