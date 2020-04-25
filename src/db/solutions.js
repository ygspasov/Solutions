import db from "./db";

const Solutions = {
  created() {
    db.firestore()
      .collection("solutions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.solutions.push({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
          });
        });
      });
  },
};
export default Solutions;
