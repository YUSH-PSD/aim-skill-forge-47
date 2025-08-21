import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Hammer, Wrench, PlugZap, Paintbrush, Sparkles, Flame, Settings, Zap, HardHat, Droplets, Brush, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { useAutoSwap } from "@/hooks/useAutoSwap";

const weldingImages = [
  { src: "/lovable-uploads/fd40b42b-097e-49c9-bed4-43f61736fa13.png", alt: "Welding training – close-up SMAW arc at AIM Kathmandu" },
  { src: "/lovable-uploads/315257e2-cc1b-4db1-83da-70e6d697a0a6.png", alt: "Welding practice – creating a secure hitch joint" },
  { src: "/lovable-uploads/ba6eb486-f3a8-4dd9-a660-bd1e04a05adc.png", alt: "Welding sparks during hands-on session" },
  { src: "/lovable-uploads/1e013e35-c30b-46de-a102-7e68937b09f3.png", alt: "Industrial welding – student at work" },
  { src: "/lovable-uploads/3ce8871e-8d96-4ae7-b59a-6aa341987ee8.png", alt: "Close-up of MIG welding torch and arc" },
  { src: "/lovable-uploads/0992230b-3e47-4b45-a416-1cd18204320f.png", alt: "Bright welding arc and safety gear" },
  { src: "/lovable-uploads/81d139f5-d8de-4500-82bf-e71316d18762.png", alt: "Welding smoke and sparks – safety-first training" },
  { src: "/lovable-uploads/8f291caa-a925-49bf-8de7-70d7f9db0087.png", alt: "Molten weld pool during practice" },
];

const courses = [
  { 
    title: "Arc Welding", 
    icon: Flame, 
    description: "Shielded Metal Arc Welding (SMAW) with professional electrode techniques and safety protocols.",
    image: "/lovable-uploads/e1c80d03-80ec-4c26-842d-e1f05b32cc81.png"
  },
  { 
    title: "MIG Welding", 
    icon: Zap, 
    description: "Metal Inert Gas welding for precise fabrication and industrial applications.",
    image: "/lovable-uploads/0d97587e-5da7-4342-b34b-53575dd7c043.png"
  },
  { 
    title: "Lathe Machine", 
    icon: Settings, 
    description: "Precision metal turning and machining operations with modern lathe equipment.",
    image: "/lovable-uploads/1db77c98-81cb-4244-9c49-938c2846af6a.png"
  },
  { 
    title: "Painting", 
    icon: Paintbrush, 
    description: "Professional painting techniques for industrial and decorative applications.",
    image: "/lovable-uploads/adb4cfa6-1e92-490f-9f47-d81d055b433d.png"
  },
  { 
    title: "Masonry", 
    icon: HardHat, 
    description: "Stone and brick work, concrete construction, and structural building techniques.",
    image: "/lovable-uploads/612c9bb0-2d54-4fd2-9f8d-7b4b75213908.png"
  },
  { 
    title: "Scap Folding", 
    icon: Wrench, 
    description: "Metal fabrication, bending, and forming techniques for sheet metal work.",
    image: "/lovable-uploads/25f3add1-d302-4bfb-8ead-3cba75bf3ec8.png"
  },
  { 
    title: "Carpentry", 
    icon: Hammer, 
    description: "Woodworking skills, furniture making, and construction carpentry techniques.",
    image: "/lovable-uploads/d01fcfaf-b909-495d-affd-5e55596e6105.png"
  },
  { 
    title: "Plumbing", 
    icon: Droplets, 
    description: "Water systems installation, pipe fitting, and plumbing repair techniques.",
    image: "/lovable-uploads/35174d65-e5ce-40f9-9e02-d7cd2d776524.png"
  },
  { 
    title: "Electrical Wiring", 
    icon: Zap, 
    description: "Electrical installation, wiring systems, and safety protocols for electrical work.",
    image: "/lovable-uploads/cbb816d9-0c1f-4c94-87ca-173cc95b480e.png"
  },
  { 
    title: "Tig Welding", 
    icon: Sparkles, 
    description: "Tungsten Inert Gas welding for precision work and high-quality finishes.",
    image: "/lovable-uploads/87fed847-da62-4f48-922b-27edba1ca41b.png"
  },
  { 
    title: "Aluminium Fabrication", 
    icon: Sparkles, 
    description: "Aluminum welding, cutting, and fabrication for industrial applications.",
    image: "/lovable-uploads/11e612e0-4a7b-41aa-8ff4-6a32e3411e1c.png"
  },
  { 
    title: "Sand Blasting", 
    icon: Wind, 
    description: "Surface preparation and cleaning using high-pressure abrasive techniques.",
    image: "/lovable-uploads/4070537b-c21d-4d73-8a8a-a766cf4b9f3f.png"
  },
];

const Courses = () => {
  const { currentIndex } = useAutoSwap({ 
    itemCount: weldingImages.length, 
    interval: 4000 
  });
  
  return (
    <main>
      <SEO
        title="Technical Training Courses in Kathmandu | AIM Technical Institute"
        description="Comprehensive technical training: Welding, Lathe Machine, Electrical Wiring, Plumbing, Carpentry, and more professional courses."
        path="/courses"
      />
      <section className="container mx-auto py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Technical Training Courses</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Master essential technical skills with hands-on, safety-first training on professional equipment.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <article 
              key={course.title} 
              className="group p-6 rounded-xl border bg-card hover:shadow-elevated transition-all duration-500 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <figure className="overflow-hidden rounded-lg mb-4 relative">
                <img
                  src={course.image}
                  alt={`${course.title} training at AIM Technical Institute in Kathmandu`}
                  loading="lazy"
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>
              <div className="h-11 w-11 rounded-md bg-gradient-primary shadow-elevated mb-4 grid place-items-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <course.icon className="text-primary-foreground transition-transform duration-300" />
              </div>
              <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{course.title}</h2>
              <p className="text-sm text-muted-foreground transition-colors duration-300">{course.description}</p>
            </article>
          ))}
        </div>
        {/* Auto-swapping Welding Training Photos */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Professional Training in Action
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="relative">
            {/* Auto-swapping background slider */}
            <div className="h-96 relative overflow-hidden rounded-3xl group shadow-2xl">
              <div className="absolute inset-0">
                {weldingImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-2000 ease-in-out transform ${
                      currentIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white animate-fade-in">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 transform transition-transform duration-500 group-hover:scale-105">
                    Hands-On Learning Experience
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    Professional welding training with industry-standard equipment
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hexagonal photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {weldingImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className="group relative animate-fade-in hover-scale transition-all duration-300"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    animationDelay: `${(index + 1) * 200}ms`
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 p-2 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div 
                      className="w-full h-full bg-cover bg-center transform transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                      style={{
                        backgroundImage: `url(${image.src})`,
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild variant="hero">
                <Link to="/contact">Apply for a Course</Link>
              </Button>
            </div>
          </div>
        </section>
      </section>
      {/* Structured Data for courses */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": courses.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Course",
              name: c.title,
              description: c.description,
              provider: { "@type": "Organization", name: "AIM Technical Institute" },
              image: weldingImages.map(i => i.src)
            }
          }))
        })
      }} />
    </main>
  );
};

export default Courses;
