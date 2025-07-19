import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        console.log('Testing Resend configuration...');
        console.log('API Key exists:', !!process.env.RESEND_API_KEY);
        console.log('API Key length:', process.env.RESEND_API_KEY?.length);

        if (!process.env.RESEND_API_KEY) {
            return res.status(500).json({ 
                message: 'RESEND_API_KEY not found',
                hasApiKey: false 
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // Test the API key by trying to send a test email
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'gohildharmik2020@gmail.com',
            subject: 'Test Email from Portfolio',
            html: '<p>This is a test email to verify Resend is working.</p>'
        });

        console.log('Resend test successful:', result);
        
        res.status(200).json({ 
            message: 'Resend is working!',
            hasApiKey: true,
            result: result
        });
    } catch (error) {
        console.error('Resend test failed:', error);
        res.status(500).json({ 
            message: 'Resend test failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            hasApiKey: !!process.env.RESEND_API_KEY
        });
    }
} 