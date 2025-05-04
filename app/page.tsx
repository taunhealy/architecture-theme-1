import { client } from "@/lib/sanity";
import { homePageQuery, debugPageData } from "@/lib/queries";
import WorkSection from "@/app/sections/WorkSection";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import WorkHeroSection from "./sections/WorkHeroSection";

export default async function Home() {
  const data = await client.fetch(
    homePageQuery,
    {},
    {
      cache: "no-store",
      next: { tags: ["all-data"] },
    }
  );

  return (
    <>
      <HeroSection data={{ heroWorks: data.heroWorks }} />
      <AboutSection data={data.about} />
      <WorkHeroSection data={data.work} />
    </>
  );
}
