import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { CoverImage } from "./coverImage";
import { HeroBackground } from "./HeroBackground";

export default component$(() => {
  return (
        <div>
<section class="relative md:-mt-[76px] not-prose flex items-center justify-center h-[100vh]">
  
  <div class="absolute inset-0 -mt-28 overflow-hidden -z-10">
   <img width={600} height={600} src={HeroBackground} alt="Background cover image" class="object-cover w-full h-full" />
  </div>

  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
    <div class="lg:basis-1/2 pb-10 md:pb-16">
      <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
        Draw Outside the Lines with<br class="hidden lg:block" />{" "}
         <span class="text-primary-500">Etchy Sketchy</span> 
      </h1>
      <p class="text-xl text-muted mb-6 dark:text-slate-300 max-w-3xl mx-auto lg:max-w-none">
        Scribble your way through creativity. Master the lines, embrace the quirks, and turn every twist into a masterpiece— art’s all about the journey, not the perfect line.
      </p>
      <div class=" sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
        <a class="btn btn-primary w-full" href="https://github.com/onwidget/qwind" target="_blank" rel="noopener">Start Etching</a>
        <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn More</button>
      </div>
    </div>
    <div class="lg:basis-1/2">
       <Image
        src={CoverImage}
        alt="Background cover image"
        width={958} // adjust width to your layout needs
        height={792} // adjust height for your layout
        class="object-cover w-full h-full" 
        priority="true"
      />
    </div>
  </div>
</section>
    </div>
  );
});


  