import db from "../db/db";

const userStatus = {
  methods: {
    authChange() {
      db.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("User is logged in.");
        } else {
          console.log("User is logged out.");
        }
      });
    },
  },
};
export default userStatus;
