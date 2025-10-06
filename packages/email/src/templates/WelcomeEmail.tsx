import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
export function WelcomeEmail({ name }: { name: string }) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body style={{ fontFamily: "Arial, sans-serif" }}>
          <Container>
            <Text>Hello {name}, welcome to Periskope! gaege 🎉</Text>
            <Button href="https://periskope.com">Get Started</Button>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
