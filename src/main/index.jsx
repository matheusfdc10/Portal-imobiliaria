import { Outlet } from 'react-router-dom';
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