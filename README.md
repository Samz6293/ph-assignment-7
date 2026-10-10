# বাজার দর / BazarDor

A modern Bangladeshi grocery price tracking platform that helps users monitor daily market prices across different categories and compare costs between markets in one place.

## Overview

বাজার দর (BazarDor) is a Next.js-based web application designed to make grocery price tracking simple and informative for consumers across Bangladesh. The platform displays prices for everyday essentials such as rice, oil, vegetables, fish, meat, eggs, and spices, while highlighting trends like daily price increases and decreases.

Users can browse products by category, view the current price, compare market-wise price ranges, and inspect historical movement indicators to make more informed buying decisions.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- HeroUI
- Better Auth
- MongoDB
- ESLint
- Node.js

## Key Features

1. Daily Grocery Price Tracking
   - View today’s prices for a wide range of essential products across Bangladeshi markets.

2. Price Change Overview
   - See which products have increased or decreased in price and track percentage changes at a glance.

3. Category-Based Product Browsing
   - Explore products by category and quickly find the items you need.

4. Detailed Product and Market Comparison
   - Open each product page to see average, minimum, maximum, and market-wise pricing information.

5. Responsive and User-Friendly UI
   - Clean, mobile-friendly interface with Bangla-friendly design and smooth navigation for desktop and mobile users.

## Project Structure

- `app/` — Main application pages, components, and route logic
- `app/components/` — Reusable UI components
- `app/constants/` — Shared app constants and API fetch logic
- `app/data/` — Local fallback data
- `app/lib/` — Authentication utilities
- `app/product/[slug]/` — Product detail pages
- `app/category/[category]/` — Category page listings

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```