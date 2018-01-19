import React from 'react'
import { TextField, Button, withStyles } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { setProjects, addToDescList, addToPicList } from './../../ducks/reducers/projectReducer'

const PastProjects = ({
  classes, projectReducer, setProjects, addToDescList, addToPicList,
}) => {
  const {
    projectDesc, projectDescList, projectPicList, projectPicNames,
  } = projectReducer
  return (
    <div>
      <h3>Step 3: Let us know what work you want to show off!</h3>
      <Dropzone onDrop={e => addToPicList(e[0])} >
        <p>Drag and drop a picture here to use as your profile picture or click to select a file.</p>
      </Dropzone>
      <div>
        {projectPicNames.length > 0 && projectPicNames.map(name => (
          <h3 key={name}>{name}</h3>
              ))}
        {projectPicList.length > 0 && projectPicList.map(picture => (
          <img key={picture} className={classes.image} src={picture} alt="" />
            ))}
        {projectDescList.length > 0 && projectDescList.map((desc, index) => (
          <p key={index}>{desc}</p>
            ))}
      </div>
      <TextField multiline rowsMax="5" value={projectDesc} label="Description of Project" onChange={e => setProjects(e)} />
      <Button raised color="accent" onClick={() => addToDescList()} >Add Description</Button>
    </div>
  )
}

const styles = {
  image: {
    width: 120,
  },
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setProjects, addToDescList, addToPicList })(withStyles(styles)(PastProjects))

PastProjects.propTypes = {
  classes: PropTypes.object.isRequired,
  projectReducer: PropTypes.shape({
    projectDesc: PropTypes.string.isRequired,
    projectDescList: PropTypes.array.isRequired,
    projectPicList: PropTypes.array.isRequired,
    projectPicNames: PropTypes.array.isRequired,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
  addToDescList: PropTypes.func.isRequired,
  addToPicList: PropTypes.func.isRequired,
}