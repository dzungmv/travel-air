import Image from "@/components/ui/image";
import { ArrowBigDown, MousePointer, MousePointer2 } from "lucide-react";

const feats = [
  {
    title: "Trip Advisor",
    des: "Cheap Flights Amazing Experiences",
    icon: "/home/advi.svg",
  },
  {
    title: "Arbn",
    des: "Choose From a Wide Range of Properties Which Booking.",
    icon: "/home/air.svg",
  },
  {
    title: "Turkish Kargo",
    des: "Best Flights Amazing Services",
    icon: "/home/tur.png",
  },
  {
    title: "Itata",
    des: "Cheap Flights Amazing Experiences",
    icon: "/home/iata.png",
  },
];

export default function HomeEasyBooking() {
  return (
    <section className="bg-[#EAF0FF]">
      <section className="max-w-secondary mx-auto px-4 py-[71px] flex flex-col lg:flex-row gap-[50px] lg:gap-[112px] items-center">
        <section className="w-full">
          <h2 className="text-3xl lg:text-[40px] lg:leading-[60px] font-semibold mb-7">
            Easy Trip Booking Website
          </h2>

          <p className="max-w-[527px] mb-[50px]">
            A new way to book travel online, saving you time. With trip, There
            are no confusing spreadsheets or complicated searches. We just ask
            the right questions, find the best deal for you, then book it.
          </p>

          <ul className="grid grid-cols-[170px_170px_170px_170px] overflow-x-scroll lg:grid-cols-4 gap-4">
            {feats.map((item) => (
              <li
                key={item.title}
                className="space-y-[10px] bg-white rounded-xl p-4 py-5"
              >
                <Image
                  alt={item.title}
                  src={item.icon}
                  size={22}
                  className="rounded-full object-cover"
                />

                <h4 className="font-medium text-sm">{item.title}</h4>

                <p className="text-xs text-gray-500">{item.des}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl w-full lg:w-auto min-w-[374px] bg-white px-6 py-7">
          <div className="flex items-center gap-3">
            <Image
              size={40}
              src="/avatar.JPG"
              alt="Avatar"
              className="rounded-full object-cover"
            />

            <div>
              <h4 className="font-medium text-sm">Hey! Welcome to Airtrav </h4>
              <p className="text-sm text-gray-500">Please Select to one</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#ECECEC] p-[20px] pr-[62px] mt-5 space-y-5">
            <div className="bg-white p-3 pr-[40px] rounded-xl relative">
              <div className=" flex items-center gap-2 animate-pulse">
                <div className=" size-[45px] rounded-full bg-gray-300" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 rounded-full bg-gray-300" />
                  <div className="h-3 w-[40%] rounded-full bg-gray-300" />
                </div>
              </div>

              <div className="space-y-1 mt-4 animate-pulse">
                <div className="h-3 rounded-full bg-gray-300" />
                <div className="h-3 rounded-full bg-gray-300" />
                <div className="h-3 w-[40%] rounded-full bg-gray-300" />
              </div>

              <div className=" absolute bottom-[-20px] right-[-60px]">
                <MousePointer2 className="text-orange -ml-4" size={18} />
                <div className="py-1 px-6 rounded-lg bg-orange text-white font-medium text-sm">
                  Book
                </div>
              </div>
            </div>

            <div className=" animate-pulse bg-white p-3 pr-[40px] rounded-xl">
              <div className=" flex items-center gap-2">
                <div className=" size-[45px] rounded-full bg-gray-300" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 rounded-full bg-gray-300" />
                  <div className="h-3 w-[40%] rounded-full bg-gray-300" />
                </div>
              </div>

              <div className="space-y-1 mt-4">
                <div className="h-3 rounded-full bg-gray-300" />
                <div className="h-3 rounded-full bg-gray-300" />
                <div className="h-3 w-[40%] rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
