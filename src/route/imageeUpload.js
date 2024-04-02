const express = require("express");
const router = express.Router();
const { uploadImageToCloudinary } = require("../../util/cloudinary");
const upload = require("../middleware/multer");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded.",
      });
    }
    const result = await uploadImageToCloudinary(file.path);

    console.log(result);
    console.log(result.url);

    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred during the upload.",
    });
  }
});

module.exports = router;
