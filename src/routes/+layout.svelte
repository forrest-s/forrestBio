<script>
  import { browser } from "$app/environment";

  // Styles
  import "$lib/styles/app.css";
  import "@fontsource/barlow/600.css";
  import "@fontsource/barlow/400.css";
  import "@fontsource/barlow/700.css";
  import "@fontsource/barlow/900.css";
  import "@fontsource/fraunces/900.css";
  import "@fontsource/fraunces/700.css";

  // components
  import Navbar from "$lib/components/Navbar.svelte";
  import FloaingHamburger from "../lib/components/FloaingHamburger.svelte";

  let topNavIsActive = false;
  let floatingNavIsActive = false;
  let scrollable = true;
  let width;

  // Reactive variables
  $: if (browser) document.body.classList.toggle("noscroll", !scrollable);

  // Handlers
  const handleMenu = (menu) => {
    // Which menu is active?
    if (menu === "top") topNavIsActive = !topNavIsActive;
    if (menu === "floating") floatingNavIsActive = !floatingNavIsActive;

    if (topNavIsActive === true || floatingNavIsActive === true) {
      scrollable = false;
    }
  };

  const closeMenu = () => {
    topNavIsActive = false;
    floatingNavIsActive = false;
    scrollable = true;
  };
</script>

<svelte:window bind:innerWidth={width} />

<div> 
  <Navbar {topNavIsActive} {closeMenu} {handleMenu} />
  <div class="relative md:hidden">
    <FloaingHamburger {handleMenu} {floatingNavIsActive} {closeMenu} />
  </div>
  <div class:blur={floatingNavIsActive || topNavIsActive}>
    <slot {topNavIsActive} />
  </div>
  <footer  class="bg-shadowColor py-16 flex flex-col gap-8 items-center">
    <div class="text-secondaryColor font-black text-2xl md:text-4xl tracking-wide">
      Forrest S
    </div>
    <ul class="flex gap-6">
      <li>
        <a href="/"><img src="/images/icon-linkedin.svg" alt="linkedin" /></a>
      </li>
      <li>
        <a href="/"
          ><img src="/images/icon-github.svg" alt="github" /></a
        >
      </li>
    </ul>
  </footer>
</div>
