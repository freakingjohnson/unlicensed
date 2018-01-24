const axios = require('axios')

const updateInfo = async (req, res) => {
  const db = req.app.get('db')
  const {
    firstName, lastName, phone, call, text, both, email, bio, location, profilePicUrl, id,
  } = req.body

  let zipcode = ''

  if (!(/[a-z]/.test(location))) {
    zipcode = await axios.get(`https://www.zipcodeapi.com/rest/${process.env.ZIPCODE_KEY}/info.json/${location}/radians`)
  }

  const workLocation = zipcode ? `${zipcode.data.city}, ${zipcode.data.state} ${zipcode.data.zip_code}` : location

  let phoneInfo = [phone]

  if (both) {
    phoneInfo.push('b')
  } else if (text) {
    phoneInfo.push('t')
  } else if (call) {
    phoneInfo.push('c')
  }

  db.update_pro([firstName, lastName, phoneInfo, email, bio, profilePicUrl, workLocation, id]).then((data) => {
    res.status(200).send(data)
  })
}

module.exports = (app) => {
  app.put('/api/updateUser', updateInfo)
}