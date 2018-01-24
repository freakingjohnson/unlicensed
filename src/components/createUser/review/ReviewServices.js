import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'

const ReviewServices = ({
  Plumbing, Cabinets_and_Countertops, Framing_and_Sheetrock, Drywall_and_Insulation, Electrical, Flooring, Painting, Landscaping, Roofing, House_or_Room_Remodel,
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
        {Cabinets_and_Countertops &&
          <TableRow>
            <TableCell>Cabinets and Coutertops</TableCell>
          </TableRow>
          }
        {Framing_and_Sheetrock &&
          <TableRow>
            <TableCell>Framing and Sheetrock</TableCell>
          </TableRow>
          }
        {Drywall_and_Insulation &&
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
        {House_or_Room_Remodel &&
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
  Cabinets_and_Countertops: state.serviceReducer.Cabinets_and_Countertops,
  Framing_and_Sheetrock: state.serviceReducer.Framing_and_Sheetrock,
  Drywall_and_Insulation: state.serviceReducer.Drywall_and_Insulation,
  Electrical: state.serviceReducer.Electrical,
  Flooring: state.serviceReducer.Flooring,
  Painting: state.serviceReducer.Painting,
  Landscaping: state.serviceReducer.Landscaping,
  Roofing: state.serviceReducer.Roofing,
  House_or_Room_Remodel: state.serviceReducer.House_or_Room_Remodel,
})


export default connect(mapStateToProps)(ReviewServices)

ReviewServices.propTypes = {
  Plumbing: PropTypes.bool.isRequired,
  Cabinets_and_Countertops: PropTypes.bool.isRequired,
  Framing_and_Sheetrock: PropTypes.bool.isRequired,
  Drywall_and_Insulation: PropTypes.bool.isRequired,
  Electrical: PropTypes.bool.isRequired,
  Flooring: PropTypes.bool.isRequired,
  Painting: PropTypes.bool.isRequired,
  Landscaping: PropTypes.bool.isRequired,
  Roofing: PropTypes.bool.isRequired,
  House_or_Room_Remodel: PropTypes.bool.isRequired,
}