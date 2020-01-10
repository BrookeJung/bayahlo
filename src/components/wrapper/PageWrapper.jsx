import styled from 'styled-components'

const PageWrapper = styled.div`
  @media screen and (max-witdh: 768px) {
    width: 100%;
    overflow-x: auto;
    & Pcscreen,
    .pcscreen {
      display: none;
    }
    & Cellscreen,
    .cellscreen {
      display: inline-block;
    }
  }
  @media screen and (min-witdh: 769px) {
    width: 100%;
    overflow-x: auto;
    & Pcscreen,
    .pcscreen {
      display: flex;
    }
    & Cellscreen,
    .cellscreen {
      display: none;
    }
  }
  padding-top: 80px;
`

export default PageWrapper
