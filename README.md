EnduroCart App (React Frontend)

The EnduroCart App is the frontend interface for the EnduroCart eCommerce platform, a fitness store where users can browse fitness products, manage shopping carts, and make secure payments using Flutterwave and PayPal.

Built with React, Axios, and Bootstrap, it connects directly to the Django REST API backend.

✨ Features

Product listing with responsive layout

Add/remove items from cart

Dynamic cart total updates

Checkout and secure payment with Flutterwave and PayPal

Confirmation and payment status handling

Dark-themed UI with hover contrast effects

🛠️ Tech Stack

Category	Technology
Framework	React 18
Styling	Bootstrap 5, CSS Modules
HTTP Client	Axios
State Management	useState, useEffect
Payment	Flutterwave, PayPal Standard Integration

⚙️ Setup Instructions
1️⃣ Clone the repository

git clone https://github.com/yourusername/endurocart_app.git
cd endurocart_app


2️⃣ Install dependencies

npm install


3️⃣ Create .env file

REACT_APP_API_BASE_URL=http://127.0.0.1:8000
REACT_APP_FLW_PUBLIC_KEY=your_test_public_key


4️⃣ Run the development server

npm start


Frontend runs on:
➡️ http://localhost:3000/

🔌 API Connection

All backend requests point to the Django API:
http://127.0.0.1:8000/

Example:

axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/`);


💳 Payment Integration

The app integrates Flutterwave and PayPal standard checkout.
Payments are initiated from PaymentSection.jsx.
Payment success redirects trigger Django’s /payment_callback/.


🧑‍💻 Developer

Tayo Popoola — Frontend Developer (React / UI Design)
📧 GitHub - [Frontend](https://github.com/tmp-cloud7/endurocart_app)

📦 GitHub -[ Backend](https://github.com/tmp-cloud7/endurocart)
