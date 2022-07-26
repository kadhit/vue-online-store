<template>
  <section>
    <div
      style="width: 14rem; height: 24rem"
      class="container flex flex-col shadow-2xl m-6 rounded-xl text-center space-y-5 font-sans justify-between hover:scale-125 hover:transition-all hover:duration-300 duration-300"
    >
      <div
        class="w-full h-2/3 bg-cover bg-bottom rounded-xl"
        :style="backgroundImage(images)"
      ></div>
      <div class="flex flex-col p-4 pt-0 h-1/3 justify-between items-center">
        <p
          class="h-3/5 leading-tight font-light overflow-y-scroll container-snap"
        >
          {{ description }}
        </p>
        <div class="flex flex-row space-x-2 items-center">
          <p class="text-lg font-bold">${{ price.toFixed(2) }}</p>
          <a
            href=""
            class="bg-slate-800 rounded-full p-3 py-1 text-white text-sm font-light"
            >+</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    images: String,
    description: String,
    price: Number,
    likes: Number,
  },
  methods: {
    backgroundImage(image) {
      return {
        "background-image": `url(${image})`,
      };
    },
  },
};
</script>
