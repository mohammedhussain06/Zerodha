# Zerodha Clone - Full Stack Trading Platform

A full-stack web application clone of Zerodha, India's largest stockbroker, featuring a modern landing page, user authentication, and a comprehensive trading dashboard.

## 🚀 Features

### Landing Page
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Beautiful, clean interface with smooth animations
- **Multiple Pages**: Home, About, Products, Pricing, Support
- **User Authentication**: Signup and Login functionality with JWT tokens

### Dashboard
- **Trading Interface**: Buy/Sell order placement with real-time stock data
- **Watchlist**: Track favorite stocks with live price updates
- **Portfolio Management**: View holdings, positions, orders, and funds
- **Responsive Design**: Optimized for all screen sizes
- **Logout Functionality**: Secure session management

### Backend
- **RESTful API**: Node.js/Express backend with MongoDB
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Database**: MongoDB Atlas integration for user and order data
- **Security**: Secure password storage and token-based sessions

## 📁 Project Structure

```
Zerodha/
├── frontend/          # React landing page application
├── dashboard/         # React dashboard application
├── backend/           # Node.js/Express API server
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Bootstrap** - Responsive styling
- **Material-UI** - UI components
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Zerodha
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

4. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

5. **Environment Variables**

   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3002
   ```

   Create a `.env` file in the `frontend` directory:
   ```env
   REACT_APP_API_URL=http://localhost:3002
   REACT_APP_DASHBOARD_URL=http://localhost:3001
   REACT_APP_LANDING_URL=http://localhost:3000
   ```

   Create a `.env` file in the `dashboard` directory:
   ```env
   REACT_APP_API_URL=http://localhost:3002
   REACT_APP_LANDING_URL=http://localhost:3000
   ```

## 🚀 Running the Application

### Development Mode

1. **Start Backend Server** (Port 3002)
   ```bash
   cd backend
   npm start
   # or
   nodemon index.js
   ```

2. **Start Frontend** (Port 3000)
   ```bash
   cd frontend
   npm start
   ```

3. **Start Dashboard** (Port 3001)
   ```bash
   cd dashboard
   npm start
   ```

### Production Build

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Build Dashboard**
   ```bash
   cd dashboard
   npm run build
   ```

## 📝 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login

### Orders
- `POST /newOrder` - Create new buy/sell order

## 🔐 Authentication Flow

1. **Signup**: User creates account → Redirected to homepage
2. **Login**: User logs in → JWT token stored → Redirected to dashboard
3. **Dashboard**: Token validated → User can trade
4. **Logout**: Token cleared → Redirected to landing page

## 🎨 UI Features

- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **Modern Styling**: Gradient buttons, smooth animations, clean layouts
- **User Experience**: Loading states, error handling, form validation
- **Accessibility**: Proper labels, keyboard navigation support

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Laptop**: 992px - 1200px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes only.

## 👨‍💻 Author

Developed as a learning project to understand full-stack development with React, Node.js, and MongoDB.

## 🙏 Acknowledgments

- Zerodha for the design inspiration
- All open-source libraries and frameworks used

