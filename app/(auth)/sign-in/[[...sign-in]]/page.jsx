import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src="/ai-interview.png"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            width={1000}
            height={1000}
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="/assistant.png"
                width={50}
                height={50}
                alt="Ai-logo"
              />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"></h2>

            <p className="mt-4 leading-relaxed text-white/90">
              The AI Interview Mocker website is a platform designed to help
              users prepare for job interviews by simulating real interview
              scenarios with AI.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="flex max-w-xl flex-col items-center gap-5 lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image
                  src="/assistant.png"
                  width={50}
                  height={50}
                  alt="Ai-logo"
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to AI Interview Mocker
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                The AI Interview Mocker website is a platform designed to help
                users prepare for job interviews by simulating real interview
                scenarios with AI.
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
