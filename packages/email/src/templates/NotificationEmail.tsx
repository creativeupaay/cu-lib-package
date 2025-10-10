import {
    Section,
    Text,
    Button,
    Hr,
} from '@react-email/components';
import React from 'react';
import {BaseEmail} from "./BaseEmail";

type NotificationType = 'security' | 'subscription' | 'activity' | 'info';

interface NotificationEmailProps {
    firstName?: string;
    notificationType: NotificationType;
    title: string;
    message: string;
    actionText?: string;
    actionLink?: string;
    details?: Array<{ label: string; value: string }>;
    showSecurityTips?: boolean;
    year?: number;
    productName?: string;
    themeColor?: string;
}

export const NotificationEmail = ({
                                      firstName = 'there',
                                      notificationType,
                                      title,
                                      message,
                                      actionText,
                                      actionLink,
                                      year =  new Date().getFullYear(),
                                      productName = "Our Platform",
                                      details = [],
                                      showSecurityTips = false,
                                      themeColor
                                  }: NotificationEmailProps) => {
    const getColor = () => {
        switch (notificationType) {
            case 'security':
                return '#DC2626'; // red
            case 'subscription':
                return '#2563EB'; // blue
            case 'activity':
                return '#F59E0B'; // amber
            default:
                return '#10B981'; // green
        }
    };

    let color = getColor()
    if (themeColor && /^#([0-9A-F]{3}){1,2}$/i.test(themeColor)) {
        color = themeColor
    }


    const getIcon = () => {
        switch (notificationType) {
            case 'security':
                return (
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M12 8v4"/>
                        <circle cx="12" cy="16" r="0.5" fill="#fff"/>
                    </svg>
                );
            case 'subscription':
                return (
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                );
            case 'activity':
                return (
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                    >
                        <path d="M18 20V10"/>
                        <path d="M12 20V4"/>
                        <path d="M6 20v-6"/>
                    </svg>
                );
            default:
                return (
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
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <circle cx="12" cy="8" r="1" fill="#fff"/>
                    </svg>

                );
        }
    };

    return (
        <BaseEmail>
            {/* Header */}
            <Section
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                }}
                className="text-center py-4"
            >
                <div className="flex justify-center">{getIcon()}</div>
                <Text className="text-2xl font-bold text-white mt-3">{title}</Text>
                <Text className="text-sm text-white/90">Account Notification</Text>
            </Section>

            {/* Content */}
            <Section className="p-6">
                <Text className="text-lg text-gray-800 font-semibold mb-2">
                    Hi {firstName},
                </Text>

                <Text className="text-gray-600 mb-4 leading-relaxed">
                    {message}
                </Text>

                {/* Details */}
                {details.length > 0 && (
                    <Section className="border rounded-lg px-4 py-2 mb-6 bg-gray-50 border-gray-200">
                        <Text className="text-gray-900 text-lg font-semibold mb-0">
                            Details
                        </Text>
                        {details.map((detail, index) => (
                            <div
                                key={`security-tips-${index}`}
                                className="text-sm text-gray-700 p-0"
                            >
                                <Text
                                    className="text-gray-900 font-semibold mt-1 mb-0">{index + 1}.{" "}{detail.label}{" "}:</Text>
                                <Text className={"text-gray-600 mt-0 mb-2 ml-4"}>{detail.value}</Text>
                            </div>
                        ))}
                    </Section>
                )}

                {/* Action Button */}
                {actionText && actionLink && (
                    <Section className="text-center mb-6">
                        <Button
                            href={actionLink}
                            style={{backgroundColor: color}}
                            className="text-white text-sm font-medium px-6 py-3 rounded-md"
                        >
                            {actionText}
                        </Button>
                    </Section>
                )}

                {/* Security Tips */}
                {showSecurityTips && (
                    <Section className="rounded-lg p-4 mb-6" style={{backgroundColor: `${color}10`}}>
                        <Text className="text-gray-800 font-semibold mb-2">
                            🔒 Security Tips
                        </Text>
                        <ul className="text-gray-600 text-sm space-y-1">
                            <li>If this wasn’t you, change your password immediately.</li>
                            <li>Enable two-factor authentication for extra security.</li>
                            <li>Never share your password with anyone.</li>
                        </ul>
                    </Section>
                )}

                <Hr className="border-t border-gray-200 my-6"/>

                <Text className="text-gray-500 text-sm mb-4">
                    If you have any concerns about your account security, please
                    contact us immediately.
                </Text>

                <Text className="text-gray-700 text-sm">
                    Best regards,<br/>
                    <strong>The Security Team</strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-100 text-center py-4 border-t border-gray-200">
                <Text className="text-xs text-gray-500">
                    © {year} {productName}. All rights reserved.
                </Text>
            </Section>
        </BaseEmail>
    );
};
