

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;
  
  
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // default Resend sender
      to: 'student0102it@gmail.com', // Your email
      subject: 'New message from contact form',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Resend response:', data); // Add this
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Resend error:', error); // Add this
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
