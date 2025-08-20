import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: HTMLInputElement;
      phone: HTMLInputElement;
      email: HTMLInputElement;
      course: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    if (!form.name.value || !form.phone.value) {
      toast({ title: "Please fill in your name and phone number." });
      return;
    }

    toast({
      title: "Thanks for your enquiry!",
      description: "We'll call you back within 1 business day.",
    });

    form.reset();
  };

  return (
    <main>
      <SEO
        title="Contact & Course Enquiry"
        description="Get in touch with AIM Technical Institute for admissions, course details and enrolment."
        path="/contact"
      />
      <section className="container mx-auto py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Apply</h1>
        <div className="max-w-md">
          <p className="text-lg text-muted-foreground mb-6">
            Call us at <a className="hover:underline" href="tel:9851404451">9851404451</a> or email
            <a className="hover:underline ml-1" href="mailto:aimtechnicalinstitute4@gmail.com">aimtechnicalinstitute4@gmail.com</a>
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><strong>Locations:</strong></p>
            <div className="ml-4 space-y-2">
              <p>• Main Campus: Basundhara, Kathmandu</p>
              <p>• Branch Office: Baneshwor, Kathmandu</p>
              <p>• Training Center: Chapali, Budhanilkantha</p>
            </div>
            <p><strong>Office Hours:</strong> Sun–Fri, 9am – 5pm</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
