// const multer = require("multer")
// // const { GridFsStorage } = require("multer-gridfs-storage")
// // require("dotenv").config()

// // const url = process.env.MONGO_DB_URL

// // // Create a storage object with a given configuration
// // const storage = new GridFsStorage({
// //   url,
// //   file: (req, file) => {
// //     //If it is an image, save to photos bucket
// //     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
// //       return {
// //         bucketName: "photos",
// //         filename: `${Date.now()}_${file.originalname}`,
// //       }
// //     } else {
// //       //Otherwise save to default bucket
// //       return `${Date.now()}_${file.originalname}`
// //     }
// //   },
// // })

// // // Set multer storage engine to the newly created object
// // const upload = multer({ storage })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });
// // module.exports=upload
