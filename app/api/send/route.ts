import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Nastavení připojení k e-mailovému serveru (SMTP)
  const transporter = nodemailer.createTransport({
    service: "Seznam", // používáš Seznam.cz
    auth: {
      user: "a.smutnik@seznam.cz",
      pass: process.env.EMAIL_PASSWORD, // heslo uložíš do .env souboru
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "a.smutnik@seznam.cz", // sem ti přijdou zprávy
      subject: `Zpráva z kontaktního formuláře od ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
