import db from "./db";

const Edit = {
  methods: {
    edit() {
      console.log("id:" + this.id);
      db.firestore()
        .collection("solutions")
        .doc(this.id)
        .set({ content: this.content, title: this.title })
        .then(() => {
          this.$router.push("/");
          location.reload();
          console.log("edited");
        });
    },
  },
};
export default Edit;
