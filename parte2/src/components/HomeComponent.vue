<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col
        class="d-flex child-flex pt-0 mt-0"
        cols="12"
      >
      <v-parallax
        dark
        height="625"
        src="../assets/truck.jpg"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
            <h1 class="text-h4 font-weight-thin mb-4">
              Solução inteligente em fretes
            </h1>
            <h4 class="subheading">
              A primeira transportadora 100% digital.
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeComponent',

  data: () => ({
  }),
};
</script>
