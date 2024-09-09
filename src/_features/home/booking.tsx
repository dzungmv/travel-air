import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Plane } from "lucide-react";
import Image from "next/image";

export default function HomeBooking() {
  return (
    <section className="max-w-secondary mx-auto py-[70px] flex lg:flex-row flex-col px-4 items-center gap-7 lg:gap-[100px]">
      <section className="bg-[#FEE2B6] rounded-2xl py-4 lg:py-[40px] px-5 lg:px-[70px] max-w-[500px] w-full">
        <div className="bg-[#3B71FE] rounded-xl">
          <div className="px-4 lg:px-9 py-5 lg:py-7 pb-2">
            <h4 className="text-lg font-medium text-white">Create Your Trip</h4>
            <p className="text-sm mt-2 text-white">Set up all trip</p>

            <Button
              variant="outline"
              className=" rounded-lg text-black bg-white justify-between mt-4 lg:hover:bg-white lg:hover:opacity-60 lg:hover:text-black"
            >
              <p>Plan a Trip</p>
              <ArrowRight size={16} className="text-primary" />
            </Button>

            <ul className="space-y-4 mt-4">
              {setups.map((item) => (
                <li key={item.title} className="flex gap-2 text-white">
                  <Plane size={18} className="mt-1" />
                  <div className="space-y-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-b-xl text-lg bg-white font-medium py-4 px-4 lg:px-9 pb-7">
            $50.00 / per Trip
          </div>
        </div>

        <div className="flex items-center justify-center gap-7 mt-5">
          <ArrowRight size={18} />
          <div>
            01 / <span className="text-gray-500">03</span>
          </div>
          <ArrowLeft size={18} />
        </div>
      </section>

      <section>
        <h2 className="text-3xl lg:text-[40px] lg:leading-[60px] font-semibold mb-4">
          Book Easy 3 Steps
        </h2>

        <p className="text-sm text-gray-600 max-w-[538px]">
          Planning a trip is sometimes not easy. But Trip Plan will help you to
          manage time and budget for your journey! There are only 3 steps:
          Create an account, choose your destination city.
        </p>

        <ul className="space-y-4 mt-7">
          {books.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle size={18} />
              <h4 className="font-semibold">{item}</h4>
            </li>
          ))}
        </ul>

        <p className="my-[40px] italic text-[15px]">
          “Plan your trip with a 3-step trip plan. Check in out at a glance,
          select hotel rooms on the go, and create a packing list”
        </p>

        <div className="flex items-center gap-4">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/avatar.JPG"
            alt="Avatar"
            className="w-[60px] h-[60px] object-cover rounded-full"
          />

          <div className="space-y-1">
            <p className=" font-medium">Steve Jobs</p>
            <p className="text-sm text-gray-500">Co-Founder and CEO</p>
          </div>
        </div>
      </section>
    </section>
  );
}

const setups = [
  {
    title: "Set Up your Account",
    description: "Book your best exprience",
  },
  {
    title: "Day by day Plan",
    description: "Book your best exprience",
  },
  {
    title: "Booking System",
    description: "Book your best exprience",
  },
];

const books = [
  "Set Up your Account",
  "Respond to Private requests",
  "Book your Trip",
];
