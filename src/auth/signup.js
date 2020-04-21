import db from "../db/db";
const signUp = {
  methods: {
    signup() {
      this.errMsg;
      db.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.successMsg = "You have successfully signed up!";
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
export default signUp;
