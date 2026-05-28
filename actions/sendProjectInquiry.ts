"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ProjectInquiryInput = {
  projectTitle: string;
  name: string;
  email: string;
  whatBuilding: string;
};

export type ProjectInquiryResult =
  | { ok: true }
  | { ok: false; error: string };

export async function sendProjectInquiry(
  input: ProjectInquiryInput
): Promise<ProjectInquiryResult> {
  if (
    !validateString(input.projectTitle, 200) ||
    !validateString(input.name, 120) ||
    !validateString(input.email, 320) ||
    !validateString(input.whatBuilding, 500)
  ) {
    return { ok: false, error: "Please fill in all fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: "kushtrimmarke12@gmail.com",
      reply_to: input.email,
      subject: `Portfolio inquiry — ${input.projectTitle}`,
      react: React.createElement("div", null, [
        React.createElement(
          "p",
          { key: "intro" },
          "New project inquiry from portfolio /projects page."
        ),
        React.createElement(
          "p",
          { key: "project" },
          `Project: ${input.projectTitle}`
        ),
        React.createElement("p", { key: "name" }, `Name: ${input.name}`),
        React.createElement("p", { key: "email" }, `Email: ${input.email}`),
        React.createElement(
          "p",
          { key: "building" },
          `What they are building: ${input.whatBuilding}`
        ),
      ]),
    });
  } catch (error: unknown) {
    console.error("Project inquiry email failed:", getErrorMessage(error));
    return {
      ok: false,
      error:
        "Something went wrong. Try emailing me directly at kushtrimmarke12@gmail.com",
    };
  }

  return { ok: true };
}
