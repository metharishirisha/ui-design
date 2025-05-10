
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, LogIn } from "lucide-react";
import EmailInput from "@/components/EmailInput";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-300 to-teal-700 flex flex-col justify-center p-6">
      <div className="max-w-sm mx-auto w-full bg-white/90 rounded-lg shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-700">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to continue to Yolo App</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <EmailInput placeholder="your@email.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className="pl-10 pr-10 h-12" 
              />
              <div 
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                Forgot password?
              </a>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate("/home")} 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white h-12 flex items-center justify-center gap-2"
          >
            <LogIn className="h-5 w-5" />
            Sign In
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button 
                onClick={() => navigate("/")} 
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
