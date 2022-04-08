import { THEME_DARK, STATE_CURRENT_THEME } from '@/constants';
import { Theme } from '@/types';
import { atom, useRecoilValue } from 'recoil';

const currentThemeState = atom<Theme>({
  key: STATE_CURRENT_THEME,
  default: THEME_DARK,
});

export const useCurrentThemeState = () => useRecoilValue(currentThemeState);