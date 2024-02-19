import {
  Body,
  Button,
  Head,
  Html,
  Row,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export default function Email({ name, email, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Section style={{ paddingBottom: "20px" }}>
          <Row>
            <Text style={heading}>Here&apos;s what {name} wrote</Text>
            <Text style={messageText}>{message}</Text>
            <Button
              href={`mailto:${email}?subject=Feedback%20from%20${name}&body=${message}`}
              style={button}
            >
              Answer message
            </Button>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const messageText = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};
