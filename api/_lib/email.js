export const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) throw new Error("Resend no está configurado");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.EMAIL_FROM, to: Array.isArray(to) ? to : to.split(","), subject, html, attachments: attachments.map((attachment) => ({ filename: attachment.filename, content: attachment.content.toString("base64") })) }),
  });
  if (!response.ok) throw new Error("Resend rechazó el envío");
  const result = await response.json();
  return { messageId: result.id };
};
