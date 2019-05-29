const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'upload'),
    filename: (req, file, callBack) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return callBack(err)

        callBack(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
