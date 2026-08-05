"use client";

import { motion } from "framer-motion";
import {
  useId,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
} from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

const ease = [0.22, 1, 0.36, 1] as const;

type FieldName = "name" | "email" | "phone" | "message";

type FormState = Record<FieldName, string>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type FloatingFieldProps = {
  name: FieldName;
  label: string;
  value: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FloatingField = ({
  name,
  label,
  value,
  type = "text",
  multiline = false,
  required = false,
  onChange,
}: FloatingFieldProps): ReactElement => {
  const id = useId();
  const filled = value.trim().length > 0;
  const sharedClassName =
    "peer w-full border-0 border-b border-hairline bg-transparent pt-6 pb-3 text-[1.05rem] leading-[1.5] text-ink outline-none transition-[border-color] duration-300 placeholder:text-transparent focus:border-oxblood";

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          placeholder={label}
          className={`${sharedClassName} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={label}
          autoComplete={
            name === "name" ? "name" : name === "email" ? "email" : "tel"
          }
          className={sharedClassName}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 origin-left font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:-translate-y-0.5 peer-focus:scale-95 peer-focus:text-oxblood ${
          filled
            ? "top-0 -translate-y-0.5 scale-95 text-oxblood"
            : "top-6 text-body"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export const ContactBooking = (): ReactElement => {
  const { dictionary } = useLocale();
  const { booking } = dictionary.contactPage;
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section
      className="bg-canvas px-[6vw] py-[clamp(4.5rem,12vw,8.5rem)]"
      id="book"
      aria-labelledby="contact-booking-title"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <motion.span
          className="mb-6 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          {booking.label}
        </motion.span>
        <motion.h2
          id="contact-booking-title"
          className="mb-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[1.05] tracking-[-0.01em] text-ink"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          {booking.title}
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-[42ch] text-[1.05rem] leading-[1.7] text-body"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          {booking.body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12, ease }}
        >
          <Button href="#" variant="dark" aria-label={booking.cta}>
            {booking.cta}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-[clamp(4rem,10vw,6.5rem)] max-w-[560px] border-t border-hairline pt-[clamp(3rem,8vw,4.5rem)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
      >
        <h3 className="mb-3 text-center font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
          {booking.formTitle}
        </h3>
        <p className="mx-auto mb-12 max-w-[40ch] text-center text-[1rem] leading-[1.7] text-body">
          {booking.formSupport}
        </p>

        {submitted ? (
          <p
            className="text-center font-display text-[1.35rem] italic leading-[1.4] text-ink"
            role="status"
          >
            {booking.success}
          </p>
        ) : (
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <FloatingField
              name="name"
              label={booking.fields.name}
              value={form.name}
              required
              onChange={handleChange}
            />
            <FloatingField
              name="email"
              label={booking.fields.email}
              value={form.email}
              type="email"
              required
              onChange={handleChange}
            />
            <FloatingField
              name="phone"
              label={booking.fields.phone}
              value={form.phone}
              type="tel"
              onChange={handleChange}
            />
            <FloatingField
              name="message"
              label={booking.fields.message}
              value={form.message}
              multiline
              required
              onChange={handleChange}
            />
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-block border border-oxblood px-[2.3rem] py-[1.05rem] font-label text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood transition-[background,color] duration-400 ease-in-out hover:bg-oxblood hover:text-paper"
              >
                {booking.submit}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};
