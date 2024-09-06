import Image from "next/image";

const sponsors = [
  "ama.svg",
  "book.svg",
  "tri.svg",
  "train.svg",
  "cheap.svg",
  "mo.svg",
];

export default function HomeSponsor() {
  return (
    <section className="py-[70px] bg-[#F4F5F9] mt-7 lg:mt-0 overflow-hidden">
      <section className="flex items-center gap-7 justify-center animate-loop-scroll lg:animate-none">
        {sponsors.map((item) => (
          <Image
            key={item}
            className=" w-[150px] object-contain"
            alt={item.split(".")[0]}
            width={0}
            height={0}
            src={`/home/${item}`}
            sizes="100vw"
          />
        ))}
      </section>
    </section>
  );
}
