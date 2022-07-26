<template>
  <section class="bg-slate-200">
    <div class="container mx-auto p-20 w-screen min-h-screen">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-5xl font-serif font-bold pb-16">Testimonials</h1>
        <div class="flex flex-row flex-wrap mx-auto justify-center">
          <div v-for="(testimonial, $index) in testimonials" :key="$index">
            <TestimonialCard
              :name="testimonial.name"
              :testimonial="testimonial.comment"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";

export default {
  name: "TestimonialComponent",
  components: {
    TestimonialCard,
  },
  data() {
    return {
      testimonials: [
        {
          name: "lorem ipsum",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
        {
          name: "lorem ipsum",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam velit! Sit laboriosam eveniet, ratione in sint sed fuga? Illum delectus itaque fugit! Commodi sapiente quae beatae ipsum animi ratione.",
        },
      ],
    };
  },
};
</script>
