import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

// FAQ Page

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ | Woodward Bluffs Hub</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">
                What is Woodward Bluffs Hub?
              </h2>
              <p>
                Woodward Bluffs Hub is a community website for residents of
                Woodward Bluffs Mobile Home Park. It provides information about
                community events, updates, and other important news.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">How can I get involved?</h2>
              <p>
                You can get involved by attending community events,
                volunteering, or joining the community council. Contact us for
                more information on how to participate.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Where can I find the latest updates?
              </h2>
              <p>
                The latest updates are posted on the website and shared through
                community newsletters. Make sure to check the website regularly
                for news and announcements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                How can I contact the community council?
              </h2>
              <p>
                You can contact the community council by sending an email to
                Austin or anyone else on the Committee.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default FAQ;
