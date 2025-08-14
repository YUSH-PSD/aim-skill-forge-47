const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" alt="AIM Technical Institute logo" className="h-8 w-8 rounded-md shadow-elevated object-contain" loading="lazy" />
            <span className="font-semibold">AIM Technical Institute</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Practical, industry-relevant training to build job‑ready skills in Nepal and abroad.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              Phone: <a className="hover:underline" href="tel:9851404451">9851404451</a>
            </li>
            <li>
              Email: <a className="hover:underline" href="mailto:aimtechnicalinstitute4@gmail.com">aimtechnicalinstitute4@gmail.com</a>
            </li>
            <li>
              Location: Basundhara, Kathmandu
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li><a className="hover:underline" href="/courses">Courses</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/contact">Apply / Enquire</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-4 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} AIM Technical Institute Pvt. Ltd</span>
          <a href="/" className="hover:underline">Made with care for learners</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
