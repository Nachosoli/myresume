import { profile } from "@/src/content/profile";
import Hero from "@/components/sections/Hero";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import ExecutiveImpact from "@/components/sections/ExecutiveImpact";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ParallelProjects from "@/components/sections/ParallelProjects";
import ThoughtLeadership from "@/components/sections/ThoughtLeadership";
import SkillsStack from "@/components/sections/SkillsStack";
import PhotosGallery from "@/components/sections/PhotosGallery";
import Contact from "@/components/sections/Contact";
import ChatWidget from "@/components/chat/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExecutiveSummary />
      <ExecutiveImpact />
      <ExperienceTimeline />
      <ParallelProjects />
      <ThoughtLeadership />
      <SkillsStack />
      <PhotosGallery />
      <Contact />
      <ChatWidget />
    </main>
  );
}

