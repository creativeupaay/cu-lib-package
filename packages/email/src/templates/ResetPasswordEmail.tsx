import {Body, Button, Container, Head, Html, Text, Img} from "@react-email/components";


export function PasswordResetEmail({ name, resetLink="", logoUrl="" }: { name: string; resetLink?: string, logoUrl?: string }) {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: "Arial, sans-serif" }}>
                <Container>
                    <Img
                        src={logoUrl}
                        width="40"
                        height="33"
                        alt="Logo"
                    />
                    <Text>Hi {name},</Text>
                    <Text>
                        We received a request to reset your password. Click the button below to set up a new one:
                    </Text>
                    <Button href={resetLink}>
                        Reset Password
                    </Button>
                    <Text>If you didn’t request this, you can safely ignore this email.</Text>
                </Container>
            </Body>
        </Html>
    );
}
