<template>
  <HeaderComponent />
  <LoadingComponent width="100" height="100" borderWidth="8" v-if="isLoading" />
  <div v-else>
    <router-view />
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";

import router from "./router";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    router.beforeEach(() => {
      this.isLoading = true;
    });

    router.afterEach(() => {
      this.isLoading = false;
    });
  },
};
</script>
