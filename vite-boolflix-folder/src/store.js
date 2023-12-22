// Importazione della funzione reactive da Vue e della libreria axios
import { reactive } from 'vue';
import axios from 'axios';

// Creazione di uno stato reattivo per la gestione dei dati
export const store = reactive({
  moviesList: [], // Lista dei film ottenuti dalla chiamata API
  apiUrl: 'https://api.themoviedb.org/3/search/movie', // URL di base per la ricerca film
  apiKey: '7ecc397b8ffc3520e70bc6452f85ac55', // Chiave API per l'accesso alla TMDB

  // Metodo per ottenere i film in base al contenuto di ricerca
  getMovies(searchContent = '') {
    // Stampa nella console il contenuto di ricerca
    console.log(searchContent);

    // Chiamata Axios per ottenere i film dalla TMDB API
    axios.get(this.apiUrl, {
      params: {
        api_key: this.apiKey, // Parametro API key
        query: searchContent, // Parametro di ricerca
      },
    })
      .then((response) => {
        // Assegnamento dei risultati della chiamata API alla lista di film
        this.moviesList = response.data.results;
      })
      .catch(function (error) {
        // Gestione degli errori in caso di problemi con la chiamata API
        console.log(error);
      });
  },
});
