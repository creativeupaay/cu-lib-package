import * as React from 'react';
import {Section, Text, Button, Hr} from '@react-email/components';
import {BaseEmail} from './BaseEmail';

interface WelcomeEmailProps {
    firstName?: string;
    productName?: string;
    navigateLink?: string;
    year?: number;
    theme?: 'default' | 'primary' | 'secondary' | string;
}

export const WelcomeEmail = ({
                                 firstName = 'there',
                                 productName = 'our platform',
                                 navigateLink,
                                 theme = 'default',
                                 year = new Date().getFullYear(),
                             }: WelcomeEmailProps) => {
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
                className={`px-8 py-5 text-center ${
                    isCustomColor ? '' : `bg-${themeColor}-600`
                }`}
                style={
                    isCustomColor
                        ? {backgroundColor: theme as string}
                        : undefined
                }
            >
                <Text className="text-2xl font-bold text-white leading-tight mb-2">
                    Welcome to {productName}!
                </Text>
                <Text className="text-base text-white/90 m-0">
                    We're excited to have you on board
                </Text>
            </Section>

            {/* Content */}
            <Section className="px-8 py-8 bg-white">
                <Text
                    className={`text-lg font-semibold mb-3 ${
                        isCustomColor ? '' : `text-${themeColor}-800`
                    }`}
                    style={isCustomColor ? {color: theme as string} : undefined}
                >
                    Hi {firstName},
                </Text>

                <Text className="text-base mb-6 text-gray-700">
                    Thank you for joining {productName}. Your account has been successfully
                    created, and you're all set to explore everything we have to offer.
                </Text>

                {/* Feature Box */}
                <Section
                    className={`rounded-xl border p-6 mb-8 ${
                        isCustomColor
                            ? ''
                            : `bg-${themeColor}-50 border border-solid border-${themeColor}-200`
                    }`}
                    style={
                        isCustomColor
                            ? {
                                backgroundColor: `${theme}1A`,
                                borderColor: theme as string,
                            }
                            : undefined
                    }
                >
                    <Text className="text-lg font-semibold mb-4 text-gray-900">
                        What's Next?
                    </Text>
                    {[
                        {
                            num: '1',
                            title: 'Complete Your Profile',
                            desc: 'Add your personal details and preferences',
                        },
                        {
                            num: '2',
                            title: 'Explore Features',
                            desc: 'Discover powerful tools designed for you',
                        },
                        {
                            num: '3',
                            title: 'Get Support',
                            desc: 'Our team is here to help 24/7',
                        },
                    ].map((feature) => (
                        <div key={feature.num} className="flex items-start mb-3">
                            <Text
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mr-3 ${
                                    isCustomColor ? '' : `bg-${themeColor}-100 text-${themeColor}-600`
                                }`}
                                style={
                                    isCustomColor
                                        ? {
                                            backgroundColor: `${theme}22`,
                                            color: theme as string,
                                        }
                                        : undefined
                                }
                            >
                                {feature.num}
                            </Text>
                            <div>
                                <Text className="font-medium text-base text-gray-900">
                                    {feature.title}
                                </Text>
                                <Text className="text-sm text-gray-500">{feature.desc}</Text>
                            </div>
                        </div>
                    ))}
                </Section>

                {/* CTA */}
                <Section className="text-center mb-8">
                    <Button
                        href={navigateLink}
                        className={`text-white text-base font-semibold rounded-lg px-6 py-3 no-underline ${
                            isCustomColor ? '' : `bg-${themeColor}-600 hover:bg-${themeColor}-700`
                        }`}
                        style={
                            isCustomColor
                                ? {backgroundColor: theme as string}
                                : undefined
                        }
                    >
                        Get Started
                    </Button>
                </Section>

                <Hr className="my-6 border-gray-200"/>
                <Text className="text-sm mb-4 text-gray-500">
                    Need assistance? Reply to this email or contact our support team anytime.
                </Text>

                <Text className="text-base text-gray-700">
                    Best regards,
                    <br/>
                    <strong
                        className={isCustomColor ? '' : `text-${themeColor}-700`}
                        style={isCustomColor ? {color: theme as string} : undefined}
                    >
                        The {productName} Team
                    </strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section
                className={`text-center py-4 border-t ${
                    isCustomColor
                        ? ''
                        : `bg-${themeColor}-50 border border-solid border-${themeColor}-200`
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
                <Text className="text-xs text-gray-500">
                    © {year} {productName}. All rights reserved.
                </Text>
            </Section>
        </BaseEmail>
    );
};
