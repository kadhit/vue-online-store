<template>
  <HeroComponent
    :imgUrl="url"
    :heading="header"
    :subheading="subheader"
    opacity="0.7"
    backgroundPosition="23% 22%"
  />
  <ProductComponent />
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import ProductComponent from "../components/ProductComponent.vue";

export default {
  name: "ShopView",
  components: {
    HeroComponent,
    ProductComponent,
  },
  data() {
    return {
      url: "https://images.unsplash.com/photo-1650614967039-1cb97737df86?ixid=MnwzNDM1MDB8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTg1MDE0NDc&ixlib=rb-1.2.1&auto=format",
      header: "Add to your collection",
      subheader:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquibusdam inventore, cupiditate sequi eum qui quod distinctio doloressapiente delectus officia corporis voluptates nihil nam, voluptatibusdebitis nulla ea ipsa! Praesentium reiciendis vero odio amet, qui underem eaque asperiores quia alias deserunt ab distinctio magni nesciuntnostrum culpa?",
    };
  },
};
</script>
