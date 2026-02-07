📦 Infinite Products Table (React)

A React + Vite application that fetches product data from an API and displays it in a table with editable titles and infinite scrolling using Intersection Observer.
This project was built as part of a Fullstack/Frontend Engineer Intern Assignment.

🚀 Live Demo
Deployed URL:
👉 Add your Vercel/Netlify link here

🧠 Features
Fetches product data from DummyJSON API
Displays products in a clean HTML table
Editable product title using controlled inputs
Infinite scrolling implemented with Intersection Observer
Responsive and accessible UI
Built using React functional components & Hooks
No third-party table libraries used

🛠️ Tech Stack
React (Vite)
JavaScript (ES6+)
HTML5 & CSS3
Intersection Observer API
DummyJSON REST API

📂 Project Structure
infinite-products/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md

⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/your-username/infinite-products.git
cd infinite-products

Install dependencies:
npm install

Run development server:
npm run dev


Build for production:
npm run build

Preview production build:
npm run preview

🔌 API Used
https://dummyjson.com/products?limit=10&skip=0


Supports pagination via limit and skip
Returns a list of product objects
♾️ Infinite Scroll Logic
Uses Intersection Observer
Observes the last table row
When visible → fetches next batch of products
Stops when no more data is available
This approach is more efficient than scroll event listeners and improves performance.

✏️ Editable Title Feature
Implemented using controlled input fields
Updates product title in React state
Demonstrates state handling & re-rendering

📱 Responsiveness & Accessibility
Table supports horizontal scrolling on small screens
Inputs are keyboard accessible
Clean readable UI with proper spacing and contrast

🔐 Environment Variables
This project does not require API keys.
If sensitive keys were needed, they would be stored in:
.env
and managed securely via Vercel/Netlify environment settings.

🌐 Deployment
The application is deployed on a free hosting platform (Vercel) and is publicly accessible.

Deployment includes:
Automatic build from GitHub
Optimized production bundle

Public live URL
📸 Assignment Requirements Covered
✅ Fetch API data
✅ Render data in table
✅ Editable title field
✅ Infinite scrolling (Intersection Observer)
✅ React Hooks & functional components
✅ Clean, readable UI
✅ Public deployment

👨‍💻 Author
Deepak Kumar
Fullstack / Frontend Developer
