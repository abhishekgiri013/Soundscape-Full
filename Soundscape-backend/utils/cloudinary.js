require('dotenv').config(); // ✅ Load env variables first

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Optional: Debug
console.log('Cloudinary config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'categories',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const audioStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'sounds',
    resource_type: 'auto', // Handles audio, video, etc.
    allowed_formats: ['mp3', 'wav', 'ogg'],
  },
});

module.exports = {
  cloudinary,
  imageStorage,
  audioStorage,
};
