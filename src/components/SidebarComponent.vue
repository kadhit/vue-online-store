<template>
  <aside class="flex-col w-1/4 pl-60 py-2 text-slate-800 bg-transparent">
    <ul v-for="(item, $index) in menuItems" :key="$index">
      <a href="">
        <li class="py-2">{{ item }}</li>
      </a>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      menuItems: ["Vision", "Mission", "Our products", "Contact us"],
    };
  },
};
</script>
