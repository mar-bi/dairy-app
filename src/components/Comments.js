import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledContainer, ItemsTitle as CommentsTilte } from './Typography'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { media } from '../style/globalStyle'

const StyledComments = styled(StyledContainer)`
  flex: 0 0 398px;
  ${media.giant`
		flex: 0 1 398px;
	`};
  ${media.desktop`
		flex: none;
		width: 87%;
		margin: 1rem 0 0 0;
	`};
  ${media.phone`
		padding: 0 1rem;
	`};
`

const Comments = ({ active, items, addComment }) => {
  if (items.length) {
    const itemComments = items.find(item => item.id === active).comments
    return (
      <StyledComments>
        <CommentsTilte>{`Comments #${active + 1}`}</CommentsTilte>
        <CommentList comments={itemComments} />
        <CommentForm
          active={active}
          comments={itemComments}
          addComment={addComment}
        />
      </StyledComments>
    )
  } else {
    return (
      <StyledComments>
        <CommentsTilte>Comments #</CommentsTilte>
      </StyledComments>
    )
  }
}

Comments.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}

export default Comments
