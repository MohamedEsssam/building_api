const route = require("express").Router();
const pdfUpload = require("../../middleware/multer");
const pdfRename = require("../../middleware/pdfRename");
const authJwt = require("../../middleware/authJwt");
const uploadPdf = require("../../controllers/pdf/uploadPdf");
const updatePdf = require("../../controllers/pdf/updatePdf");

route.post("/", authJwt, pdfUpload, pdfRename, uploadPdf);
route.put("/", authJwt, pdfUpload, pdfRename, updatePdf);

module.exports = route;
