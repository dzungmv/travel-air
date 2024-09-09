import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";

export default function HomeTripPlan() {
  return (
    <section className="bg-[#FBF6C7] pt-12 lg:pt-[100px]">
      <section className="max-w-secondary mx-auto flex flex-col lg:flex-row gap-7 md:gap-0 lg:gap-[201px]">
        <article className="space-y-6 lg:mt-[65px] px-4 lg:px-0">
          <h2 className="text-4xl lg:text-[40px] lg:leading-[60px] max-w-[340px]">
            Ready for 14 days Trip Plan
          </h2>

          <p className="max-w-[529px] text-gray-700">
            The secret of good trip planning is to plan in advance, and we
            can&apos;t get much more advanced than 14 days.{" "}
          </p>

          <Button className="w-fit">Go Plan</Button>
        </article>

        <Image
          alt="Plan AirBnB"
          src="/home/plan.png"
          className="lg:flex-1 w-full md:w-[60%] lg:w-auto ml-auto"
        />
      </section>
    </section>
  );
}
