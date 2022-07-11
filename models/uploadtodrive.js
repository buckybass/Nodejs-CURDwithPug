const {google} = require('googleapis')
const fs = require('fs')
const path = require('path')
const {GoogleAuth} = require('google-auth-library')

const auth = new GoogleAuth({scopes:'4/0AX4XfWgZ2e2zVIohqvuX9JFQmip9BIZ7f3skEJ7Mu3GYyAsK_2t8nZUF_l3RFxX6jDw1bw'})
const client_id= '11294250336-2boun8d3tc6kqkpil8gmldbt3imp1747.apps.googleusercontent.com'
const client_secret= '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'
const redirect = 'https://developers.google.com/oauthplayground/'
const refresh_token = '1//04VjLb4KdNltVCgYIARAAGAQSNwF-L9IruJBsNUybcRtu5NpfjGc6Dl8N5bUe26m-rwAgnc53tU90K3lw_51LSufW0KpwyMaPE_I'

const oauth2Client = new google.auth.OAuth2(client_id,client_secret,redirect)
oauth2Client.setCredentials({refresh_token})

const drive = google.drive({
  version:'v3',
  auth
})

module.exports={
  uploadfile: async() =>{
    try {
      const createFile = await drive.files.create({
        requestBody:{
          name:"testest.jpg",
          mineType:'image/jpg'
        },
        media:{
          mineType: 'image/jpg',
          body: fs.createReadStream(path.join(__dirname,'../public/uploads/62b47931550dc8362d913130.jpg'))
        }
      })
      return console.log(createFile)
    } catch (error) {
      console.error(error)
    }

  }
}
