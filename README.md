
#  HR Workflow Designer (React + React Flow)

A visual workflow builder for HR automation processes such as onboarding, approvals, and task orchestration.
Built using **React + React Flow**, this project allows HR admins to design workflows without writing code.

---

#  Features

* Drag & drop workflow builder
* Custom HR nodes (Start, Task, Approval, Automation, End)
* Dynamic node configuration panel
* Visual edge-based workflow connections
* Workflow simulation (run & view JSON output)
* Modular and scalable architecture

---

# 🧱 Architecture

## 📦 Frontend Architecture

The application follows a **component-based architecture**:

```
src/
│
├── components/        → UI building blocks
│   ├── Canvas.jsx     → React Flow workspace
│   ├── Sidebar.jsx    → Draggable node types
│   ├── Header.jsx     → Top navigation
│   ├── NodeFormPanel.jsx → Node configuration UI
│   ├── SandboxPanel.jsx → Workflow execution panel
│
├── hooks/
│   └── useWorkflow.js → Central state management
│
├── api/
│   └── mockApi.js     → Mock automation data
│
├── utils/
│   └── validation.js  → Workflow validation logic
│
├── styles/
│   └── app.css        → Global styling
│
├── App.jsx            → Main layout controller
└── main.jsx           → React entry point
```

---

## 🔄 Data Flow

1. User drags node from Sidebar
2. Node is added to React Flow canvas
3. State is managed in `useWorkflow` hook
4. Node selection updates configuration panel
5. Edges define workflow relationships
6. Sandbox executes workflow (JSON simulation)

---

## ⚙️ State Management

* Uses **React Hooks only**
* Centralized workflow state in `useWorkflow.js`
* No external state libraries used (kept lightweight intentionally)

---

# ▶️ How to Run

## 1. Clone Repository

```bash
git clone https://github.com/your-username/hr-workflow-designer.git
cd hr-workflow-designer
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Development Server

```bash
npm run dev
```

## 4. Open in Browser

```
http://localhost:5173
```

---

# 🎨 Design Decisions

## 1. React Flow for Visualization

We chose **React Flow** because it:

* Provides built-in node graph system
* Handles edges and positioning automatically
* Reduces manual canvas complexity

---

## 2. Hook-Based Architecture

Instead of Redux or Context API:

* Used `useWorkflow` hook for simplicity
* Keeps state logic modular and easy to maintain

---

## 3. Modular Component Design

Each UI section is separated:

* Sidebar → Node selection
* Canvas → Workflow builder
* Panel → Node configuration
* Sandbox → Execution simulation

This improves:

* Scalability
* Maintainability
* Code readability

---

## 4. Mock API Layer

* Simulates automation actions (email, approvals, etc.)
* Helps future backend integration

---

# ✅ What is Completed

### Core Features Delivered:

* Fully working drag & drop workflow builder
* Node creation system
* Node editing panel (label/config)
* Edge-based workflow connections
* Workflow simulation (JSON output)
* Clean UI layout
* Modular architecture

---

# 🚧 What Can Be Improved (Future Scope)

## 1. Backend Integration

* Node.js + Express API
* MongoDB workflow storage

## 2. Authentication System

* HR login system
* Role-based access (Admin / HR / Viewer)

## 3. Real Workflow Execution Engine

* Actual task execution (email triggers, API calls)

## 4. Collaboration Feature

* Multi-user workflow editing (like Figma)

## 5. Version Control

* Workflow history tracking
* Rollback support

## 6. Improved UI/UX

* Better drag snapping
* Auto-layout suggestions
* Theme support (dark mode)

---

# 🧠 Key Learnings

* Building graph-based UI using React Flow
* Managing complex state in React without external libraries
* Designing modular front-end architecture
* Handling drag-drop interactions in React
* Building simulation-based systems

---

# 📌 Tech Stack

* React.js
* React Flow
* JavaScript (ES6+)
* UUID
* CSS3

---

# 👨‍💻 Author

**Isha Aditi**

---

# ⭐ If you like this project

Give it a star ⭐ on GitHub.
