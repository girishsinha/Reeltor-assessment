# Reeltor Assessment Project

## Overview

This is a web application built with **Vite, React, and Redux Toolkit**, designed for the Reeltor assessment. The app features:

- **React Router v7** for navigation
- **Redux Toolkit** for state management
- **Recharts** for dynamic data visualization
- **Tailwind CSS** for modern UI styling
- **Framer Motion** for animations

## Tech Stack

- **Frontend:** React, Vite
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Charts & Graphs:** Recharts
- **Animations:** Framer Motion
- **Routing:** React Router DOM

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components for routing
│   ├── store/           # Redux store setup
│   ├── assets/          # Static files (images, icons, etc.)
│   ├── App.jsx          # Main application file
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── router.js        # App routes configuration
│
├── public/              # Public assets
├── package.json         # Project dependencies & scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

## Installation & Setup

Follow these steps to set up and run the project locally:

### 1️ Clone the Repository

```sh
git clone <repository_url>
cd reeltor-assessment
```

### 2️ Install Dependencies

```sh
yarn install  # or npm install
```

### 3️ Start the Development Server

```sh
yarn dev  # or npm run dev
```

### 4️ Build for Production

```sh
yarn build  # or npm run build
```

### 5️ Preview Production Build

```sh
yarn preview  # or npm run preview
```

## Features

- **Dark/Light Mode Toggle** (Redux-powered theme switcher)
- **Horizontal Scroll with Buttons** (For smooth scrolling of cards)
- **Interactive Area Charts** (Using Recharts for dynamic data visualization)
- **Animated Components** (Leveraging Framer Motion for smooth UI transitions)
- **Navigation Highlighting** (Active link styles using React Router DOM)

## Redux Toolkit Setup

### Creating the Mode Slice (`store/modeSlice.js`)

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
```

### Integrating Redux Store (`store/store.js`)

```javascript
import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlice";

const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

export default store;
```

### Dispatching Redux Actions (`ThemeToggle.jsx`)

```javascript
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <button onClick={() => dispatch(toggleMode())}>
      Toggle to {mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
```

## Styling & UI (Tailwind CSS)

To ensure consistent styling, Tailwind CSS is used. Ensure you have Tailwind configured properly in `tailwind.config.js`.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Dynamic Graph (Recharts)

The app includes a **custom area chart** similar to the example image.
Example Recharts setup:

```javascript
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 300 },
  { name: "Tue", value: 250 },
  { name: "Wed", value: 310 },
  { name: "Thu", value: 180 },
  { name: "Fri", value: 290 },
  { name: "Sat", value: 220 },
  { name: "Sun", value: 280 },
];

const CustomAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#EDE9FE" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
```

## License

This project is for the **Reeltor Assessment** and follows applicable guidelines.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
