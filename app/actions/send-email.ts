"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<EmailResult> {
  try {
    // Validate environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
      console.error("Missing SMTP configuration");
      return {
        success: false,
        message: "Email service is not configured. Please contact support directly.",
      };
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const subject = `New Contact Form Submission from ${formData.name} - ${formData.company}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #009ad5 0%, #0077a3 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; display: block; }
            .value { color: #333; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #009ad5; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Paltech™ Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${formData.company}</div>
              </div>
              ${formData.phone ? `
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${formData.phone}</div>
              </div>
              ` : ""}
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="white-space: pre-wrap;">${formData.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Paltech™ contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission - Paltech™ Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
${formData.phone ? `Phone: ${formData.phone}` : ""}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // Send email
    const info = await transporter.sendMail({
      from: `"Paltech™ Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: formData.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email sent successfully:", info.messageId);

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Error sending email:", error);

    // Return user-friendly error message
    return {
      success: false,
      message: "Failed to send your message. Please try again later or contact us directly at paltech@paltech.net.in",
    };
  }
}

