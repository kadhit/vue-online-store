<template>
  <HeroComponent
    :imgUrl="url"
    :heading="header"
    :subheading="subheader"
    opacity="0.70"
    backgroundPosition="80% 49%"
  />
  <div>
    <div class="hidden xl:block sticky top-24">
      <SidebarComponent />
    </div>
    <AboutUsComponent />
    <VisionMission />
    <TestimonialComponent />
    <ServicesComponent />
  </div>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import VisionMission from "../components/VisionMission.vue";
import TestimonialComponent from "../components/TestimonialComponent.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
import AboutUsComponent from "../components/AboutUsComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    SidebarComponent,
    VisionMission,
    TestimonialComponent,
    ServicesComponent,
    AboutUsComponent,
  },
  data() {
    return {
      url: "https://images.unsplash.com/photo-1628148996868-4db16e46e7aa?ixid=MnwzNDM1MDB8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTg1MDE0NDc&ixlib=rb-1.2.1&auto=format",
      header: "Bring nature into your home",
      subheader:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquibusdam inventore, cupiditate sequi eum qui quod distinctio doloressapiente delectus officia corporis voluptates nihil nam, voluptatibusdebitis nulla ea ipsa! Praesentium reiciendis vero odio amet, qui underem eaque asperiores quia alias deserunt ab distinctio magni nesciuntnostrum culpa?",
    };
  },
};
</script>
