<template lang="">
    <!-- Componente principale che visualizza la lista di film e serie TV -->
    <div>
      <!-- Iterazione attraverso la lista di film e serie TV usando v-for -->
      <article v-for="item in store.moviesList" :key="item.id">
        <!-- Visualizzazione delle informazioni del film o della serie TV -->
        <div>
          <!-- Visualizzazione della copertina -->
          <img :src="getFullImagePath(item.poster_path)" alt="Movie Poster" width="150" />
  
          <!-- Visualizzazione del titolo -->
          <h3>{{ item.title }}</h3>
  
          <!-- Visualizzazione del titolo originale -->
          <p>{{ item.original_title }}</p>
  
          <!-- Visualizzazione della lingua e della bandiera -->
          <p>{{ item.original_language }} {{ getFlagIcon(item.original_language) }}</p>
  
          <!-- Visualizzazione del voto come numero intero -->
          <p>Voto: {{ convertToStars(item.vote_average) }}</p>
        </div>
      </article>
    </div>
  </template>
  
  <script>
  // Importazione axios e store
  import axios from 'axios';
  import { store } from '../store';
  
  export default {
    // Nome del componente
    name: 'AppMain',
  
    // Dati dello stato del componente
    data() {
      return {
        store, // Utilizzo dello stato globale della store per ottenere la lista di film e serie TV
      };
    },
  
    // Metodo per ottenere il percorso completo dell'immagine
    methods: {
      // Ottiene il percorso completo dell'immagine concatenando l'URL base delle immagini di TMDB con la parte finale fornita dall'API
      getFullImagePath(partialPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/';
        const imageSize = 'w500'; 
        return `${baseUrl}${imageSize}/${partialPath}`;
      },
  
      // Metodo per ottenere la bandiera in base alla lingua
      getFlagIcon(language) {
        // Mappa delle lingue alle corrispondenti bandiere (aggiungi altri se necessario)
        const languageFlags = {
        en: '🇬🇧',
        it: '🇮🇹',
        es: '🇪🇸',
          // Aggiungi altre lingue e bandiere secondo necessità
        };
  
        // Restituisci la bandiera corrispondente alla lingua
        return languageFlags[language] ;
      },
  
      // Metodo per convertire il voto in stelle (da 1 a 5)
      convertToStars(vote) {
        // Arrotonda per eccesso e converte il voto in una scala da 1 a 5
        return Math.ceil(vote) / 2;
      },
    },
  };
  </script>
  
  <style lang="">

  </style>
  