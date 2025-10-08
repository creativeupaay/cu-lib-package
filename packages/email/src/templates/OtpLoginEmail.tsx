import {Section, Text, Hr} from "@react-email/components";
import {BaseEmail} from "./BaseEmail";

interface OtpLoginEmailProps {
    firstName?: string;
    otp: string;
    expiryMinutes?: number;
    theme?: 'default' | 'primary' | 'secondary' | string;
}

export const OtpLoginEmail = ({
                                  firstName = "there",
                                  otp,
                                  expiryMinutes = 10,
                                  theme = "default",
                              }: OtpLoginEmailProps) => {
    let themeColor = "blue";
    let isCustomColor = false;

    if (/^#([0-9A-F]{3}){1,2}$/i.test(theme)) {
        isCustomColor = true;
    } else if (theme === "primary") {
        themeColor = "green";
    } else if (theme === "secondary") {
        themeColor = "violet";
    }

    return (
        <BaseEmail>
            <Section className="px-8 py-6">
                <Text className="text-lg font-semibold mb-3 text-gray-900">

                    <span
                        className={isCustomColor ? "" : `text-${themeColor}-500`}
                        style={isCustomColor ? {color: theme as string} : undefined}
                    >
            Hi {firstName}
          </span>
                    ,
                </Text>

                <Text className="text-base mb-6 text-gray-700">
                    You requested a one-time password. Use the code below to log in.
                </Text>

                {/* OTP Box */}
                <Section
                    className={`rounded-lg flex flex-col justify-center items-center text-center px-6 py-4 mb-6 border border-solid ${
                        isCustomColor ? "" : `border-${themeColor}-200`
                    }`}
                    style={
                        isCustomColor
                            ? {borderColor: theme as string, backgroundColor: `${theme}10`}
                            : undefined
                    }
                >
                    <Text
                        className={`text-sm uppercase tracking-wide mb-1 ${
                            isCustomColor ? "" : `text-${themeColor}-500`
                        }`}
                        style={isCustomColor ? {color: theme as string} : undefined}
                    >
                        Your verification code
                    </Text>

                    <Text
                        className={`text-3xl font-bold tracking-widest rounded-lg p-2 ${
                            isCustomColor
                                ? ""
                                : `text-${themeColor}-900 bg-${themeColor}-100`
                        }`}
                        style={
                            isCustomColor
                                ? {color: theme as string, backgroundColor: `${theme}1A`}
                                : undefined
                        }
                    >
                        {otp}
                    </Text>
                </Section>

                {/* Expiry Note */}
                <Section className="rounded-md px-4 py-1 mb-6">
                    <Text className="text-sm text-gray-700">
                        This code expires in{" "}
                        <strong
                            className={isCustomColor ? "" : `text-${themeColor}-700`}
                            style={isCustomColor ? {color: theme as string} : undefined}
                        >
                            {expiryMinutes} minute{expiryMinutes > 1 ? "s" : ""}
                        </strong>
                        .
                    </Text>
                </Section>

                {/* Divider */}
                <Hr
                    className={"my-3 border-gray-300 border border-solid"}
                />

                {/* Help Text */}
                <Text className="text-xs text-center text-gray-500">
                    For security reasons, never share this code.
                </Text>
            </Section>
        </BaseEmail>
    );
};
