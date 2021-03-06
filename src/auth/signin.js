import db from "../db/db";
import { ClickOutside } from "vuetify/lib";
const signIn = {
  methods: {
    signin() {
      this.errMsg;
      db.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.successMsg = "You have successfully signed in!";
          setTimeout(() => {
            this.successMsg = "";
            this.$router.push("/");
          }, 2000);
        })
        .catch((error) => {
          var errorCode = error.code;
          console.log(errorCode);
          this.errMsg = error.message;
          console.log("Error message: " + this.errMsg);
        });
      (this.email = ""), (this.password = "");
    },
  },
};
export default signIn;
