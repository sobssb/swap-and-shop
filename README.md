# Swap & Shop - E-Commerce Application

A full-featured e-commerce web application built with React, featuring user authentication, product browsing, shopping cart management, and a saved items system. This project demonstrates modern React patterns, state management, and localStorage persistence.

## Live Demo

**[Deploy this to Vercel/Netlify and add link here]**

## ✨ Features

- ✅ **User Authentication** — Sign up, sign in, and logout with localStorage persistence
- ✅ **Product Browsing** — Browse today's deals, filtered products, and brand outlets
- ✅ **Shopping Cart** — Add/remove items, adjust quantities, track total price in real-time
- ✅ **Saved Items** — Save products for later, move between saved and cart
- ✅ **Search Functionality** — Search products across the catalog
- ✅ **Responsive Design** — Mobile-friendly UI with Tailwind CSS (mobile-first)
- ✅ **Toast Notifications** — User feedback for actions (add to cart, sign in, logout)
- ✅ **Data Persistence** — All user data (cart, saved items, auth) stored in localStorage

## 🛠️ Tech Stack

### Frontend

- **React 18** — Component-based UI with hooks
- **React Router v6** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **Vite** — Lightning-fast build tool and dev server
- **React Icons** — Icon library for UI elements
- **UUID** — Unique ID generation for user accounts

### Data

- **JSON Server** — Mock REST API for product data (`db.json`)
- **localStorage** — Client-side data persistence

## 📁 Project Structure

```
src/
├── pages/                    # Page components
│   ├── Home.jsx
│   ├── SignIn.jsx
│   ├── CreateAccount.jsx
│   ├── Cart.jsx
│   ├── Saved.jsx
│   ├── Deals.jsx
│   ├── Product.jsx
│   ├── BrandOutlet.jsx
│   └── ...
├── component/               # Reusable UI components
│   ├── Nav.jsx
│   ├── Toast.jsx
│   ├── Button.jsx
│   ├── Header.jsx
│   └── ...
├── layout/                  # Layout components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── HomeCards.jsx
├── hooks/                   # Custom React hooks
│   ├── useDetectOutsideClick.js
│   └── useFetchData.js
├── data/                    # Data constants
│   ├── AllProducts.js
│   └── ...
├── api/                     # API services
│   └── products.js
├── App.jsx                  # Main App component
└── main.jsx                 # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd swap-and-shop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:5173`

4. **Start JSON Server (in another terminal)**
   ```bash
   npm run server
   ```
   API will run on `http://localhost:3500`

### Build for Production

```bash
npm run build
```

## 🔑 Key Features Explained

### Authentication Flow

- Users create accounts with email, username, and password
- Sign-in validates credentials against stored accounts
- User data (cart, saved items, account details) persists in localStorage
- Logout clears session and resets cart/saved state
- Each user has isolated cart and saved items

### State Management

- Central state managed in `App.jsx` using React `useState` hooks
- Props drilled down to child components for component communication
- localStorage synced for persistence across browser sessions
- Separate state slices for:
  - Authentication (`getUserAfterSignIN`, `createAccount`)
  - Cart (`addToCart`, `cartList`)
  - Saved items (`saved`)
  - UI state (`toast`, `countDown`, `sideMenubar`)

### Product Management

- Products loaded from JSON Server API (`/products`)
- Real-time calculations for:
  - Shopping cart totals
  - Stock quantities per item
  - Tax/price rise calculations
  - Saved items storage per user
- Filters for today's deals, brand outlets, search results

### Toast Notifications

- Feedback system for critical user actions
- Types: Success confirmations, action confirmations, error alerts
- Countdown timer with action buttons
- Auto-dismiss after timeout or manual OK click

## 🐛 Known Issues & Improvements

### Current Issues

1. **Toast Countdown** — Countdown timer doesn't properly reach 0; timing is inconsistent between visual display and actual navigation
2. **Saved State Sync** — Saved items state can become out of sync with user object after login
3. **Sign-in localStorage** — localStorage write happens before form validation completes
4. **Prop Drilling** — Too many props passed through component tree (needs Context API refactor)
5. **No Type Safety** — No TypeScript; runtime errors possible

### Planned Improvements

- [ ] **TypeScript** — Add full type safety and interfaces
- [ ] **Context API** — Replace prop drilling with global state context
- [ ] **Unit Tests** — Jest and React Testing Library for coverage
- [ ] **Integration Tests** — End-to-end user flow testing
- [ ] **Backend API** — Replace JSON Server with Express/Node.js backend
- [ ] **Database** — PostgreSQL/MongoDB for persistent data storage
- [ ] **Authentication** — JWT tokens, password hashing with bcrypt
- [ ] **Email Verification** — Real email verification on signup
- [ ] **User Profile** — Edit account details, view order history
- [ ] **Payment Integration** — Stripe or PayPal checkout flow
- [ ] **Admin Dashboard** — Product management, analytics, user management
- [ ] **Performance** — Code splitting, lazy loading, image optimization
- [ ] **Error Boundaries** — Better error handling and user feedback

## 🎯 Architecture Decisions

### Why localStorage?

- ✅ Enabled rapid prototyping without backend
- ✅ No server setup required to start
- ❌ Not scalable for production; limited storage (~5-10MB)
- **Plan:** Replace with backend API + database

### Why Prop Drilling?

- ✅ Good for learning component hierarchy
- ❌ Becomes unmanageable with many state consumers
- **Plan:** Upgrade to Context API or Redux

### Why JSON Server?

- ✅ Simulates real API responses quickly
- ✅ Allows rapid frontend development
- ✅ Easy to transition to real backend
- ❌ Only works in development mode

## 💡 What I Learned

This project taught me:

- **React Fundamentals:** Components, hooks (useState, useEffect), JSX
- **Routing:** React Router navigation, nested routes, URL parameters
- **State Management:** Lifting state up, prop drilling, localStorage sync
- **Forms & Validation:** Input handling, error states, form submission
- **Browser APIs:** localStorage, useEffect cleanup, event listeners
- **UI/UX:** Responsive design, mobile-first approach, user feedback systems
- **Debugging:** React DevTools, console logging, state inspection
- **Real-world Flows:** Authentication, cart systems, data persistence

## 🧪 Testing

To test the application:

1. **Create Account**

   ```
   Username: testuser
   Email: test@example.com
   Password: password123
   ```

2. **Add to Cart**
   - Browse deals or product pages
   - Click "Add to Cart"
   - Verify cart count increases
   - Navigate to /cart to see cart items

3. **Save Items**
   - Click heart icon on products
   - Navigate to /saved
   - Verify items appear
   - Move to cart or delete

4. **Sign In**
   - Use credentials from created account
   - Verify cart/saved persist after login

5. **Logout**
   - Click "Log Out" button
   - Verify cart and saved items clear

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`

⚠️ **Important:** This project uses JSON Server for development. For production, you need to:

- Set up a backend API (Node/Express, Python/Django, etc.)
- Connect to a real database (PostgreSQL, MongoDB, Firebase, etc.)
- Or embed mock data directly in the app for demo purposes

## 🔧 Scripts

```bash
npm run dev        # Start dev server
npm run server     # Start JSON Server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint (if configured)
```

## 📝 License

MIT License — Feel free to use this as a learning reference

## 👨‍💻 Author

Built as a learning project to master React fundamentals and e-commerce workflows.

---

**Status:** In Development — Core features complete, refactoring and improvements in progress  
**Last Updated:** June 2026
