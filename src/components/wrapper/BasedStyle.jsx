import styled from 'styled-components'
import { Button } from 'antd'
import palette from '../../style/palette'
export const div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
`
export const MainButton = styled(Button)`
  border-color: ${palette.orange[3]};
  color: ${palette.orange[3]};
  &:hover {
    border-color: ${palette.orange[1]};
  }
`
