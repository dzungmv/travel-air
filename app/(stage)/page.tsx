import HomeAirTrav from "@/_features/home/air-trav";
import HomeBooking from "@/_features/home/booking";
import HomeDiscover from "@/_features/home/discover";
import HomeEasyBooking from "@/_features/home/easy-trip";
import HomeHero from "@/_features/home/hero";
import HomeInnovate from "@/_features/home/innovate";
import HomeSponsor from "@/_features/home/sponsor";
import HomeWorks from "@/_features/home/works";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSponsor />
      <HomeInnovate />
      <HomeBooking />
      <HomeEasyBooking />
      <HomeWorks />
      <HomeAirTrav />
      <HomeDiscover />
    </>
  );
}
