<template>
  <div
    style="width: 28rem; height: 10rem"
    class="flex shadow-2xl rounded-2xl m-6 p-6  bg-white"
  >
    <div class="self-center">
      <div class="bg-emerald p-10 mr-4 rounded-full bg-emerald-400"></div>
    </div>
    <div class="flex-col w-3/4 space-y-2">
      <h1 class="h-1/5 font-serif font-bold text-2xl">
        {{ name.toUpperCase() }}
      </h1>
      <p class="h-4/5 text-justify overflow-y-scroll container-snap">
        {{ testimonial }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    name: String,
    testimonial: String,
  },
};
</script>
