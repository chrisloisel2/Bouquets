export default {
    async fetchData() {
        try {
            // Appel a chuck norris api
            const response = await fetch(
                "https://api.chucknorris.io/jokes/random"
            );
            const data = await response.json();
            return data.value;
        } catch (error) {
            console.error(
                "Une erreur s'est produite lors de la récupération des données:",
                error
            );
            throw error;
        }
    },
};
