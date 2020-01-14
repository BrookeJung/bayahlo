import React from 'react'
import styled from 'styled-components'
import logo from '../style/logo/bayalogo_rose.png'
import palette from '../style/palette'
import PcScreen from './wrapper/PcScreen'
import CellScreen from './wrapper/CellScreen'
import { Dropdown, Button, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 8px;
  width: 100%;
  z-index: 10;
  position: fixed;
  height: 60;
  background-color: white;
  border-bottom: 1px solid ${palette.orange[1]};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.1);
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
        <Icon type="bank" />
        예식장 위치
      </MenuLink>
    </MenuItem>
    <MenuItem key="5">
      <MenuLink to="/mypage">
        <Icon type="user" />
        마이페이지
      </MenuLink>
    </MenuItem>
  </Menu>
)

const Header = () => {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <CellScreen>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="ghost" style={{ border: 'none' }}>
                <Icon
                  type="menu"
                  style={{ fontSize: '20px', color: '#dd6f00' }}
                />
              </Button>
            </Dropdown>
          </CellScreen>
        </MenuWrapper>
        <Link to="/">
          <img style={{ width: 150 }} src={logo} alt={'로고'} />
        </Link>
        <MenuWrapper>
          <PcScreen>
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
            <MenuLink to="/">
              <Icon type="user" />
              마이페이지
            </MenuLink>
          </PcScreen>
        </MenuWrapper>
      </Wrapper>
    </>
  )
}

export default Header
