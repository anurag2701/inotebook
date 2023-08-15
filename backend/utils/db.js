const { Mongoose, default: mongoose } = require("mongoose");
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI).then(
    () => {
      console.log("Mongo Connected succesfully!!");
    },
    (err) => {
      handleError(err);
    }
  );
};

const handleError = (error) => {
  console.log(error);
};

module.exports = connectToMongo;
