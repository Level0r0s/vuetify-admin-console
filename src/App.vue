<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <div class="title py-4 pl-6 text--secondary">
        Vuetify Admin
      </div>

      <v-list dense class="mt-4">
        <v-list-item v-for="item in nav" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      flat
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />

      <v-toolbar-title class="mr-8" style="opacity: .87;">Vuetify Admin</v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Pesquise usuários, grupos ou configurações"
        class="hidden-sm-and-down"
      />

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-sheet class="body-2 d-flex align-center black--text pl-5" height="32" elevation="4">
        Admin Console
      </v-sheet>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    nav: [
      {
        title: 'Pessoal',
        icon: 'mdi-home',
        to: '/'
      }, {
        title: 'Painel de controle',
        icon: 'mdi-view-dashboard',
        to: '/dashboard'
      }, {
        title: 'Usuários',
        icon: 'mdi-account',
        to: { name: 'users' }
      }
    ]
  }),

  methods: {
    nop () {
      // nothing
    }
  }
}
</script>
