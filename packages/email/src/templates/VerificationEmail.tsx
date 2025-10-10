import {
    Button,
    Hr,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";
import { BaseEmail } from "./BaseEmail";

interface VerificationEmailProps {
    firstName?: string;
    verificationLink: string;
    expiryHours?: number;
    year?: number;
    productName?: string;
    theme?: "default" | "primary" | "secondary" | string;
}

export const VerificationEmail = ({
                                      firstName = "there",
                                      verificationLink,
                                      expiryHours = 24,
                                      theme = "default",
                                      year = new Date().getFullYear(),
                                      productName = "Our Platform",
                                  }: VerificationEmailProps) => {

    const themeMap: Record<string, string> = {
        default: "#3b82f6", // blue
        primary: "#16a34a", // green
        secondary: "#7c3aed", // violet
    };

    const isCustomColor = /^#([0-9A-F]{3}){1,2}$/i.test(theme);
    const themeColor = isCustomColor ? theme : themeMap[theme] || themeMap.default;

    return (
        <BaseEmail>
            {/* Header */}
            <Section
                className="text-center px-4 py-6"
                style={{
                    background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}cc 100%)`,
                }}
            >
                <div className="inline-block p-3 mb-3 bg-white/10 rounded-full">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="9 12 12 15 17 9" />
                    </svg>
                </div>

                <Text className="text-2xl font-bold text-white mb-1">
                    Verify Your Email
                </Text>
                <Text className="text-base text-white/90 m-0">
                    One quick step to get started
                </Text>
            </Section>

            {/* Body */}
            <Section className="py-6 px-8">
                <Text
                    className="text-lg font-semibold mb-4"
                    style={{ color: themeColor }}
                >
                    Hi {firstName},
                </Text>

                <Text className="text-base leading-relaxed mb-6 text-gray-700">
                    Thank you for signing up! To complete your registration and activate
                    your account, please verify your email address by clicking the button
                    below.
                </Text>

                {/* CTA Button */}
                <Section className="text-center my-8">
                    <Button
                        href={verificationLink}
                        className="text-white text-base font-semibold py-3 px-8 rounded-lg no-underline"
                        style={{ backgroundColor: themeColor }}
                    >
                        Verify Email Address
                    </Button>
                </Section>

                {/* Info Box */}
                <Text className="text-sm text-gray-700 leading-snug">
                    ℹ️ This verification link will expire in{" "}
                    <strong>{expiryHours} hours</strong>. After that, you'll need to
                    request a new verification email.
                </Text>

                {/* Alternative Link */}
                <Text className="text-sm text-gray-600 mb-2 mt-10">
                    If the button doesn't work, copy and paste this URL into your browser:
                </Text>
                <Section
                    className="rounded-lg px-4 text-center mb-6 border border-solid"
                    style={{
                        borderColor: `${themeColor}30`,
                        backgroundColor: `${themeColor}15`,
                    }}
                >
                    <Text
                        className="text-sm break-all"
                        style={{ color: themeColor }}
                    >
                        {verificationLink}
                    </Text>
                </Section>

                <Hr className="border-t border-gray-200 my-6" />

                <Text className="text-sm text-gray-500 mb-4">
                    If you didn't create an account, you can safely ignore this email.
                </Text>

                <Text className="text-base text-gray-700">
                    Thank you, <br />
                    <strong>{productName} Team</strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section
                className="border-t border-solid text-center py-3 px-8"
                style={{
                    borderColor: `${themeColor}30`,
                    backgroundColor: `${themeColor}10`,
                }}
            >
                <Text className="text-xs text-gray-500">
                    © {year} {productName}. All rights reserved.
                </Text>
            </Section>
        </BaseEmail>
    );
};
