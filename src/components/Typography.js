import styled from 'styled-components'
import { media } from '../style/globalStyle'

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 0.5rem 0;
  ${media.phone`
		font-size: 1.5rem;
	`};
`

export const ItemsTitle = styled(Title)`
  color: #565a69;
  text-transform: capitalize;
  margin: 1.25rem 0 0.875rem 0;
`

export const StyledContainer = styled.div`
  margin-left: 0.875rem;
  padding: 0 1rem 2rem 1.875rem;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 0 2px 4px #ddd;
`

export const ItemUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const ItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 10px 0;
  border-bottom: 2px solid #f2f2f2;
`
