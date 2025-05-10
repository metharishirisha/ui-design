
import { Input } from "@/components/ui/input";

interface EmailInputProps {
  placeholder?: string;
}

const EmailInput = ({ placeholder = "Enter your email address" }: EmailInputProps) => {
  return (
    <div className="w-full">
      <Input 
        type="email" 
        placeholder={placeholder} 
        className="h-12 bg-white/90 rounded-md text-black/80 px-4"
      />
    </div>
  );
};

export default EmailInput;
