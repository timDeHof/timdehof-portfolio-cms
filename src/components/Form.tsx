"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}
const ContactForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    await fetch("api/send", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    setState("ready");
  }

  return (
    <Card className="max-w-screen-lg rounded-md">
      <CardContent>
        <form onSubmit={handleOnSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="name"
                className="text-lg font-bold text-primary-foreground"
              >
                Name
              </Label>
              <Input id="name" name="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="name"
                className="text-lg font-bold text-primary-foreground"
              >
                Email
              </Label>
              <Input id="name" name="email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="message"
                className="text-lg font-bold text-primary-foreground"
              >
                Your message
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
              />
            </div>
          </div>
          <Button variant={"secondary"} disabled={state === "loading"}>
            Send message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
