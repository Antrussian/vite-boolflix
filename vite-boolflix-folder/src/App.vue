<template lang="">
  <div>
    <!-- Componente per la ricerca dei film -->
    <AppSearch @search="getMovies"/>
    
    <!-- Componente principale dell'applicazione -->
    <AppMain/>
  </div>
</template>

<script>
// Importazione dei componenti e delle dipendenze necessarie
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  // Dichiarazione dei componenti utilizzati
  components: {
    AppSearch,
    AppMain,
  },

  // Dichiarazione dei dati dello stato
  data() {
    return {
      moviesList: [], // Lista dei film ottenuti dalla chiamata API
    }
  },
  
  // Dichiarazione dei metodi dell'istanza
  methods: {
    // Metodo chiamato quando viene eseguita la ricerca
    getMovies(searchContent) {
      // Chiamata Axios per ottenere i film in base al contenuto di ricerca
      console.log(searchContent);
  
    }
  },

  // Hook del ciclo di vita: creato quando l'istanza del componente è creata
  created() {
    console.log('App.vue created called');
    // Chiamata iniziale per ottenere i film all'avvio dell'app
    this.getMovies();
  },
}
</script>

<style lang="">

</style>
