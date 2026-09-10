import type { Locale } from "./locale";

export type ContactRequestFields = {
  topic: string;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  fleetSize: string;
  message: string;
  website: string;
};

export function createContactRequestPayload(
  fields: ContactRequestFields,
  locale: Locale,
  turnstileToken: string,
) {
  return {
    ...fields,
    locale,
    turnstileToken,
  };
}
