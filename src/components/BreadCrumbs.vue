<template>
  <ul
    class="w-screen my-4 ml-11 flex flex-row items-center justify-left text-gray-500"
  >
    <li>Start</li>
    <li>Clothing & Accessories</li>
    <li>Shoes</li>
    <li>Trainers</li>
  </ul>
</template>

<script>
export default {
  name: "BreadCrumbs",
};
</script>

<style scoped>
ul {
  list-style-type: "/";
}

li {
  margin: 0px 10px;
  padding-left: 10px;
}
</style>
