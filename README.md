Hoodcart App (React Frontend)

The Hoodcart App is the frontend interface for the Hoodcart eCommerce platform.
It allows users to browse products, manage their shopping carts, and make payments securely using Flutterwave.

Built with React, Axios, and Bootstrap, it connects directly to the Django REST API.

✨ Features

Product listing and responsive layout

Add/remove items from cart

Cart total updates dynamically

Checkout and payment with Flutterwave

Confirmation and payment status handling

Dark-themed UI with hover contrast effects

🛠️ Tech Stack
Category	Technology
Framework	React 18
Styling	Bootstrap 5, CSS Modules
HTTP Client	Axios
State Management	useState, useEffect
Payment	Flutterwave Standard Integration
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/yourusername/hoodcart_app.git
cd hoodcart_app
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
REACT_APP_API_BASE_URL=http://127.0.0.1:8000
REACT_APP_FLW_PUBLIC_KEY=your_test_public_key
4️⃣ Run the development server
npm start

Frontend runs on
➡️ http://localhost:3000/

🔌 API Connection

All backend requests point to the Django API at:

http://127.0.0.1:8000/

Example:

axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/`);
💳 Payment Integration

The app integrates Flutterwave Standard checkout via:

https://checkout.flutterwave.com/v3/hosted/pay

Payments are initiated from PaymentSection.jsx

Payment success redirects trigger Django’s /payment_callback/

🧩 Folder Structure
hoodcart_app/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── PaymentSection.jsx
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── styles/
└── package.json


🧑‍💻 Developer

Tayo Popoola — Frontend Developer (React / UI Design)
📧 https://github.com/tmp-cloud7
