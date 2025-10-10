import {Html, Head, Body, Container, Tailwind} from '@react-email/components';
import React from "react";

interface BaseEmailProps {
    children: React.ReactNode;
}

export const BaseEmail = ({ children }: BaseEmailProps) => {

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body
                    className="font-sans antialiased bg-gray-100 min-h-screen p-3"
                >
                    <Container
                        className={`max-w-2xl w-full rounded-2xl shadow-md overflow-hidden bg-gray-50`}
                    >
                        {children}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
