<template>
  <div
    class="flex shadow-2xl rounded-2xl m-6 p-6 bg-white w-96 md:w-[30rem] h-40"
  >
    <div class="self-center">
      <div
        class="p-10 mr-4 rounded-full bg-gradient-to-tl from-emerald-900 via-emerald-700 to-emerald-500"
      ></div>
    </div>
    <div class="flex-col w-3/4 space-y-2">
      <h1 class="h-1/5 mb-3 font-serif font-bold text-2xl">
        {{
          name
            .split(" ")
            .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
            .join(" ")
        }}
      </h1>
      <p class="h-3/5 text-justify overflow-y-scroll container-snap">
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
