import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar'
import { StyledContainer } from './style';

const MainPage = () => {
    return (
        <>
            {/* <Header /> */}
            <NavBar />
            {/* <SideBar /> */}
            <StyledContainer>
                <Outlet />
            </StyledContainer>
            {/* <Footer /> */}
        </>
    )
}

export default MainPage;