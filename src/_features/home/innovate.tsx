import { ArrowRight, Book, PcCase, Sun, Tv } from "lucide-react";

export default function HomeInnovate() {
  return (
    <section className="max-w-[876px] mx-auto px-4 py-[70px] lg:text-center">
      <h2 className="text-3xl lg:text-[40px] lg:leading-[60px] font-bold">
        Innovative Trip Planning
      </h2>
      <p className="lg:text-lg text-gray-500 mt-6 mb-[50px]">
        Our Vision is to revolutionize the way people travel by <br />{" "}
        introducing intelligent trip planning
      </p>

      <section className="grid grid-cols-[272px_272px_272px] overflow-x-scroll lg:overflow-hidden lg:grid-cols-3 gap-7 text-center">
        <article className="grid transition-all duration-300 ease-in-out lg:hover:shadow-lg lg:hover:cursor-pointer group place-items-center gap-4 p-9 py-[20px] bg-[#EEF9F2] rounded-lg">
          <div className="w-[48px] h-[48px] grid place-items-center rounded-full bg-[#58C27D]">
            <Sun size={24} className="text-white" />
          </div>

          <p className="text-gray-600 max-w-[200px]">
            Partner allows you to browse multiple carriers for travel.
          </p>

          <div className="flex text-sm items-center text-gray-600 gap-2 !mt-7">
            Learn more{" "}
            <ArrowRight
              size={16}
              className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </div>
        </article>

        <article className="grid transition-all duration-300 ease-in-out lg:hover:shadow-lg lg:hover:cursor-pointer group place-items-center gap-4 p-9 py-[20px] bg-[#FFF4EE] rounded-lg">
          <div className="w-[48px] h-[48px] grid place-items-center rounded-full bg-[#FA8F54]">
            <PcCase size={24} className="text-white" />
          </div>

          <p className="text-gray-600 max-w-[200px]">
            The website is a way for partners to communicate with their
            customers.
          </p>

          <div className="flex text-sm items-center text-gray-600 gap-2 !mt-7">
            Learn more{" "}
            <ArrowRight
              size={16}
              className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </div>
        </article>

        <article className="grid transition-all duration-300 ease-in-out lg:hover:shadow-lg lg:hover:cursor-pointer group place-items-center gap-4 p-9 py-[20px] bg-[#EBF1FF] rounded-lg">
          <div className="w-[48px] h-[48px] grid place-items-center rounded-full bg-[#3B71FE]">
            <Book size={24} className="text-white" />
          </div>

          <p className="text-gray-600 max-w-[160px]">
            The eBook Reader is a new way to look at e-books.
          </p>

          <div className="flex text-sm items-center text-gray-600 gap-2 !mt-7">
            Learn more{" "}
            <ArrowRight
              size={16}
              className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </div>
        </article>
      </section>
    </section>
  );
}
