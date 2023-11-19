import { Checkbox as AntCheckbox } from 'antd';
import styled from 'styled-components';

export const Checkbox = styled(AntCheckbox)`
  && .ant-checkbox-checked .ant-checkbox-inner {
    background-color: transparent !important;
  }
`;
