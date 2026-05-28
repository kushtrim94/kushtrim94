"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "kushtrimmarke12@gmail.com",
      subject:
        typeof subject === "string" && subject.trim().length > 0
          ? `Portfolio contact: ${subject.trim()}`
          : "Portfolio contact",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        name: typeof name === "string" && name.trim().length > 0 ? name : "Visitor",
        subject:
          typeof subject === "string" && subject.trim().length > 0
            ? subject
            : "General inquiry",
        message,
        senderEmail,
      }),
    });
    return { data };
  } catch (error: unknown) {
    console.error("Contact form send failed:", getErrorMessage(error));
    return {
      error: "Something went wrong. Please try again or email directly.",
    };
  }
};
