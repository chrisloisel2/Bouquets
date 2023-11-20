<template>
    <div @click="validator">
        <h1>name:{{ bouquet.name }}</h1>
        <p>quantite:{{ bouquet.quantite }}</p>
        <p>type:{{ bouquet.type }}</p>
        <p v-if="bouquet.prix < 40">prix:{{ bouquet.prix }}</p>
        <p v-else-if="bouquet.prix < 60">
            prix moyennement cher :{{ bouquet.prix }}
        </p>
        <p v-else>Le prix est trop cher pour etre afficher</p>
        <p>{{ display }}</p>
        <button @click="bouttonDisplay">Prix gratuit</button>
    </div>
</template>
<script>
export default {
    name: "CardBouquet",
    props: {
        bouquet: {
            name: String,
            quantite: Number,
            type: String,
            prix: Number,
        },
        petitNom: String,
    },
    data() {
        return {
            valid: true,
            display: "blue",
        };
    },
    methods: {
        validator() {
            this.valid = !this.valid;
            this.bouquet.name;
        },
        bouttonDisplay() {
            if (this.display == "blue") this.display = "green";
            else if (this.display == "green") this.display = "blue";
            else this.display = "red";
        },
    },
    //Hooks => fonction du cyckle de vie
    beforeCreate() {
        console.log("Card Bouquet: beforeCreate");
    },
    created() {
        console.log("Card Bouquet: created");
    },
    beforeMount() {
        console.log("Card Bouquet: beforeMount");
    },
    mounted() {
        console.log("Card Bouquet: mounted");
    },
    beforeUpdate() {
        console.log("Card Bouquet: beforeUpdate");
    },
    updated() {
        console.log("Card Bouquet: updated");
    },
};
</script>
