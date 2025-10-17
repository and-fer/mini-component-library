import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
   const displayedValue = getDisplayedValue(value, children)

   return (
      <SelectWrapper>
         <NativeSelect value={value} onChange={onChange}>
            {children}
         </NativeSelect>
         <PresentationalSelect>
            {displayedValue}
            <IconWrapper>
               <Icon id='chevron-down' strokeWidth={2} size={24} />
            </IconWrapper>
         </PresentationalSelect>
      </SelectWrapper>
   )
}

const SelectWrapper = styled.div`
   position: relative;
   width: fit-content;
`

const NativeSelect = styled.select`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   opacity: 0;
   -webkit-appearance: none;
   appearance: none;
`

const PresentationalSelect = styled.div`
   font-family: Roboto;
   font-size: 1rem;
   color: ${COLORS.gray700};
   background-color: ${COLORS.transparentGray15};
   padding: 16px 18px;
   padding-right: 50px;
   border-radius: 8px;

   ${NativeSelect}:focus + & {
      outline: 1px dotted #212121;
      outline: 2px solid #1fa7fd;
   }

   ${NativeSelect}:hover + & {
      color: #000000;
   }
`

const IconWrapper = styled.div`
   position: absolute;
   top: 50%;
   right: 0;
   transform: translateY(-50%);
   padding: 16px;
   padding-right: 8px;
   pointer-events: none;
`

export default Select
