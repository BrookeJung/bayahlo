import styled from 'styled-components'

const PcScreen = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) {
    width: 100%;
    overflow-x: auto;
    display: flex;
  }
`

export default PcScreen
