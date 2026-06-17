# Pipeline Builder

A visual pipeline builder built with React and FastAPI.

## How to Run

### Backend

Install dependencies:

```bash
pip install fastapi uvicorn
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

You should see:
INFO: Uvicorn running on http://127.0.0.1:8000

### Frontend

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm start
```

## MGH-202 — Node Abstraction

- Created BaseNode.js as shared base component
- Migrated all 4 original nodes to use BaseNode
- Added 5 new nodes: API Caller, Condition,
  Data Transform, File Upload, Webhook Trigger

## MGH-203 — UI Styling & Design System

Styling Approach

- The application uses CSS Variables, a centralized theme file (theme.css), global CSS (index.css), and React inline styles for consistent styling across the application.

Improvements Made

- Defined a colour palette, typography scale, and spacing tokens
- Styled the toolbar and canvas background
- Redesigned all node cards with rounded corners and shadows
- Added distinct colours for different node types
- Customized connection edges and handles
- Styled form controls and the Submit button
- Ensured responsive design at 1280px and larger screen sizes

---
