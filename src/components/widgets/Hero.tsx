import { component$, useComputed$, useSignal } from "@builder.io/qwik";


const colorThemes = [
  { name: "light-blue", primary: "1467efb" },
  { name: "red", primary: "fc3d39" },
  { name: "green", primary: "1F7735" },
  { name: "yellow", primary: "eab308" },
  { name: "indigo", primary: "4f46e5" },
  { name: "violet", primary: "8585ff" },
  { name: "orange", primary: "fd9426" },
  { name: "opal", primary: "9fc5e8" },
  { name: "forest-green", primary: "228B22" },
];

export default component$(() => {



const themeSig = useSignal<string>("light-blue");

// Computed signal to derive the primary color based on the current theme
const primaryColor = useComputed$(() => {
  const currentTheme = colorThemes.find((theme) => theme.name === themeSig.value);
  return currentTheme ? currentTheme.primary : "000000"; // Default to black if no match
});

  return (
        <div>
<section class="relative md:-mt-[76px] not-prose bg-primary flex items-center justify-center h-[75vh]">
  
<div class="absolute inset-0 -mt-28 overflow-hidden z-5">
          <img
            width="600"
            height="600"
            src={`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20485%20861%22%20preserveAspectRatio%3D%22xMidYMid%22%20width%3D%22485%22%20height%3D%22861%22%20style%3D%22shape-rendering%3A%20auto%3B%20display%3A%20block%3B%20background%3A%20rgb(255%2C%20255%2C%20255)%3B%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20style%3D%22transform%3Atranslate(242.5px%2C430.5px)%20scale(1%2C-1)%20translate(-242.5px%2C-430.5px)%22%3E%3Cdefs%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-bk-jg6mq6wfbyj%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%20stop-color%3D%22%23${encodeURIComponent(primaryColor.value)}%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.7375%22%20stop-opacity%3D%221%22%20stop-color%3D%22%23${encodeURIComponent(primaryColor.value)}%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-oersv4ab58c%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23${encodeURIComponent(primaryColor.value)}%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.37%22%20stop-color%3D%22%23${encodeURIComponent(primaryColor.value)}%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23${encodeURIComponent(primaryColor.value)}%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23lg-bk-jg6mq6wfbyj)%22%20height%3D%22861%22%20width%3D%22485%22%20y%3D%220%22%20x%3D%220%22%3E%3C%2Frect%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20507.99C242.5%20507.99%20242.5%20610.36%20485%20610.36C727.5%20610.36%20727.5%20507.99%20970%20507.99C1212.5%20507.99%201212.5%20610.36%201455%20610.36C1697.5%20610.36%201697.5%20507.99%201940%20507.99L1940%20861%20L0%20861%20Z%22%3E%3CanimateTransform%20values%3D%22-970%200%3B0%200%22%20begin%3D%220s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3C%2Fg%3E%3C/g%3E%3C/svg%3E`}
            alt="Background"
          />
        </div>
  
  <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
    <div class="lg:basis-1/2 pb-10 md:pb-16">
      <h1 class="text-6xl md:text-6xl text-white sm:text-gray-900 dark:text-gray-900 font-bold leading-tighter tracking-tighter mb-4 font-heading">
      Build A Better<br class="hidden lg:block" />{" "}
         <span class="text-primary-500">Website</span> 
      </h1>
      <p class="text-xl text-muted mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
        Master the lines, embrace the quirks, and turn every twist into a masterpiece— becauuse art's all about the journey, not the perfect line.
      </p>
      <div class=" sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
        <a class="btn bg-primary-500 text-white font-bold w-full" href="https://aymansor.github.io/Etch-a-Sketch/" target="_blank" rel="noopener">Start Etching</a>
        <button class="btn w-full bg-gray-50">Learn More</button>
      </div>
    </div>
   
    
  </div>
</section>
 <div class="lg:basis-1/2">

    </div>
    </div>
  );
});


  