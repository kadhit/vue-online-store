<template>
  <section
    id="hero"
    class="bg-top bg-no-repeat"
    style="
      background-postion: top;
      background-image: url('https://images.unsplash.com/photo-1596536557923-4d4bd6294f79?ixid=MnwzNDM1MDB8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTg1MDE0NDc&ixlib=rb-1.2.1');
    "
  >
    <div
      class="container flex flex-col text-center h-screen w-screen items-center justify-center mx-auto px-6 md:w-3/4 lg:w-6/12 xl:w-4/12"
    >
      <h1 class="py-6 font-serif font-bold text-7xl xl:text-8xl w-full">
        Bring nature into your home.
      </h1>
      <h2 class="py-6 font-sans font-normal text-base md:text-xl w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis
        quibusdam inventore, cupiditate sequi eum qui quod distinctio dolores
        sapiente delectus officia corporis voluptates nihil nam, voluptatibus
        debitis nulla ea ipsa! Praesentium reiciendis vero odio amet, qui unde
        rem eaque asperiores quia alias deserunt ab distinctio magni nesciunt
        nostrum culpa?
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
  props: {
    imgUrl: String,
    heading: String,
    subheading: String,
  },
};
</script>
