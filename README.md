# 🛒 Product REST API

A simple and clean REST API built with **Node.js**, **Express**, **MongoDB**, and **Joi**. This API supports full CRUD operations (Create, Read, Update, Delete) for managing product data, along with schema validation using Joi.

---

## 🚀 Features

- ✅ Create a new product
- 📥 Get all products
- 🔍 Get a product by ID
- ✏️ Update product by ID
- ❌ Delete product by ID
- 🔐 Joi validation for safe and clean data

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **Joi** for validation
- **dotenv** for environment config

---

## ⚙️ Installation

To get this API up and running on your local machine, follow these steps:

### Prerequisites

* Node.js (v14 or higher recommended)
* MongoDB (local instance or cloud service like MongoDB Atlas)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    In the root of the project, create a file named `.env` and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string_here
    PORT=5000 # Optional, default is 5000
    ```
    *(Replace `your_mongodb_connection_string_here` with your actual MongoDB URI, e.g., `mongodb://localhost:27017/products_db` or your Atlas URI).*

4.  **Start the server:**
    ```bash
    npm run dev
    ```

    The API should now be running at `http://localhost:5000` (or your specified PORT).

---

## 📦 Project Structure

.
├── config/
│   └── db.js
├── controllers/
│   ├── add-Product.js
│   ├── all-Products.js
│   ├── delete-Product.js
│   └── update-Product.js
├── middlewares/
│   └── validateProduct.js
├── models/
│   └── productModel.js
├── node_modules/
├── routes/
│   ├── all-productRoute.js
│   ├── delete-productRoute.js
│   ├── post-productRoute.js
│   └── update-productRoute.js
├── validations/
│   └── productValidation.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
