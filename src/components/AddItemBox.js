import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { nextItemId } from '../utils/helpers'
import { media } from '../style/globalStyle'

const AddItemContainer = styled.form`
  margin-top: 14px 0 10px 0;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1.875rem;
  ${media.phone`
		padding: 0 0.5rem 0 1rem;
	`};
`

const AddItemInput = styled.input`
  width: 16.5rem;
  height: 2.25rem;
  border: 2px solid #e5e5e5;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #2b2f3e;
  padding-left: 0.625rem;
  margin-right: 0.625rem;
  ${media.giant`
		width: 65%;
	`};
  ${media.phone`
		width: 60%;
	`};
`

export const AddItemButton = styled.button`
  padding: 11px 34px;
  max-height: 2.5rem;
  background-color: #27ccc0;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
  &:hover {
    background-color: #23b7ac;
  }
  &:active {
    box-shadow: 0 3px 3px #ccc;
    transform: translateY(2px);
  }
  ${media.giant`
		padding: 11px 0;
		width: 30%;
	`};
  ${media.phone`
		font-size: 0.875rem;
	`};
`

const AddItemBox = ({ items, addItem }) => {
  let formInput = null
  const handleAddItem = e => {
    e.preventDefault()
    addItem(nextItemId(items), formInput.value)
    formInput.value = ''
  }

  return (
    <AddItemContainer>
      <AddItemInput
        placeholder="Type name here ..."
        type="text"
        innerRef={input => {
          formInput = input
        }}
      />
      <AddItemButton onClick={handleAddItem}>Add new</AddItemButton>
    </AddItemContainer>
  )
}

AddItemBox.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
}

export default AddItemBox
