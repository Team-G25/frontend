import AppRouter from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
      <div>Mailer</div>
    </ThemeProvider>
  );
}

export default App;
