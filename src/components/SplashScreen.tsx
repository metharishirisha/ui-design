
import { useNavigate } from "react-router-dom";
import EmailInput from "./EmailInput";
import GradientButton from "./GradientButton";

const SplashScreen = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    // In a real app, we would likely validate the email first
    navigate("/login");
  };
  
  return (
    <div className="h-screen w-full flex flex-col justify-between bg-gradient-to-b from-teal-300 to-teal-700 p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-xs mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Yolo App</h1>
            <p className="text-white/90">Connect with your local community</p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-xs mx-auto space-y-4 mb-8">
        <EmailInput />
        <GradientButton onClick={handleGetStarted}>
          Get Started
        </GradientButton>
        
        <p className="text-center text-xs text-white/80 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
