import styled from 'styled-components'

const CellScreen = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export default CellScreen
