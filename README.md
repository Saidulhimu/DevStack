# 🚀 Dev Stack Builder

Dev Stack Builder is an interactive web application designed to help developers explore modern web technologies and assemble their custom development stacks. Users can review essential details, ratings, and categories for various tools, add their preferred tech to a personalized stack sidebar, and manage their selection in real time with dynamic feedback.

---

## 🛠 Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Alerts & Notifications:** React-Toastify
- **Data Source:** JSON via Fetch API
- **Language:** JavaScript / TypeScript

---

## ✨ Key Features

1. **Dynamic Interactive Grid:** Browse through a responsive 3-column catalog of technologies displaying badges, difficulty levels, star ratings, and descriptions.
2. **Real-time Stack Manager:** Add technologies to a dedicated side panel that tracks selection counts .
3. **Instant Feedback & UI States:** Includes loading state handling for data fetching and styled Toastify notifications for every user action.

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like markup directly inside JavaScript code. It makes building UI components much easier and more intuitive because we can see the markup structure .

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component.
- **State:** Internal data managed within a component that can change over time. 

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage local dynamic data. In this project, I used `useState` inside `useTechnologies` to keep track of:
- `technologies`: The list of tools loaded from JSON.
- `stack`: The items selected by the user.
- `loading`: The loading state while data is fetching.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets us run side effects in functional components, such as fetching data or setting timers. I needed it to fetch the `technologies.json` file from the `public` folder.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique `key` props to keep track of individual list items when changes occur (like adding or deleting items). It helps React identify exactly which element changed, updated, or was removed, allowing efficient DOM updates instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific UI elements based on certain conditions or states. 
**Example from this project:** In `StackSidebar.jsx`, I used it to show the empty stack message when no items are selected:
```jsx
{stack.length === 0 ? (
  <div className="border border-dashed border-gray-200 rounded-2xl py-10 px-4 text-center my-2">
    <p className="text-gray-400 text-sm font-medium">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3 mb-6">
    {stack.map((item) => (
      <StackItem item="{item}" key="{item.id}" onRemove="{onRemove}"/>
    ))}
  </div>
)}