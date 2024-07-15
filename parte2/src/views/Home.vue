<template>
  <v-container fluid>
    <HomeComponent />
    <SobreComponent />
    <CarrosselComponent />
  </v-container>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue';
import SobreComponent from '@/components/SobreComponent.vue';
import CarrosselComponent from '@/components/CarrosselComponent.vue';

export default {
  name: 'Home',
  components: {
    HomeComponent,
    SobreComponent,
    CarrosselComponent,
  },
};
</script>
