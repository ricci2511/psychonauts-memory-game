import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                <Main />
            </Container>
            <Footer />
        </>
    );
}

export default App;
