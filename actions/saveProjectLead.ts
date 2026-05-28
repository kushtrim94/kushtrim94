"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import { validateString } from "@/lib/utils";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
};

type StoredLead = {
  projectTitle: string;
  name: string;
  email: string;
  whatBuilding: string;
  createdAt: string;
};

const leadsPath = path.join(process.cwd(), "data", "project-leads.json");

async function readLeads(): Promise<StoredLead[]> {
  try {
    const contents = await fs.readFile(leadsPath, "utf8");
    const parsed = JSON.parse(contents);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveProjectLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const projectTitle = formData.get("projectTitle");
  const name = formData.get("name");
  const email = formData.get("email");
  const whatBuilding = formData.get("whatBuilding");

  if (
    !validateString(projectTitle, 200) ||
    !validateString(name, 120) ||
    !validateString(email, 320) ||
    !validateString(whatBuilding, 500)
  ) {
    return {
      status: "error",
      message: "Please complete all fields before continuing.",
    };
  }

  const normalizedLead: StoredLead = {
    projectTitle: projectTitle.trim(),
    name: name.trim(),
    email: email.trim(),
    whatBuilding: whatBuilding.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    await fs.mkdir(path.dirname(leadsPath), { recursive: true });
    const existingLeads = await readLeads();
    existingLeads.push(normalizedLead);
    await fs.writeFile(leadsPath, JSON.stringify(existingLeads, null, 2), "utf8");
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Lead saved.",
  };
}
