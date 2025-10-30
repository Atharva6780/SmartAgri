# 🌾 SmartAgri – Intelligent Agriculture Management System

SmartAgri is an integrated web-based platform designed to help farmers and buyers with data-driven agriculture decisions.  
It combines **crop yield prediction**, **market insights**, and **smart farm management** to make farming more efficient and profitable.

---

## 🚀 Features

### 👨‍🌾 Farmer Dashboard
- Add and manage crops with details such as type, price, and availability  
- Predict crop yield using a trained machine learning model  
- Monitor crop growth and history  
- Access weather-based insights and tips

### 🛒 Buyer Dashboard
- View and purchase crops directly from farmers  
- Explore crop availability and market prices  
- Secure order management and history tracking

### 🧠 Machine Learning Model
- Crop yield prediction using Python & Scikit-learn  
- Integrated with Flask API  
- Uses soil, temperature, rainfall, and crop type as inputs  

### 💻 Tech Stack
#### Frontend
- React.js  
- Tailwind CSS  
- Axios for API requests  

#### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  

#### Models
- Python (Flask API)  
- Pandas, NumPy, Scikit-learn  
- Jupyter Notebook for training and testing models  

---

## 🧩 Folder Structure


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/SmartAgri.git
cd SmartAgri

cd backend
npm install
npm start

cd ../frontend
npm install
npm run dev

cd ../models/yield_prediction\ model
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

