import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { cn } from "@/tools/lib/utils";
import {
  BookDown,
  Instagram,
  Linkedin,
  LucideFacebook,
  Map,
  MessageSquareText,
  Plane,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";

export default function HomeWorks() {
  return (
    <section className="max-w-secondary mx-auto px-4 py-[70px] md:pb-[300px] flex flex-col lg:flex-row gap-7 md:gap-[300px] lg:gap-[200px] justify-end items-center">
      <section className="lg:max-w-[350px] bg-white shadow-lg rounded-xl p-7 w-full relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-[48px] bg-[#EBF1FF] grid place-items-center rounded-[18px]">
            <Plane className="text-primary" />
          </div>

          <h5 className="text-lg font-medium">Airtrav Trip Planner</h5>
        </div>
        <Image alt="User" size={290} src="/home/user.png" />

        <div className="flex items-center justify-between mt-[20px]">
          <div className="flex items-center gap-2">
            <ul className="flex items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <li
                  key={index}
                  className={cn(
                    "size-[28.28px] p-[2px] bg-white rounded-full",
                    index !== 0 && "-ml-2"
                  )}
                >
                  <Image
                    alt=""
                    size="100%"
                    src="/avatar.JPG"
                    className="rounded-full object-cover"
                  />
                </li>
              ))}
            </ul>
            <Link href="" className="text-sm text-gray-500">
              See all
            </Link>
          </div>

          <Button size="sm">Book now</Button>
        </div>

        <div className="bg-white hidden md:block shadow-xl rounded-[14px] py-[22px] px-[34px] absolute right-[-120px] top-[130px]">
          <p className=" font-semibold mb-[11px]">10k New Travellers</p>

          <ul className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                className={cn(
                  "size-9 rounded-full bg-white p-[2px]",
                  index !== 0 && "-ml-2"
                )}
              >
                <Image
                  alt=""
                  src="/avatar.JPG"
                  size="100%"
                  className="rounded-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-[250px] hidden w-full z-[-1] absolute bottom-[-200px] left-[-180px] py-[30px] md:grid place-items-center bg-white rounded-xl shadow-lg px-[23px]">
          <div className=" size-[80px] relative">
            <Image
              alt=""
              src="/avatar.JPG"
              size="100%"
              className=" rounded-full object-cover"
            />
            <div className="size-3 absolute bottom-0 right-3 rounded-full bg-white p-[2px] grid place-items-center">
              <div className="size-full rounded-full bg-green-500" />
            </div>
          </div>

          <p className="text-lg font-medium mt-[14px] pb-[6px]">Bete Raisley</p>
          <p className="text-gray-500 text-xs">Traveller</p>

          <div className="mt-4 flex items-center gap-2 text-gray-500 mb-2">
            <LucideFacebook size={18} />
            <Linkedin size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
          </div>

          <Button>Message</Button>
        </div>
      </section>

      <section className="max-w-[433px]">
        <h2 className="text-[40px] leading-[60px] font-semibold">
          How does it works
        </h2>

        <p className="text-lg text-gray-700 mt-7 mb-[40px]">
          We find the absolute best prices on hotels & flights then we pass
          these savings directly to you.
        </p>

        <ul className="space-y-7">
          {works.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <div className="size-[40px] rounded-full shadow-md grid place-content-center">
                {item.icon}
              </div>

              <div className="space-y-1 flex-1">
                <h6 className="font-medium">{item.title}</h6>
                <p className="text-sm text-gray-500">{item.des}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

const works = [
  {
    title: "Account",
    des: "All the necessary information to create your account are below this.",
    icon: <User size={18} className="text-primary" />,
  },
  {
    title: "Select Destination",
    des: "At first choose the place you wanted to go",
    icon: <Map size={18} className="text-primary" />,
  },
  {
    title: "Book a Trip",
    des: "Book your tip form our exclusive offers",
    icon: <MessageSquareText size={18} className="text-primary" />,
  },
  {
    title: "Take your flight",
    des: "Take your flight on selected date and joy",
    icon: <BookDown size={18} className="text-primary" />,
  },
];
