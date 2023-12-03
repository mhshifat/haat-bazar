import {useContext} from 'react';
import {ThemeContext} from '../providers/theme-provider';

export default function useTheme() {
  const res = useContext(ThemeContext);
  if (!res)
    throw new Error(
      "Please wrap your component with 'ThemeProvider' to use the hook!",
    );
  return res;
}
