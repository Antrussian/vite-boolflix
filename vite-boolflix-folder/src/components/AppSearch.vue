<template lang="">
    <!-- Componente di ricerca: contiene un campo di input e un pulsante di ricerca -->
    <div>
      <!-- Campo di input legato a searchedString tramite v-model -->
      <input type="text" v-model="searchedString" @keyup.enter="store.getMovies(searchedString)">
  
      <!-- Pulsante di ricerca che emette l'evento 'search' con la stringa cercata -->
      <button @click="store.getMovies(searchedString)">search</button>
    </div>
  </template>
  
  <script>
  // Importazione della store globale
  import { store } from '../store';

  export default {
    // Nome del componente
    name: 'AppSearch',
  
    // Dati dello stato del componente
    data() {
      return {
        store, // Utilizzo della store globale per la gestione dello stato
        searchedString: '', // Stringa inserita dall'utente per la ricerca
      }
    },
  }
  </script>
  
  <style lang="">

  </style>
