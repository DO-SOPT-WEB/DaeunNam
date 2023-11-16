import { useState } from 'react';
import * as S from './style';
import axios from "axios";
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

    const getData = async () => {
        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`, {
                username: username,
                password: password,
            }).then((res) => {
                console.log("✨성공🤩✨");
                console.log(`아이디 : ${res.data.username}`);
                console.log(`비번 : ${res.data.password}`);
                console.log(res);
                navigate(`/mypage/${res.data.id}`);
            })
        } catch (err) {
            console.log(err);
        }
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
                <S.Button type="button" onClick={getData}>로그인</S.Button>
                <S.SignUpBtn type="button" onClick={moveSignupPage}>회원가입</S.SignUpBtn>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default Login;