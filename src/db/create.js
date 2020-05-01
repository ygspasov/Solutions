import db from "./db";

const Create = {
  methods: {
    create() {
      db.firestore()
        .collection("solutions")
        .add({
          title: this.title,
          content: this.content,
        })
        .then(() => {
          this.title = "";
          this.content = "";
          this.errMsg = "";
          this.$router.push("/");
          location.reload();
        });
    },
  },
};
export default Create;
