<template>
  <div>
    <button @click="show" class="flex flex-row items-center justify-center">
      <VueIcons
        @click="show"
        :name="'dots'"
        :color="'black'"
        :size="'p-1 w-16 h-16 rounded-lg border border-gray-400'"
      />
    </button>
    <modal
      name="version-modal"
      :width="'500px'"
      :height="'auto'"
      :clickToClose="false"
      :adaptive="true"
      :scrollable="true"
    >
      <h1
        class="px-3 py-4 w-[100%] text-center font-semibold text-gray-700 border-b border-gray-200"
      >
        Versions
      </h1>
      <!-- Close Button -->
      <button
        @click="hide"
        class="cursor-pointer hover:bg-gray-100 rounded-full m-1 p-3 absolute top-0 right-0"
      >
        <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
      </button>
      <p
        class="w-[28%] font-semibold text-black m-5 pb-2 place-self-start border-b-2 border-black"
      >
        Manufacturer Color
      </p>
      <ul
        class="w-[100%] h-[700px] overflow-y-auto px-5 pb-5 flex flex-col space-y-3"
      >
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
        <li class="grid grid-cols-12 rounded-lg border border-gray-300">
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="row-span-2 col-span-2 p-3 w-full h-full"
          />
          <p class="row-span-1 col-span-10 flex items-center pt-4">
            Black/Black
          </p>
          <p class="row-span-1 col-span-10 flex items-center pb-4">£95.44</p>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "ShoeVersions",
  components: {
    VueIcons,
  },
  methods: {
    show() {
      this.$modal.show("version-modal");
    },
    hide() {
      this.$modal.hide("version-modal");
    },
  },
};
</script>
