<template>
  <v-app id="app">
    <v-content>
      <v-card class="mx-auto overflow-hidden" height="100%">
        <v-app-bar color="deep-purple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Solutions</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
              <router-link :to="'/'"
                ><v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <v-tab>Home</v-tab>
                  </v-list-item-title>
                </v-list-item></router-link
              >

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title><v-tab>Account</v-tab></v-list-item-title>
              </v-list-item>

              <v-list-item v-if="loggedIn" @click="logout">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title><v-tab>Logout</v-tab></v-list-item-title>
              </v-list-item>

              <router-link :to="'create'">
                <v-list-item v-if="loggedIn">
                  <v-list-item-icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title><v-tab>Create</v-tab></v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link :to="'signin'"
                ><v-list-item v-if="!loggedIn">
                  <v-list-item-icon>
                    <v-icon>mdi-login</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <div class="my-2">
                      <v-tab>Login</v-tab>
                    </div>
                  </v-list-item-title>
                </v-list-item></router-link
              >

              <router-link :to="'signup'">
                <v-list-item v-if="!loggedIn">
                  <v-list-item-icon>
                    <v-icon>mdi-account-plus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <v-tab>Sign up</v-tab>
                  </v-list-item-title>
                </v-list-item></router-link
              >
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-row>
          <p v-if="successMsg" class="success--text mt-2 mx-auto">
            {{ successMsg }}
          </p>
        </v-row>
        <router-view></router-view>
        <Main :user="user" />
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import Main from "./components/Main";
import logOut from "./auth/logout";
import userStatus from "./auth/userStatus";

export default {
  name: "App",
  components: {
    Main,
  },
  mixins: [logOut, userStatus],
  data: () => ({
    drawer: false,
    successMsg: "",
    user: {},
    loggedIn: false,
  }),
  methods: {},
  created: function() {
    this.authChange();
  },
};
</script>

<style scoped>
#app a {
  text-decoration: none;
  color: #472e72;
}
#app .theme--light.v-icon {
  color: #472e72;
}
</style>
