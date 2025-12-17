# ☁️ Secure Cloud Storage Application

A **secure, scalable, and high-performance cloud storage platform** that allows users to upload, store, and manage images, videos, and files of any type.
Built with a **security-first mindset**, real-world authentication, cloud infrastructure, and monetization features.

---

## 🚀 Live Demo

🔗 **Live App:** [https://storageappfrontend.netlify.app/]
💻 **GitHub Repository:** [https://github.com/iamowais123/cloud-storage-app]

---

## 🧠 Key Highlights

* 🌍 **Global file delivery** using AWS CloudFront CDN
* 🔐 **Advanced authentication & session control**
* 💳 **Payment gateway integration** for purchasing storage plans
* ⚡ **High performance** with Redis-backed session storage
* 🛡️ **Strong security protections** against common attacks

---

## ✨ Features

### 📂 File Storage & Management

* Upload and store **images, videos, and files of any format**
* Files securely stored in **AWS S3 buckets**
* Optimized file access using **CloudFront CDN** for low latency worldwide

### 🔐 Authentication & Security

* **Stateful session-based authentication**
* **Maximum 2 active devices per user** (extra logins blocked automatically)
* **Google OAuth login**
* **OTP-based verification** for sensitive actions
* **Secure password handling**
* Protection against **SQL Injection**
* **Zod validation** for strict request validation

### 🧠 Session Management

* Sessions stored in **Redis** for:

  * Fast access
  * Scalability
  * Strong session control
* Automatic session invalidation on logout or device limit exceed

### 💳 Payments & Monetization

* **Payment gateway integration** to allow users to:

  * Purchase additional storage
  * Upgrade storage plans securely
* Payment flow designed like a real **SaaS product**

---

## 🛠 Tech Stack

### Frontend

* React / Next.js
* Tailwind CSS
* TypeScript

### Backend

* Node.js
* Express.js
* Redis (Session Store)

### Cloud & Infrastructure

* **AWS S3** – File storage
* **AWS CloudFront** – Global CDN

### Authentication & Security

* Google OAuth
* OTP Verification
* Stateful Sessions
* Zod Validation

### Payments

* Integrated Payment Gateway (for storage plans)

---

## 🏗 Architecture Overview

```
Client (Browser)
   ↓
Frontend (Next.js / React)
   ↓
Backend (Node.js + Express)
   ↓
Redis (Sessions)
   ↓
AWS S3 (File Storage)
   ↓
AWS CloudFront (Global Delivery)
```

---

## 🔒 Security Design Decisions

* Session-based auth chosen over JWT for **device-level control**
* Redis used to **prevent session duplication**
* Input validation at every API boundary
* Secrets managed via environment variables
* No sensitive data committed to GitHub

---

## 🧪 How to Run Locally

```bash
# Clone repository
git clone https://github.com/iamowais123/cloud-storage-app

# Backend
cd BACKEND
npm install
npm run dev

# Frontend
cd FRONTEND
npm install
npm run dev
```

> ⚠️ Make sure to configure `.env` files with AWS, Redis, OAuth, and payment credentials.

---

## 📌 Environment Variables (Sample)

```env
DB_URL=
GOOGLE_CLIENT_ID=
SESSION_SECRET=
PORT=

EMAIL_USER=
RAZORPAY_WEBHOOK_SECRET=
EMAIL_PASS=

REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=

CLIENT_URL=
CLOUDFRONT_PRIVATE_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_SECRET_KEY=
AWS_SECRET_KEY=
```

---

## 🎯 Why This Project Matters

This project demonstrates:

* ✅ **Real-world cloud architecture**
* ✅ **Production-level authentication**
* ✅ **Security best practices**
* ✅ **Monetization & SaaS thinking**
* ✅ **Scalable backend design**

Perfect for **Backend / Full-Stack / Cloud-focused roles**.

---

## 👤 Author

**MD Owais Jamal**
💼 Aspiring Full-Stack / Backend Engineer
🔗 GitHub: [https://github.com/iamowais123](https://github.com/iamowais123)

---

## ⭐ Final Note

If you find this project interesting, feel free to **star the repository** ⭐
Feedback and suggestions are always welcome!