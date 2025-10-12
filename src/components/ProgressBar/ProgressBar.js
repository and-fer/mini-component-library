/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    padding: 0,
    radius: 4 + 'px',
    height: 8 + 'px',
  },
  medium: {
    padding: 0,
    radius: 4 + 'px',
    height: 12 + 'px',
  },
  large: {
    padding: 8 + 'px',
    radius: 8 + 'px',
    height: 24 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ '--padding': styles.padding, '--borderRadius': styles.radius }}
    >
      <BarWrapper style={{ '--height': styles.height }}>
        <Bar style={{ '--value': value + '%' }} />
      </BarWrapper>

      <VisuallyHidden>Progress Bar. {value}% of Progress</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const BarWrapper = styled.div`
  width: 100%;
  height: var(--height);
  border-radius: var(--borderRadius);
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--value);
  height: 100%;
  background-color: ${COLORS.primary};
`

export default ProgressBar
