# Blog App

## 📌 Project Overview
This is a **full-stack Blog App** where users can create, edit, and delete blog posts. It includes authentication so that each user can manage their own posts securely.

## 🚀 Features
- 📝 Create, Read, Update, and Delete (CRUD) blog posts
- 🔐 User authentication & authorization
- 📷 Image upload support using Multer & Cloudinary (if implemented)
- 🎨 Responsive and user-friendly UI
- 🔍 Search functionality for blogs

## 🛠 Tech Stack
- **Frontend:** React.js, Bootstrap, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens) & bcrypt.js
- **File Upload (if applicable):** Multer, Cloudinary

## ⚡ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the **backend** folder and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     CLOUDINARY_API_KEY=your_api_key # (if using Cloudinary)
     ```

4. **Run the application:**
   ```bash
   # Start the backend
   cd backend
   npm start
   
   # Start the frontend
   cd ../frontend
   npm start
   ```

## 🎯 API Endpoints (Backend)
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | Login user & get token |
| GET    | `/api/blogs`          | Fetch all blogs |
| POST   | `/api/blogs`          | Create a new blog (auth required) |
| PUT    | `/api/blogs/:id`      | Update a blog (auth required) |
| DELETE | `/api/blogs/:id`      | Delete a blog (auth required) |


## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

## 📬 Contact
For any queries, reach out to me at **sameermalik63901.com

