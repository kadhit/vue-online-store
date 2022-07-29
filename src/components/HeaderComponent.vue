<template>
  <nav
    id="navbar"
    :class="navBarColor"
    class="fixed top-0 left-0 w-screen mx-auto p-4 z-20 ease-in-out"
  >
    <div class="container">
      <!-- Navbar Items -->
      <div
        class="flex items-center justify-between md:justify-between lg:justify-around px-6"
      >
        <!-- Logo -->
        <div class="text-5xl font-serif">
          <router-link :to="{ name: 'Home' }">
            <h1 class="font-light">hi<span class="font-bold">feey.</span></h1>
          </router-link>
        </div>
        <div class="flex items-center justify-end space-x-12">
          <!-- Menu Items -->
          <div class="hidden md:flex space-x-12 font-sans font-normal">
            <a href="">About</a>
            <a href="">Our Products</a>
            <a href="">Contact</a>
          </div>
          <!-- Shop now Button -->
          <router-link
            :to="{ name: 'Shop' }"
            class="hidden md:inline py-3 px-6 bg-emerald-500 text-white font-semibold rounded-full"
          >
            Shop now
          </router-link>
        </div>
        <button
          @click="isToggled = !isToggled"
          class="block relative md:hidden"
        >
          <div v-if="!isToggled"><HamburgerIcon /></div>
          <div v-else><CloseIcon /></div>
        </button>
      </div>
    </div>
    <!-- Responsive -->
    <div
      :class="[!isToggled ? '-translate-y-full' : 'translate-y-0', navBarColor]"
      class="block absolute -z-10 w-screen h-screen top-20 right-0 md:hidden"
    >
      <div
        :class="navBarMobileFont"
        class="flex flex-col -z-10 pt-8 space-y-8 justify-end items-center"
      >
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
      scrollPosition: null,
      viewportHeight: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    navBarColor() {
      return this.scrollPosition > this.viewportHeight * 0.9
        ? "bg-slate-800 text-slate-200 transition-all duration-500 ease-in-out"
        : "bg-transparent text-slate-800 transition-all duration-500 ease-in-out";
    },
    navBarMobileFont() {
      return this.scrollPosition > this.viewportHeight * 0.9
        ? ""
        : "font-semibold";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.viewportHeight = window.innerHeight;
  },
};
</script>
