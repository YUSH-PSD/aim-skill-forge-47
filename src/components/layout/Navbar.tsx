import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

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
  
  const handleNavClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
      {/* Top Bar with Logo */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto py-4">
          <Link to="/" className="flex items-center justify-center gap-3" aria-label="AIM Technical Institute home">
            <img src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" alt="AIM Technical Institute logo" className="h-12 w-12 rounded-lg shadow-lg object-contain" loading="eager" />
            <div className="flex flex-col leading-tight text-center">
              <span className="text-xl font-bold tracking-tight text-primary">AIM Technical Institute</span>
              <span className="text-sm text-muted-foreground font-medium">सीपको सुरुबात, लक्ष्यबाट !</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md ${
                    isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>


          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div></div> {/* Spacer */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader className="text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" alt="AIM Technical Institute logo" className="h-10 w-10 rounded-lg shadow-lg object-contain" loading="eager" />
                    <div>
                      <span className="text-lg font-bold text-primary">AIM Technical Institute</span>
                      <p className="text-xs text-muted-foreground">सीपको सुरुबात, लक्ष्यबाट !</p>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                   {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `text-sm py-3 px-4 rounded-md transition-colors ${
                          isActive ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="mt-4">
                    <Button asChild variant="hero" className="w-full font-semibold">
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
