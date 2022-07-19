<template>
  <div>
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>
