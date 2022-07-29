<template>
  <section id="our-products" class="bg-white">
    <div class="md:container mx-auto p-20 w-screen min-h-screen">
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-serif font-bold text-5xl pb-16">Our Products</h1>
        <h4 class="text-xl pb-4">Know what you are looking for?</h4>
        <input
          v-model="searchQuery"
          type="text"
          class="rounded-full text-md mb-16 py-1 text-center w-1/4"
          placeholder="Search here"
        />
        <div class="flex flex-row flex-wrap mx-auto justify-center">
          <div v-for="(product, $index) in searchFilter" :key="$index">
            <ProductCard
              :images="product.url"
              :description="
                product.desc.charAt(0).toUpperCase() + product.desc.slice(1)
              "
              :price="product.price"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { data } from "../data/data";

export default {
  name: "ProductComponent",
  components: {
    ProductCard,
  },
  computed: {
    searchFilter() {
      if (this.searchQuery) {
        return this.products.filter((x) =>
          x.desc.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.products;
      }
    },
  },
  data() {
    return {
      searchQuery: "",
      products: data,
    };
  },
};
</script>
