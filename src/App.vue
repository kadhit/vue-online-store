<template>
  <div>
    <HeaderComponent />
    <HeroComponent />
    <div>
      <div class="hidden xl:block sticky top-24 left-40">
        <SidebarComponent />
      </div>
      <VisionMission />
      <ProductComponent />
      <TestimonialComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import VisionMission from "./components/VisionMission.vue";
import ProductComponent from "./components/ProductComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import TestimonialComponent from "./components/TestimonialComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    VisionMission,
    ProductComponent,
    FooterComponent,
    SidebarComponent,
    TestimonialComponent,
  },
};
</script>
