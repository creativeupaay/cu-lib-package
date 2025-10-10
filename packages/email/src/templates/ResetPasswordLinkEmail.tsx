import * as React from "react";
import { Section, Text, Button, Hr } from "@react-email/components";
import { BaseEmail } from "./BaseEmail";

interface ResetPasswordLinkEmailProps {
    firstName?: string;
    resetLink: string;
    expiryMinutes?: number;
    theme?: "default" | "primary" | "secondary" | string;
}

export const ResetPasswordLinkEmail = ({
                                           firstName = "there",
                                           resetLink,
                                           expiryMinutes = 10,
                                           theme = "default",
                                       }: ResetPasswordLinkEmailProps) => {

    const themeMap: Record<string, string> = {
        default: "#3b82f6", // blue
        primary: "#16a34a", // green
        secondary: "#7c3aed", // violet
    };

    const isCustomColor = /^#([0-9A-F]{3}){1,2}$/i.test(theme);
    const themeColor = isCustomColor ? theme : themeMap[theme] || themeMap.default;

    return (
        <BaseEmail>
            {/* Content */}
            <Section className="px-8 py-8">
                <Text
                    className="text-lg font-semibold mb-3"
                    style={{ color: themeColor }}
                >
                    Hi {firstName},
                </Text>

                <Text className="text-base mb-6 text-gray-700">
                    We received a request to reset your password. Click the button below to
                    create a new password for your account.
                </Text>

                {/* CTA Button */}
                <Section className="text-center mb-8">
                    <Button
                        href={resetLink}
                        className="text-white text-base font-semibold rounded-lg px-6 py-3 no-underline"
                        style={{ backgroundColor: themeColor }}
                    >
                        Reset Password
                    </Button>
                </Section>

                {/* Info Box */}
                <Section
                    className="rounded-lg border px-4 py-3 mb-6"
                    style={{
                        borderColor: themeColor,
                        backgroundColor: `${themeColor}10`,
                    }}
                >
                    <Text className="text-sm text-gray-700">
                        This link will expire in{" "}
                        <strong>{expiryMinutes} minute{expiryMinutes > 1 ? "s" : ""}</strong>.
                        If you didn't request a password reset, you can safely ignore this email.
                    </Text>
                </Section>

                {/* Alternative Link */}
                <Text className="text-sm mb-2 text-gray-500">
                    Or copy and paste this URL into your browser:
                </Text>
                <Text
                    className="text-sm break-all text-center p-3 rounded-lg mb-6"
                    style={{
                        backgroundColor: `${themeColor}15`,
                        color: themeColor,
                    }}
                >
                    {resetLink}
                </Text>

                <Hr className="my-6 border-gray-200" />

                <Text className="text-sm mb-4 text-gray-500">
                    If you continue to have problems, please contact our support team.
                </Text>

                <Text className="text-base text-gray-700">
                    Best regards,
                    <br />
                    <strong style={{ color: themeColor }}>Security Team</strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section
                className="text-center py-4"
                style={{ backgroundColor: `${themeColor}0F` }}
            >
                <Text className="text-sm text-gray-500">
                    For security reasons, never share this email with anyone.
                </Text>
            </Section>
        </BaseEmail>
    );
};
