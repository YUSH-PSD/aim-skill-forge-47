-- Create form_submissions table to store application form data
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  educational_qualification TEXT,
  permanent_address TEXT,
  temporary_address TEXT,
  contact_number TEXT,
  email TEXT,
  date_of_birth DATE,
  age INTEGER,
  gender TEXT,
  nationality TEXT,
  citizenship_no TEXT,
  guardian_name TEXT,
  guardian_contact TEXT,
  courses TEXT[],
  recommended_by_org TEXT,
  recommended_by_contact TEXT,
  agreement_accepted BOOLEAN NOT NULL DEFAULT false,
  digital_signature TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert form submissions (public form)
CREATE POLICY "Anyone can submit forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading form submissions (for admin purposes)
CREATE POLICY "Allow reading form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON public.form_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();