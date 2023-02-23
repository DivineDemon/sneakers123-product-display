<template>
  <nav
    class="w-screen grid grid-cols-12 gap-x-3 place-items-center justify-content-center py-4 px-10 border-b border-gray-200"
  >
    <!-- Focus Overlay -->
    <div
      v-if="search"
      class="absolute top-0 left-0 w-screen h-screen bg-overlay z-20"
    />
    <div class="w-[100%] col-span-6">
      <div
        class="grid grid-cols-12 gap-x-10 place-items-center justify-content-center"
      >
        <!-- Logo -->
        <div class="col-span-2">
          <router-link to="/">
            <span
              id="logo"
              class="text-primary text-2xl font-bold cursor-pointer"
              >PriceRunner</span
            >
          </router-link>
        </div>
        <!-- Search Bar -->
        <div
          class="w-[100%] col-span-10"
          :class="{ 'z-50 border border-gray-600 rounded-md': search }"
        >
          <div
            class="h-[50px] flex flex-row items-center justify-center border border-gray-300 rounded-md pl-3 py-3 bg-gray-100"
            :class="{ 'bg-white': search }"
          >
            <input
              type="text"
              placeholder="What are you looking for today ?"
              class="w-full bg-transparent focus:border-none focus:outline-0 focus:ring-0 focus-visible:border-none focus-visible:outline-0 focus-visible:ring-0"
              @focus="activateSearch"
              @blur="deactivateSearch"
            />
            <div
              class="bg-transparent"
              :class="{ 'mr-1 p-2 rounded-md bg-[#EB145F]': search }"
            >
              <VueIcons
                v-if="search"
                :name="'magnifyer'"
                :color="'white'"
                :size="'w-6 h-6'"
              />
              <VueIcons
                v-else
                :name="'magnifyer'"
                :color="'#EB145F'"
                :size="'w-6 h-6 mr-3'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1" />
    <!-- Nav List -->
    <div
      class="col-span-1 flex flex-row items-center justify-center space-x-1 cursor-pointer"
    >
      <span class="font-semibold">All Categories</span>
      <VueIcons :name="'chevron-down'" :color="'EB145F'" :size="'w-4 h-4'" />
    </div>
    <ul
      class="w-[100%] border-x border-gray-600 col-span-3 flex flex-row items-center justify-center space-x-5"
    >
      <li>
        <span class="font-semibold cursor-pointer">Expert reviews</span>
      </li>
      <li>
        <span class="font-semibold cursor-pointer">Sale</span>
      </li>
      <li>
        <span class="font-semibold cursor-pointer">Guides</span>
      </li>
      <li>
        <div
          class="flex flex-row items-center justify-center space-x-1 cursor-pointer"
        >
          <span class="font-semibold">Show more</span>
          <VueIcons
            :name="'chevron-down'"
            :color="'EB145F'"
            :size="'w-4 h-4'"
          />
        </div>
      </li>
    </ul>
    <span class="col-span-1 font-semibold cursor-pointer">Sign in</span>
  </nav>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "NavBar",
  data() {
    return {
      search: false,
    };
  },
  components: {
    VueIcons,
  },
  methods: {
    activateSearch() {
      this.search = true;
    },
    deactivateSearch() {
      this.search = false;
    },
  },
};
</script>
