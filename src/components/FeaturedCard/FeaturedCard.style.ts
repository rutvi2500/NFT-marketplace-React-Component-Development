import styled from 'styled-components';

export const FeaturedCardStyle = styled.div`
  width: 360px;
  height: 530px;
  border-radius: 10px;
  background: #ebedf2;

  .card-image {
    position: relative;
    height: 372px;
  }
  .featured-img {
    position: absolute;
    z-index: 0;
  }
  .time {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    float: inline-end;
    display: inline-flex;
    padding: 6px 8px;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: ${(props) => props.theme.white};
  }

  .card-content {
    padding: 16px;

    .card-title {
      color: ${(props) => props.theme.black};
      font-size: ${(props) => props.theme.fontM};
      font-weight: 400;
    }

    .seller {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        color: #4f4f4f;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
    }

    .stats-container {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      align-items: flex-end;

      .left-stats {
        display: inline-flex;
        gap: 4px;
        align-items: flex-start;

        .stats-content {
          display: inline-flex;
          flex-direction: column;
          gap: 4px;

          .bnb {
            color: ${(props) => props.theme.black90};
            font-size: ${(props) => props.theme.fontM1};
            font-weight: ${(props) => props.theme.bold1};
          }
          .price {
            color: #646464;
            font-size: ${(props) => props.theme.fontXs};
            font-weight: 400;
          }
        }
      }

      .likes {
        display: inline-flex;
        padding: 6px 8px;
        justify-content: flex-end;
        align-items: center;
        gap: 4px;
        border-radius: 10px;
        background: ${(props) => props.theme.white};

        p {
          color: ${(props) => props.theme.black90};
          text-align: right;
          font-size: ${(props) => props.theme.fontXs};
          font-weight: 400;
          line-height: 22px;
        }
      }
    }
  }
`;
