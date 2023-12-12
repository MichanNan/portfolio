import SectionDivider from "@/components/section-divider";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
