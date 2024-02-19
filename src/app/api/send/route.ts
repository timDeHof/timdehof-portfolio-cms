import { Resend } from "resend";
import Email from "@/components/emails";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["delivered@resend.dev", "ttdehof@gmail.com"],
      subject: `Message from ${name}`,
      react: Email({ name, email, message }),
    });

    return NextResponse.json(
      {
        status: "Ok",
        data: { name, email, message },
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Failed to send email: ${error.message}`);
    }

    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
