<template>
  <div class="w-screen p-11 bg-[#FFE6EE] grid grid-cols-12 gap-x-10 gap-y-5">
    <img
      src="@/assets/img/newsletter.svg"
      alt="newsletter"
      class="w-full h-full row-span-4 col-span-2"
    />
    <h1 class="text-3xl font-semibold row-span-1 col-span-10">
      Subscribe to our newsletter
    </h1>
    <p class="row-span-1 col-span-10 w-[35%]">
      We handpick the very best deals, trends and product news - making sure you
      never miss a thing.
    </p>
    <div
      class="w-[50%] place-self-start row-span-1 col-span-10 flex flex-row items-center justify-center space-x-3"
    >
      <input
        type="email"
        placeholder="Your email address"
        class="p-2 w-full rounded-lg border border-gray-400"
      />
      <button class="rounded-lg bg-primary font-semibold px-3 py-2 text-white">
        Subscribe
      </button>
    </div>
    <p class="row-span-1 col-span-4">
      Yes, I want to receive news and offers related to PriceRunner's product
      range, competitions and recommendations via email. I can withdraw my
      consent at any time. Read more in our
      <span class="font-bold underline hover:no-underline">Privacy Policy</span
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>
