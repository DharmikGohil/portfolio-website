import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type ContactData = {
    name: string;
    email: string;
    phone?: string;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, phone, message }: ContactData = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return res.status(500).json({ message: 'Email service not configured' });
        }
        
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        try {
            console.log('Attempting to send email...');
            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
                to: process.env.RESEND_TO_EMAIL || 'gohildharmik2020@gmail.com',
                subject: `New Contact Form Submission from ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                            New Contact Form Submission
                        </h2>
                        
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 10px 0;"><strong style="color: #007bff;">Name:</strong> ${name}</p>
                            <p style="margin: 10px 0;"><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                            <p style="margin: 10px 0;"><strong style="color: #007bff;">Phone:</strong> ${phone || 'Not provided'}</p>
                        </div>
                        
                        <div style="background: #fff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #333; margin-top: 0;">Message:</h3>
                            <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                            <p style="color: #6c757d; font-size: 14px;">
                                <em>Submitted at: ${new Date().toLocaleString()}</em>
                            </p>
                            <p style="color: #6c757d; font-size: 12px;">
                                This message was sent from your portfolio contact form.
                            </p>
                        </div>
                    </div>
                `,
                text: `
                    New Contact Form Submission
                    
                    Name: ${name}
                    Email: ${email}
                    Phone: ${phone || 'Not provided'}
                    
                    Message:
                    ${message}
                    
                    Submitted at: ${new Date().toLocaleString()}
                    This message was sent from your portfolio contact form.
                `
            });
            
            console.log('Email sent successfully via Resend');
        } catch (emailError) {
            console.error('Failed to send email via Resend:', emailError);
            console.error('Error details:', {
                message: emailError.message,
                code: emailError.code,
                statusCode: emailError.statusCode
            });
            return res.status(500).json({ 
                message: 'Failed to send email',
                error: emailError.message 
            });
        }

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        console.error('Full error object:', JSON.stringify(error, null, 2));
        res.status(500).json({ 
            message: 'Internal server error',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
} 