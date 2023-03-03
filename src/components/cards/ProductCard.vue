<template>
  <div
    class="w-[100%] grid grid-cols-12 place-items-center justify-content-center"
  >
    <!-- Angle Shots -->
    <ul
      class="h-[300px] col-span-1 flex flex-col items-start justify-start space-y-3"
    >
      <li v-for="color in shoeColors" :key="color.id">
        <img
          :src="require('@/assets/img/' + color.img)"
          :alt="color.img"
          class="p-1 w-12 h-12 rounded-lg border border-gray-400"
        />
      </li>
    </ul>
    <!-- Main Shot -->
    <div class="col-span-2 w-full h-full bg-gray-100 p-2 rounded-3xl relative">
      <img
        src="@/assets/img/angle1.png"
        alt="main-shot"
        class="p-2 w-full h-full"
      />
      <p
        class="absolute top-4 left-4 px-2 py-1 rounded-md text-sm font-medium text-red-600 bg-red-200"
      >
        -20%
      </p>
      <div class="absolute top-2 right-2 p-2 bg-white rounded-full">
        <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
      </div>
    </div>
    <!-- Description + Colors -->
    <div
      class="col-span-8 w-full h-full ml-24 flex flex-col space-y-5 items-start justify-left"
    >
      <h1 class="text-3xl text-gray-800 font-bold">
        Nike Air Force 1 '07 M - White
      </h1>
      <ul class="flex flex-row items-center justify-left text-black">
        <li
          class="flex flex-row items-center justify-center space-x-2 pr-5 border-r border-gray-500"
        >
          <VueIcons :name="'star'" :color="'#F7A301'" :size="'w-6 h-6'" />
          <span class="font-semibold">4.6</span>
        </li>
        <li>
          <ShoeRating />
        </li>
        <li>
          <PriceAlert />
        </li>
        <li class="flex flex-row items-center justify-center space-x-2 px-5">
          <VueIcons :name="'scale'" :size="'w-5 h-5'" />
          <span class="font-medium">Compare</span>
        </li>
      </ul>
      <p class="w-[65%]">
        You can never go wrong with a pair of crisp, white trainers. Air Force
        is a classic model that works well for almost any occasion, maybe apart
        from the most formal ones.
        <a href="#" class="underline">Read More</a>
      </p>
      <p>
        Compare prices from <span class="font-bold">£58.61</span> to
        <span class="font-bold">£58.61</span> · Rank
        <span class="font-bold">2</span> in
        <span class="font-bold">
          <a href="#" class="underline">Trainers</a>
        </span>
      </p>
      <!-- Color Variations -->
      <ul class="col-span-1 flex flex-row items-start justify-start space-x-3">
        <li v-for="color in shoeColors" :key="color.id">
          <img
            :src="require('@/assets/img/' + color.img)"
            :alt="color.img"
            class="p-1 w-16 h-16 rounded-lg border border-gray-400"
          />
        </li>
        <li>
          <ShoeVersions />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";
import ShoeRating from "@/components/Modals/ShoeRating.vue";
import PriceAlert from "../Modals/PriceAlert.vue";
import ShoeVersions from "../Modals/ShoeVersions.vue";

export default {
  name: "ProductCard",
  data() {
    return {
      shoeColors: [
        {
          id: 1,
          img: "angle1.png",
        },
        {
          id: 2,
          img: "angle2.png",
        },
        {
          id: 3,
          img: "angle3.png",
        },
        {
          id: 4,
          img: "angle4.png",
        },
      ],
    };
  },
  components: {
    VueIcons,
    ShoeRating,
    PriceAlert,
    ShoeVersions,
  },
};
</script>
