import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';
import { getAntTheme } from './config/ThemeVariables';
import { ThemeProvider } from 'styled-components';
import { variables } from './config/variables';

const StyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={variables}>
      <ConfigProvider theme={{ token: getAntTheme, hashed: true }}>
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default StyleProvider;
