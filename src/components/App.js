import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Aside from './Aside'
import Items from './Items'
import Comments from './Comments'
import { media } from '../style/globalStyle'

import {
  createItem,
  removeItem,
  setActiveItem,
  addComment
} from '../actions/actions'

const StyledApp = styled.div`
  display: flex;
  justify-content: start;
  max-width: 80rem;
  margin: 1rem auto;
  border: 1px solid #2b2f3e;
  border-radius: 2px;
  box-shadow: 0 0 2px 2px #6f7073;
  ${media.giant`
		width: 98%;
	`};
  ${media.desktop`
		width: 90%;
	`};
  ${media.tablet`
		flex-direction: column;
	`};
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0;
  align-items: flex-start;
  ${media.giant`
		flex: 1 1 80%;
		margin-right: 1.5rem;
	`};
  ${media.desktop`
		flex: 0 1 80%;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	`};
  ${media.tablet`
		margin: 2rem 1rem;
	`};
  ${media.tablet`
		margin: 1.5rem 0.5rem;
	`};
`

const App = props => {
  return (
    <StyledApp>
      <Aside />
      <ItemsContainer>
        <Items
          active={props.active}
          items={props.items}
          addItem={props.createItem}
          removeItem={props.removeItem}
          setActive={props.setActiveItem}
        />
        <Comments
          active={props.active}
          items={props.items}
          addComment={props.addComment}
        />
      </ItemsContainer>
    </StyledApp>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
    active: state.active
  }
}

App.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  createItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
  createItem,
  removeItem,
  setActiveItem,
  addComment
})(App)
