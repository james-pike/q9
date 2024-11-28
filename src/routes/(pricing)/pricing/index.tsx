import { component$ } from "@builder.io/qwik";
import Grid from "~/components/widgets/grid";
import Grid2 from "~/components/widgets/grid2";

import Pricing from "~/components/widgets/Pricing";




export default component$(() => {
  

 

  return (
   <div>
    <Grid/>
  
    <Pricing
  highlight="Pricing"
  title="Flexible Payment Options"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[  
    {},
  ] }
/>
   </div>
  );
});

