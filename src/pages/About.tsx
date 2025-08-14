import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <main>
      <SEO
        title="About AIM Technical Institute"
        description="We empower people with hands-on, industry-relevant technical training to become confident and job-ready."
        path="/about"
      />
      <section className="container mx-auto py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-6">
            About AIM Technical Institute
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25"></div>
            <div className="relative bg-card p-8 md:p-12 rounded-2xl border">
              {/* Nepali Version */}
              <div className="mb-8 pb-8 border-b border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-4">नेपालीमा</h3>
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                  <span className="font-semibold text-primary">AIM Technical Institute Pvt. Ltd.</span> को स्थापना एक स्पष्ट उद्देश्यका साथ गरिएको हो - आजको प्रतिस्पर्धी संसारमा सफल हुनका लागि आवश्यक सीपहरूसँग व्यक्तिहरूलाई सुसज्जित बनाउने। हामी विश्वास गर्छौं कि व्यावहारिक, हातमा हात मिलाउने तालिम नेपालमा होस् वा विदेशमा, करियरका अवसरहरू खोल्ने कुञ्जी हो।
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  वेल्डिङदेखि विभिन्न प्राविधिक सीपहरूसम्म, हाम्रा कार्यक्रमहरू उद्योगको मापदण्डहरू पूरा गर्न र हाम्रा प्रशिक्षार्थीहरूलाई वास्तविक संसारका चुनौतीहरूका लागि तयार पार्न डिजाइन गरिएका छन्। हामी दक्ष, आत्मविश्वासी र सक्षम पेशेवरहरू उत्पादन गर्न प्रतिबद्ध छौं जसले नेपालको विकासमा योगदान दिन सक्छन् र जहाँ भए पनि हाम्रो राष्ट्रलाई गर्वका साथ प्रतिनिधित्व गर्न सक्छन्।
                </p>
              </div>
              
              {/* English Version */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">In English</h3>
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                  <span className="font-semibold text-primary">AIM Technical Institute Pvt. Ltd.</span> was established with a clear purpose – to equip individuals with the skills they need to succeed in today&apos;s competitive world. We believe that practical, hands-on training is the key to unlocking career opportunities, whether here in Nepal or abroad.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  From welding to a wide range of technical skills, our programs are designed to meet industry standards and prepare our trainees for real-world challenges. We are committed to producing competent, confident, and capable professionals who can contribute to Nepal&apos;s growth and represent our nation proudly wherever they go.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
            At AIM Technical Institute, our mission is simple:
          </h2>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-sm opacity-30 animate-pulse"></div>
            <blockquote className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent p-6 md:p-8">
              "Empowering people with skills, building futures with pride."
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
