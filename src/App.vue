<template>
  <div class="bg-slate-100">
    <HeaderComponent />
    <HeroComponent />
    <VisionMission />
    <ProductComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import VisionMission from "./components/VisionMission.vue";
import ProductComponent from "./components/ProductComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    VisionMission,
    ProductComponent,
    FooterComponent,
  },
  setup() {

  }
};
</script>
