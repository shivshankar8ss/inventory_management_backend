# 🧾 Inventory Management Backend

A simple RESTful backend for an inventory management system built with **Node.js**, **Express.js**, **MongoDB**, and **JWT** authentication. It provides secure user authentication, product inventory management, and role-based protected routes.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based auth)
- ✅ Add, Update, View Products
- ✅ Modify Product Quantity
- ✅ Protected API routes (Admin/User access)
- ✅ MongoDB (Mongoose) integration
- ✅ Modular controller-service architecture
- ✅ Environment variable support
- ✅ Jest + Supertest for API testing

---

## 🛠️ Technologies Used

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **bcryptjs** – Password hashing
- **jsonwebtoken** – Authentication
- **dotenv** – Environment config
- **Jest** + **Supertest** – Unit & integration testing

---

## 📁 Directory Structure

```bash
backend/
├── config/
│   └── db.js                # MongoDB connection configuration
├── controllers/
│   ├── auth.controller.js  # Auth logic
│   ├── item.controller.js  # Item logic
│   └── user.controller.js  # User logic
├── middlewares/
│   └── auth.middleware.js  # Authentication middleware
├── models/
│   ├── item.model.js       # Item schema
│   └── user.model.js       # User schema
├── routes/
│   ├── auth.route.js       # Auth routes
│   ├── item.route.js       # Item routes
│   └── user.route.js       # User routes
├── utils/
│   └── generateToken.js    # JWT utility
├── tests/
│   └── test_api.js         # Test file using Mocha/Chai or Jest
├── .env                    # Environment variables
├── .gitignore              # Git ignored files/folders
├── package.json            # Node dependencies and scripts
├── server.js               # Entry point for the server
└── README.md               # This file
```

---

## 🧪 API Routes

### 🔐 Auth Routes

| Method | Route                  | Description         | Access |
|--------|------------------------|---------------------|--------|
| POST   | `/api/auth/register`   | Register user       | Public |
| POST   | `/api/auth/login`      | Login user          | Public |

### 📦 Product Routes

| Method | Route                        | Description               | Access   |
|--------|------------------------------|---------------------------|----------|
| POST   | `/api/products/`             | Add new product           | Private  |
| GET    | `/api/products/`             | Get all products          | Private  |
| GET    | `/api/products/:id`          | Get product by ID         | Private  |
| PUT    | `/api/products/:id/quantity` | Update product quantity   | Private  |

> 🔐 Use JWT Bearer Token in headers as: `Authorization: Bearer <token>`

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
```
---
## 🧰 Setup Instructions
### Clone the repo
```bash
git clone https://github.com/your-username/inventory_management_backend.git
cd inventory_management_backend
```
### install dependencies
```bash
npm install
```
### Create .env file
```bash
cp .env.example .env
# then edit values in the .env file
```
### Start the server
```bash
npm run dev   # for development (nodemon)
npm start     # for production

```
---
## 📄 License
This project is open and free to use.  
Useful for learning the basics of CRUD operation in Node.js while learning backend.

## 👨‍💻 Author
**Shivshankar Kumar**  
[Visit my GitHub](https://github.com/shivshankar8ss)
