import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './styles/Global';
import Theme from './styles/Theme';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <>
                <GlobalStyles />
                <Container>
                    <Header />
                    <Main />
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;
