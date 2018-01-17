import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'
import _ from 'underscore'

const ReviewProjects = ({ projectPicList, projectPicNames, projectDescList }) => (
  <div>
    <h2>Past Projects</h2>
    <Table>
      <TableBody>
        {_.zip(projectPicNames, projectDescList, projectPicList).map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row[0]}</TableCell>
            <TableCell>{row[1]}</TableCell>
            <TableCell>
              <img style={{ height: 50 }} src={row[2]} alt={row[0]} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

const mapStateToProps = state => ({
  projectPicList: state.projectReducer.projectPicList,
  projectPicNames: state.projectReducer.projectPicNames,
  projectDescList: state.projectReducer.projectDescList,
})


export default connect(mapStateToProps)(ReviewProjects)

ReviewProjects.propTypes = {
  projectPicList: PropTypes.array.isRequired,
  projectPicNames: PropTypes.array.isRequired,
  projectDescList: PropTypes.array.isRequired,
}