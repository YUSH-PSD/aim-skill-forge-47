import hero from "@/assets/hero-aim.jpg";
import { Button } from "@/components/ui/button";
import { BackgroundSlider } from "@/components/ui/background-slider";
import { SEO } from "@/components/SEO";
import { ShieldCheck, Wrench, GraduationCap, Users, Clock, Building, CheckCircle, ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const backgroundImages = [
  "/lovable-uploads/dc937378-28d0-467a-9880-c7998802295a.png", // Planning/Engineering
  "/lovable-uploads/cd126efe-054d-4615-b04a-cced65446024.png", // Construction Site
  "/lovable-uploads/f600f04c-f199-48a2-9e27-60d669a9dfad.png"  // Welding
];

const Index = () => {
  const { ref: heroRef, isIntersecting: isHeroIntersecting } = useIntersectionObserver();
  const { ref: featuresRef, isIntersecting: isFeaturesIntersecting } = useIntersectionObserver();
  const { ref: coursesRef, isIntersecting: isCoursesIntersecting } = useIntersectionObserver();
  const { ref: whyChooseRef, isIntersecting: isWhyChooseIntersecting } = useIntersectionObserver();
  const { ref: ctaRef, isIntersecting: isCtaIntersecting } = useIntersectionObserver();

  return (
    <main>
      <SEO
        title="Technical Skills Training in Kathmandu"
        description="Hands-on training in welding, carpentry, electrical, plumbing, painting, sand blasting and more. Get job-ready with AIM."
        path="/"
      />
      <header className="relative min-h-[100vh] overflow-hidden">
        {/* Rotating Background Images */}
        <BackgroundSlider 
          images={backgroundImages}
          duration={6000}
          className="-z-10"
        />
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 -z-5">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-60 right-10 w-8 h-24 bg-cyan-300/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <section className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-white">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Build job‑ready skills
              </span>
              <br />
              <span className="text-white">with practical training</span>
            </h1>
            <div ref={heroRef}>
              <p className={`mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isHeroIntersecting ? 'animate-pop-in opacity-100' : 'opacity-0 translate-y-5'}`}>
                Welding, Carpentry, Electrical, Plumbing, Painting, Sand Blasting and more. Learn the skills employers value.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                <Link to="/application">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </header>

      <section ref={featuresRef} className="container mx-auto py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Hands‑on Training",
            desc: "Learn by doing with real equipment and guided practice.",
            Icon: Wrench
          },{
            title: "Industry Relevant",
            desc: "Practical skills aligned to today's job market.",
            Icon: GraduationCap
          },{
            title: "Safety First",
            desc: "Strong emphasis on safety protocols and standards.",
            Icon: ShieldCheck
          }].map(({title, desc, Icon}, index) => (
            <article key={title} className="p-6 rounded-xl border bg-card hover:shadow-elevated transition-shadow">
              <div className="h-11 w-11 rounded-md bg-gradient-primary shadow-elevated mb-4 grid place-items-center">
                <Icon className="text-primary-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-1">{title}</h2>
              <p className={`text-sm text-muted-foreground transition-all duration-700 ${isFeaturesIntersecting ? 'animate-pop-in opacity-100' : 'opacity-0 translate-y-5'}`} style={{animationDelay: `${index * 0.2}s`}}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section ref={coursesRef} className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Popular Training Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get hands-on experience with industry-standard equipment and real-world projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[{
            title: "Welding Technology",
            duration: "6 months",
            students: "150+ students",
            image: "/lovable-uploads/f600f04c-f199-48a2-9e27-60d669a9dfad.png",
            skills: ["Arc Welding", "TIG Welding", "Safety Protocols"]
          },{
            title: "Electrical Installation",
            duration: "4 months", 
            students: "120+ students",
            image: "/lovable-uploads/cd126efe-054d-4615-b04a-cced65446024.png",
            skills: ["Wiring", "Circuit Design", "Safety Standards"]
          },{
            title: "Carpentry & Joinery",
            duration: "5 months",
            students: "100+ students", 
            image: "/lovable-uploads/dc937378-28d0-467a-9880-c7998802295a.png",
            skills: ["Wood Working", "Furniture Making", "Tool Handling"]
          }].map((course, index) => (
            <article key={course.title} className={`bg-card rounded-xl border shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group ${isCoursesIntersecting ? 'animate-pop-in opacity-100' : 'opacity-0 translate-y-5'}`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {course.students}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {course.skills.map(skill => (
                    <div key={skill} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">Learn More</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/courses" className="inline-flex items-center gap-2">
              View All Courses
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="bg-gradient-card py-16 md:py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose AIM Technical Institute?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide more than just training - we build careers and transform lives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Industry Expert Instructors",
              desc: "Learn from professionals with years of real-world experience in their respective fields.",
              Icon: GraduationCap
            },{
              title: "Modern Equipment & Facilities", 
              desc: "Train with the latest tools and technology used in today's workplace.",
              Icon: Building
            },{
              title: "Job Placement Assistance",
              desc: "We help connect our graduates with employment opportunities through our industry network.",
              Icon: TrendingUp
            },{
              title: "Flexible Learning Schedule",
              desc: "Choose from morning, afternoon, or weekend batches to fit your lifestyle.",
              Icon: Clock
            },{
              title: "Hands-on Practical Training",
              desc: "80% practical training ensures you're job-ready from day one.",
              Icon: Wrench
            },{
              title: "Affordable Fee Structure",
              desc: "Quality technical education at competitive rates with flexible payment options.",
              Icon: CheckCircle
            }].map(({title, desc, Icon}, index) => (
              <article key={title} className={`bg-card p-6 rounded-xl border hover:shadow-elevated transition-all duration-300 ${isWhyChooseIntersecting ? 'animate-pop-in opacity-100' : 'opacity-0 translate-y-5'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary shadow-elevated mb-4 grid place-items-center">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-14">
        <div className="rounded-2xl border bg-gradient-to-br from-card/90 via-primary/5 to-secondary/5 backdrop-blur-sm p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 animate-fade-in relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div ref={ctaRef} className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Ready to start your skill journey?</h2>
            <p className={`text-muted-foreground transition-all duration-700 ${isCtaIntersecting ? 'animate-pop-in-delayed opacity-100' : 'opacity-0 translate-y-5'}`}>
              Join AIM Technical Institute and become work‑ready with confidence.
            </p>
          </div>
          <Button asChild variant="hero" size="lg" className="w-full lg:w-auto min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
            <Link to="/application">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Organization Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AIM Technical Institute Pvt. Ltd",
          slogan: "सीपको सुरुबात, लक्ष्यबाट !",
          url: "/",
          logo: "/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png",
          email: "aimtechnicalinstitute4@gmail.com",
          telephone: "+977-9851404451",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Basundhara",
            addressRegion: "Kathmandu",
            addressCountry: "NP"
          }
        })
      }} />
    </main>
  );
};

export default Index;