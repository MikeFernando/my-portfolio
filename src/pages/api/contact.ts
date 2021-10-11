/* eslint-disable @typescript-eslint/naming-convention */
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

const email = process.env.EMAIL;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const oAuth2_client = new OAuth2(clientId, clientSecret);
oAuth2_client.setCredentials({ refresh_token: refreshToken });

const accessToken = String(oAuth2_client.getAccessToken());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAUTH2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
});

const mailer = ({ name, senderMail, text }) => {
  const from = `${name} <${senderMail}>`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensage de contato - ${name}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { name, senderMail, content } = req.body;

  if (name === '' || senderMail === '' || content === '') {
    res.status(403).send();
    return;
  }

  const mailRes = await mailer({ name, senderMail, text: content });

  res.send(mailRes);
};
