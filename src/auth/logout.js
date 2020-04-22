import db from "../db/db";
import { setTimeout } from "core-js";
const logout = {
  methods: {
    logout() {
      this.errMsg;
      db.auth()
        .signOut()
        .then(() => {
          this.successMsg = "You have successfully logged out!";
          setTimeout(() => {
            this.successMsg = "";
            this.$router.push("/");
          }, 3000);
        })
        .catch((error) => {
          var errorCode = error.code;
          console.log(errorCode);
          this.errMsg = error.message;
          console.log("Error message: " + this.errMsg);
        });
    },
  },
};
export default logout;
