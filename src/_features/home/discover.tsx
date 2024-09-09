import { Book, Boxes, Plane, Send } from "lucide-react";

export default function HomeDiscover() {
  return (
    <section className="max-w-secondary mx-auto py-[70px] px-4 lg:text-center">
      <h2 className="text-4xl lg:text-[40px] lg:leading-[60px] font-semibold mb-[74px]">
        Discover our Features
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-[50px] lg:gap-[250px] lg:gap-y-[64px] gap-y-[64px]">
        {discovers.map((item) => (
          <li key={item.title} className="space-y-5 md:p-7">
            <div className="flex items-center gap-4">
              <div
                className="size-10 text-white rounded-md grid place-items-center"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <h5 className="font-semibold text-lg">{item.title}</h5>
            </div>

            <p className="text-gray-700 text-start">{item.des}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const discovers = [
  {
    title: "Share Your Travel Plan",
    des: "Ticket is an ultra-convenient way to buy your train or bus ticket online in seconds.",
    icon: <Plane size={18} />,
    color: "#FFD166",
  },
  {
    title: "Get Monthly Tour",
    des: "Our Get Monthly Tours marketing package will help get more clients in your photography business. ",
    icon: <Boxes size={18} />,
    color: "#58C27D",
  },
  {
    title: "Receive Ticket",
    des: "The Receive plan Ticket will allow you to travel freely. You will be able to get in any location.",
    icon: <Book size={18} />,
    color: "#FF6370",
  },
  {
    title: "Flight Booking",
    des: "Flight Booking is an ultra-convenient way to buy your  train or bus ticket online in seconds.",
    icon: <Send size={18} />,
    color: "#3B71FE",
  },
];
