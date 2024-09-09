import { Boxes, Gift, Star, UserRound } from "lucide-react";

export default function HomeAirTrav() {
  return (
    <section className="bg-primary relative">
      <section className="mx-auto max-w-[1030px] py-[70px] px-4 lg:text-center">
        <h2 className="text-4xl lg:text-[40px] lg:leading-[60px] font-semibold text-white mb-4">
          Airtrav Best Services{" "}
        </h2>
        <p className="text-white text-lg">
          Love by airtrave all services and amazine trip booked plane
        </p>

        <ul className="grid overflow-x-auto grid-cols-[231px_231px_231px_231px] lg:grid-cols-4 gap-9 mt-[60px]">
          {airs.map((item) => (
            <li
              className="bg-white p-[25px] rounded-lg px-[28px] grid place-items-center"
              key={item.title}
            >
              <div
                className="grid place-items-center size-10 mb-4 rounded-md text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.des}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

const airs = [
  {
    title: "100,000",
    des: "Cities all over the world",
    icon: <Boxes size={18} />,
    color: "#3B71FE",
  },
  {
    title: "100",
    des: "Gift card over the world",
    icon: <Gift size={18} />,
    color: "#58C27D",
  },
  {
    title: "1,000",
    des: "Guest referrals over",
    icon: <UserRound size={18} />,
    color: "#FA8F54",
  },
  {
    title: "5 stars",
    des: "Reviews Customer",
    icon: <Star size={18} />,
    color: "#FFD166",
  },
];
