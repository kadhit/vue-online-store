<template>

</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      photos: [],
    };
  },
  computed: {
    const response = fetch("https://unsplash.com/users/feeypflanzen/photos").then(response.json());
    console.log(response);
  },
};
</script>
