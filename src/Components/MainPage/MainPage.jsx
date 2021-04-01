import { Container } from 'react-bootstrap';
import WelcomeSlide from '../Slides/Welcome/Welcome'
import AboutAppSlide from '../Slides/AboutApp/AboutApp'
import Player from '../Slides/Player/Player'
import AboutCommand from '../Slides/AboutCommand/AboutCommand'

const MainPage = () => {
    return (
        <Container>
            <WelcomeSlide />
            <AboutAppSlide />
            <Player />
            <AboutCommand/>
        </Container>
    )
}

export default MainPage;