import React from 'react'
import { TextField, Button, withStyles } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { setProjects, addToDescList, addToPicList } from './../../ducks/reducers/projectReducer'

const PastProjects = ({
  classes, projectReducer, setProjects, addToDescList, addToPicList,
}) => {
  const { projectDesc, projectPicList, projectPicNames } = projectReducer
  return (
    <div>
      <h3>Step 3: Let us know what work you want to show off!</h3>
      <Dropzone onDrop={e => addToPicList(e[0])} >
        {projectPicList.length > 0 ?
          <div>
            {projectPicNames.map(name => (
              <h3 key={name}>{name}</h3>
              ))}
            {projectPicList.map(picture => (
              <img key={picture} className={classes.image} src={picture} alt="" />
            ))}
          </div>
          :
          <p>Drag and drop a picture here to use as your profile picture or click to select a file.</p>
          }
      </Dropzone>
      <TextField value={projectDesc} label="Description" onChange={e => setProjects(e)} />
      <Button onClick={() => addToDescList()} >Add To Projects</Button>
    </div>
  )
}

const styles = {
  image: {
    height: 150,
  },
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setProjects, addToDescList, addToPicList })(withStyles(styles)(PastProjects))

PastProjects.propTypes = {
  classes: PropTypes.object.isRequired,
  projectReducer: PropTypes.object.isRequired,
  setProjects: PropTypes.func.isRequired,
  addToDescList: PropTypes.func.isRequired,
  addToPicList: PropTypes.func.isRequired,
}