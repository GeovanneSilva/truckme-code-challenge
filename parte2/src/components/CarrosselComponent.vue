<template>
    <v-container fluid>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
  name: 'CarrosselComponent',
  data: () => ({
    items: [
      {
        src: 'https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        src: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        src: 'https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
  }),
};
</script>
