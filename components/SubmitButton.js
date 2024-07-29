"use client";
import { useFormStatus } from "react-dom";

/**
 *
 * @param? {string} [title="Submit"]
 * @param {boolean} isDisabled
 * @returns {JSX.Element}
 * @constructor
 */
export default function SubmitButton({ title = "Submit", isDisabled }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit"
            className={`rounded-md ${isDisabled ? "bg-gray-600" : "bg-indigo-600  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} px-3 py-2 text-sm font-semibold text-white shadow-sm`}
            disabled={isDisabled || pending}
            aria-disabled={isDisabled || pending}
    >
      {pending ? "..." : title}
    </button>
  )
}