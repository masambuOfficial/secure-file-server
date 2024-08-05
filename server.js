import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';

const app = express();
const PORT = 4000;
const __dirname = path.resolve();
const PASSWORD = 'securepassword'; // Replace with your predefined password

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(session({
  secret: 'secret-key', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 } // Session valid for 1 minute
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Login route
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Password verification
app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    req.session.isAuthenticated = true;
    res.redirect('/node-course');
  } else {
    res.redirect('/login');
  }
});

// Middleware to protect the node-course route
app.use('/node-course', (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/login');
  }
});

// Node course route
app.get('/node-course', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'node-course.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
