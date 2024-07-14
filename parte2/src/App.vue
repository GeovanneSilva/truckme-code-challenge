<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span>Home</span>
      </v-btn>
      <v-btn
      text
      >
        <span>Sobre</span>
      </v-btn>
      <v-btn
      text
      >
        <span>Serviço</span>
      </v-btn>
      <v-btn
      text
      >
        <span>Contato</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
