# The Cook App 🍳

> **A GitHub for Recipes — Open, Collaborative, and Global**

Welcome to the world’s first open-source, collaborative food community platform. Our mission is to build a GitHub-like platform for recipes, empowering users to share, improve, and develop recipes together. Whether you’re a home cook or a professional chef, join us in preserving food traditions, exchanging culinary ideas, and making the best recipes accessible for all!

---

## 🚀 Project Vision

- **Open Collaboration:** Fork, modify, and remix any recipe—track every improvement!
- **Version Control:** See how recipes evolve and revisit previous versions.
- **Community Driven:** Share experiences, ask questions, and help others grow.

Our staged rollout will start with essential recipe-sharing and gradually add collaborative, social, and AI features.

---

## 🛠️ Tech Stack

| Layer      | Technology          | Description                                    |
|------------|--------------------|------------------------------------------------|
| Frontend   | React + Vite       | Fast, modern UI with robust PWA support        |
| UI Kit     | MagicUI, HeroUI, Material UI, Antd | Prebuilt beautiful and customizable components (mix and match as desired) |
| Backend    | Express.js         | Lightweight and flexible REST API server       |
| Database   | MongoDB Atlas      | Cloud NoSQL database for flexible recipe data  |
| Auth       | Firebase Auth      | Secure, scalable authentication (email/social) |
| Hosting    | Vercel (FE),       | Effortless CI/CD for frontend and backend      |
|            | Render (BE)        |                                                |

---

## ✨ Features (MVP)

* [ ] User-friendly recipe editor
* [ ] Automatically generate shopping lists from recipes
* [ ] Search for recipes by ingredients you have
* [ ] Firebase Authentication (Email and Google sign-in via Firebase Authentication)
* [ ] PWA: Install on mobile & desktop, offline support
* [ ] Import recipes from external sources

---

## 🖥️ Local Development

**Prerequisites:**  
- Node.js 18+  
- npm or yarn  
- MongoDB
- Firebase project (for Auth)

**1. Clone the repo**
```bash
git clone https://github.com/Team-Cook-Community/The-Cook-App.git
cd The-Cook-App
````

**2. Install dependencies**

```bash
# For frontend
cd frontend
npm install

# For backend
cd ../backend
npm install
```

**3. Configure environment variables**

* Copy `.env.example` to `.env` in both `/frontend` and `/backend`
* Fill in MongoDB Atlas URI, Firebase config, etc.

**4. Run locally**

```bash
# Start backend
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm run dev
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend: [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment

* **Frontend:** [Vercel](https://vercel.com/) (connect repo, auto-deploy on push)
* **Backend:** [Render](https://render.com/) (connect repo, auto-deploy)
* **Database:** [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
* **Auth:** [Firebase Auth](https://firebase.google.com/products/auth)

---

## 🤝 Contributing

We welcome all contributors: developers, designers, writers, and food lovers!

1. Fork this repo and create your feature branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -am 'Add awesome feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Open a Pull Request!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📢 Join the Community

* Share your ideas and feedback in [GitHub Discussions](https://github.com/orgs/Team-Cook-Community/discussions)
* Coming soon: Public roadmap & Discord!

---

> **Let’s build the future of cooking together! 🍜**

