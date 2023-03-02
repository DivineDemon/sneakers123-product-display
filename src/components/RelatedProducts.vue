<template>
  <div class="w-screen bg-white p-11 border-b border-gray-300">
    <h1 class="text-3xl text-black font-semibold mb-1">Related Products</h1>
    <div class="w-[73.5%] flex flex-row items-center justify-between">
      <p>We have picked out a selection of products that might interest you.</p>
      <span class="font-semibold text-black hover:underline">Show all</span>
    </div>
    <carousel
      class="w-[75%]"
      :perPage="5"
      :scrollPerPage="false"
      :navigationEnabled="true"
      :navigationNextLabel="'›'"
      :navigationPrevLabel="'‹'"
      :paginationEnabled="false"
      :navigationClickTargetSize="0"
    >
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
      <slide class="h-[350px]">
        <div class="mt-8 w-[220px] h-[220px] bg-gray-100 p-2 relative">
          <img
            src="@/assets/img/angle1.png"
            alt="main-shot"
            class="p-2 w-full h-full"
          />
          <div
            class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <VueIcons :name="'heart'" :color="'black'" :size="'w-7 h-7'" />
          </div>
          <p class="mt-5 text-black font-semibold">
            Nike Air Force 1'07 M-White/Black
          </p>
          <div class="mt-3 flex flex-row items-center justify-center w-[100%]">
            <p class="flex-1 text-lg font-bold text-black">£58.90</p>
            <div
              class="flex flex-row items-center justify-center text-sm space-x-2"
            >
              <VueIcons :name="'star'" :size="'w-4 h-4 text-yellow-500'" />
              <p class="textsm font-bold">4.7</p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "RelatedProducts",
  components: { VueIcons },
};
</script>
