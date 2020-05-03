<template>
  <v-content
    ><v-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="item in solutions" :key="item.id">
          <v-expansion-panel-header
            >{{ item.title
            }}<span @click="del(item.id)" class="mdi mdi-delete"></span
            ><span @click="edit" class="mdi mdi-comment-edit"></span
          ></v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-content>
</template>
<script>
import Solutions from "../db/solutions";
import UserStatus from "../auth/userStatus";
import Delete from "../db/delete";
export default {
  name: "Solutions",
  mixins: [Solutions, UserStatus, Delete],
  data() {
    return {
      solutions: [],
    };
  },
  methods: {
    edit() {
      console.log("edit");
    },
  },
};
</script>

<style scoped>
.mdi {
  font-size: 20px;
  max-width: 20px;
  margin-left: 10px;
}
</style>
