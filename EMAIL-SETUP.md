# Enquiry chat email setup

The floating chat collects a question, project type/timeline, and reply email. `/api/enquiry` sends the answers through Gmail SMTP using Nodemailer.

1. Enable Google 2-Step Verification and generate an [App Password](https://support.google.com/accounts/answer/185833). Use the app password, not your normal Gmail password.
2. Set these server-only variables in `.env.local` (see [.env.example](./.env.example)):
   - `GMAIL_USER=pashminakhan12469@gmail.com` (the Google account that generated the password).
   - `GMAIL_APP_PASSWORD=` (paste the app password here; spaces are automatically removed).
   - `CONTACT_TO_EMAIL=pashminakhan12469@gmail.com` (the inbox receiving enquiries; defaults to GMAIL_USER if omitted).
3. Restart the dev server. Configure the same variables in your hosting environment for deployment.
4. Submit a test enquiry and confirm receipt. Replying to the email addresses the visitor.

Sender authentication follows [Nodemailer's Gmail guide](https://nodemailer.com/guides/using-gmail). The sender is always the authenticated Gmail account; the visitor's address is used as Reply-To.

Missing credentials and delivery failures return an error, keeping the visitor's answers for retry. Live delivery requires a valid app password and SMTP access from the hosting provider. Enquiries are emailed, not stored in a database. Input validation, a honeypot and best-effort per-instance rate limiting are included; use shared rate limiting for multiple server instances.
