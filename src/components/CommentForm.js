import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ItemLogo } from './CommentList'
import { AddItemButton as Button } from './AddItemBox'
import { media } from '../style/globalStyle'

const FormContainer = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 5px 10px 0;
  margin-bottom: 1rem;
  ${media.phone`
    margin-bottom: 0rem;  
  `};
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

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FormButton = styled(Button)`
  display: block;
  ${media.giant`
    width: 130px;
  `};
  ${media.tablet`
    width: 130px;
  `};
  ${media.phone`
    width: 120px;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  `};
`

const CommentForm = ({ active, comments, addComment }) => {
  let formInput = null
  const handleSend = e => {
    if (e.ctrlKey && e.charCode === 13 && formInput.value) {
      addComment(active, formInput.value)
      formInput.value = ''
    }
  }

  const handleSendButton = e => {
    if (formInput.value){
      addComment(active, formInput.value)
      formInput.value = ''
    }
  }

  return (
    <div>
      <FormContainer>
        <FormLogo />
        <FormTextarea
          innerRef={input => {
            formInput = input
          }}
          onKeyPress={handleSend}
        />
      </FormContainer>
      <FormButtonContainer>
        <FormButton onClick={handleSendButton}>
          Add comment 
        </FormButton>
      </FormButtonContainer>
    </div>
  )
}

CommentForm.propTypes = {
  active: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}

export default CommentForm