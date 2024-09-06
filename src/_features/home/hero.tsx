import { ArrowRight, StarIcon, Waves } from "lucide-react";
import Image from "next/image";
import { fly, hero } from "../../../public";

export default function HomeHero() {
  return (
    <section className="lg:mt-[80px] mt-10 px-4 flex relative">
      <section className="lg:ml-[140px] md:ml-[64px] w-full lg:w-auto">
        <h1 className="lg:text-[64px] lg:leading-[84px] text-4xl md:text-5xl font-bold relative">
          Travel Planning <br /> Made{" "}
          <span className="text-yellow relative">
            Easy
            <Waves
              size={40}
              className="text-yellow absolute right-[-46px] bottom-0"
            />
          </span>
        </h1>

        <p className="lg:text-lg text-gray-500 mt-4 lg:mt-8">
          We make it easy to plan and book your next trip with <br />a Day by
          Day itinerary.
        </p>

        <div className="lg:mt-[48px] mt-8 border border-gray-100 lg:hover:opacity-70 hover:cursor-pointer flex items-center gap-5 mx-auto lg:mx-0 lg:gap-[100px] text-xl font-semibold p-2 rounded-full shadow-lg max-w-fit pl-6">
          Plan a Trip
          <div className=" grid place-items-center h-10 w-10 text-white bg-primary rounded-full">
            <ArrowRight />
          </div>
        </div>

        <p className="font-medium text-gray-500 mt-[120px] lg:mt-[70px] mb-3">
          Our customers say
        </p>

        <section className="flex gap-6">
          <div>
            <p className="text-2xl font-medium">Excellent</p>
            <section className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} size={18} className="text-yellow" />
              ))}
            </section>
          </div>

          <div className="w-[1px] h-[60px] bg-gray-300" />

          <div className="flex flex-col justify-end">
            <div>
              <p className="font-bold text-primary text-2xl">4.7</p>
              <p className="font-medium text-gray-600">
                out of 5 on 194 reviews
              </p>
            </div>
          </div>
        </section>
      </section>

      <Image
        width={0}
        height={0}
        alt=""
        src={hero}
        className="w-full object-cover flex-1 lg:mt-[-120px] hidden lg:block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <Image
        width={0}
        height={0}
        alt=""
        src={fly}
        className="absolute left-0 top-[53%]"
        sizes="100vw"
      />
    </section>
  );
}
