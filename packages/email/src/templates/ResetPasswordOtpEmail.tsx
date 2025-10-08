import {
    Section,
    Text,
    Hr,
} from '@react-email/components';
import { BaseEmail } from './BaseEmail';

interface ResetPasswordOtpEmailProps {
    firstName?: string;
    otp: string;
    expiryMinutes?: number;
    theme?: "default" | "primary" | "secondary" | string
}

export const ResetPasswordOtpEmail = ({
                                          firstName = 'there',
                                          otp,
                                          expiryMinutes = 15,
                                          theme = 'default',
                                      }: ResetPasswordOtpEmailProps) => {
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
            {/* Header */}
            <Section
                className={`text-center px-3 py-4 ${
                    isCustomColor ? '' : `bg-${themeColor}-600`
                }`}
                style={
                    isCustomColor ? { backgroundColor: theme as string } : undefined
                }
            >
                <Text className="text-3xl font-bold text-white">
                    Password Reset Code
                </Text>
                <Text className="text-white/80 text-sm">
                    Verify your identity
                </Text>
            </Section>

            {/* Content */}
            <Section className="px-8 py-8">
                <Text
                    className={`text-lg font-semibold mb-2 ${
                        isCustomColor ? '' : `text-${themeColor}-900`
                    }`}
                    style={isCustomColor ? { color: theme as string } : undefined}
                >
                    Hi {firstName},
                </Text>

                <Text className="text-gray-700 leading-relaxed mb-6">
                    You requested to reset your password. Enter the verification code
                    below to proceed with resetting your password.
                </Text>

                {/* OTP Box */}
                <Section
                    className={`rounded-xl border text-center py-4 px-3 ${
                        isCustomColor
                            ? ''
                            : `border-${themeColor}-200 bg-${themeColor}-50`
                    }`}
                    style={
                        isCustomColor
                            ? {
                                backgroundColor: `${theme}11`,
                                borderColor: theme as string,
                            }
                            : undefined
                    }
                >
                    <Text
                        className={`text-sm mb-1 uppercase ${
                            isCustomColor ? '' : `text-${themeColor}-500`
                        }`}
                        style={isCustomColor ? { color: theme as string } : undefined}
                    >
                        Your verification code
                    </Text>
                    <Text
                        className={`text-3xl font-bold tracking-widest ${
                            isCustomColor ? '' : `text-${themeColor}-900`
                        }`}
                        style={isCustomColor ? { color: theme as string } : undefined}
                    >
                        {otp}
                    </Text>
                </Section>

                {/* Warning */}
                <Section className="mt-3 rounded-xl px-4 py-3 text-gray-700">
                    <Text className="text-sm">
                        This code expires in{' '}
                        <strong>
                            {expiryMinutes} minute{expiryMinutes > 1 ? 's' : ''}
                        </strong>
                        . If you didn’t request this, please secure your account
                        immediately.
                    </Text>
                </Section>

                {/* Security Tips */}
                <Section
                    className={`border border-solid rounded-xl px-6 py-3 mt-5 ${
                        isCustomColor
                            ? ''
                            : `border-${themeColor}-100 bg-${themeColor}-50`
                    }`}
                    style={
                        isCustomColor
                            ? {
                                backgroundColor: `${theme}0F`,
                                borderColor: theme as string,
                            }
                            : undefined
                    }
                >
                    <Text className="font-semibold text-base mb-2 text-gray-900">
                        Security Tips
                    </Text>
                    <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
                        <li>Never share this code with anyone</li>
                        <li>Our team will never ask for this code</li>
                        <li>Use a strong, unique password</li>
                    </ul>
                </Section>

                <Hr className="my-6 border-gray-200" />

                <Text className="text-gray-700 text-sm">
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
                className={`text-center py-4 border-t border-solid ${
                    isCustomColor
                        ? ''
                        : `border-${themeColor}-200 bg-${themeColor}-50`
                }`}
                style={
                    isCustomColor
                        ? {
                            backgroundColor: `${theme}0F`,
                            borderColor: theme as string,
                        }
                        : undefined
                }
            >
                <Text className="text-gray-500 text-sm">
                    For security reasons, never share this code.
                </Text>
            </Section>
        </BaseEmail>
    );
};
