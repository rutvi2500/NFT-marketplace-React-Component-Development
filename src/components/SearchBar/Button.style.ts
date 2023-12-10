import { Button as AntButton, ButtonProps } from 'antd';
import styled from 'styled-components';

interface StyledButtonProps extends ButtonProps {
  width?: number;
}

export const Button = styled(AntButton)<StyledButtonProps>`
  display: flex;
  height: 56px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ebedf2;

  color: ${(props) => props.theme.dark2};
  font-size: ${(props) => props.theme.fontM};
  font-weight: 400;
  line-height: 32px;

  ${({ width }) => width && `width: ${width}px;`}
`;