import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom'
import { getSearchData } from './../../ducks/reducers/resultsReducer'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'https://hips.hearstapps.com/edc.h-cdn.co/assets/15/14/1427831454-54c1447836250-miles-redd-interior-design-ed1110-07-lgn.jpg',
    title: 'Cabinets and Countertops',
    width: '33.33%',
  },
  {
    url: 'https://cdn.decoist.com/wp-content/uploads/2015/06/Throw-pillows-add-color-to-the-neutral-living-room.jpg',
    title: 'House or Room Remodel',
    width: '33.34%',
  },
  {
    url: 'https://jlclandscapeservices.com/wp-content/uploads/2015/04/Landscape-Design-Build-Bottom-1.jpg',
    title: 'Landscaping',
    width: '33.33%',
  },
];

const HomeFront = ({
  userData, classes, getSearchData, history,
}) => (
  <div className={classes.root}>
    {images.map(image => (
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        style={{
        width: image.width,
      }}
        onClick={(event) => {
        event.preventDefault()
        getSearchData(userData, image.title.replace(/\s/g, '_'), 'worktype')
        history.push('/results')
      }}
      >
        <span
          className={classes.imageSrc}
          style={{ backgroundImage: `url(${image.url})` }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            type="subheading"
            color="inherit"
            className={classes.imageTitle}
          >
            {image.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
      ))}
  </div>
)


const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
})

export default connect(mapStateToProps, { getSearchData })(withStyles(styles)(HomeFront))

HomeFront.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array.isRequired,
  getSearchData: PropTypes.func.isRequired,
}