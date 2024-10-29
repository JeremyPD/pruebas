import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://testeos.me:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error al iniciar sesión');
      
      console.log("Inicio de sesión exitoso:", data);

      localStorage.setItem('token', data.token);

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="form-group">
        <label htmlFor="login-email">Correo</label>
        <input
          type="email"
          id="login-email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Contraseña</label>
        <input
          type="password"
          id="login-password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">Iniciar sesión</button>
      {error && <p className="error">{error}</p>}
      <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
    </form>
  );
}

export default Login;
