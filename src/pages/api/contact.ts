import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const emailPassword = process.env.PASS;

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: emailPassword
  }
};

const transporter = nodemailer.createTransport(smtpConfig);

const mailer = ({ name, senderMail, text }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensage de contato - ${name} - ${senderMail}`,
    text,
    rePlay: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, senderMail, content } = req.body;

  if (!name || !senderMail || !content) {
    res.status(403);
    return;
  }

  const mailRes = await mailer({ name, senderMail, text: content });

  res.send(mailRes);
};
