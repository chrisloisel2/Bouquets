<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="bouquet in items" :key="bouquet.name">
                <CardBouquet
                    v-if="bouquet.type == type"
                    :bouquet="bouquet"
                    petitNom="Roger"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import CardBouquet from "./CardBouquet.vue";
import MyService from "@/Services/MyService";

export default {
    name: "ListeBouquet",
    components: {
        CardBouquet,
    },
    props: {
        title: String,
        type: String,
    },
    data() {
        return {
            items: [
                {
                    name: "Bouquet de fleurs",
                    quantite: 20,
                    type: "montante",
                    prix: 70,
                },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "montante",
                //     prix: 70,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "montante",
                //     prix: 70,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "montante",
                //     prix: 70,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "invasive",
                //     prix: 20,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "invasive",
                //     prix: 20,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "invasive",
                //     prix: 20,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "vivace",
                //     prix: 50,
                // },
                // {
                //     name: "Bouquet de fleurs",
                //     quantite: 20,
                //     type: "vivace",
                //     prix: 50,
                // },
            ],
        };
    },
    mounted() {
        MyService.fetchData().then((data) => {
            console.log(data);
        });
    },
};
</script>

<style>
/* Styles optionnels ici */
</style>
