import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('nickname');
    const unprotectedPaths = ['/oauth', '/login', '/register', '/login-success'];

    if (!accessToken && !unprotectedPaths.includes(location.pathname)) {
      navigate('/oauth');
    }
  }, [location, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Outlet />
      </>
    </ThemeProvider>
  );
};

export default App;
