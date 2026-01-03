📇 Contact Manager (MERN Stack)

A full-stack Contact Manager application built using the MERN stack. Users can submit contact details via a form, view all submitted contacts in real time, and delete contacts. The project follows modern best practices such as ES Modules, environment variables, REST APIs, and user-friendly toast notifications.


---

🚀 Features

📄 Contact form with validation (Name & Phone required)

🔔 Success & error notifications using react-toastify

📋 Display contacts dynamically without page reload

🗑️ Delete contacts

🌐 RESTful API using Express & MongoDB

🔐 Environment-based API configuration (local & production)

📱 Responsive UI with Tailwind CSS



---

🛠️ Tech Stack

Frontend

React (Vite)

Axios

Tailwind CSS

React Toastify


Backend

Node.js

Express.js

MongoDB + Mongoose

ES Modules


Deployment

Frontend: Vercel

Backend: Render / Railway



---



⚙️ Environment Variables

Frontend (.env)

VITE_BACKEND_URL=http://localhost:4000

Backend (.env)

MONGO_URI=your_mongodb_connection_string
PORT=4000

> ⚠️ Note: In Vite, all frontend environment variables must start with VITE_.

---



📡 API Endpoints

Method	Endpoint	Description

POST	/api/contacts	Add a new contact
GET	/api/contacts	Get all contacts
DELETE	/api/contacts/:id	Delete a contact



---

🧠 Interview Explanation (Quick)

> “This is a MERN stack contact manager where the frontend communicates with a REST API using Axios. I used controlled components, toast notifications for UX, environment variables for deployment, and MongoDB for persistent storage.”




---

📸 Screenshots





---

⭐ If you like this project, give it a star!
