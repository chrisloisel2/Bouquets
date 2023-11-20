<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ListeBouquet :title="`Bouquets de fleurs montante`" type="montante" />
    <ListeBouquet :title="`Bouquets de fleurs vivace`" type="vivace" />
    <ListeBouquet :title="`Bouquets de fleurs invasive`" type="invasive" />
</template>

<script>
import ListeBouquet from "./components/ListeBouquet.vue";
export default {
    name: "App",
    components: {
        ListeBouquet,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
