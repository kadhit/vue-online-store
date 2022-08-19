<template>
  <section id="our-services" class="bg-slate-50">
    <div
      class="container flex mx-auto p-20 w-screen min-h-screen justify-center items-center"
    >
      <div class="flex flex-col">
        <h1 class="text-5xl text-center font-serif font-bold pb-16">
          Our Services
        </h1>
        <div class="flex flex-row flex-wrap justify-center">
          <div v-for="(service, $index) in services" :key="$index">
            <ServicesCard
              :name="service.name"
              :description="service.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServicesCard from "./cards/ServicesCard.vue";

export default {
  name: "ServicesComponent",
  components: {
    ServicesCard,
  },
  data() {
    return {
      services: [
        {
          name: "lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
      ],
    };
  },
};
</script>
