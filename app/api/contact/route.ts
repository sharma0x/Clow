import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateEmailTemplate } from "./emailTemplate";
import { companyInfo } from "./info";

export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const FROM_EMAIL = process.env.FROM_EMAIL!;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, projectType, message, privacyAccepted } = body;

  if (!name || !email || !message || !privacyAccepted) {
    return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
  }

  if (!RESEND_API_KEY || !FROM_EMAIL) {
    console.error("Missing required environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const html = generateEmailTemplate({ name, email, company, projectType, message, privacyAccepted });

    const { data, error } = await resend.emails.send({
      from: `${companyInfo.name} <${FROM_EMAIL}>`,
      to: email,
      cc: FROM_EMAIL,
      bcc: "princesharma2899@gmail.com",
      subject: "We've Received Your Submission",
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    console.log("Email sent:", data?.id);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
