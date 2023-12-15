import styled from 'styled-components';

export const TopSellerCardStyle = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1.4px solid ${(props) => props.theme.gray};
  background: ${(props) => props.theme.white};
  .creator-detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    .number {
      color: ${(props) => props.theme.dark2};
      font-family: Helvetica;
      font-size: ${(props) => props.theme.fontM};
    }
    .creator-details {
      display: inline-flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        flex-shrink: 0;
      }
      .creator {
        display: flex;
        gap: 4px;
        flex-direction: column;
        justify-content: center;
        .creator-id {
          color: ${(props) => props.theme.dark2};
          font-size: ${(props) => props.theme.fontS};
          font-weight: ${(props) => props.theme.bold3};
          text-transform: capitalize;
        }
        .creator-floor {
          color: ${(props) => props.theme.gray2};
          font-size: ${(props) => props.theme.fontXs};
        }
      }
    }
  }
  .stats-details {
    display: flex;
    width: 160px;
    align-items: flex-start;
    gap: 4px;
    img {
      width: 24px;
      height: 24px;
      margin-top: 5px;
    }
    .bnb {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontM1};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 34px;
    }
    .stats {
      display: flex;
      gap: 4px;
      line-height: 22px;
    }
    .price {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontXs};
    }
    .increase {
      color: #72ce47;
      font-size: ${(props) => props.theme.fontXs};
      font-weight: ${(props) => props.theme.bold3};
      text-transform: capitalize;
    }
  }
`;
