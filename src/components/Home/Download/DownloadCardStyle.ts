import styled from 'styled-components';

export const DownloadCardStyle = styled.div`
  width: 1140px;
  height: 408px;
  padding: 40px;
  background: ${(props) => props.theme.dark2};
  border-radius: 15px;
  color: ${(props) => props.theme.white};
  display: flex;
  gap: 90px;
  .download-text {
    display: flex;
    width: 568px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    .download-heading {
      font-size: ${(props) => props.theme.fontXL};
      font-weight: ${(props) => props.theme.bold2};
      line-height: 48px;
    }
    .download-subheading {
      font-size: ${(props) => props.theme.fontM};
      line-height: 32px;
    }
    .badge-container {
      gap: 16px;
      display: flex;
    }
  }
  .mobile-images-container {
    width: 371px;
    height: 392px;
    padding: 16px 10px;
    display: flex;
    align-item: right;
    position: relative;
    .back-mobile-img-container {
      position: absolute;
      left: 129.57px;
      .back-mobile-img {
        position: relative;
        width: 231.429px;
        height: 497px;
        .back-mobile-bg,
        .back-mobile-speaker,
        .back-mobile-screen {
          position: absolute;
        }
        .back-mobile-speaker {
          top: 13.25px;
          right: 100.29px;
        }
        .back-mobile-screen {
          top: 25.4px;
          right: 8.82px;
        }
      }
    }
    .front-mobile-img-container {
      position: absolute;
      .front-mobile-img {
        padding: 66px 0;
        position: relative;
        z-index: 2;
        .front-mobile-bg,
        .front-mobile-screen,
        .front-mobile-speaker {
          position: absolute;
        }
        .front-mobile-bg {
        }
        .front-mobile-screen {
          top: 76.49px;
          left: 13.32px;
        }
        .front-mobile-speaker {
          top: 78.39px;
          left: 95.15px;
        }
      }
    }
  }
`;
