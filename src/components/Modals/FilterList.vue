<template>
  <div>
    <button @click="show" class="bg-white rounded-md p-2 shadow-lg">
      <VueIcons :name="'adjustments'" :size="'w-6 h-6'" />
    </button>
    <modal
      name="filter-list-modal"
      :width="'500px'"
      :height="'auto'"
      :clickToClose="false"
      :adaptive="true"
      :scrollable="true"
    >
      <h1
        class="px-3 py-4 w-[100%] text-center font-semibold text-gray-700 border-b border-gray-200"
      >
        Filter
      </h1>
      <!-- Close Button -->
      <button
        @click="hide"
        class="cursor-pointer hover:bg-gray-100 rounded-full m-1 p-3 absolute top-0 right-0"
      >
        <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
      </button>
      <!-- Store Options -->
      <p class="w-[28%] font-semibold text-black mx-5 mt-5 place-self-start">
        Store Options
      </p>
      <div
        class="m-5 pb-5 flex flex-col space-y-5 items-start border-b border-gray-200"
      >
        <div class="flex flex-row items-center space-x-3">
          <input
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Only in stock</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Price incl. delivery</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Show all variants</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Show unverified stores</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            disabled
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <div class="flex flex-row items-center space-x-3">
            <span class="text-gray-400">Only authorized sellers</span>
            <VueIcons
              :name="'shield'"
              :size="'w-8 h-8 text-blue-500 rounded-full p-2 bg-gray-100'"
            />
          </div>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <div class="flex flex-col">
            <span>International store</span>
            <p class="text-xs">
              <span class="text-xs text-gray-500">Price from</span> £96.76
            </p>
          </div>
        </div>
      </div>
      <!-- Delivery Options -->
      <p class="w-[28%] font-semibold text-black mx-5 mb-5 place-self-start">
        Delivery Options
      </p>
      <div class="m-5 pb-5 flex flex-col space-y-5 items-start">
        <div class="flex flex-col items-center space-y-3">
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center">Show all</span>
              <input
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center">Home delivery</span>
              <input
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label
              class="container flex flex-row items-center justify-start cursor-not-allowed"
            >
              <span class="text-[16px] flex items-center text-gray-400"
                >Store pickup</span
              >
              <input
                disabled
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label
              class="container flex flex-row items-center justify-start cursor-not-allowed"
            >
              <span class="text-[16px] flex items-center text-gray-400"
                >Storage box</span
              >
              <input
                disabled
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center cursor-not-allowed"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center">Service point</span>
              <input
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
        </div>
      </div>
      <!-- Button -->
      <div class="w-[100%] p-5 border-t border-gray-300">
        <button
          class="w-[100%] bg-primary text-white rounded-lg font-semibold p-3"
        >
          Show results
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "FilterList",
  components: {
    VueIcons,
  },
  methods: {
    show() {
      this.$modal.show("filter-list-modal");
    },
    hide() {
      this.$modal.hide("filter-list-modal");
    },
  },
};
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 50%;
}

/* On mouse-over, add a white background color */
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}

/* When the radio button is checked, add a black background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
}
</style>
