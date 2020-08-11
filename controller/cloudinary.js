const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: "xxx",
    api_key: "xxx",
    api_secret: "xxx"
  })

exports.uploads = (file, folder) => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({
        url: result.url,
        id: result.public_id
      })
    }, {
      resource_type: "auto",
      folder: folder
    })
  })
}
