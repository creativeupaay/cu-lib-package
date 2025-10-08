import {SendEmailCommand, SESClient} from "@aws-sdk/client-ses";
// import nodemailer from "nodemailer";
import {Resend} from "resend";
import {render} from "@react-email/render";
import {ReactElement} from "react";

type EmailProvider = "aws" | "nodemailer" | "resend";

interface AwsCredentials {
    region: string;
    fromEmail: string;
    accessKeyId?: string;
    secretAccessKey?: string;
}

interface NodemailerCredentials {
    host: string;
    port: number;
    user: string;
    pass: string;
    fromEmail: string;
}

interface ResendCredentials {
    apiKey: string;
    fromEmail: string;
}

interface EmailData {
    to: string | string[];
    subject: string;
    template: ReactElement;
}

interface SendEmailOptions {
    provider: EmailProvider;
    credentials: AwsCredentials | NodemailerCredentials | ResendCredentials;
    email: EmailData;
}

export class EmailClient {
    static async sendEmail({ provider, credentials, email }: SendEmailOptions) {
        try {
            const html = render(email.template);
            if (!email.to || !email.subject || !html) {
                throw new Error("Missing required email data (to, subject, or template).");
            }

            switch (provider) {
                case "aws":
                    return await this.sendViaAws(credentials as AwsCredentials, email, html);
                // case "nodemailer":
                //     return await this.sendViaNodemailer(credentials as NodemailerCredentials, email, html);
                case "resend":
                    return await this.sendViaResend(credentials as ResendCredentials, email, html);
                default:
                    throw new Error(`Unsupported provider: ${provider}`);
            }
        } catch (error: any) {
            throw new Error(`Email sending failed: ${error.message || error}`);
        }
    }

    /** AWS SES Implementation */
    private static async sendViaAws(creds: AwsCredentials, email: EmailData, html: string) {
        if (!creds.region || !creds.fromEmail) {
            throw new Error("Missing AWS SES credentials: region or fromEmail is required.");
        }

        const sesClient = new SESClient({
            region: creds.region,
            credentials: creds.accessKeyId
                ? {
                    accessKeyId: creds.accessKeyId,
                    secretAccessKey: creds.secretAccessKey!,
                }
                : undefined,
        });

        try {
            const command = new SendEmailCommand({
                Source: creds.fromEmail,
                Destination: { ToAddresses: Array.isArray(email.to) ? email.to : [email.to] },
                Message: {
                    Subject: { Data: email.subject },
                    Body: { Html: { Data: html } },
                },
            });

            return await sesClient.send(command);
        } catch (err: any) {
            throw new Error(`AWS SES Error: ${err.message || "Unknown error occurred."}`);
        }
    }

    /** Nodemailer Implementation */
    // private static async sendViaNodemailer(creds: NodemailerCredentials, email: EmailData, html: string) {
    //     if (!creds.host || !creds.user || !creds.pass || !creds.fromEmail) {
    //         throw new Error("Missing Nodemailer credentials: host, user, pass, or fromEmail.");
    //     }
    //
    //     const transporter = nodemailer.createTransport({
    //         host: creds.host,
    //         port: creds.port,
    //         secure: creds.port === 465,
    //         auth: { user: creds.user, pass: creds.pass },
    //     });
    //
    //     try {
    //         const info = await transporter.sendMail({
    //             from: creds.fromEmail,
    //             to: email.to,
    //             subject: email.subject,
    //             html,
    //         });
    //         console.log(`Email sent successfully to ${email.to} via Nodemailer`);
    //         return info;
    //     } catch (err: any) {
    //         throw new Error(`Nodemailer Error: ${err.message || "Unknown error occurred."}`);
    //     }
    // }

    /** Resend Implementation */
    private static async sendViaResend(creds: ResendCredentials, email: EmailData, html: string) {
        if (!creds.apiKey || !creds.fromEmail) {
            throw new Error("Missing Resend credentials: apiKey or fromEmail.");
        }

        const resend = new Resend(creds.apiKey);
        try {
            return await resend.emails.send({
                from: creds.fromEmail,
                to: email.to,
                subject: email.subject,
                html,
            });
        } catch (err: any) {
            throw new Error(`Resend Error: ${err.message || "Unknown error occurred."}`);
        }
    }
}
