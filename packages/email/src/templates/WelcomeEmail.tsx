import { Html, Head, Body, Container, Text, Button } from "@react-email/components";

export function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Text>Hello {name}, welcome to Periskope! 🎉</Text>
          <Button href="https://periskope.com">Get Started</Button>
        </Container>
      </Body>
    </Html>
  );
}
