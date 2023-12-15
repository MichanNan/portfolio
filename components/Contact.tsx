"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        {` Please contact me directly at `}
        <a href="mailto:caonanala@gmail.com" className="underline">
          caonanala@gmail.com
        </a>
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="text"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Yout message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
