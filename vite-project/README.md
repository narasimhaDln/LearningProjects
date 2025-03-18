**_/Task:My Product Comparison App_**/

This is a web application built using React, Vite, Ant Design, and React Router. The app allows users to view product details, compare selected products, and manage a list of up to 4 compared products. It integrates data from a sample API and provides a user-friendly interface for a smooth product comparison experience.
file and folder structure.

src/
├── components/ # Reusable UI components
│ ├── CompareProducts.jsx # Component for displaying compared products
│ ├── Navbar.jsx # Navigation bar component
│ ├── ProductTable.js # Table component for product listing
│ ├── Sidebar.jsx # Sidebar component for navigation
├── components/pages/
│ ├── ComparePage.jsx # Page for showing compared products
│ ├── ProductDetails.jsx # Page for displaying individual product details
├── App.jsx # Main entry point and routing logic
├── main.jsx # Vite entry point for React app
└── index.css # Global styles

**Features**
=>Product Table: Displays a list of products fetched from a dummy API, with the ability to compare selected products.
=>Product Comparison: Users can select up to 4 products for comparison and remove them from the comparison list.
=>Sidebar Navigation: Provides links to view product details and compare selected products.
=>Responsive Design: The app is responsive and works on various screen sizes.

**Technologies**
React: JavaScript library for building user interfaces.
Vite: Fast build tool for React projects.
Ant Design: UI library for building clean and professional user interfaces.
React Router: For handling routing between different pages.
Tailwind CSS: For utility-first CSS styling.
Fetch API: For fetching product data from a mock API.

**packages**

    "antd": "^5.24.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^6.30.0"
    "tailwindcss": "^4.0.14",

GitHub link::

Deployment Link:
