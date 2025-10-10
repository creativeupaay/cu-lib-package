import {
    Button,
    Hr,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";
import {BaseEmail} from "./BaseEmail";

interface TransactionItem {
    name: string;
    quantity: number;
    price: number;
}

interface TransactionalEmailProps {
    firstName?: string;
    orderNumber: string;
    orderDate: string;
    items: TransactionItem[];
    subtotal: number;
    tax?: number;
    total: number;
    invoiceLink?: string;
    supportEmail?: string;
    year?: number;
    productName?: string;
    theme?: "default" | "primary" | "secondary" | string;
}

export const TransactionalEmail = ({
                                       firstName = "there",
                                       orderNumber,
                                       orderDate,
                                       items,
                                       subtotal,
                                       tax = 0,
                                       total,
                                       year =  new Date().getFullYear(),
                                       productName = "Our Platform",
                                       invoiceLink,
                                       supportEmail = "support@company.com",
                                       theme = "default",
                                   }: TransactionalEmailProps) => {
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
            {/* Header */}
            <Section
                className="text-center py-6 px-8"
                style={
                    {background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}cc 100%)`}
                }
            >
                <div className="inline-block p-1 mb-2">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                        <polyline points="16 8 10 15 7 12"/>
                    </svg>
                </div>
                <Text className="text-2xl font-bold text-white mb-2">
                    Payment Successful!
                </Text>
                <Text className="text-base text-white/90 m-0">
                    Thank you for your purchase
                </Text>
            </Section>

            {/* Content */}
            <Section className="py-6 px-8">
                <Text className="text-lg font-semibold mb-4">Hi {firstName},</Text>

                <Text className="text-base leading-relaxed mb-6 text-gray-700">
                    Your payment has been processed successfully. Here's a summary of your order:
                </Text>

                {/* Order Info */}
                <Section className="rounded-lg border border-solid border-gray-200 bg-gray-50 p-5 mb-6">
                    <div className="flex justify-between mb-2">
                        <Text className="text-sm text-gray-500 m-0">Order Number</Text>
                        <Text className="text-sm font-semibold text-gray-800 m-0">
                            #{orderNumber}
                        </Text>
                    </div>
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-500 m-0">Order Date</Text>
                        <Text className="text-sm font-semibold text-gray-800 m-0">
                            {orderDate}
                        </Text>
                    </div>
                </Section>

                {/* Order Items */}
                <Section className="border border-solid rounded-lg p-5 mb-6"
                         style={{borderColor: `${themeColor}50`, backgroundColor: `${themeColor}10`}}>
                    <Text className="text-lg font-semibold text-gray-800 mb-4">
                        Order Summary
                    </Text>

                    {items.map((item, i) => (
                        <div key={i} className="flex justify-between mb-3">
                            <div>
                                <Text className="text-sm font-medium text-gray-800 m-0">
                                    {item.name}
                                </Text>
                                <Text className="text-xs text-gray-500 m-0">
                                    Qty: {item.quantity}
                                </Text>
                            </div>
                            <Text className="text-sm font-semibold text-gray-800 m-0">
                                ${item.price.toFixed(2)}
                            </Text>
                        </div>
                    ))}

                    <Hr className="my-4 border border-solid border-gray-200"/>

                    <div className="flex justify-between mb-1">
                        <Text className="text-sm text-gray-500 m-0">Subtotal</Text>
                        <Text className="text-sm text-gray-800 m-0">
                            ${subtotal.toFixed(2)}
                        </Text>
                    </div>

                    {tax > 0 && (
                        <div className="flex justify-between mb-1">
                            <Text className="text-sm text-gray-500 m-0">Tax</Text>
                            <Text className="text-sm text-gray-800 m-0">${tax.toFixed(2)}</Text>
                        </div>
                    )}

                    <div className="flex justify-between mt-2">
                        <Text className="text-base font-semibold text-gray-800 m-0">Total</Text>
                        <Text className="text-base font-semibold text-gray-800 m-0">
                            ${total.toFixed(2)}
                        </Text>
                    </div>
                </Section>

                {/* Invoice Button */}
                {invoiceLink && (
                    <Section className="text-center my-8">
                        <Button
                            href={invoiceLink}
                            className="text-base font-semibold py-3 px-6 rounded-lg border border-solid"
                            style={{
                                color: themeColor,
                                borderColor: themeColor,
                            }}
                        >
                            Download Invoice
                        </Button>
                    </Section>
                )}

                <Hr className="border-t border-gray-200 my-4"/>

                {/* Support Info */}
                <Section className="rounded-lg bg-gray-50 p-5 mb-3">
                    <Text className="text-base font-semibold text-gray-800 mb-2">
                        Need Help?
                    </Text>
                    <Text className="text-sm text-gray-600 leading-relaxed">
                        If you have any questions about your order or need assistance, our
                        support team is here to help at{" "}
                        <a
                            href={`mailto:${supportEmail}`}
                            style={{color: themeColor, fontWeight: 500}}
                        >
                            {supportEmail}
                        </a>
                        .
                    </Text>
                </Section>

                <Text className="text-base text-gray-700">
                    Thank you for your business, <br/>
                    <strong>The {productName} Team</strong>
                </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center py-4 px-8 border-t border-solid"
                     style={{backgroundColor: `${themeColor}10`, borderColor: `${themeColor}30`}}>
                <Text className="text-xs text-gray-500">
                    © {year} {productName}. All rights reserved.
                </Text>
            </Section>
        </BaseEmail>
    );
};
