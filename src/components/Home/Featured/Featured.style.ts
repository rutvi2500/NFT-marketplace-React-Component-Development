import styled from 'styled-components';

export const FeaturedStyle = styled.div`
  .section-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;

    .heading {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontXL};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 48px;
    }

    .see-all {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      p {
        color: ${(props) => props.theme.dark2};
        font-size: ${(props) => props.theme.fontXs};
        font-weight: ${(props) => props.theme.bold1};
        line-height: 26px;
        text-decoration-line: underline;
        text-underline-offset: 2px;
      }
    }
  }

  .featured-cards-container {
    display: flex;
    gap: 30px;
    overflow: auto;
  }
`;
