import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationFormData {
  fullName: string;
  educationalQualification: string;
  permanentAddress: string;
  temporaryAddress: string;
  contactNumber: string;
  email: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  nationality: string;
  citizenshipNo: string;
  guardianName: string;
  guardianContact: string;
  courses: string[];
  recommendedByOrg: string;
  recommendedByContact: string;
  agreementAccepted: boolean;
  digitalSignature: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ApplicationFormData = await req.json();
    
    console.log("Received form submission:", formData);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Insert form data into database
    const { data: submission, error: dbError } = await supabase
      .from("form_submissions")
      .insert({
        full_name: formData.fullName,
        educational_qualification: formData.educationalQualification,
        permanent_address: formData.permanentAddress,
        temporary_address: formData.temporaryAddress,
        contact_number: formData.contactNumber,
        email: formData.email,
        date_of_birth: formData.dateOfBirth || null,
        age: formData.age ? parseInt(formData.age) : null,
        gender: formData.gender,
        nationality: formData.nationality,
        citizenship_no: formData.citizenshipNo,
        guardian_name: formData.guardianName,
        guardian_contact: formData.guardianContact,
        courses: formData.courses,
        recommended_by_org: formData.recommendedByOrg,
        recommended_by_contact: formData.recommendedByContact,
        agreement_accepted: formData.agreementAccepted,
        digital_signature: formData.digitalSignature,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Form submission saved to database:", submission);

    // Initialize Resend for sending emails
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Create email content
    const emailHtml = `
      <h1>New Application Submission - AIM Technical Institute</h1>
      <h2>Personal Information</h2>
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
      <p><strong>Educational Qualification:</strong> ${formData.educationalQualification}</p>
      <p><strong>Age:</strong> ${formData.age}</p>
      <p><strong>Gender:</strong> ${formData.gender}</p>
      <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
      <p><strong>Nationality:</strong> ${formData.nationality}</p>
      <p><strong>Citizenship No:</strong> ${formData.citizenshipNo}</p>
      
      <h2>Address Information</h2>
      <p><strong>Permanent Address:</strong> ${formData.permanentAddress}</p>
      <p><strong>Temporary Address:</strong> ${formData.temporaryAddress}</p>
      
      <h2>Guardian Information</h2>
      <p><strong>Guardian Name:</strong> ${formData.guardianName}</p>
      <p><strong>Guardian Contact:</strong> ${formData.guardianContact}</p>
      
      <h2>Course Selection</h2>
      <p><strong>Selected Courses:</strong> ${formData.courses.join(", ")}</p>
      
      <h2>Recommendation</h2>
      <p><strong>Recommended by Organization:</strong> ${formData.recommendedByOrg}</p>
      <p><strong>Recommender Contact:</strong> ${formData.recommendedByContact}</p>
      
      <h2>Declaration</h2>
      <p><strong>Agreement Accepted:</strong> ${formData.agreementAccepted ? "Yes" : "No"}</p>
      <p><strong>Digital Signature:</strong> ${formData.digitalSignature}</p>
      
      <hr>
      <p><em>Application ID: ${submission.id}</em></p>
      <p><em>Submitted on: ${new Date(submission.created_at).toLocaleString()}</em></p>
    `;

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "AIM Institute <onboarding@resend.dev>",
      to: ["admin@aimtechnical.edu.np"], // Replace with your actual email
      subject: `New Application: ${formData.fullName}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to applicant
    if (formData.email) {
      const confirmationHtml = `
        <h1>Application Received - AIM Technical Institute</h1>
        <p>Dear ${formData.fullName},</p>
        <p>Thank you for applying to AIM Technical Institute. We have successfully received your application for the following courses:</p>
        <ul>
          ${formData.courses.map(course => `<li>${course}</li>`).join("")}
        </ul>
        <p>Your application ID is: <strong>${submission.id}</strong></p>
        <p>We will review your application and contact you soon.</p>
        <br>
        <p>Best regards,<br>AIM Technical Institute Team</p>
      `;

      await resend.emails.send({
        from: "AIM Institute <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Application Received - AIM Technical Institute",
        html: confirmationHtml,
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully",
        applicationId: submission.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-application function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);