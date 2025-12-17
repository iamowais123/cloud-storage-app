import nodemailer from "nodemailer";
import OTP from "../models/otpModel.js";

export async function sendOtpService(email) {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  // Upsert OTP (replace if it already exists)
  await OTP.findOneAndUpdate(
    { email },
    { otp, createdAt: new Date() },
    { upsert: true }
  );

  // Email content
  const html = `
    <div style="font-family:sans-serif;">
      <h2>Your OTP is: ${otp}</h2>
      <p>This OTP is valid for 10 minutes.</p>
    </div>
  `;

  // ✅ Create reusable transporter object using your email service
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // you can change it based on your service (e.g., Outlook, Yahoo)
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your email id
      pass: process.env.EMAIL_PASS, // your email app password
    },
  });

  // ✅ Send mail with defined transport object
  await transporter.sendMail({
    from: `"Storage App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Storage App OTP",
    html,
  });

  return { success: true, message: `OTP sent successfully on ${email}` };
}
