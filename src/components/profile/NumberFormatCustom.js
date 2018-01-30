import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

class NumberFormatCustom extends PureComponent {
    static propTypes = {
      onChange: PropTypes.func.isRequired,
    }

    render() {
      return (
        <NumberFormat
          {...this.props}
          onValueChange={(values) => {
          this.props.onChange({
            target: {
              value: values.value,
            },
          });
        }}
          thousandSeparator
          decimalScale={2}
          fixedDecimalScale
          prefix="$"
        />
      )
    }
}

export default NumberFormatCustom