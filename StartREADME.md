1) We need email service .
2) We use nodemailer. What it will be doing is that it will connect to their smtp servers and send email.
3) We have created one time password from myaccount.google.com/apppasswords?
4) Now we need to setup transporter object. this helps us to send email.
5) We have to made email-config and write there.
6) The send email is promise base syntax. We can put try catch and async await
7) We are installing node-cron for schedulling reminder. That we have to send reminder on this date
8) We are planning to check database after every certain amount of time ki humko un data mein se kis kisko reminder bhejna hai 
9) we are expected to send data at 10.00AM
Every 5 minutes 
We will check are there any emails that are expected to be sent by now and is pending. This is what we are doing in utils.js
10) jab bhi humko koi operation karna hai to Op isko bhoolna nhi . 
11) Abhi hum khud notification bhej rhe hai ki itne bje email bhejna hai uss hissab se har 5 min mein scheduler check karega aur agar current time se kam hua kisi ka notification time to send kar denge.
12) 