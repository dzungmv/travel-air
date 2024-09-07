import HomeBooking from "@/_features/home/booking";
import HomeHero from "@/_features/home/hero";
import HomeInnovate from "@/_features/home/innovate";
import HomeSponsor from "@/_features/home/sponsor";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSponsor />
      <HomeInnovate />
      <HomeBooking />
    </>
  );
}
