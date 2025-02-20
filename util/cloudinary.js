const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (filePath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = { uploadImageToCloudinary };
