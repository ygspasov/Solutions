<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Solutions
        </h1>
        <p v-if="loggedIn" class="mb-2">Logged in as: {{ loggedUser.email }}</p>
        <h2 v-if="!loggedIn" class="subheading font-weight-regular">
          Login from the menu to view and post solutions to problems
        </h2>
        <h3 v-if="loggedIn" class="subheading font-weight-regular">
          Post your solutions to the problems you have solved.
        </h3>
      </v-col>
    </v-row>
    <v-row><Solutions v-if="loggedIn"/></v-row>
  </v-container>
</template>

<script>
import Solutions from "./Solutions";
import UserStatus from "../auth/userStatus";
export default {
  name: "Main",

  data: () => ({
    drawer: false,
    successMsg: "",
    loggedIn: false,
    loggedUser: null,
  }),
  components: { Solutions },
  mixins: [UserStatus],
  created: function() {
    this.authChange();
  },
};
</script>
