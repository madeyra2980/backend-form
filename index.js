const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes");


const app = express();
const PORT = 1015  | process.env.PORT;

// Подключаем MongoDB
connectDB();

// Middleware
app.use(express.json());

// Статическая папка
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Роуты
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
