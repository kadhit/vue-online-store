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
        <div class="flex items-center justify-end space-x-12">
          <!-- Menu Items -->
          <div class="hidden md:flex space-x-12 font-sans font-normal">
            <a href="">About</a>
            <a href="">Our Products</a>
            <a href="">Contact</a>
          </div>
          <!-- Shop now Button -->
          <a
            href=""
            class="hidden md:inline py-3 px-6 bg-emerald-400 text-white font-semibold rounded-full"
            >Shop now</a
          >
        </div>
        <button
          @click="isToggled = !isToggled"
          class="block relative md:hidden"
        >
          <div v-if="isToggled === false"><HamburgerIcon /></div>
          <div v-else><CloseIcon /></div>
        </button>
      </div>
    </div>
    <div
      v-if="isToggled === true"
      class="block absolute index-10 w-screen h-screen bg-slate-800 top-20 right-0 md:hidden"
    >
      <div class="flex flex-col pt-8 space-y-8 justify-end items-center">
        <a href="">About</a>
        <a href="">Our Products</a>
        <a href="">Contact</a>
        <a
          href=""
          class="py-3 px-6 bg-emerald-400 text-white font-semibold rounded-full"
          >Shop now</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import HamburgerIcon from "./icons/HamburgerIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";

export default {
  name: "HeaderComponent",
  components: {
    HamburgerIcon,
    CloseIcon,
  },
  data() {
    return {
      isToggled: false,
    };
  },
};
</script>
