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
          this.title = "";
        });
    },
  },
};
export default Create;
