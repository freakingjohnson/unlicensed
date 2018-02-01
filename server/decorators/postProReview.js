const postReview = async (req, res) => {
  const db = req.app.get('db')
  const {
    loggedinUserName, comment, proReceivingReviewId, rating,
  } = req.body

  await db.post_pro_review([loggedinUserName, comment, proReceivingReviewId, rating]).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const getReviews = async (req, res) => {
  const db = req.app.get('db')
  await db.get_reviews().then((response) => {
    res.status(200).send(response)
  })
}

module.exports = (app) => {
  app.post('/api/proReview', postReview)
  app.get('/api/reviews', getReviews)
}