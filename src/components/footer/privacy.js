import React from 'react'
import { withStyles } from 'material-ui'

const Privacy = ({ classes }) => (
  <div>
    <h2 className={classes.title}> Privacy Policy </h2>

    <p className={classes.paragraph}> By accessing or using this web site, you agree to the terms of this Online Privacy Policy, as outlined below. If you do not agree to these terms, please do not access or use this site. </p>

    <h2 className={classes.subtitle}> Collection of Personal Information </h2>

    <p className={classes.paragraph}> When you engage in certain activities on this site, you may be asked to provide certain information about yourself by filling out and submitting an online form. It is completely optional for you to engage in these activities. If you elect to engage in these activities, however, you may be required to provide personal information, such as your name, mailing address, e-mail address, and other personal identifying information.

    When you submit personal information, you understand and agree that this site may transfer, store, and process your information in any of the countries in which this site maintains offices, including without limitation, the United States.

    This site collects this information in order to record and support your participation in the activities you select. This site will never sell or share your information with other companies.
    </p>
  </div>
)

const styles = {
  title: {
    fontSize: '30px',
    fontWeight: '700',
    textAlign: 'center',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '5px 0',
  },
  paragraph: {
    textIndent: '20px',
    padding: '15px',
    marginBottom: '10px',
  },
}

export default withStyles(styles)(Privacy)
