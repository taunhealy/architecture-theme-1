import { client } from "@/lib/sanity";
import { homePageQuery, debugPageData } from "@/lib/queries";
import WorkSection from "@/app/sections/WorkSection";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";

interface HeroSectionProps {
  data: {
    heroWork: {
      coverImage: any;
      title: string;
      categories: Array<{
        title: string;
        slug: { current: string };
      }>;
    }[];
  };
}

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
    </>
  );
}
