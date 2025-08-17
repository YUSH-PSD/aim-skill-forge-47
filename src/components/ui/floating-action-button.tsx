import { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  className?: string;
}

export const FloatingActionButton = ({ className }: FloatingActionButtonProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCall = () => {
    window.open('tel:+9779851404451', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9779851404451?text=Hello, I want to know more about your courses', '_blank');
  };

  if (!showScrollTop) return null;

  return (
    <div className={cn("fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3", className)}>
      {/* Action Buttons */}
      <div className={cn(
        "flex flex-col gap-2 transition-all duration-300 origin-bottom",
        isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      )}>
        <Button
          size="icon"
          variant="outline"
          onClick={handleCall}
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={20} />
        </Button>
        
        <Button
          size="icon"
          variant="outline"
          onClick={handleWhatsApp}
          className="h-12 w-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="WhatsApp us"
        >
          <MessageCircle size={20} />
        </Button>
      </div>

      {/* Main FAB */}
      <Button
        size="icon"
        onClick={isExpanded ? scrollToTop : () => setIsExpanded(true)}
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={isExpanded ? "Scroll to top" : "Show actions"}
      >
        <ArrowUp 
          size={24} 
          className={cn(
            "transition-transform duration-300",
            isExpanded ? "rotate-0" : "rotate-45"
          )} 
        />
      </Button>

      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};