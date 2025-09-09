import { SEO } from "@/components/SEO";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Founder = () => {
  const { elementRef: titleRef, isInView: titleInView } = useScrollAnimation();
  const { elementRef: imageRef, shouldAnimate: imageAnimate } = useStaggeredAnimation(200);
  const { elementRef: quoteRef, shouldAnimate: quoteAnimate } = useStaggeredAnimation(400);
  const { elementRef: textRef, shouldAnimate: textAnimate } = useStaggeredAnimation(600);
  const { elementRef: cardsRef, shouldAnimate: cardsAnimate } = useStaggeredAnimation(800);

  return (
    <main className="overflow-hidden">
      <SEO
        title="Message from the Founder"
        description="A message of purpose and commitment from the founder of AIM Technical Institute."
        path="/founder"
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 min-h-screen">
        {/* Floating geometric elements - waaark inspired */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/20 rounded-full animate-geometric-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-secondary/30 rounded-lg rotate-45 animate-geometric-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-8 h-20 bg-accent/20 rounded-full animate-geometric-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-primary/15 rounded-lg animate-geometric-float" style={{ animationDelay: '1s' }} />
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto py-16 md:py-24">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'animate-float-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-4">
              Message from the Founder
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Image */}
              <div 
                ref={imageRef}
                className={`flex justify-center lg:justify-end order-1 lg:order-1 transition-all duration-1000 ${
                  imageAnimate ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-background/95 backdrop-blur-sm rounded-3xl p-1 shadow-2xl hover:shadow-glow transition-all duration-500">
                    <img 
                      src="/lovable-uploads/534985ac-d8eb-47f7-baee-9f58f7034177.png" 
                      alt="Anurodh Amatya - Founder and Managing Director of AIM Technical Institute"
                      className="w-96 h-auto rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 shadow-2xl text-white transform rotate-2 group-hover:rotate-0 transition-transform duration-300 hover:shadow-glow">
                    <p className="text-sm font-semibold opacity-90">Founder & Managing Director</p>
                    <p className="text-xl font-bold">Anurodh Amatya</p>
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <div className="space-y-8 order-2 lg:order-2">
                <div 
                  ref={quoteRef}
                  className={`relative transition-all duration-1000 ${
                    quoteAnimate ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="absolute -top-8 -left-8 text-8xl font-bold text-primary/20 select-none animate-pulse">"</div>
                  <blockquote className="relative p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm text-xl leading-relaxed shadow-xl hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                    <p className="relative font-medium text-foreground">
                      From the very beginning, my vision has been clear – to give our people the skills they need to shape their own future. I want them to know that success is possible right here in Nepal, where their talents can help our own communities grow. But if life takes them abroad, they should go not as ordinary workers, but as skilled professionals who carry the pride, values, and craftsmanship of Nepal with them. This is the mission that drives AIM Technical Institute forward every single day.
                    </p>
                  </blockquote>
                  <div className="absolute -bottom-4 -right-4 text-6xl font-bold text-primary/20 select-none animate-pulse" style={{ animationDelay: '1s' }}>"</div>
                </div>
                
                <div 
                  ref={textRef}
                  className={`space-y-4 transition-all duration-1000 ${
                    textAnimate ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    Our focus remains on real-world competencies, safety, and confidence — ensuring that our students are truly work-ready. We believe in empowering individuals with skills that create lasting impact in their communities and contribute to Nepal's development.
                  </p>
                </div>

                {/* Mission highlights */}
                <div 
                  ref={cardsRef}
                  className={`grid grid-cols-2 gap-4 mt-8 transition-all duration-1000 ${
                    cardsAnimate ? 'animate-scale-fade-in' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-glow">
                    <h3 className="font-semibold text-primary mb-1">Practical Training</h3>
                    <p className="text-sm text-muted-foreground">Real-world skills</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:scale-105 transition-all duration-300 hover:shadow-glow" style={{ animationDelay: '100ms' }}>
                    <h3 className="font-semibold text-secondary mb-1">Work-Ready</h3>
                    <p className="text-sm text-muted-foreground">Industry standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Founder;