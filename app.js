const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = express.Router();
const app = express();
const db=require("./config/mongoose-connection");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
const ownerRouter=require("./routes/ownerRouter");
const usersRouter=require("./routes/usersRouter");
const productsRouter=require("./routes/productsRouter");


// Routes
app.use("/owners",ownerRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
