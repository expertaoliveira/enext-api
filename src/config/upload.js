const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'public/uploads'),
        filename: ( req, file, cb ) => {
            const ext = (path.extname(file.originalname)=='') ? '.jpg' : path.extname(file.originalname);
            const filename = path.basename(file.originalname, ext)
            cb(null, `${filename}-${Date.now()}${ext}`);
        }
    })
}