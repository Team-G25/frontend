import { useEffect } from 'react';
import AppRouter from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { getCurrentUser } from '@/apis/auth/user';
import useUserStore from '@/pages/auth/store/userStore';

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const info = await getCurrentUser();
        setUser(info); // 로그인 상태 복원
      } catch {
        clearUser(); 
      }
    };

    fetchUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
