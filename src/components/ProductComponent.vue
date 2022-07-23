<template>
  <section class="container flex mx-auto p-20 w-screen min-h-screen">
    <div
      class="flex flex-col mx-auto w-screen min-h-screen justify-center items-center"
    >
      <h1 class="font-serif font-bold text-5xl pb-16">Our Products</h1>
      <h4 class="text-xl pb-4">Know what you are looking for?</h4>
      <input
        v-model="regex"
        type="text"
        class="rounded-full text-md mb-16 py-1 text-center w-1/4"
        placeholder="Search here"
      />
      <p class="text-xl">{{ regex }}</p>
      <div class="flex flex-row flex-wrap mx-auto justify-center">
        <div v-for="(product, $index) in products" :key="$index">
          <ProductCard
            :images="product.url"
            :description="
              product.desc.charAt(0).toUpperCase() + product.desc.slice(1)
            "
            :price="product.price"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductComponent",
  components: {
    ProductCard,
  },
  methods: {
    searchEngine() {
      return [
        ...this.products.filter(
          (x) => this.regex && `/${this.regex}+/gi`.test(x.desc)
        ),
      ];
    },
  },
  data() {
    return {
      regex: "",
      products: [
        {
          url: "https://images.unsplash.com/photo-1658309834130-e6234acdf154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxfHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Man holding a Snake plant on his shoulder",
          price: 11,
          likes: 26,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833590-11b5ba06fa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Hand holding up a hoya kerii in a pink pot.",
          price: 22,
          likes: 3,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833730-126caf501342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Man holding a Snake plant ",
          price: 17,
          likes: 21,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833628-5181b14024e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Two hands holding a Philodendron Prince of Orange",
          price: 23,
          likes: 2,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833667-6f96ac9f4b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Two hands holding a green/yellow sansevieria and a green one",
          price: 26,
          likes: 21,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833607-4de9956d0bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw2fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Hand holding an Aglaonema Jungle Red in a pink pot",
          price: 19,
          likes: 44,
        },
        {
          url: "https://images.unsplash.com/photo-1658309833602-854ab8e1d9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Hand holding a scindapsus plant in a white pot",
          price: 7,
          likes: 5,
        },
        {
          url: "https://images.unsplash.com/photo-1655382286493-9035b77d7016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "An Epipremnum pinnatum blue form balanced on a shoe of a man",
          price: 15,
          likes: 31,
        },
        {
          url: "https://images.unsplash.com/photo-1655382277815-a109943ead8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1ODUxNDE5MQ&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A scindapsus pictus in front of a white wall, two hands holding the tendrils",
          price: 11,
          likes: 35,
        },
        {
          url: "https://images.unsplash.com/photo-1655382301936-01094b419d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Three Plants in black pots hold by hands",
          price: 18,
          likes: 26,
        },
        {
          url: "https://images.unsplash.com/photo-1655382355719-ddb73fce70a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxMXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A man holding a leaf of an alocasia zebrina in front of his face",
          price: 26,
          likes: 18,
        },
        {
          url: "https://images.unsplash.com/photo-1655382355596-7bf7012a92f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Very special and beautiful alocasia zebrina",
          price: 4,
          likes: 30,
        },
        {
          url: "https://images.unsplash.com/photo-1655382334971-ce8fd295c433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Two aglaonemas hold by two hands\n",
          price: 25,
          likes: 29,
        },
        {
          url: "https://images.unsplash.com/photo-1654596690927-61346c262316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A woman knotting a macrame plant holder.",
          price: 6,
          likes: 13,
        },
        {
          url: "https://images.unsplash.com/photo-1654595525723-0d61e31085b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A close shot of an indoor plant String of Hearts in a cocount pot. ",
          price: 23,
          likes: 4,
        },
        {
          url: "https://images.unsplash.com/photo-1654595517361-40b28addc097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxNnx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A close shot of a spathiphyllum wallisii with variegation. Very special and rare plant.",
          price: 4,
          likes: 8,
        },
        {
          url: "https://images.unsplash.com/photo-1654595531945-9e0e552cabc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "This is a calathea rufibarba. Her leaves are velvety and soft.",
          price: 16,
          likes: 21,
        },
        {
          url: "https://images.unsplash.com/photo-1654595525684-c691117894ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A close shot of an indoor plant String of Hearts in a cocount pot. ",
          price: 19,
          likes: 2,
        },
        {
          url: "https://images.unsplash.com/photo-1654595538764-95a1eeb3fced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A cordyline fruticosa in a black pot. Two hands hold the plant in front of a white wall. ",
          price: 6,
          likes: 22,
        },
        {
          url: "https://images.unsplash.com/photo-1654595510800-035b282b71f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "An Aglaonema Orange Star in a black pot. Two hands are holding the pot up high in front of a white wall.",
          price: 16,
          likes: 28,
        },
        {
          url: "https://images.unsplash.com/photo-1654595525745-e395a8e1e29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyMXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Two String of Hearts in coconut pots are hanging down. Two hands hold the strings.",
          price: 8,
          likes: 3,
        },
        {
          url: "https://images.unsplash.com/photo-1653986459460-4f71f570425c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Woman with pink hair holding an alocasia frydek in front of her",
          price: 17,
          likes: 26,
        },
        {
          url: "https://images.unsplash.com/photo-1653986459492-83cb2a112eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Detail of an alocasia frydek leaf",
          price: 20,
          likes: 1,
        },
        {
          url: "https://images.unsplash.com/photo-1652367053132-0e6d38e331a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "propagation of plants Philodendron lemon lime",
          price: 6,
          likes: 3,
        },
        {
          url: "https://images.unsplash.com/photo-1652367038415-700e49bfd6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "A Philodendron micans in an black pot with a lot of leaves",
          price: 27,
          likes: 23,
        },
        {
          url: "https://images.unsplash.com/photo-1651760548494-4b906ed1600c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyNnx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "a blooming sansevieria in front of a white background",
          price: 23,
          likes: 3,
        },
        {
          url: "https://images.unsplash.com/photo-1651760548583-2d96663a7fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Plants with colorful leaves such as aglaonema and hoya wayetii tricolor. ",
          price: 22,
          likes: 4,
        },
        {
          url: "https://images.unsplash.com/photo-1651760548383-b04aa6abf460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "macro shot of a succulent baby plant",
          price: 27,
          likes: 4,
        },
        {
          url: "https://images.unsplash.com/photo-1651760548421-f9c28517a955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "three plants in anthrazit pots, a strelitzia, a rapunzel, a lily",
          price: 14,
          likes: 26,
        },
        {
          url: "https://images.unsplash.com/photo-1651760548396-14c24f7d1ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM1MDB8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTg1MTQxOTE&ixlib=rb-1.2.1&q=80&w=1080",
          desc: "Baby plants succulents in pink pots",
          price: 22,
          likes: 15,
        },
      ],
    };
  },
};
</script>
