import styled from 'styled-components';

export const TopSellerStyle = styled.div`
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
    .ant-segmented-item {
      transition: ${(props) => props.theme.primary} 0.3s
        cubic-bezier(0.645, 0.045, 0.355, 1);
      color: ${(props) => props.theme.dark2};
    }
    .ant-segmented-item-selected {
      border-radius: 10px;
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      font-weight: ${(props) => props.theme.bold2};
    }
    .ant-segmented-item-label {
      display: flex;
      width: 70px;
      padding: 6px 8px;
      justify-content: center;
      gap: 8px;
      align-items: center;
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
  .topseller-col1,
  .topseller-col2 {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .topseller-col1 {
    padding-right: 15px;
  }
  .topseller-col2 {
    padding-left: 15px;
  }
`;
