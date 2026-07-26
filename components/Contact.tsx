"use client";

import ContactFooter from "./ContactFooter";

export default function Contact() {
  return (
    <ContactFooter
      centerSpacing="mb-12 md:mb-16"
      emailClassName="text-lg text-text relative z-10 break-all sm:break-normal"
      socialClassName="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8"
    />
  );
}
