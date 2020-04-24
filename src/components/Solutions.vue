<template>
  <v-content
    ><v-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in solutions" :key="i">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
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
export default {
  mixins: [Solutions],
  data() {
    return { solutions: [] };
  },
};
</script>

<style></style>
