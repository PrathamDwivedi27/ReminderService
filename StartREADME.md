1) We need email service .
2) We use nodemailer. What it will be doing is that it will connect to their smtp servers and send email.
3) We have created one time password from myaccount.google.com/apppasswords?
4) Now we need to setup transporter object. this helps us to send email.
5) We have to made email-config and write there.
6) The send email is promise base syntax. We can put try catch and async await
7) We are installing node-cron for schedulling reminder. That we have to send reminder on this date
8) We are planning to check database after every certain amount of time ki humko un data mein se kis kisko reminder bhejna hai 
9) 