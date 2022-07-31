<template>
  <section
    id="contact-us"
    class="relative h-screen max-w-screen"
    :style="cssProps"
  >
    <div
      class="container flex flex-col mx-auto w-screen min-h-screen pt-20 pb-5 justify-center items-center space-y-5 text-white"
    >
      <h1 class="font-serif text-5xl font-bold">Got questions?</h1>
      <h4 class="text-xl text-bold">Send us an email</h4>
      <br />
      <h4 class="text-xl text-bold">Contact us</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
  props: {
    imgUrl: String,
    opacity: String,
    backgroundPosition: String,
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
#contact-us::before {
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
