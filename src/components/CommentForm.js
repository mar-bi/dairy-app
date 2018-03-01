import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ItemLogo } from './CommentList'
import { media } from '../style/globalStyle'

const FormContainer = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 5px 10px 0;
  margin-bottom: 1rem;
`

const FormLogo = styled(ItemLogo)`
  background-color: #e6e6e6;
  margin-top: 0;
`

const FormTextarea = styled.textarea`
  height: 4.375rem;
  width: 18rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border: 2px solid #e6e6e6;
  border-radius: 2px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #2b2f3e;
  font-size: 0.75rem;
  ${media.giant`
		width: 70%;
	`};
`

const CommentForm = ({ active, comments, addComment }) => {
  let formInput = null
  const handleSend = e => {
    if (e.ctrlKey && e.charCode === 13) {
      addComment(active, formInput.value)
      formInput.value = ''
    }
  }

  return (
    <FormContainer>
      <FormLogo />
      <FormTextarea
        innerRef={input => {
          formInput = input
        }}
        onKeyPress={handleSend}
      />
    </FormContainer>
  )
}

CommentForm.propTypes = {
  active: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}

export default CommentForm
