import React from "react";
import Navbar from "./navbar";
import Head from "next/head";

const Events: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events | Woodward Bluffs Hub</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold">Upcoming Events</h1>
          <p>This page is under construction.</p>
        </div>
      </main>
    </>
  );
};

export default Events;
