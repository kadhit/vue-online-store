<template>
  <div class="container border shadow-2xl">
    
    
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    fetchApi() {
      const response = fetch(
        "https://unsplash.com/users/feeypflanzen/photos"
      ).then((response) => response.json());
      return response;
    },
  },
};
</script>
