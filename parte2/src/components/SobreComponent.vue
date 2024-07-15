<template>
    <v-container
    height="500px"
    fluid>
      <v-row class="text-center">
        <v-col
          class="d-flex child-flex pt-0 mt-0"
          cols="12"
        >
            <h1>Sobre</h1>
        </v-col>
    </v-row>
    <v-row class="text-center">
        <v-col
        cols="12"
        >
            <p>A TruckMe é uma transportadora 100% digital, somos frutos da uberização de serviços.
                Nossa solução inteligente surgiu devido a necessidade de inovação e agilidade
                no modelo tradicional dos processos de frete,
                objetivando dinamizar o dia a dia dos nossos
                clientes e trazer muito mais economia.</p>
        </v-col>
      </v-row>
      <v-row
      v-show="verMais"
      class="text-center"
      >
        <v-col>
            <p>A TruckMe funciona como uma plataforma digital e aplicativo, projetada para conectar,
                negociar e monitorar as cargas desde a solicitação do
                embarcador até a descarga das cargas.</p>
        </v-col>
      </v-row>
      <v-row
      align="center"
      justify="center"
      >
        <v-col
        cols="12"
        class="text-center"
        >
            <v-btn
            @click="verMais = !verMais"
            color="orange"
            >{{ verMais ? 'Ver Menos' : 'Ver Mais' }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default {
  name: 'SobreComponent',
  data: () => ({
    verMais: false,
  }),
};
</script>
