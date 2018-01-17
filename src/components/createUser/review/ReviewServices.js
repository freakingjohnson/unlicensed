import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'

const ReviewServices = ({
  Plumbing, CabinetsandCoutertops, FramingandSheetrock, DrywallandInsulation, Electrical, Flooring, Painting, Landscaping, Roofing, HouseorRoomRemodel,
}) => (
  <div>
    <h2>Services you provide</h2>
    <Table>
      <TableBody>
        {Plumbing &&
          <TableRow>
            <TableCell>Plumbing</TableCell>
          </TableRow>
          }
        {CabinetsandCoutertops &&
          <TableRow>
            <TableCell>Cabinets and Coutertops</TableCell>
          </TableRow>
          }
        {FramingandSheetrock &&
          <TableRow>
            <TableCell>Framing and Sheetrock</TableCell>
          </TableRow>
          }
        {DrywallandInsulation &&
          <TableRow>
            <TableCell>Drywall and Insulation</TableCell>
          </TableRow>
          }
        {Electrical &&
          <TableRow>
            <TableCell>Electrical</TableCell>
          </TableRow>
          }
        {Flooring &&
          <TableRow>
            <TableCell>Flooring</TableCell>
          </TableRow>
          }
        {Painting &&
          <TableRow>
            <TableCell>Painting</TableCell>
          </TableRow>
          }
        {Landscaping &&
          <TableRow>
            <TableCell>Landscaping</TableCell>
          </TableRow>
          }
        {Roofing &&
          <TableRow>
            <TableCell>Roofing</TableCell>
          </TableRow>
          }
        {HouseorRoomRemodel &&
          <TableRow>
            <TableCell>House or Room Remodel</TableCell>
          </TableRow>
          }
      </TableBody>
    </Table>
  </div>
)

const mapStateToProps = state => ({
  Plumbing: state.serviceReducer.Plumbing,
  CabinetsandCoutertops: state.serviceReducer.CabinetsandCoutertops,
  FramingandSheetrock: state.serviceReducer.FramingandSheetrock,
  DrywallandInsulation: state.serviceReducer.DrywallandInsulation,
  Electrical: state.serviceReducer.Electrical,
  Flooring: state.serviceReducer.Flooring,
  Painting: state.serviceReducer.Painting,
  Landscaping: state.serviceReducer.Landscaping,
  Roofing: state.serviceReducer.Roofing,
  HouseorRoomRemodel: state.serviceReducer.HouseorRoomRemodel,
})


export default connect(mapStateToProps)(ReviewServices)

ReviewServices.propTypes = {
  Plumbing: PropTypes.bool.isRequired,
  CabinetsandCoutertops: PropTypes.bool.isRequired,
  FramingandSheetrock: PropTypes.bool.isRequired,
  DrywallandInsulation: PropTypes.bool.isRequired,
  Electrical: PropTypes.bool.isRequired,
  Flooring: PropTypes.bool.isRequired,
  Painting: PropTypes.bool.isRequired,
  Landscaping: PropTypes.bool.isRequired,
  Roofing: PropTypes.bool.isRequired,
  HouseorRoomRemodel: PropTypes.bool.isRequired,
}