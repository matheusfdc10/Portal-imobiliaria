import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import NavBar from '../components/NavBar';
import { StyledContainer } from './style';

const MainPage = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <SideBar /> */}

            <NavBar />
            <StyledContainer>
                <Outlet />
            </StyledContainer>

            {/* <Footer /> */}
        </>
    )
}

export default MainPage;