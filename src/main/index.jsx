import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { StyledContainer } from './style';

const MainPage = () => {
    return (
        <>
            <Header />
            <SideBar />
            <StyledContainer>
                <Outlet />
            </StyledContainer>
            {/* <Footer /> */}
        </>
    )
}

export default MainPage;