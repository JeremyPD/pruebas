import React, { useState } from 'react';
import '../../App.css';
import cityImage from '../../assets/images/City.jpeg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="left-image">
          <img src={cityImage} alt="Imagen de ciudad" />
        </div>
        <div className="login-container">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Iniciar sesión
            </button>
            <button
              className={`tab-button ${activeTab === "register" ? "active" : ""}`}
              onClick={() => setActiveTab("register")}
            >
              Registrarse
            </button>
          </div>
          {activeTab === "login" ? <Login /> : <Register />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
