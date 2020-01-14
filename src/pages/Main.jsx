import React from 'react'
import PageWrapper from '../components/wrapper/PageWrapper'
import styled from 'styled-components'
import palette from '../style/palette'

const MainWrapper = styled.div`
  margin-left: 5%;
  padding: 2%;
  width: 90%;
  height: 500px;
  background-color: ${palette.orange[0]};
`
const Main = () => {
  return (
    <PageWrapper>
      <MainWrapper>
        <h1> Main page </h1>
      </MainWrapper>
    </PageWrapper>
  )
}

export default Main
