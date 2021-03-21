const route = require("express").Router();
const imageUpload = require("../../middleware/multer");
const pdfRename = require("../../middleware/pdfRename");
const authJwt = require("../../middleware/authJwt");
const uploadPdf = require("../../controllers/pdf/uploadPdf");
const updatePdf = require("../../controllers/pdf/updatePdf");

route.post("/", authJwt, imageUpload, pdfRename, uploadPdf);
route.put("/", authJwt, imageUpload, pdfRename, updatePdf);

module.exports = route;
