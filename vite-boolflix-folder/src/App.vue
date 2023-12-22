<template lang="">
  <div>
    <!-- Componente per la ricerca dei film -->
    <AppSearch/>
    
    <!-- Componente principale dell'applicazione -->
    <AppMain/>
  </div>
</template>

<script>
// Importazione dei componenti e delle dipendenze necessarie
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';


export default {
  // Dichiarazione dei componenti utilizzati
  components: {
    AppSearch,
    AppMain,
  },

  data() {
    return {

    }
  },

}


</script>

<style lang="">

</style>
