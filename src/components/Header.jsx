import React from 'react'
import styled from 'styled-components'
import logo from '../style/logo/bayalogo_rose.png'
import PageWrapper from './wrapper/PageWrapper'
import { Dropdown, Button, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const Wrapper = styled(PageWrapper)`
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
const menu = (
  <Menu>
    <MenuItem key="2">
      <MenuLink to="/custom">
        <Icon type="edit" />
        커스텀 카드
      </MenuLink>
    </MenuItem>
    <MenuItem key="3">
      <MenuLink to="/">
        <Icon type="link" />
        모바일 카드
      </MenuLink>
    </MenuItem>
    <MenuItem key="4">
      <MenuLink to="/map">
        <Icon type="column-height" />
        예식장 위치
      </MenuLink>
    </MenuItem>
    <MenuItem key="5">
      <MenuLink to="/mypage">
        <Icon type="user" />
      </MenuLink>
    </MenuItem>
  </Menu>
)

const Header = () => {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <img style={{ width: 150 }} src={logo} alt={'로고'} />
        </Link>
        <MenuWrapper className="pcscreen">
          <MenuLink to="/">
            <Icon type="crown" />
            청첩장
          </MenuLink>
          <MenuLink to="/">
            <Icon type="gift" />
            감사장
          </MenuLink>
          <MenuLink to="/custom">
            <Icon type="edit" />
            커스텀제작
          </MenuLink>
          <MenuLink to="/map">
            <Icon type="edit" />
            예식장 지도
          </MenuLink>
          <MenuLink to="/">
            <Icon type="question-circle" />Q &amp; A
          </MenuLink>
        </MenuWrapper>
        <MenuWrapper className="cellscreen">
          <Dropdown overlay={menu} trigger={['click']}>
            <Button>
              <Icon type="menu" />
            </Button>
          </Dropdown>
        </MenuWrapper>
      </Wrapper>
    </>
  )
}

export default Header
