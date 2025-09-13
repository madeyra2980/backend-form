# Car Checker API

API для анализа изображений автомобилей на предмет ржавчины и царапин с использованием Roboflow.

## 🏗️ Архитектура проекта

```
backend/
├── config/           # Конфигурация базы данных
│   └── db.js
├── controllers/      # Контроллеры (обработка HTTP запросов)
│   └── uploadController.js
├── middleware/       # Middleware функции
│   ├── errorHandler.js
│   ├── logger.js
│   └── validation.js
├── models/          # Mongoose модели
│   └── File.js
├── multer/          # Конфигурация загрузки файлов
│   └── upload.js
├── routes/          # Маршруты API
│   └── uploadRoutes.js
├── services/        # Бизнес-логика
│   ├── fileService.js
│   └── roboflowService.js
├── utils/           # Вспомогательные функции
│   ├── constants.js
│   ├── logger.js
│   └── responseHelper.js
├── uploads/         # Загруженные файлы
├── index.js         # Главный файл приложения
└── package.json
```

## 🚀 Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` в корне проекта:
```env
PORT=1015
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/carchecker
ROBOFLOW_API_KEY=your_private_api_key_here
ROBOFLOW_PROJECT_ID=rust-and-scrach-cbhdg
ROBOFLOW_VERSION=1
MAX_FILE_SIZE=5242880
CORS_ORIGIN=http://localhost:3000
```

3. Запустите сервер:
```bash
npm start
```

## 📚 API Endpoints

### Загрузка и анализ файла
```http
POST /api/uploads
Content-Type: multipart/form-data

file: [изображение]
```

**Ответ:** Изображение с результатами анализа

### Получение списка файлов
```http
GET /api/files?page=1&limit=10
```

**Ответ:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Получение файла по ID
```http
GET /api/files/:id
```

### Удаление файла
```http
DELETE /api/files/:id
```

### Получение результатов анализа (JSON)
```http
GET /api/files/:id/analysis
```

### Health Check
```http
GET /api/health
```

## 🔧 Основные компоненты

### Middleware
- **errorHandler.js** - Централизованная обработка ошибок
- **logger.js** - Логирование HTTP запросов
- **validation.js** - Валидация загружаемых файлов

### Services
- **fileService.js** - Работа с файлами (сохранение, получение, удаление)
- **roboflowService.js** - Интеграция с Roboflow API

### Utils
- **responseHelper.js** - Стандартизированные ответы API
- **logger.js** - Расширенное логирование
- **constants.js** - Константы приложения

## 📝 Поддерживаемые форматы

- **Изображения:** JPEG, JPG, PNG, WEBP
- **Максимальный размер:** 5MB
- **Одновременно:** 1 файл

## 🛠️ Технологии

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Multer** (загрузка файлов)
- **Axios** (HTTP клиент)
- **CORS** (межсайтовые запросы)
- **Roboflow API** (анализ изображений)

## 📊 Логирование

Приложение использует цветное логирование с эмодзи:
- ✅ Успешные операции
- ❌ Ошибки
- ⚠️ Предупреждения
- ℹ️ Информация
- 🐛 Отладочная информация (только в development)

## 🔒 Безопасность

- Валидация типов файлов
- Ограничение размера файлов
- CORS настройки
- Обработка ошибок без утечки информации
