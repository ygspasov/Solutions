import db from "./db";

const Delete = {
  methods: {
    del(id) {
      console.log(id);
      db.firestore()
        .collection("solutions")
        .doc(id)
        .delete()
        .then(() => {
          this.$router.push("/");
          location.reload();
          console.log("deleted");
        });
    },
  },
};
export default Delete;
