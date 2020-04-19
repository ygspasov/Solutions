<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Solutions
        </h1>

        <p class="subheading font-weight-regular">
          Post your solutions to the problems you have solved.
        </p>
      </v-col>

    </v-row>
    <v-row><Solutions/></v-row>
  </v-container>
</template>

<script>
import Solutions from './Solutions'
  export default {
   name: 'Main',
   components: {Solutions}
  }
</script>
