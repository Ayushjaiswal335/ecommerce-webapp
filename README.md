# Full Stack E-Commerce MERN App

A complete e-commerce solution built with the MERN stack (MongoDB, Express.js, React.js, Node.js).



## Features

- 🛍️ Product management (CRUD operations)
- 👤 User authentication and authorization
- 🛒 Shopping cart functionality
- 🔍 Product search and filtering
- 📱 Responsive design
- 👨‍💼 Admin dashboard
- 🖼️ Image upload with Cloudinary

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```properties
MONGODB_URI=your_mongodb_connection_string
TOKEN_SECRET_KEY=your_secret_key
FRONTEND_URL=http://localhost:3000
```

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```properties
REACT_APP_CLOUD_NAME_CLOUDINARY=your_cloudinary_cloud_name
REACT_APP_BACKEND_URL=http://localhost:8080
```

### Running the Application

1. Start backend server:
```bash
cd backend
npm start
```

2. Start frontend development server:
```bash
cd frontend
npm start
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)


