import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ItemUl, ItemLi } from './Typography'
import { media } from '../style/globalStyle'

const StyledItemsUl = styled(ItemUl)`
  margin-top: 1rem;
  cursor: pointer;
`

const ListItem = styled(ItemLi)`
  padding-left: 1.7rem;
  padding-right: 1.5rem;
  border-left: 5px solid transparent;
  &.active {
    border-left: 5px solid #ff305a;
  }
  &:hover {
    background-color: #fff;
    filter: brightness(90%);
  }
  ${media.phone`
		padding: 0 0.75rem 0 1rem;
	`};
`

const ItemTitle = styled.h3`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2b2f3e;
  margin-right: 10px;
`

const ItemBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background-color: #27ccc0;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  border: 0;
  border-radius: 13px;
`

const DeleteButton = styled.button`
  padding: 9px 26px;
  margin-left: 0.5rem;
  max-height: 3rem;
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: capitalize;
  color: #ff305a;
  background-color: #fff;
  border: 2px solid #ff305a;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    box-shadow: 0 3px 3px #ccc;
    transform: translateY(2px);
  }
  ${media.giant`
		padding: 9px 0;
		width: 25%;
	`};
  ${media.phone`
		font-size: 0.75rem;
	`};
`

const ItemList = ({ items, active, removeItem, setActive }) => {
  const handleDelete = (e, item) => {
    e.stopPropagation()
    e.preventDefault()

    if (active === item.id) {
      const arr = [...items]
      const newActive = arr.filter(elem => elem.id !== item.id)
      setActive(newActive.length ? newActive[0].id : 0)
      return removeItem(item.id)
    } else {
      return removeItem(item.id)
    }
  }

  return (
    <StyledItemsUl>
      {items.map(item => (
        <ListItem
          key={item.id}
          className={item.id === active ? 'active' : ''}
          onClick={() => setActive(item.id)}
        >
          <div>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemBadge>{item.numComments}</ItemBadge>
          </div>
          <DeleteButton onClick={e => handleDelete(e, item)}>
            delete
          </DeleteButton>
        </ListItem>
      ))}
    </StyledItemsUl>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList
