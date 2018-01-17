import React from 'react'
import ReviewUser from './review/ReviewUser'
import ReviewServices from './review/ReviewServices'
import ReviewProjects from './review/ReviewProjects'

const ReviewInfo = () => (
  <div>
    <h3>Step 4: Make sure we have the right info.</h3>
    <ReviewUser />
    <ReviewServices />
    <ReviewProjects />
  </div>
)

export default ReviewInfo
