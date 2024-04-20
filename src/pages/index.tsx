import Head from "next/head";
import Link from "next/link";
// import navbar
import Navbar from "../pages/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Woodward Bluffs Hub</title>
        <meta
          name="description"
          content="The community hub for Woodward Bluffs Mobile Home Park"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
        <section className="p-10 text-center">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to Woodward Bluffs Hub
          </h1>
          <p className="mb-5">
            Your go-to place for all community-related information, events, and
            updates.
          </p>
          <div className="space-x-4">
            <button className="rounded-full bg-white px-6 py-2 font-semibold text-blue-700 transition hover:bg-gray-100">
              Get Started
            </button>
            <button className="rounded-full border border-white px-6 py-2 font-semibold transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </section>

        {/* Additional sections for content */}
        <section className="container mx-auto p-6">
          {/* Here you can add other sections like "Upcoming Events", "About Us", etc. */}
        </section>
      </main>

      <footer className="bg-blue-700 p-4 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Woodward Bluffs Mobile Home Park.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
