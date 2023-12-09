import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSiteWideContext } from "../../context";


const AuthForm = () => {
  const { authView } = useSiteWideContext();
  return (
    <div className="z-50 flex flex-col items-center justify-center">
      {authView === "signup" ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default AuthForm;
