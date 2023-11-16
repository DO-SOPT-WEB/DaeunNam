import { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const saveUsername = event => {
        setUsername(event.target.value);
    };

    const savePassword = event => {
        setPassword(event.target.value);
    };

    const moveSignupPage = () => {
        navigate(`/signup`);
    };

    return (
        <S.Container>
            <S.InputContainer>
                <S.PageTitle>Login</S.PageTitle>
                <S.Field className='id-field'>ID</S.Field>
                <input
                    type="text"
                    size="25"
                    placeholder="아이디를 입력해주세요"
                    value={username}
                    onChange={saveUsername} />
                <S.Field className='pw-field'>PASSWORD</S.Field>
                <input
                    type="text"
                    size="25"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={savePassword} />
            </S.InputContainer>
            <S.ButtonContainer>
                <S.Button type="button">로그인</S.Button>
                <S.SignUpBtn type="button" onClick={moveSignupPage}>회원가입</S.SignUpBtn>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default Login;