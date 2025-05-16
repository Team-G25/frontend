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
      const hasSession = document.cookie.includes('JSESSIONID');
      if (!hasSession) {
        clearUser(); // 세션 없으면 로그인 안 된 상태
        return;
      }

      try {
        const info = await getCurrentUser();
        setUser(info); // 세션 있으면 사용자 정보 복원
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
