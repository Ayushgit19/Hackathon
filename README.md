# Event Management Platform

## 🌟 Features

### 🎯 Core Functionality
- **Session Management**: Create, save, and publish events
- **Draft System**: Save sessions as drafts before publishing
- **User Authentication**: Secure JWT-based authentication system

### 🔐 Authentication & Security
- User registration with email verification
- Secure login/logout functionality
- Password reset via email
- JWT token-based authentication
- Protected routes and API endpoints

### 🎨 User Experience
- Modern, responsive UI built with Tailwind CSS
- Real-time notifications with React Hot Toast
- Intuitive navigation and user-friendly interface
- Mobile-responsive design

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email functionality

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd serenity
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   
   ```

   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../wellness-app
   npm install
   ```

   Create a `.env` file in the wellness-app directory:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📁 Project Structure

```
Event-Management/
├── backend/                 # Backend API server
│   ├── configs/            # Database and other configurations
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
├── wellness-app/           # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # React entry point
│   ├── index.html         # HTML template
│   └── package.json       # Frontend dependencies
│
└── README.md              # Project documentation
```

## 🔧 Development

### Available Scripts

**Frontend (wellness-app/)**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend (backend/)**
- `npm start` - Start server with nodemon (auto-reload)

### Environment Variables

**Backend (.env)**
| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `NODE_ENV` | Environment mode | No |
| `SMTP_USER` | SMTP username for emails | No |
| `SMTP_PASS` | SMTP password for emails | No |
| `SENDER_EMAIL` | Email sender address | No |

**Frontend (.env)**
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BACKEND_URL` | Backend API URL | Yes |

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the build command to `npm run build`
3. Set the output directory to `dist`
4. Add environment variables in Vercel dashboard

### Backend (Render/Railway/Vercel)
1. Deploy the backend folder to your preferred platform
2. Set environment variables
3. Ensure MongoDB is accessible from the deployment platform

## 📸 Application Pages

- **Dashboard** - View and filter published sessions
- **Create Events** - Create new wellness sessions
- **My Events** - Manage your published sessions
- **Edit Draft** - Edit session drafts
- **Authentication** - Login, register, email verification, password reset

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Lucide React](https://lucide.dev/) - Icons

## 📞 Contact

For questions, suggestions, or support, please reach out:

- **LinkedIn**: [Ayush Kumar](https://www.linkedin.com/in/ayush-kumar-494736288/)
- **GitHub**: [ayushgit19](https://github.com/ayushgit19)

