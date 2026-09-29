"use client";

import { useState, type ReactNode } from "react";

const fieldClass =
  "mt-2.5 h-[46px] w-full rounded-[14px] border border-[#DFD8CC] bg-[#FDFBF7] px-4 font-sans text-[14px] leading-[17px] text-[#17120D] outline-none placeholder:text-[#908B85] focus:border-[#006C6F]";

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <span className="block min-h-10 font-sans text-[14px] font-semibold leading-5 text-[#17120D]">
      {children}
      {required ? <span className="text-[#C0392B]"> *</span> : null}
    </span>
  );
}

export function RequestWellForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="request"
      className="@container flex w-full flex-col gap-6 rounded-[28px] border border-[#EEE8DE] bg-white p-5 sm:p-8"
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
          <FieldLabel required>Father&apos;s Name (  والد کا نام )</FieldLabel>
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
        className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#006C6F] px-8 font-sans text-[14px] font-medium leading-5 tracking-[0.35px] text-[#FDFBF7] hover:bg-[#005256]"
      >
        Submit
      </button>

      {sent ? (
        <p className="text-[14px] leading-5 text-[#006C6F]">
          Thank you. Your request has been received.
        </p>
      ) : null}

      <div className="border-t border-[#EEE8DE] pt-5">
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
