import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
const ApplicationForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    educationalQualification: "",
    permanentAddress: "",
    temporaryAddress: "",
    contactNumber: "",
    email: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    nationality: "",
    citizenshipNo: "",
    guardianName: "",
    guardianContact: "",
    courses: [],
    recommendedByOrg: "",
    recommendedByContact: "",
    agreementAccepted: false,
    digitalSignature: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = (course, checked) => {
    setFormData(prev => ({
      ...prev,
      courses: checked ? [...prev.courses, course] : prev.courses.filter(c => c !== course)
    }));
  };
  const handleClearForm = () => {
    setFormData({
      fullName: "",
      educationalQualification: "",
      permanentAddress: "",
      temporaryAddress: "",
      contactNumber: "",
      email: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      nationality: "",
      citizenshipNo: "",
      guardianName: "",
      guardianContact: "",
      courses: [],
      recommendedByOrg: "",
      recommendedByContact: "",
      agreementAccepted: false,
      digitalSignature: ""
    });
    toast({
      title: "Form Cleared",
      description: "All fields have been reset."
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.fullName || !formData.agreementAccepted) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields and accept the declaration.",
        variant: "destructive"
      });
      return;
    }
    try {
      // Submit to Supabase edge function
      const response = await fetch(`https://hmkcyuwurxadufassayc.supabase.co/functions/v1/submit-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhta2N5dXd1cnhhZHVmYXNzYXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MjU2ODUsImV4cCI6MjA3MTAwMTY4NX0.xRyQUzLmKy9jEUSSN4mH-5jLaD3rypde8VxQWmHxSAs`
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted Successfully!",
          description: "Thank you for applying to AIM Technical Institute. We will contact you soon."
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    }
  };
  if (isSubmitted) {
    return <>
        <SEO title="Application Submitted - AIM Technical Institute" description="Your welding training application has been submitted successfully." />
        <div className="min-h-screen bg-muted flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for applying to AIM Technical Institute. We have received your welding training application and will contact you soon.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </>;
  }
  return <>
      <SEO title="Welding Training Application Form - AIM Technical Institute" description="Apply for professional welding training courses at AIM Technical Institute, Kathmandu, Nepal. Fill out our comprehensive application form online." />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary via-primary to-primary/90 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite]"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 animate-scale-in">
                    <img src="/lovable-uploads/0466aed5-0d14-4c2f-bac7-c512c4448f9b.png" alt="AIM Technical Institute logo" className="w-full h-full object-contain rounded-full shadow-2xl transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8 animate-fade-in" style={{
                  animationDelay: '0.2s',
                  animationFillMode: 'both'
                }}>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                      Student Application Portal
                    </h1>
                    <p className="text-lg text-muted-foreground">Begin your journey in professional welding</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 hover-scale transition-all duration-500 hover:shadow-xl animate-fade-in group" style={{
                    animationDelay: '0.4s',
                    animationFillMode: 'both'
                  }}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">Application Form</h3>
                        <p className="text-sm text-muted-foreground">Complete your registration details</p>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 hover-scale transition-all duration-500 hover:shadow-xl animate-fade-in group" style={{
                    animationDelay: '0.6s',
                    animationFillMode: 'both'
                  }}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-secondary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-secondary mb-2 group-hover:text-secondary/80 transition-colors">Course Selection</h3>
                        <p className="text-sm text-muted-foreground">Choose your welding specialization</p>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 hover-scale transition-all duration-500 hover:shadow-xl animate-fade-in group" style={{
                    animationDelay: '0.8s',
                    animationFillMode: 'both'
                  }}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-accent mb-2 group-hover:text-accent/80 transition-colors">Quick Start</h3>
                        <p className="text-sm text-muted-foreground">Fast-track your application</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div className="space-y-6 animate-fade-in" style={{
                  animationDelay: '1s',
                  animationFillMode: 'both'
                }}>
                    <h2 className="text-xl font-semibold text-primary border-b pb-2">Personal Information</h2>
                    
                    <div className="space-y-2 group">
                      <Label htmlFor="fullName" className="text-sm font-medium text-foreground transition-colors duration-200 group-focus-within:text-primary">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" className="text-base py-3 transition-all duration-300 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50 focus:shadow-lg focus:scale-[1.02] hover:shadow-md" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="educationalQualification" className="text-sm font-medium text-foreground">
                        Educational Qualification
                      </Label>
                      <Input id="educationalQualification" name="educationalQualification" value={formData.educationalQualification} onChange={handleInputChange} placeholder="e.g., SLC, +2, Bachelor's Degree" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="permanentAddress" className="text-sm font-medium text-foreground">
                          Permanent Address
                        </Label>
                        <Textarea id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleInputChange} placeholder="Enter your permanent address" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50 resize-none" rows={3} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="temporaryAddress" className="text-sm font-medium text-foreground">
                          Temporary Address
                        </Label>
                        <Textarea id="temporaryAddress" name="temporaryAddress" value={formData.temporaryAddress} onChange={handleInputChange} placeholder="Enter your temporary address" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50 resize-none" rows={3} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-sm font-medium text-foreground">
                          Contact Number
                        </Label>
                        <Input id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="Enter your phone number" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address
                        </Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-sm font-medium text-foreground">
                          Date of Birth
                        </Label>
                        <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-sm font-medium text-foreground">
                          Age
                        </Label>
                        <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} placeholder="Age" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-foreground">Gender</Label>
                        <RadioGroup value={formData.gender} onValueChange={value => setFormData(prev => ({
                        ...prev,
                        gender: value
                      }))} className="flex gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male" className="text-sm">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female" className="text-sm">Female</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="text-sm">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nationality" className="text-sm font-medium text-foreground">
                          Nationality
                        </Label>
                        <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} placeholder="e.g., Nepali" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="citizenshipNo" className="text-sm font-medium text-foreground">
                          Citizenship Number
                        </Label>
                        <Input id="citizenshipNo" name="citizenshipNo" value={formData.citizenshipNo} onChange={handleInputChange} placeholder="Enter citizenship number" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information */}
                  <div className="space-y-6 animate-fade-in" style={{
                  animationDelay: '1.2s',
                  animationFillMode: 'both'
                }}>
                    <h2 className="text-xl font-semibold text-primary border-b pb-2 transition-colors duration-300 hover:text-primary/80">Guardian Information</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName" className="text-sm font-medium text-foreground">
                          Guardian Name
                        </Label>
                        <Input id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleInputChange} placeholder="Enter guardian's name" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianContact" className="text-sm font-medium text-foreground">
                          Guardian Contact Number
                        </Label>
                        <Input id="guardianContact" name="guardianContact" value={formData.guardianContact} onChange={handleInputChange} placeholder="Enter guardian's contact number" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-6 animate-fade-in" style={{
                  animationDelay: '1.4s',
                  animationFillMode: 'both'
                }}>
                    <h2 className="text-xl font-semibold text-primary border-b pb-2 transition-colors duration-300 hover:text-primary/80">Course Selection</h2>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">
                        Desired Welding Course (Select all that apply)
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:border-primary/50 transition-colors">
                          <Checkbox id="arc-welding" checked={formData.courses.includes("Arc Welding")} onCheckedChange={checked => handleCheckboxChange("Arc Welding", checked)} />
                          <Label htmlFor="arc-welding" className="text-sm font-medium">Arc Welding</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:border-primary/50 transition-colors">
                          <Checkbox id="arc-mig-welding" checked={formData.courses.includes("Arc + Mig Welding")} onCheckedChange={checked => handleCheckboxChange("Arc + Mig Welding", checked)} />
                          <Label htmlFor="arc-mig-welding" className="text-sm font-medium">Arc + Mig Welding</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:border-primary/50 transition-colors">
                          <Checkbox id="arc-mig-tig-welding" checked={formData.courses.includes("Arc + MIG + TIG Welding")} onCheckedChange={checked => handleCheckboxChange("Arc + MIG + TIG Welding", checked)} />
                          <Label htmlFor="arc-mig-tig-welding" className="text-sm font-medium">Arc + Mig + Tig Welding</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-primary border-b pb-2">Recommendation (Optional)</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="recommendedByOrg" className="text-sm font-medium text-foreground">
                          Recommended by Organization
                        </Label>
                        <Input id="recommendedByOrg" name="recommendedByOrg" value={formData.recommendedByOrg} onChange={handleInputChange} placeholder="Organization name" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recommendedByContact" className="text-sm font-medium text-foreground">
                          Organization Contact Number
                        </Label>
                        <Input id="recommendedByContact" name="recommendedByContact" value={formData.recommendedByContact} onChange={handleInputChange} placeholder="Contact number" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-primary border-b pb-2">Declaration</h2>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        I hereby confirm that all the above-mentioned details are correct and I agree to the rules and regulations of this technical institute. I am applying for this training of my own free will.
                      </p>
                      
                      <div className="flex items-start space-x-2">
                         <Checkbox id="agreement" checked={formData.agreementAccepted} onCheckedChange={checked => setFormData(prev => ({
                        ...prev,
                        agreementAccepted: !!checked
                      }))} required />
                        <Label htmlFor="agreement" className="text-sm font-medium leading-tight">
                          I agree to the declaration <span className="text-destructive">*</span>
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="digitalSignature" className="text-sm font-medium text-foreground">
                        Digital Signature (Optional)
                      </Label>
                      <Input id="digitalSignature" name="digitalSignature" value={formData.digitalSignature} onChange={handleInputChange} placeholder="Type your full name as digital signature" className="text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-primary/50 border-input hover:border-primary/50" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{
                  animationDelay: '1.6s',
                  animationFillMode: 'both'
                }}>
                    <Button type="submit" className="flex-1 py-3 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md group relative overflow-hidden">
                      <span className="relative z-10">Submit Application</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 -translate-x-full group-hover:translate-x-full"></div>
                    </Button>
                    <Button type="button" variant="outline" onClick={handleClearForm} className="flex-1 py-3 text-base font-medium border-2 border-border hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-primary/5">
                      Clear Form
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>;
};
export default ApplicationForm;