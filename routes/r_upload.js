module.exports = function(app){
    var ctrUpload = require('../controller/c_upload');
    app.route('/api/upload-image').post(ctrUpload.upload_image);
  
}