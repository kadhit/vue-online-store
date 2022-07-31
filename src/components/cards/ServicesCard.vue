<template>
  <div
    class="flex shadow-2xl rounded-2xl m-6 p-6 bg-white w-96 md:w-[30rem] h-40"
  >
    <div class="flex-col w-3/4 space-y-2">
      <h1 class="h-1/5 mb-3 font-serif font-bold text-2xl">
        {{ name }}
      </h1>
      <p class="h-3/5 text-justify overflow-y-scroll container-snap">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  props: {
    name: String,
    description: String,
  },
};
</script>
