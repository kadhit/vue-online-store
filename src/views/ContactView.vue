<template>
  <ContactComponent :imgUrl="url" opacity="0.70" backgroundPosition="50% 40%" />
</template>

<script>
import ContactComponent from "../components/ContactComponent.vue";

export default {
  name: "ContactView",
  components: {
    ContactComponent,
  },
  data() {
    return {
      url: "https://images.unsplash.com/photo-1624793657735-48671ba90575?ixid=MnwzNDM1MDB8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTg1MDE0NDc&ixlib=rb-1.2.1&auto=format",
    };
  },
};
</script>
