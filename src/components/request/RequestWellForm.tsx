"use client";

import { useState, type ReactNode } from "react";

const fieldClass =
  "neu-field mt-2.5 h-[48px] w-full rounded-[14px] px-4 font-sans text-[14px] leading-[17px] text-[#17120D] outline-none placeholder:text-[#908B85]";

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <span className="block font-sans text-[14px] font-semibold leading-5 text-[#17120D]">
      {children}
      {required ? <span className="text-[#C0392B]"> *</span> : null}
    </span>
  );
}

type Props = {
  /** Stronger elevation for forms sitting on dark heroes. */
  elevated?: boolean;
};

export function RequestWellForm({ elevated = false }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="request"
      className={`${elevated ? "neu-panel-dark" : "neu-panel"} @container flex w-full flex-col gap-5 rounded-[28px] p-5 sm:gap-6 sm:p-8`}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 @min-[440px]:grid-cols-2">
        <label className="block min-w-0">
          <FieldLabel required>Name (نام)</FieldLabel>
          <input required name="name" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0">
          <FieldLabel required>Father&apos;s Name (والد کا نام)</FieldLabel>
          <input required name="fatherName" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0 @min-[440px]:col-span-2">
          <FieldLabel required>Address</FieldLabel>
          <input required name="address" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0">
          <FieldLabel>Phone number</FieldLabel>
          <input name="phone" inputMode="tel" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0">
          <FieldLabel>CNIC / ID Card No. (شناختی کارڈ نمبر)</FieldLabel>
          <input name="cnic" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0">
          <FieldLabel>Community / Tribe (قوم)</FieldLabel>
          <input name="community" placeholder="Your answer" className={fieldClass} />
        </label>
        <label className="block min-w-0">
          <FieldLabel>Village / City (بستی / شہر)</FieldLabel>
          <input name="village" placeholder="Your answer" className={fieldClass} />
        </label>
      </div>

      <button
        type="submit"
        className="btn-motion inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-primary px-8 font-sans text-[14px] font-medium leading-5 tracking-[0.35px] text-white shadow-[0_10px_24px_rgba(18,107,114,0.28)]"
      >
        Submit request
      </button>

      {sent ? (
        <p className="rounded-[14px] border border-[rgba(18,107,114,0.2)] bg-[rgba(18,107,114,0.06)] px-4 py-3 text-[14px] leading-5 text-[#006C6F]">
          Thank you. Your request has been received.
        </p>
      ) : null}

      <div className="rounded-[18px] border border-[rgba(196,186,170,0.35)] bg-[rgba(235,232,225,0.55)] px-5 py-4">
        <p className="font-sans text-[15px] font-semibold leading-6 text-[#17120D]">Note:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5 font-sans text-[14px] leading-6 text-[#524D47]">
          <li>All information collected is confidential and is for the Water Supply Project survey only.</li>
          <li>Please ensure all details are accurate and complete.</li>
          <li>This form must be filled by the respondent/surveyor at the time of survey.</li>
        </ul>
      </div>
    </form>
  );
}
