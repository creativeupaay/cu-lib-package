import { Section, Text, Hr } from "@react-email/components";
import { BaseEmail } from "./BaseEmail";

interface OtpLoginEmailProps {
    firstName?: string;
    otp: string;
    expiryMinutes?: number;
    theme?: "default" | "primary" | "secondary" | string;
}

export const OtpLoginEmail = ({
                                  firstName = "there",
                                  otp,
                                  expiryMinutes = 10,
                                  theme = "default",
                              }: OtpLoginEmailProps) => {

    let themeColor = "#10b981";
    if (/^#([0-9A-F]{3}){1,2}$/i.test(theme)) {
        themeColor = theme;
    } else if (theme === "primary") {
        themeColor = "#206de8";
    } else if (theme === "secondary") {
        themeColor = "#9b1cfc";
    }

    return (
        <BaseEmail>
            <Section className="px-8 py-6">
                {/* Greeting */}
                <Text className="text-lg font-semibold mb-3 text-gray-900">
                    <span style={{ color: themeColor }}>Hi {firstName}</span>,
                </Text>

                <Text className="text-base mb-6 text-gray-700">
                    You requested a one-time password. Use the code below to log in.
                </Text>

                {/* OTP Box */}
                <Section
                    className="rounded-lg flex flex-col justify-center items-center text-center px-6 py-4 mb-6 border border-solid"
                    style={{
                        borderColor: `${themeColor}50`,
                        backgroundColor: `${themeColor}10`,
                    }}
                >
                    <Text
                        className="text-sm uppercase tracking-wide mb-1"
                        style={{ color: themeColor }}
                    >
                        Your verification code
                    </Text>

                    <Text
                        className="text-3xl font-bold tracking-widest rounded-lg p-2"
                        style={{
                            color: themeColor,
                            backgroundColor: `${themeColor}1A`,
                        }}
                    >
                        {otp}
                    </Text>
                </Section>

                {/* Expiry Note */}
                <Section className="rounded-md px-4 py-1 mb-6">
                    <Text className="text-sm text-gray-700">
                        This code expires in{" "}
                        <strong style={{ color: themeColor }}>
                            {expiryMinutes} minute{expiryMinutes > 1 ? "s" : ""}
                        </strong>
                        .
                    </Text>
                </Section>
            </Section>

            {/* Help Text */}
            <Section className="rounded-md px-4 py-3 border border-solid" style={{ backgroundColor: `${themeColor}10`, borderColor: `${themeColor}30` }}>
                <Text className="text-sm text-center text-gray-500">
                    For security reasons, never share this code.
                </Text>
            </Section>
        </BaseEmail>
    );
};
