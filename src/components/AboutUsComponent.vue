<template>
  <div id="about-us">
    <div
      class="container flex mx-auto w-screen min-h-screen justify-evenly items-center xl:items-start"
    >
      <div class="flex-col text-center w-4/5 lg:w-3/5 xl:pt-5 xl:w-1/3">
        <h1 class="font-serif font-bold text-5xl pt-20">About Us</h1>
        <blockquote class="relative font-sans pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
          debitis veniam nihil perferendis aperiam, velit dolore obcaecati
          libero? Odit quisquam alias, repellat fuga consequatur saepe est,
          autem obcaecati dolore id illo praesentium at aliquam vel voluptatum
          neque similique non eius magni animi, illum omnis enim! Voluptas, eos
          ex. Blanditiis ducimus et saepe, sit animi, doloribus quos libero
          ratione assumenda porro eum numquam consequuntur, commodi cum quasi
          accusamus tempora amet. Ad, quia temporibus? Inventore accusamus
          repellat debitis voluptates quia, esse nam. Aspernatur dicta debitis
          quisquam quibusdam amet a pariatur commodi molestias laboriosam nobis
          reprehenderit, cupiditate, modi quis obcaecati quam excepturi!
          Accusamus quidem, laborum molestias, facere, doloremque commodi cum
          ratione aliquid necessitatibus quas id vel placeat possimus soluta ea?
          Explicabo nam ab animi earum quas repellendus sapiente blanditiis est
          exercitationem nulla, ea nemo quos alias soluta adipisci! Eligendi,
          aut. Ex, nulla. Architecto quisquam suscipit labore aperiam voluptate
          soluta illum, numquam et.
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsComponent",
};
</script>

<style scoped>
blockquote::after,
blockquote::before {
  content: '"';
  position: absolute;
  font-size: 72pt;
  font-family: serif;
  opacity: 0.2;
  top: -5px;
}
blockquote::after {
  right: -40px;
}
blockquote::before {
  left: -40px;
}
</style>
