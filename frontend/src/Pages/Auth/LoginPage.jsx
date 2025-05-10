import { useState } from "react";
import SocialLogin from "../../Components/Auth/SocialLogin";
import InputField from "../../Components/Auth/InputField";
import "./styles/auth.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await AuthService.login(email, password);
      navigate("/");
    } catch (err) {
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.");
      console.error("Erreur de connexion:", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="form-title">Log in with</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <InputField
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password-link">Forgot password?</a>
          <button type="submit" className="login-button">Log In</button>
          <p className="separator"><span>or</span></p>
          <SocialLogin />
        </form>

        <p className="signup-prompt">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
