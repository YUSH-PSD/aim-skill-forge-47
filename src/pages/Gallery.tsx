import { SEO } from "@/components/SEO";


const images = [
  { src: "/lovable-uploads/fd40b42b-097e-49c9-bed4-43f61736fa13.png", alt: "Welding training – close-up SMAW arc at AIM Kathmandu" },
  { src: "/lovable-uploads/315257e2-cc1b-4db1-83da-70e6d697a0a6.png", alt: "Welding practice – creating a secure hitch joint" },
  { src: "/lovable-uploads/ba6eb486-f3a8-4dd9-a660-bd1e04a05adc.png", alt: "Welding sparks during hands-on session" },
  { src: "/lovable-uploads/1e013e35-c30b-46de-a102-7e68937b09f3.png", alt: "Industrial welding – student at work" },
  { src: "/lovable-uploads/3ce8871e-8d96-4ae7-b59a-6aa341987ee8.png", alt: "Close-up of MIG welding torch and arc" },
  { src: "/lovable-uploads/0992230b-3e47-4b45-a416-1cd18204320f.png", alt: "Bright welding arc and safety gear" },
  { src: "/lovable-uploads/81d139f5-d8de-4500-82bf-e71316d18762.png", alt: "Welding smoke and sparks – safety-first training" },
  { src: "/lovable-uploads/8f291caa-a925-49bf-8de7-70d7f9db0087.png", alt: "Molten weld pool during practice" },
];

const Gallery = () => {
  return (
    <main>
      <SEO
        title="Training Gallery"
        description="A glimpse into our hands-on technical training environment and equipment."
        path="/gallery"
      />
      <section className="container mx-auto py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4">
            Training Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Auto-swapping gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <figure 
              key={idx} 
              className="group relative overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{
                clipPath: idx % 3 === 0 
                  ? 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)' 
                  : idx % 3 === 1 
                  ? 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  : 'polygon(0% 0%, 100% 15%, 100% 100%, 15% 100%)'
              }}
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="h-full w-full overflow-hidden bg-card">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
