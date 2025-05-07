import { client } from "@/lib/sanity";
import { HeroWorksQuery, aboutSectionQuery } from "@/lib/queries";
import WorkSection from "@/app/sections/WorkSection";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import WorkHeroSection from "@/app/sections/WorkHeroSection";

export default async function Home() {
  // Fetch data for each section independently
  const [heroWorks, about] = await Promise.all([
    client.fetch(
      HeroWorksQuery,
      {},
      {
        cache: "no-store",
        next: { tags: ["hero-works"] },
      }
    ),
    client.fetch(
      aboutSectionQuery,
      {},
      {
        cache: "no-store",
        next: { tags: ["about"] },
      }
    ),
  ]);

  // Extract all works from the hero works documents
  const allWorks = Array.isArray(heroWorks)
    ? heroWorks.flatMap((heroWork) => heroWork.works || [])
    : [];

  return (
    <main>
      <HeroSection data={{ heroWorks: allWorks }} />
      <AboutSection data={about} />
      <WorkHeroSection data={{ works: allWorks }} />
    </main>
  );
}
