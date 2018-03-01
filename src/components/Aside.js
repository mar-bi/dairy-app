import React from 'react'
import styled from 'styled-components'
import { Title } from './Typography'
import { media } from '../style/globalStyle'

const StyledAside = styled.div`
  flex: 0 0 214px;
  min-height: 50rem;
  background-color: #2b2f3e;
  padding: 1.75rem 2rem;
  margin-right: 1.125em;
  ${media.giant`
		flex: 1 1 20%;
		min-height: 20rem;		
	`};
  ${media.desktop`
		flex: 0 0 20%;
	`};
  ${media.tablet`
		flex: none;
		margin-right: 0;
		min-height: 6rem;
	`};
`

const AppDescription = styled.h3`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6f7073;
  margin: 0.5rem 0;
`

const Aside = () => (
  <StyledAside>
    <Title>dairy app</Title>
    <AppDescription>Comment with no sense</AppDescription>
  </StyledAside>
)

export default Aside
