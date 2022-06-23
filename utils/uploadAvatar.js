const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = async(req,id) => {
  const avatarPath=`/uploads/${id}.jpg`
  if(req.file){
    await sharp(req.file.path)
      .resize(200, 200)
      .jpeg({ quality: 70 })
      .flatten({ background:'#fff'})
      .toFile(path.join(__dirname, `../public${avatarPath}`))
    await fs.promises.unlink(req.file.path)
    return avatarPath
  }
}
