<template>
  <v-form v-model="valid" >
    <v-container >
        <v-row
          cols="12"
          md="4"
          style= "max-width:300px;" class="mx-auto"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail" 
            required
          ></v-text-field>
        </v-row>
        <v-row
          cols="12"
          md="4"
          style= "max-width:300px;" class="mx-auto"
        >
          <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            required
          ></v-text-field>
        </v-row>
        <v-row ><v-btn
        :disabled="!valid"
        color="success"
        class="mx-auto mt-2"
        @click="signup"
      >
        Sign up
      </v-btn></v-row>

    </v-container>
  </v-form>
</template>

<script>
import db from '../db/db'
  export default {
    data: () => ({
      valid: false,

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password:'',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v) || 'Password must be between 6 and 16 characters',
      ],
    }),
    methods: {
      signup(){
        db.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred=>{
    console.log(cred)
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log("Error message: "+errorMessage)
    // ...
  });
      }
    }
  }
</script>