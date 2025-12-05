# AI-Powered Laravel + React Application

An AI-driven full-stack web application built with **Laravel 11.34.2** (backend) and **React ^19.1.0** (frontend), integrated with **OpenRouter AI** for intelligent responses and automation.

This project demonstrates clean architecture, scalable structure, and practical AI integration for real-world use cases.

---

## 🚀 Tech Stack

**Backend:**

* Laravel 11.34.2 (PHP)
* RESTful API Architecture
* MySQL / MariaDB
* OpenRouter AI Integration
* Queue & Job system
* Laravel Sanctum / JWT (optional)

**Frontend:**

* React ^19.1.0
* Vite
* Axios
* Tailwind / Bootstrap
* Responsive UI

**AI Layer:**

* OpenRouter API
* Multiple AI model support
* Structured & natural language responses

---

## 🔥 Core Features

* AI-powered chat / assistant
* Modular React components
* Secure API endpoints
* Role-based access ready
* Laravel Service / Repository architecture
* Reusable AI Service class
* Environment-based configurations
* Clean separation of frontend & backend
* Ready for expansion (chatbot, CRM, support bot, etc.)

---

## 📂 Project Structure

```
/backend     -> Laravel 11 API
/frontend    -> React 19 app
/docs        -> Screenshots & Documentation
```

---

## ⚙️ Installation (Local Setup)

### Clone the repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

---

## Backend (Laravel) Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Laravel will run on:

```
http://127.0.0.1:8000
```

---

## Frontend (React) Setup

```bash
cd frontend
npm install
npm run dev
```

React will run on:

```
http://127.0.0.1:5173
```

---

## 🔐 Environment Variables

**Never commit your `.env` file**

`.env.example` should include:

```env
APP_NAME=LaravelAI
APP_ENV=local
APP_KEY=
APP_URL=http://127.0.0.1:8000

DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
```

---

## 🤖 OpenRouter AI Example (Laravel Service)

```php
$response = Http::withHeaders([
    'Authorization' => 'Bearer ' . env('OPENROUTER_API_KEY'),
])->post('https://openrouter.ai/api/v1/chat/completions', [
    'model' => env('OPENROUTER_MODEL'),
    'messages' => [
        ['role' => 'user', 'content' => 'Hello AI']
    ]
]);
```

---

## 📸 Screenshots

Place screenshots here:

```
/docs/screenshots
```

Example in README:

```md
![Dashboard](docs/screenshots/dashboard.png)
```

---

## 🌍 Demo (optional)

Live demo:

```
Coming Soon
`
```
