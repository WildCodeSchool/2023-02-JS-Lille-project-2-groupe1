import styled from "styled-components";

export default styled.footer`
  img {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .bgFooter {
      width: 100%;
    }

    @media screen and (max-width: 850px) {
      .bgfooter {
        display: none;
      }
    }
  }
`;
