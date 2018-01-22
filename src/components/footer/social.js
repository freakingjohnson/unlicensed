import React from 'react'
import { withStyles } from 'material-ui/styles'

const Social = () => (
  <div>
    <i
      className="fa fa-facebook-official"
    />
    <i
      className="fa fa-github"
    />
    <i
      className="fa fa-instagram"
    />
    <i
      className="fa fa-linkedin"
    />
    <i
      className="fa fa-twitter"
    />
  </div>
)

const styles = {
  icon: {
    padding: '20px',
    fontSize: '30px',
    width: '30px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '50%',
  },
}

export default withStyles(styles)(Social)