import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ItemUl, ItemLi } from './Typography'

const CommentsLi = styled(ItemLi)`
  justify-content: flex-start;
  align-items: flex-start;
  &:last-child {
    border: 0;
  }
`

export const ItemLogo = styled.div`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  background-color: ${props => (props.num % 2 ? '#ff8a00' : '#47568c')};
  margin-top: 3px;
`

const ItemText = styled.pre`
  padding: 0 0 0 1rem;
  margin: 0;
  color: #2b2f3e;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 400;
`

const CommentList = ({ comments }) => {
  return (
    <ItemUl>
      {comments.map((item, index) => (
        <CommentsLi key={`c-${index}`}>
          <ItemLogo num={index} />
          <ItemText>{item}</ItemText>
        </CommentsLi>
      ))}
    </ItemUl>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
