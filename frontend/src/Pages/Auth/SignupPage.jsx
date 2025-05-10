import SignUpForm from "../../Components/Auth/SignUpForm";
import "./styles/auth.css";

const SignupPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="form-title">Sign up with</h2>

        <SignUpForm />

        <p className="signup-prompt">
          Already have an account?{" "}
          <a href="/login" className="signup-link">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
