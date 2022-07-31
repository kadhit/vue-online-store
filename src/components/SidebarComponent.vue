<template>
  <aside class="flex-col w-1/5 pl-60 py-2 text-slate-800 bg-transparent">
    <p class="font-semibold py-2">Table of Contents</p>
    <hr />
    <ul v-for="(item, $index) in menuItems" :key="$index">
      <li class="py-2">
        <router-link :to="{ name: 'Home', hash: `${item.id}` }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      menuItems: [
        { name: "Vision", id: "#vision" },
        { name: "Mission", id: "#mission" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "Our Services", id: "#our-services" },
      ],
    };
  },
};
</script>
