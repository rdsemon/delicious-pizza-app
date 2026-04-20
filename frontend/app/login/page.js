import generateMetadata from "@/lib/metadata";
import LoginForm from "../components/LoginForm";
export const metadata = generateMetadata("Login");
function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
