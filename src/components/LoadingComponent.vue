<template>
  <div class="flex bg-gray-100 w-full h-screen justify-center items-center">
    <div
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${borderWidth}px`,
      }"
      class="border-t-slate-800 border-solid rounded-full animate-spin"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    width: String,
    height: String,
    borderWidth: String,
  },
};
</script>
