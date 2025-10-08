// import { EmailClient } from "./sendEmail";
// import { WelcomeEmail } from "../templates/WelcomeEmail";
//
// (async () => {
//     try {
//         const response = await EmailClient.sendEmail({
//             provider: "resend",
//             credentials: {
//                 fromEmail: "no-info@creativeupaay.in",
//                 apiKey: "re_4KJV2u5K_TEKbGXd68XaiK8PspAjkLRWp"
//             },
//             email: {
//                 to: "user@example.com",
//                 subject: "Welcome via Resend",
//                 template: WelcomeEmail({firstName: "Naidu"}),
//             },
//         });
//
//         console.log("Email Response:", response);
//     } catch (err) {
//         console.error("Failed to send email:", err);
//     }
// })();
