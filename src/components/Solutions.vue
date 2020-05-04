<template>
  <v-content
    ><v-row v-if="id"
      ><Edit :id="id" :title="title" :content="content" /> </v-row
    ><v-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="item in solutions" :key="item.id">
          <v-expansion-panel-header
            >{{ item.title
            }}<span @click="del(item.id)" class="mdi mdi-delete"></span
            ><span
              @click="setItem(item.id, item.title, item.content)"
              class="mdi mdi-comment-edit"
            ></span
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
import Edit from "./Edit";
export default {
  name: "Solutions",
  mixins: [Solutions, UserStatus, Delete],
  components: { Edit },
  data() {
    return {
      id: null,
      title: "",
      content: "",
      solutions: [],
    };
  },
  methods: {
    setItem(id, title, content) {
      this.id = id;
      this.content = content;
      this.title = title;
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
.v-form {
  width: 100%;
}
</style>
