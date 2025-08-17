import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/gallery", label: "Gallery" },
  { to: "/founder", label: "Founder" },
  { to: "/application", label: "Apply Now" },
];

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleNavClick = () => {
    setIsSheetOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDesktopNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.documentElement.style.scrollBehavior = 'smooth';
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/95 shadow-lg border-b' 
        : 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm'
    }`}>
      {/* Top Bar with Logo - Auto-collapse on scroll */}
      <div className={`bg-primary/5 border-b transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            onClick={handleDesktopNavClick} 
            className="flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-200" 
            aria-label="AIM Technical Institute home"
          >
            <img 
              src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" 
              alt="AIM Technical Institute logo" 
              className={`rounded-lg shadow-lg object-contain transition-all duration-300 ${
                isScrolled ? 'h-8 w-8' : 'h-12 w-12'
              }`} 
              loading="eager" 
            />
            <div className="flex flex-col leading-tight text-center">
              <span className={`font-bold tracking-tight text-primary transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                AIM Technical Institute
              </span>
              <span className={`text-muted-foreground font-medium transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                सीपको सुरुबात, लक्ष्यबाट !
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleDesktopNavClick}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 hover:text-primary px-4 py-2 rounded-lg relative group ${
                      isActive 
                        ? "text-primary bg-primary/10 shadow-sm" 
                        : "text-muted-foreground hover:bg-accent hover:shadow-sm"
                    }`
                  }
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
              <Link to="/application" onClick={handleDesktopNavClick}>Apply Now</Link>
            </Button>
          </div>


          {/* Mobile & Tablet Menu */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div className="flex items-center">
              <Button asChild variant="hero" size="sm" className="text-xs">
                <Link to="/application" onClick={handleDesktopNavClick}>Apply</Link>
              </Button>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="hover:bg-accent transition-all duration-200">
                  <Menu className="transition-transform duration-200" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader className="text-left">
                  <div className="flex items-center gap-3 mb-8">
                    <img 
                      src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" 
                      alt="AIM Technical Institute logo" 
                      className="h-12 w-12 rounded-lg shadow-lg object-contain" 
                      loading="eager" 
                    />
                    <div>
                      <span className="text-xl font-bold text-primary">AIM Technical Institute</span>
                      <p className="text-sm text-muted-foreground">सीपको सुरुबात, लक्ष्यबाट !</p>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col gap-1">
                   {navItems.map((item, index) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `text-base py-4 px-4 rounded-lg transition-all duration-200 border border-transparent hover:border-border/50 ${
                          isActive 
                            ? "text-primary bg-primary/10 font-semibold border-primary/20 shadow-sm" 
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`
                      }
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="mt-6 pt-6 border-t">
                    <Button asChild variant="hero" className="w-full font-semibold py-3 text-base">
                      <Link to="/application" onClick={handleNavClick}>Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
