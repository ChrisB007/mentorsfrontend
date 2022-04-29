import * as mailgunLoader from 'mailgun-js';

let mg = mailgunLoader({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: 'mg.mentorsparlor.com',
});

//Body construct
const emailBody = (from, to, subject, text) => {
  const data = {
    from,
    to,
    subject,
    text,
  };
  return mg.messages().send(data, function (error, body) {});
};

//Sending email
const sendEmail = async (req, res) => {
  const { email } = req.body;
  const subject = 'Thank you for your interest in Mentors Parlor!';
  const text = `
    Thank you for your interest in Mentors Parlor!
    We will be in touch soon.\n
      Sincerely,\n
      The Mentors Parlor Team
  `;
  try {
    await emailBody('info@publictrades.com', email, subject, text);
    res.status(200).json({ message: 'Your email was sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default sendEmail;
