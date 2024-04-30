import { useState } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import { events } from "../data/eventsData";

type EventItem = {
  title: string;
  time: string;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(currentYear, currentMonth, i + 1),
  );

  const getEventsForDay = (date: Date): EventItem[] => {
    const formattedDate = date.toISOString().split("T")[0];
    return events[formattedDate as keyof typeof events] ?? [];
  };

  const changeMonth = (offset: number) => {
    const newMonth = currentMonth + offset;
    setCurrentDate(
      new Date(currentYear + Math.floor(newMonth / 12), newMonth % 12, 1),
    );
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Head>
        <title>Calendar | Woodward Bluffs Hub</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => changeMonth(-1)}
              className="rounded bg-blue-600 px-4 py-2 font-bold text-white transition duration-150 hover:bg-blue-500"
            >
              Prev
            </button>

            <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={() => changeMonth(1)}
              className="rounded bg-blue-600 px-4 py-2 font-bold text-white transition duration-150 hover:bg-blue-500"
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-4 text-xs sm:text-sm md:text-base">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold">
                {day}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="p-4" />
            ))}
            {days.map((date) => (
              <div
                key={date.toISOString()}
                className="flex flex-col items-center rounded-lg border p-4"
              >
                <div className="text-center">{date.getDate()}</div>
                {getEventsForDay(date).map((event, index) => (
                  <div
                    key={index}
                    className="mt-2 overflow-hidden text-center text-xs sm:text-sm"
                  >
                    {`${event.title} at ${event.time}`}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Calendar;
