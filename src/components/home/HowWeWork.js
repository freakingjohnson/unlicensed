import React from 'react'
import { Typography, withStyles } from 'material-ui'
import howwedo from './../../assets/howwedo.jpeg'

const HowWeWork = ({ classes }) => (
  <div className={classes.contianer}>
    <Typography color="primary" className={classes.title} type="display1">How We Work</Typography>
    <img className={classes.img} src={howwedo} alt="" />
    <div className={classes.contentWrapper}>
      <Typography gutterBottom color="primary" type="title">1. Search for what you need</Typography>
      <Typography gutterBottom color="accent" className={classes.content} type="subheading">Search for the work that you need done. You can search by the type of service, by the Professional's name, your city, or your zip code.</Typography>
      <Typography gutterBottom color="primary" type="title">2. Contact your Professional</Typography>
      <Typography gutterBottom color="accent" className={classes.content} type="subheading">YOU can then pick which Professional is the best fit for you, then call, text, or email them. No need to worry about giving out your information and receiving dozens of phone calls from Contractors begging for your business.</Typography>
      <Typography gutterBottom color="primary" type="title">3. Relax</Typography>
      <Typography gutterBottom color="accent" className={classes.content} type="subheading">After you choose which Professional is best for you, all you need to do is sit back and relax, while our Professionals take care of everything you need, for the best prices out there.</Typography>
    </div>
  </div>
)

const styles = {
  contianer: {
    width: '90%',
    marginLeft: '5%',
  },
  title: {
    textAlign: 'center',
    margin: '15px 0 -60px 0',
    '@media (min-width: 769px)': {
      margin: '35px 0 -150px 0',
    },
  },
  img: {
    width: '100%',
    mixBlendMode: 'multiply',
    '@media (min-width: 769px)': {
      width: '70%',
      marginLeft: '15%',
    },
  },
  contentWrapper: {
    '@media (min-width: 769px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '40%',
      margin: '-100px 0 50px 30%',
    },
  },
  content: {
    marginLeft: '20px',
    marginBottom: '20px',
  },
}

export default withStyles(styles)(HowWeWork)