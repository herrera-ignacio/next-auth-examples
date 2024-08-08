"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
import { handleSignup } from "@/app/register/actions";


export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formState, formAction] = useFormState(handleSignup, { message: "" })

  const isSubmitDisabled = !name || !email || !password;

  const router = useRouter();

  useEffect(() => {
    if (formState?.success) {
      toast.success(formState.message);
      router.push("/login");
    } else if (formState?.error) {
      toast.error(formState.message);
    }
  }, [formState]);

  return (
    <main>
      <div className="space-y-12 mt-1">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base font-semibold leading-7 text-gray-900 text-center">Login</h1>

          <form action={formAction}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div className="mt-2">
                  <div
                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="text" name="name" id="name" autoComplete="name"
                           className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           placeholder="Enter your full name"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                  <div
                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="text" name="email" id="email" autoComplete="email"
                           className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           placeholder="Enter your email"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                  <div
                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="password" name="password" id="password" autoComplete="password"
                           className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           placeholder="Enter your password"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-6 flex items-start flex-col gap-x-6">
              <SubmitButton isDisabled={isSubmitDisabled} title="Sign up" />
              {formState?.message && (
                <p className="text-red-600 text-sm mt-4">{formState.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
