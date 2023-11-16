import { useNavigate } from 'react-router-dom';
import * as S from './style';

const MyPage = () => {
    const navigate = useNavigate();

    const moveLoginPage = () => {
        navigate(`/login`);
    };

    return (
        <S.Container>
            <S.PageTitle>MY PAGE</S.PageTitle>
            <S.TextArea>
                ID :
            </S.TextArea>
            <S.TextArea>
                닉네임 :
            </S.TextArea>
            <S.Button type="button" onClick={moveLoginPage}>로그아웃</S.Button>
        </S.Container>
    );
};

export default MyPage;