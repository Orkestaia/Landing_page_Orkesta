import { getSectorContent } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string }>;
}) {
  const params = await searchParams;
  const sector = params.sector || "default";
  const content = getSectorContent(sector);

  return (
    <main className="bg-[var(--bg-base)] circuit-pattern min-h-screen overflow-x-hidden">
      <HeroSection content={content} />
    </main>
  );
}
