<template>
  <section class="bg-slate-200">
    <div
      class="container flex mx-auto p-20 w-screen min-h-screen justify-evenly items-center"
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
        class="hidden xl:flex w-1/4 py-80 rounded-full bg-center bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1617693322135-13831d116f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyOTJ8fHx8fHwyfHwxNjU4NDkyMTYz&ixlib=rb-1.2.1&q=80&w=1080');
        "
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
