import { TOKEN_KEY } from 'config';
import { useRoutes } from 'react-router-dom';
import Routes from 'router';
import TokenService from 'services/tokenService';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export default function App() {
    const token = TokenService.get(TOKEN_KEY as string);
    const routes = useRoutes(Routes(!!token));

    return <ThemeProvider theme={theme}>{routes}</ThemeProvider>;
}
