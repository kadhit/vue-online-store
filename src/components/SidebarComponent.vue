<template>
  <aside>
    <div
      class="container flex-col w-full p-6 top-24 z-50 text-slate-800 bg-transparent justify-start"
    >
      <ul v-for="(item, $index) in menuItems" :key="$index">
        <a href="">
          <li class="py-2">{{ item }}</li>
        </a>
      </ul>
    </div>
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
