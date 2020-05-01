<template>
  <v-form>
    <v-container>
      <v-row><h1 class="mx-auto">Create a new solution</h1></v-row>
      <v-row cols="12" md="4" style="max-width:300px;" class="mx-auto">
        <v-text-field
          @input="checkInput"
          v-model="title"
          label="Title"
          required
        ></v-text-field>
      </v-row>
      <v-row cols="12" md="4" style="max-width:300px;" class="mx-auto">
        <v-textarea
          @input="checkInput"
          label="Content"
          v-model="content"
          required
        ></v-textarea>
      </v-row>

      <v-row>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mx-auto mt-2"
          @click="create"
          >Create</v-btn
        >
      </v-row>
      <v-row v-if="errMsg"
        ><p class="mx-auto error--text mt-3">{{ errMsg }}</p></v-row
      >
    </v-container>
  </v-form>
</template>

<script>
import Create from "../db/create";
export default {
  data: () => ({
    title: "",
    content: "",
    valid: false,
    errMsg: "",
  }),
  mixins: [Create],
  methods: {
    checkInput() {
      if (this.title.length > 5 && this.content.length > 20) {
        this.valid = true;
      } else {
        setTimeout(() => {
          this.errMsg =
            "The title should have at least 5 symbols and the content area at least 20 symbols.";
        }, 15000);
      }
    },
  },
};
</script>
