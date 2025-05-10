
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GradientButton = ({ children, className, onClick }: GradientButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      className={cn(
        "bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md w-full transition-all duration-300",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
