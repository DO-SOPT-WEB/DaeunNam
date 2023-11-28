import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import MyPage from '../pages/MyPage/MyPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/mypage/:userId' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;