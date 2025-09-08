import { SEO } from "@/components/SEO";


const images = [
  { src: "/lovable-uploads/810a32d2-8167-4105-87c6-8e4d21dff4de.png", alt: "Professional welding demonstration with safety equipment" },
  { src: "/lovable-uploads/1744da34-fce7-42cc-b1ce-77ba5de2c6b2.png", alt: "Advanced welding technique in industrial setting" },
  { src: "/lovable-uploads/3cdaaecf-dd10-4335-997f-8193fbb0983d.png", alt: "Instructor and student welding team training session" }
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
              className="group relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-500"
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
