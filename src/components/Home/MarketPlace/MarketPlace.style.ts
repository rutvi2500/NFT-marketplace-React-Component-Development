import styled from 'styled-components';

export const MarketPlaceStyle = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    .section-heading {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontXL};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 48px;
    }
    .section-subHeading {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontM1};
      font-weight: 400;
      line-height: 32px;
    }
  }
  .video-container {
    display: flex;
    flex-direction: column;
    position: relative;
    .page-fill {
      position: relative;
      .play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
    .controll {
      position: absolute;
      top: 13px;
      left: 10px;
      cursor: pointer;
    }
    .plus {
      position: absolute;
      top: 13px;
      right: 10px;
      cursor: pointer;
    }
  }
`;
