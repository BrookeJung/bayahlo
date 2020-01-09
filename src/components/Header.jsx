import React from 'react'
import styled from 'styled-components'
import logo from '../style/logo/bayalogo_rose.png'
import { Dropdown, Button, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 10px;
  width: 100%;
  z-index: 10;
  position: fixed;
  background-color: white;
  height: 34;
`

const MenuItem = styled(Menu.Item)`
  & > * {
    padding-right: 5px;
  }
`
const MenuLink = styled(Link)`
  font-weight: 450;
  font-size: 1.05rem;
  text-decoration: none;
  color: #422100;
  &:hover {
    color: #727272;
  }
  margin-right: 20px;
  &:nth-child(1) {
    margin-left: 10px;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    padding-right: 10px;
  }
`
const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img style={{ width: 150 }} src={logo} alt={'로고'} />
      </Link>
      <MenuWrapper>
        <MenuLink to="/">
          <Icon type="crown" />
          &nbsp;청첩장
        </MenuLink>
        <MenuLink to="/">
          <Icon type="gift" />
          &nbsp;감사장
        </MenuLink>
        <MenuLink to="/">
          <Icon type="edit" />
          &nbsp;커스텀제작
        </MenuLink>
        <MenuLink to="/">
          <Icon type="question-circle" />
          &nbsp;Q &amp; A
        </MenuLink>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Header
