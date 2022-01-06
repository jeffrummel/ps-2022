var path  = require('path')
var fs    = require('fs')

function ensureDirectoryExistance(filePath) {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistance(dirname)
  fs.mkdirSync(dirname)
}

module.exports = {
  src: 'src',
  dest: 'public',

  storeData: function(fileName, data) {
    ensureDirectoryExistance(process.cwd() + fileName)
    fs.writeFile(`${process.cwd()}/${fileName}`, data, function (err) {
      if(err) {
        console.log(err)
      } else {
        console.log(`Saved: ${process.cwd()}/${filename}`)
      }
    })
  },
}