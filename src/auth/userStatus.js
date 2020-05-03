import db from "../db/db";

const userStatus = {
  methods: {
    authChange() {
      db.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("User is logged in.");
          this.loggedIn = true;
          this.loggedUser = user;
        } else {
          console.log("User is logged out.");
          this.loggedIn = false;
        }
      });
    },
  },
};
export default userStatus;
