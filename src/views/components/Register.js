import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch('http://testeos.me:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Error al registrarse');
        setSuccessMessage(null);
        return;
      }

      setSuccessMessage("Registro exitoso. Por favor verifica tu correo electrónico.");
      setError(null);
      console.log("Registro exitoso:", data);
    } catch (error) {
      setError("Error de conexión con el servidor. Inténtalo nuevamente.");
      setSuccessMessage(null);
    }
  };

  return (
    <form onSubmit={handleRegister} className="login-form">
      <div className="form-group">
        <label htmlFor="register-name">Nombre</label>
        <input
          type="text"
          id="register-name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-email">Correo</label>
        <input
          type="email"
          id="register-email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-password">Contraseña</label>
        <input
          type="password"
          id="register-password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">Registrarse</button>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default Register;
