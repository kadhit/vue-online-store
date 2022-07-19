<template>
  <nav
    class="fixed top-0 left-0 w-screen mx-auto p-4 bg-slate-800 text-slate-200"
  >
    <div class="container">
      <!-- Navbar Items -->
      <div
        class="flex items-center justify-between md:justify-around px-2 md:px-0"
      >
        <!-- Logo -->
        <div class="text-5xl font-serif">
          <h1 class="font-light">hi<span class="font-bold">there.</span></h1>
        </div>
        <!-- Menu Items -->
        <div class="hidden md:flex space-x-16 font-sans font-normal">
          <a href="">About</a>
          <a href="">Our Work</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
        </div>
        <button class="block md:hidden">
          <HamburgerIcon />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import HamburgerIcon from "./icons/HamburgerIcon.vue";

export default {
  name: "HeaderComponent",
  components: {
    HamburgerIcon,
  },
};
</script>
