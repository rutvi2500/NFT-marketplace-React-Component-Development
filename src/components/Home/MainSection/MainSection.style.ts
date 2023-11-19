import styled from 'styled-components';

export const MainSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 780px;

  .main-content-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 485px;
    margin-top: 148px;
    margin-bottom: 113px;

    h1 {
      color: ${(props) => props.theme.black90};
      font-size: ${(props) => props.theme.fontXxl};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 70px;
    }

    .main-description {
      color: ${(props) => props.theme.black90};
      font-size: ${(props) => props.theme.fontM};
      font-weight: 400;
      line-height: 32px;
    }

    .buttons {
      display: flex;
      gap: 16px;

      .ant-btn {
        height: 56px;
        width: 170px;
        font-size: ${(props) => props.theme.fontM};
        font-weight: 600;
        border: 1px solid;
      }
    }
  }

  .learn-more {
    margin-top: 60px;
    display: flex;
    gap: 16px;

    .learn-more-img-container {
      position: relative;

      .play-bg {
        position: absolute;
        z-index: 0;
      }
      .play {
        position: relative;
        z-index: 1;
        padding: 10px;
      }
    }

    .learn-more-content {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.black90};
      font-size: ${(props) => props.theme.fontM};
      font-weight: 400;
      line-height: 32px;
      text-decoration-line: underline;
      text-underline-offset: 2px;
    }
  }

  .main-img-sub-section {
    .sub-section-details {
      right: 110px;
      position: relative;
      top: 320px;
      transform: rotate(-90deg);
      display: flex;
      gap: 24px;
      img {
        transform: rotate(90deg);
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .title {
          font-size: ${(props) => props.theme.fontXL};
          font-weight: ${(props) => props.theme.bold1};
          line-height: 48px;
        }

        p {
          color: var(--white, #fff);
          font-size: ${(props) => props.theme.fontM};
          font-weight: 400;
          line-height: 32px;
        }
      }
    }
    .slider-img {
      padding-top: 85px;
    }
    .arrow-container {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      left: 459px;
      top: 538px;
      position: relative;
      height: 50px;

      .arrow {
        background: white;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    }
  }

  .main-img-content {
  }

  .main-img {
    top: 0;
    right: calc(((100vw - 1460px) / 2));
    position: absolute;
    z-index: -1;
  }
`;
