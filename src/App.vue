<template>
  <div class="bg-slate-100">
    <HeaderComponent />
    <HeroComponent />
    <VisionMission />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import VisionMission from "./components/VisionMission.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    VisionMission,
  },
  mounted() {
    const observer = new IntersectionObserver();
  },
};
</script>
