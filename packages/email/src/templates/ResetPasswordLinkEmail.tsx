import * as React from 'react';
import { Section, Text, Button, Hr } from '@react-email/components';
import { BaseEmail } from './BaseEmail';

interface ResetPasswordLinkEmailProps {
    firstName?: string;
    resetLink: string;
    expiryMinutes: number;
    theme?: "default" | "primary" | "secondary" | string;
}

export const ResetPasswordLinkEmail = ({
                                           firstName = 'there',
                                           resetLink,
                                           expiryMinutes = 10,
                                           theme = 'default',
                                       }: ResetPasswordLinkEmailProps) => {
    let themeColor = 'blue';
    let isCustomColor = false;

    if (/^#([0-9A-F]{3}){1,2}$/i.test(theme)) {
        isCustomColor = true;
    } else if (theme === 'primary') {
        themeColor = 'green';
    } else if (theme === 'secondary') {
        themeColor = 'violet';
    }

    return (
        <BaseEmail>
            {/* Content */}
            <Section className="px-8 py-8">
                <Text
                    className={`text-lg font-semibold mb-3 ${
                        isCustomColor ? '' : `text-${themeColor}-800`
                    }`}
                    style={isCustomColor ? { color: theme as string } : undefined}
                >
                    Hi {firstName},
                </Text>

                <Text className="text-base mb-6 text-gray-700">
                    We received a request to reset your password. Click the button
                    below to create a new password for your account.
                </Text>

                {/* CTA Button */}
                <Section className="text-center mb-8">
                    <Button
                        href={resetLink}
                        className={`text-white text-base font-semibold rounded-lg px-6 py-3 no-underline ${
                            isCustomColor ? '' : `bg-${themeColor}-600 hover:bg-${themeColor}-700`
                        }`}
                        style={isCustomColor ? { backgroundColor: theme as string } : undefined}
                    >
                        Reset Password
                    </Button>
                </Section>

                {/* Info Box */}
                <Section
                    className="rounded-lg border px-4 py-3 mb-6"
                    style={
                        isCustomColor
                            ? { backgroundColor: `${theme}11`, borderColor: theme as string }
                            : undefined
                    }
                >
                    <Text className="text-sm text-gray-700">
                        This link will expire in{' '}
                        <strong>
                            {expiryMinutes} Minute{expiryMinutes > 1 ? 's' : ''}
                        </strong>
                        . If you didn't request a password reset, you can safely ignore
                        this email.
                    </Text>
                </Section>

                {/* Alternative Link */}
                <Text className="text-sm mb-2 text-gray-500">
                    Or copy and paste this URL into your browser:
                </Text>
                <Text
                    className={`text-sm break-all text-center p-3 rounded-lg mb-6 ${
                        isCustomColor ? '' : `bg-${themeColor}-50 text-${themeColor}-600`
                    }`}
                    style={
                        isCustomColor
                            ? { backgroundColor: `${theme}15`, color: theme as string }
                            : undefined
                    }
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
                    <strong
                        className={isCustomColor ? '' : `text-${themeColor}-800`}
                        style={isCustomColor ? { color: theme as string } : undefined}
                    >
                        Security Team
                    </strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section
                className={`text-center py-4 ${
                    isCustomColor ? '' : `bg-${themeColor}-50`
                }`}
                style={isCustomColor ? { backgroundColor: `${theme}0F` } : undefined}
            >
                <Text className="text-sm text-gray-500">
                    For security reasons, never share this email with anyone.
                </Text>
            </Section>
        </BaseEmail>
    );
};
