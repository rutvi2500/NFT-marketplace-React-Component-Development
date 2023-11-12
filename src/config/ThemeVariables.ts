import { AliasToken } from 'antd/es/theme/internal';
import { variables } from './variables';

export const getAntTheme: Partial<AliasToken> = {
  fontFamily: `'Inter', sans-serif, `,
  colorPrimary: variables.primary,
  colorPrimaryBg: variables.backgroundColor,
};
