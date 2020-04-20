<template>
  <v-form v-model="valid" >
    <v-container >
        
          <v-row v-if="!successMsg"
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
        <v-row v-if="!successMsg"
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
        
        <v-row><p v-if="successMsg" class="success--text mt-2 mx-auto">{{successMsg}}</p></v-row>
        <v-row><p v-if="errMsg" class="error--text mt-2 mx-auto">{{errMsg}}</p></v-row>
        <v-row v-if="!successMsg"><v-btn
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
      errMsg:'',
      successMsg:"",
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
        this.errMsg
        db.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>{
          this.successMsg="You have successfully signed up!"
        }).catch((error)=> {
    var errorCode = error.code;
    console.log(errorCode)
    this.errMsg= error.message;
    console.log("Error message: "+this.errMsg)
  });
  this.email='',
  this.password=''
      }
    }
  }
</script>