const route = require("express").Router();
const imageUpload = require("../../middleware/multer");
const imageRename = require("../../middleware/imageRename");
const authJwt = require("../../middleware/authJwt");
const uploadImage = require("../../controllers/image/uploadImage");
const updateImage = require("../../controllers/image/updateImage");

route.post("/", authJwt, imageUpload, imageRename, uploadImage);
route.put("/", authJwt, imageUpload, imageRename, updateImage);

module.exports = route;
