import React from 'react'
import { MainButton } from '../components/wrapper/BasedStyle'
import PageWrapper from '../components/wrapper/PageWrapper'
import styled from 'styled-components'

const MainWrapper = styled.div`
  background-color: #ffeddb;
`
const Main = () => {
  return (
    <PageWrapper>
      <MainWrapper>
        <h1> Main page </h1>
        <MainButton>Sign Up</MainButton>
      </MainWrapper>
    </PageWrapper>
  )
}

export default Main
