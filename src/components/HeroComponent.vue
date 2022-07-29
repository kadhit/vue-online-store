<template>
  <section id="hero" class="relative h-screen max-w-screen" :style="cssProps">
    <div
      class="container flex flex-col text-center h-screen w-screen items-center justify-center mx-auto px-6 md:w-3/4 lg:w-6/12 xl:w-4/12"
    >
      <h1 class="py-6 font-serif font-bold text-7xl xl:text-8xl w-full">
        {{ heading }}
      </h1>
      <h2 class="py-6 font-sans font-normal text-base md:text-xl w-full">
        {{ subheading }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
  props: {
    imgUrl: String,
    opacity: String,
    backgroundPosition: String,
    heading: String,
    subheading: String,
  },
  computed: {
    cssProps() {
      return {
        "--bg-opacity": this.opacity,
        "--bg-position": this.backgroundPosition,
        "--bg-url": `url(${this.imgUrl})`,
      };
    },
  },
};
</script>

<style scoped>
#hero::before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
  opacity: var(--bg-opacity);
  background-image: var(--bg-url);
  background-repeat: no-repeat;
  background-position: var(--bg-position);
  background-size: auto;
}
</style>
