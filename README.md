# React Tracker

Live Link: https://ornate-marigold-f51d9c.netlify.app/

A simple weekly habit tracker built with React, TypeScript, and Vite. It lets users add habits, mark daily completions for each day of the current week, track streaks, and persist progress in browser local storage.

## Overview

This project is a lightweight productivity app for building daily routines. Users can:

- create custom habits
- toggle completion for each day in the displayed week
- view a current streak for each habit
- move between weeks with previous/next navigation
- keep their data saved locally in the browser

## Features

- Weekly date navigation using `date-fns`
- Habit creation form with validation
- Daily completion toggling by day of the week
- Streak indicator for consecutive completed days
- Delete actions for individual habits
- Local persistence via `localStorage`
- Responsive dark-themed UI with a clean dashboard layout

## Tech Stack

- React 19
- TypeScript
- Vite
- date-fns
- Tailwind CSS

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Button.tsx
    HabitForm.tsx
    HabitItem.tsx
    HabitList.tsx
    Header.tsx
  context/
    HabitProvider.tsx
  hooks/
    useLocalStorage.ts
```

### Main parts

- `App.tsx`: sets up the visible week and renders the app shell
- `HabitProvider.tsx`: manages habit state and persistence through context
- `HabitForm.tsx`: adds new habits
- `HabitList.tsx`: lists all habits
- `HabitItem.tsx`: renders a habit row with daily toggles and streak badge
- `Header.tsx`: shows progress for the current day and navigates weeks
- `useLocalStorage.ts`: persists habit data in `localStorage`

## How It Works

The app keeps a list of habits in a React context. Each habit contains:

- a unique id
- a name
- an array of completion dates

When a user clicks on a day button for a habit, the date is added to or removed from that habit's completion list. The app computes a streak by checking consecutive dates from today backward. Each week is derived using `date-fns` and the visible date range is displayed in the header.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The application will be available in the browser through the Vite dev server.

### Production build

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Notes

- Habit data is stored in the browser, so it persists across refreshes on the same browser/device.
- The app is intentionally lightweight and does not use a backend or database.
- Calendar logic is week-based and centers around the current date with previous/next week navigation.

