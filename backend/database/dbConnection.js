// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(MONGO_URI, {
//       dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };

import mongoose from 'mongoose';

const mongoUrl = 'mongodb://localhost:27017';

export const dbConnection = () => {
    mongoose.connect(mongoUrl, {
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
    })
    .then(() => {
        console.log('Connected to Database');
    })
    .catch(err => {
        console.error(`Some error while connecting to Database: ${err}`);
    });
};
