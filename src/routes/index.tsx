import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";
import { useTheme } from "~/lib/provider";
import Pricing from "~/components/widgets/Pricing";
import Test2 from "~/components/widgets/Test2";
import HeroGrid from "~/components/widgets/HeroGrid";
import Grid2 from "~/components/widgets/grid2";
import Grid3 from "~/components/widgets/grid3";


export default component$(() => {

  const { themeSig } = useTheme();

  
  return (
    <>
    <div class={themeSig.value}>

<Grid3 highlight="Etchy Sketchy 0.1.0"
  title="Level up your UX Design Skills"
  subtitle="Master the art of analog design with the Etch A Sketch 2.0. Say goodbye to digital brushes and hello to endless frustration."
  items={[]}
  />
      <HeroGrid />
      
    {/* <Hero1  highlight="Contact Us"
  title="Get in Touch"
  subtitle="Tell us about your project, and we'll get back to you within 24 hours."
  
  items = {[{
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",  
  },
  {
    title: "Ready-to-Use Blank Slate",
    description: "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",  
  },
  {
    title: "Minimalist Best Practices",
    description: "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",  
  },
  {
    title: "Blazing Erase Speed",
    description: "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",  
  },
  {
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",    
  },

]}
  /> */}
    {/* <Hero /> */}
      <Features
  highlight="Features"
  title="What You Get with the Etchy Sketchy"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[
    {
      title: "Classic Knob Control Integration",
      description:
        "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",
      icon: IconBrandTailwind,
    },
    {
      title: "Ready-to-Use Blank Slate",
      description:
        "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",
      icon: IconApps,
    },
    {
      title: "Minimalist Best Practices",
      description:
        "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",
    },
    {
      title: "Blazing Erase Speed",
      description:
        "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",
      icon: IconRocket,
    },
    {
      title: "Zero SEO Required",
      description:
        "No need for search optimization here—your Etch A Sketch designs are fully analog and search engine oblivious. Pure, unfindable art.",
      icon: IconBrandGoogle,
    },
    {
      title: "Room for User Innovation",
      description:
        "Got ideas? Want to add undo functionality? A third knob? Join us in dreaming big, but remember, it’s the journey that counts!",
      icon: IconBulb,
    },
  ]}
/>
      <Steps />
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="mx-0" viewBox="0 0 1000 100" fill="#FF6464"><path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path></svg> */}


      <Pricing
  highlight="Pricing"
  title="Flexible Payment Options"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[
    {
      title: "Classic Knob Control Integration",
      description:
        "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",
      icon: IconBrandTailwind,
    },
    {
      title: "Ready-to-Use Blank Slate",
      description:
        "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",
      icon: IconApps,
    },
    {
      title: "Minimalist Best Practices",
      description:
        "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",
    },
    {
      title: "Blazing Erase Speed",
      description:
        "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",
      icon: IconRocket,
    },
    {
      title: "Zero SEO Required",
      description:
        "No need for search optimization here—your Etch A Sketch designs are fully analog and search engine oblivious. Pure, unfindable art.",
      icon: IconBrandGoogle,
    },
    {
      title: "Room for User Innovation",
      description:
        "Got ideas? Want to add undo functionality? A third knob? Join us in dreaming big, but remember, it’s the journey that counts!",
      icon: IconBulb,
    },
  ]}
/>
<Test2/>
      {/* <FAQs
  title="Frequently Asked Questions"
  subtitle="Answers to questions you didn't know you had about designing with an Etch A Sketch."
  highlight="FAQs"
  items={[
    {
      title: "What do I need to start?",
      description:
        "Two knobs, a steady hand, and an ocean of patience. Warning: artistic frustration levels may reach new heights.",
    },
    {
      title: "How do I create detailed designs with an Etch A Sketch?",
      description:
        "Simply turn the knobs with millimeter precision for each line segment. If you mess up... well, welcome to square one!",
    },
    {
      title: "Why does my artwork keep getting erased?",
      description:
        "Good question! Turns out an Etch A Sketch isn't very forgiving. But hey, practice makes... slightly better?",
    },
    {
      title: "What if my hand slips?",
      description:
        "Embrace the chaos! Call it 'abstract art' and tell everyone it's intentional. Alternatively, prepare for the 'shake and start over' technique.",
    },
    {
      title: "How can I add color to my designs?",
      description:
        "Oh, that's easy! Just imagine it really hard. Unfortunately, actual color is a bit beyond the Etch A Sketch's capabilities...for now.",
    },
    {
      title: "What’s the most advanced Etch A Sketch technique?",
      description:
        "Rumor has it, there's a mystical move called 'The Perfect Circle' that only a select few have mastered. But beware, trying it may result in endless squiggles and slight existential dread.",
    },
  ]}
/>
 */}

      {/* <Stats /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="mx-0" viewBox="0 0 1000 100" fill="#FF6464"><path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path></svg> */}
     
      {/* <Contact2  highlight="Contact Us"
  title="Get in Touch"
  subtitle="Tell us about your project, and we'll get back to you within 24 hours."
  
  items = {[{
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",  
  },
  {
    title: "Ready-to-Use Blank Slate",
    description: "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",  
  },
  {
    title: "Minimalist Best Practices",
    description: "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",  
  },
  {
    title: "Blazing Erase Speed",
    description: "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",  
  },
  {
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",    
  },

]}
  /> */}


<Grid2
  highlight="Features"
  title="What You Get with the Etchy Sketchy"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[
   
  ]}
/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "Etchy Sketchy",
      content: SITE.description,
    },
  ],
};
