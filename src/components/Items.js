import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ItemsTitle, StyledContainer } from './Typography'
import AddItemBox from './AddItemBox'
import ItemList from './ItemList'
import { media } from '../style/globalStyle'

const StyledItems = styled(StyledContainer)`
  flex: 0 0 466px;
  margin-right: 1.125rem;
  padding-left: 0;
  padding-right: 0;
  ${media.giant`
		flex: 0 1 466px;
	`};
  ${media.desktop`
		flex: none;
		width: 95%;
		margin: 0 0 1rem 0;
	`};
`

const StyledItemsTitle = styled(ItemsTitle)`
  padding-left: 1.875rem;
  ${media.phone`
		padding-left: 1rem;
	`};
`

const Items = ({ active, items, addItem, removeItem, setActive }) => {
  return (
    <StyledItems>
      <StyledItemsTitle>items</StyledItemsTitle>
      <AddItemBox addItem={addItem} items={items} />
      <ItemList
        items={items}
        active={active}
        removeItem={removeItem}
        setActive={setActive}
      />
    </StyledItems>
  )
}

Items.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired
}

export default Items
