-- Remove the overly permissive policy that allows public reading of sensitive personal data
DROP POLICY IF EXISTS "Allow reading form submissions" ON public.form_submissions;

-- Create a secure policy that only allows authenticated users with admin role to read submissions
-- Note: This assumes you'll implement admin authentication. For now, no one can read the data publicly.
-- You can modify this later to check for admin roles once authentication is implemented.
CREATE POLICY "Only authenticated admins can read form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (false); -- Temporarily block all reads until proper admin authentication is implemented

-- Keep the insert policy as it allows form submissions to work
-- The existing "Anyone can submit forms" policy remains unchanged