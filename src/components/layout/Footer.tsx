import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/20 border-t">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img 
                src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" 
                alt="AIM Technical Institute logo" 
                className="h-12 w-12 rounded-lg shadow-lg object-contain group-hover:scale-110 transition-transform duration-200" 
                loading="lazy" 
              />
              <div>
                <span className="text-xl font-bold text-primary">AIM Technical Institute</span>
                <p className="text-sm text-muted-foreground">सीपको सुरुबात, लक्ष्यबाट !</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Empowering Nepal's workforce with practical, industry-relevant training. 
              Build job-ready skills with our hands-on technical education programs.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+9779851404451" 
                    className="hover:text-primary transition-colors duration-200 font-medium"
                  >
                    +977 9851404451
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:aimtechnicalinstitute4@gmail.com" 
                    className="hover:text-primary transition-colors duration-200 text-sm"
                  >
                    aimtechnicalinstitute4@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="text-muted-foreground">Main Campus: Basundhara, Kathmandu</div>
                  <div className="text-muted-foreground">Branch: Baneshwor, Kathmandu</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground text-sm">Sun - Fri: 6:00 AM - 5:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/courses", label: "Our Courses" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/founder", label: "Founder" },
                { to: "/application", label: "Apply Now" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t bg-accent/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} AIM Technical Institute Pvt. Ltd. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
