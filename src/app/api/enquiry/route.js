import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { productName, name, email, phone, message } = body;

    if (!productName || !name || !email || !phone || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your gmail
        pass: process.env.MAIL_PASS, // your gmail password
      },
    });

    const emailContent = `
      <h2>New Product Enquiry</h2>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "thirumalawiremesh@gmail.com",
      subject: "New Product Enquiry - Website",
      html: emailContent,
    });

    return Response.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.log("Email error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
