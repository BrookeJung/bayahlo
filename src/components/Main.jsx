import React from 'react'
import { Button } from 'antd'
import PageWrapper from './PageWrapper'
import styled from 'styled-components'

const MainWrapper = styled.div`
  background-color: #fffcf0;
`
const Main = () => {
  return (
    <PageWrapper>
      <MainWrapper>
        <h1> Main page </h1>
        <Button type="ghost">Sign Up</Button>
      </MainWrapper>
    </PageWrapper>
  )
}

export default Main
