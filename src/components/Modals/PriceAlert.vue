<template>
  <div>
    <button
      @click="show"
      class="flex flex-row items-center justify-center space-x-2 px-5 border-r border-gray-500"
    >
      <VueIcons :name="'bell'" :size="'w-5 h-5'" />
      <span class="font-medium">Price Alert</span>
    </button>
    <modal
      name="price-alert-modal"
      :width="'640px'"
      :height="'auto'"
      :clickToClose="false"
    >
      <div
        class="w-[100%] overflow-y-auto flex flex-col items-center px-5 py-3"
      >
        <!-- Close Button -->
        <button
          @click="hide"
          class="cursor-pointer hover:bg-gray-100 rounded-full p-3 absolute top-3 right-3"
        >
          <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
        </button>
        <!-- Heading -->
        <h1 class="text-3xl font-bold text-black w-[100%]">Price alert</h1>
        <!-- Description -->
        <div
          class="my-5 grid grid-rows-2 grid-cols-12 place-items-center justify-content-center"
        >
          <img
            src="@/assets/img/angle1.png"
            alt="shoe"
            class="place-self-start row-span-2 col-span-2 w-[65%] rounded-lg bg-gray-100 p-2"
          />
          <p
            class="row-span-1 col-span-10 w-full h-full flex items-center font-semibold text-gray-700"
          >
            Nike Air Force 1 '07 M - White
          </p>
          <p
            class="row-span-1 col-span-10 w-full h-full flex items-center font-semibold text-gray-700"
          >
            £71.16
          </p>
        </div>
        <!-- Section 1 -->
        <div class="bg-gray-200 rounded-lg p-5 w-[100%]">
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-start space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center"
                >Notify me when the price has dropped</span
              >
              <input
                type="radio"
                checked="checked"
                name="radio"
                value="dropped"
                v-model="activeRadio"
                class="flex items-center"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <!-- Fieldset -->
          <fieldset
            v-if="activeRadio === 'dropped'"
            class="mt-2 w-[100%] border border-gray-300 rounded-lg bg-white"
          >
            <legend class="text-black text-xs ml-3">
              Minimum price reduction per message
            </legend>
            <div class="flex flex-row items-center justify-between p-2">
              <input
                type="text"
                placeholder="1"
                class="bg-transparent w-[100%] focus:border-0 focus:outline-0 focus:ring-0 pb-1 px-1"
              />
              <span class="pb-1 pr-1">£</span>
            </div>
          </fieldset>
        </div>
        <!-- Section 2 -->
        <div class="mt-3 bg-gray-200 rounded-lg p-5 w-[100%]">
          <!-- Radio -->
          <div
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center"
                >Notify me when my target price has been reached</span
              >
              <input
                type="radio"
                name="radio"
                value="reached"
                class="flex items-center"
                v-model="activeRadio"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
          <template v-if="activeRadio === 'reached'">
            <!-- Fieldset -->
            <fieldset
              class="mt-2 w-[100%] border border-gray-300 rounded-lg bg-white"
            >
              <legend class="text-black text-xs ml-3">Price</legend>
              <div class="flex flex-row items-center justify-between p-2">
                <input
                  type="text"
                  :placeholder="range"
                  class="bg-transparent w-[100%] focus:border-0 focus:outline-0 focus:ring-0 pb-1 px-1"
                />
                <span class="pb-1 pr-1">£</span>
              </div>
            </fieldset>
            <div class="w-[100%] flex flex-col items-center justify-center">
              <input
                v-model="range"
                type="range"
                min="1"
                max="73"
                class="w-[98%] mt-7"
              />
              <div
                class="mt-2 flex flex-row items-center justify-center w-[95%] space-x-20"
              >
                <span>1</span>
                <span>15</span>
                <span>29</span>
                <span>43</span>
                <span>57</span>
                <span>71</span>
              </div>
            </div>
            <div
              class="mt-5 w-[100%] flex flex-row items-center justify-start space-x-3"
            >
              <input
                type="checkbox"
                :style="{ accentColor: 'black' }"
                class="w-5 h-5"
              />
              <p>And each time the price is reduced by</p>
            </div>
            <!-- Fieldset -->
            <fieldset
              class="mt-2 w-[100%] border border-gray-300 rounded-lg bg-white"
            >
              <legend class="text-black text-xs ml-3">Price</legend>
              <div class="flex flex-row items-center justify-between p-2">
                <input
                  type="text"
                  placeholder="3"
                  class="bg-transparent w-[100%] focus:border-0 focus:outline-0 focus:ring-0 pb-1 px-1"
                />
                <span class="pb-1 pr-1">£</span>
              </div>
            </fieldset>
          </template>
        </div>
        <!-- Section 3 -->
        <div class="w-[100%]">
          <button
            type="button"
            @click="activeAdvanced = !activeAdvanced"
            class="my-3 flex flex-row space-x-2 items-center justify-start p-2 font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <span>Advanced settings</span>
            <VueIcons :name="'chevron-down'" :size="'w-4 h-4'" />
          </button>
          <div
            v-if="activeAdvanced"
            class="mb-5 w-[100%] p-5 bg-gray-200 rounded-lg"
          >
            <p class="mb-1">Exclude stores</p>
            <Multiselect
              class="bg-white rounded-lg w-[100%] border border-gray-300"
              v-model="excludedShops"
              :options="shops"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              label="name"
              track-by="name"
              :preselect-first="false"
            >
              {{ excludedShops }}
            </Multiselect>
            <!-- Checkboxes -->
            <div
              class="mt-5 w-[100%] flex flex-row items-center justify-start space-x-3"
            >
              <input
                type="checkbox"
                :style="{ accentColor: 'black' }"
                class="w-5 h-5"
              />
              <p>Include shipping cost</p>
            </div>
            <div
              class="mt-5 w-[100%] flex flex-row items-center justify-start space-x-3"
            >
              <input
                type="checkbox"
                :style="{ accentColor: 'black' }"
                class="w-5 h-5"
              />
              <p>Include international stores</p>
            </div>
            <div
              class="mt-5 w-[100%] flex flex-row items-center justify-start space-x-3"
            >
              <input
                type="checkbox"
                :style="{ accentColor: 'black' }"
                class="w-5 h-5"
              />
              <p>Be notified only when product is in stock</p>
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div
          class="w-[100%] place-self-start flex flex-row items-center space-x-5"
        >
          <button
            class="px-5 py-2 bg-primary text-white font-semibold rounded-lg"
          >
            Create price alert
          </button>
          <button
            @click="hide"
            class="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

import VueIcons from "@/utils/VueIcons.vue";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "PriceAlert",
  components: {
    VueIcons,
    Multiselect,
  },
  data() {
    return {
      range: 29,
      activeRadio: "dropped",
      activeAdvanced: false,
      excludedShops: [],
      shops: [
        { id: 1, name: "Kickz" },
        { id: 2, name: "OnBuy.com" },
        { id: 3, name: "Secret Sales" },
        { id: 4, name: "Nike UK" },
        { id: 5, name: "Size?" },
        { id: 6, name: "Hanon" },
        { id: 7, name: "GOAT" },
      ],
    };
  },
  methods: {
    show() {
      this.$modal.show("price-alert-modal");
    },
    hide() {
      this.$modal.hide("price-alert-modal");
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
  margin-bottom: 12px;
  cursor: pointer;
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

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}

/* When the radio button is checked, add a blue background */
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

input[type="range"] {
  background: black;
  cursor: pointer;
  accent-color: black;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 5px;
  border-radius: 0px;
}

input[type="range"]::-webkit-slider-thumb {
  margin-top: -6px;
}
</style>
