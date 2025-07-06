import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Store your key in .env.local

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jameshuff26@gmail.com',
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    console.log(result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
