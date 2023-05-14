// // /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable max-len */
// import * as functions from "firebase-functions";
// import * as nodemailer from "nodemailer";

// // Create a transport object to send email using SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "your-gmail-account@gmail.com", // replace with your Gmail account
//     pass: "your-gmail-password"
//   }
// });

// // Define the function that sends the newsletter email
// exports.sendNewsletter = functions.https.onCall(async (data, context) => {
//   // Get the email subject and body from the data parameter
//   const subject = data.subject;
//   const body = data.body;

//   // Get the list of recipients from the Firestore database
//   const recipients = await admin.firestore().collection("newsletterSubscribers").get();

//   // Send the email to each recipient using the nodemailer transport object
//   for (const recipient of recipients) {
//     const email = recipient.data().email;
//     await transporter.sendMail({
//       from: "Your App <noreply@yourapp.com>", // replace with your app's name and email address
//       to: email,
//       subject: subject,
//       html: body
//     });
//   }

//   // Return a success message
//   return {message: "Newsletter sent successfully"};
// });
