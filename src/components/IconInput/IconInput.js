import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
   small: {
      iconSize: 16 + 'px',
      iconStroke: 1,
      fontSize: 14 / 16 + 'rem',
   },
   large: {
      iconSize: 24 + 'px',
      iconStroke: 2,
      fontSize: 18 / 16 + 'rem',
   },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
   const styles = STYLES[size]

   if (!styles) {
      throw new Error(`Unknown size passed to IconInput: ${size}`)
   }

   return (
      <Form>
         <IconWrapper>
            <Label for={label}>
               <Icon
                  id={icon}
                  size={styles.iconSize}
                  strokeWidth={styles.iconStroke}
               />
               <VisuallyHidden>{label}</VisuallyHidden>
            </Label>
         </IconWrapper>

         <Input
            id={label}
            placeholder={placeholder}
            style={{ '--width': width + 'px', '--fontSize': styles.fontSize }}
         />
      </Form>
   )
}

const Input = styled.input`
   font-size: var(--fontSize);
   font-weight: 700;
   padding: 8px;
   padding-left: 2em;
   border: none;
   border-bottom: 1px solid ${COLORS.gray300};
   width: var(--width);

   &::placeholder {
      font-size: var(--fontSize);
      color: ${COLORS.gray500};
      font-weight: 400;
   }

   &:focus {
      outline-offset: 5px;
      border-radius: 2px;
   }
`
const IconWrapper = styled.div`
   color: ${COLORS.gray700};
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   /* width: var(--iconSize); */
`

const Label = styled.label``

const Form = styled.form`
   position: relative;

   &:hover {
      ${Input} {
         color: ${COLORS.black};
         border-color: ${COLORS.black};
         font-weight: 900;
         &::placeholder {
            color: ${COLORS.black};
         }
      }

      ${IconWrapper} {
         color: ${COLORS.black};
      }
   }
`

export default IconInput
