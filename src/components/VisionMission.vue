<template>
  <section class="bg-slate-200">
    <div
      class="container flex mx-auto p-6 w-screen min-h-screen justify-evenly items-center"
    >
      <div class="flex-col text-center w-4/5 xl:w-1/3">
        <h1 class="font-serif font-bold text-5xl">Vision</h1>
        <hr />
        <blockquote class="relative font-sans pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          inventore atque omnis, dolorem labore praesentium dolorum? Facere
          inventore labore, repellat nemo repellendus similique sint recusandae
          voluptate pariatur tempore dicta, quis ad enim doloribus a eveniet
          atque expedita accusantium cum. Accusantium dolorem quia ipsam illo
          tenetur eaque suscipit, cum est ratione!
        </blockquote>
        <h1 class="font-serif md:pt-20 font-bold text-5xl pt-10">Mission</h1>
        <hr />
        <blockquote class="relative font-sans pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          inventore atque omnis, dolorem labore praesentium dolorum? Facere
          inventore labore, repellat nemo repellendus similique sint recusandae
          voluptate pariatur tempore dicta, quis ad enim doloribus a eveniet
          atque expedita accusantium cum. Accusantium dolorem quia ipsam illo
          tenetur eaque suscipit, cum est ratione!
        </blockquote>
      </div>
      <div
        class="hidden xl:block bg-emerald-400 w-1/4 py-96 rounded-full"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VisionMission",
};
</script>

<style scoped>
blockquote::after,
blockquote::before {
  content: '"';
  position: absolute;
  font-size: 72pt;
  font-family: serif;
  opacity: 0.2;
  top: -5px;
}
blockquote::after {
  right: -40px;
}
blockquote::before {
  left: -40px;
}
</style>
