<template lang="">
    <!-- Componente di ricerca: contiene un campo di input e un pulsante di ricerca -->
    <div>
      <!-- Campo di input legato a searchedString tramite v-model -->
      <input type="text" v-model="searchedString">
  
      <!-- Pulsante di ricerca che emette l'evento 'search' con la stringa cercata -->
      <button @click="$emit('search', searchedString)">search</button>
    </div>
  </template>
  
  <script>
  export default {
    // Nome del componente
    name: 'AppSearch',
  
    // Dati dello stato del componente
    data() {
      return {
        searchedString: '', // Stringa inserita dall'utente per la ricerca
      }
    },
  }
  </script>
  
  <style lang="">
   
  </style>
  