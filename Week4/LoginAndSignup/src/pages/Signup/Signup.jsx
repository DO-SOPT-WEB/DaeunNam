import { GlobalStyle } from '../../style/GlobalStyle'
import axios from "axios";
import { useState } from 'react';
import * as S from './style';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const saveUsername = event => {
        setUsername(event.target.value);
    };

    const savePassword = event => {
        setPassword(event.target.value);
    };

    const saveNickName = event => {
        setNickname(event.target.value);
    };

    const postData = () => {
        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/members`, {
                "username": username,
                "nickname": nickname,
                "password": password
            });
            console.log("성공🤩");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <GlobalStyle />
            <S.Component>
                <S.PageTitle>Sign Up</S.PageTitle>
                <S.Field>ID</S.Field>
                <S.Input type="text"
                    placeholder="아이디를 입력해주세요"
                    size="25"
                    value={username}
                    onChange={saveUsername} />
                <S.CheckButton>
                    <button type="button">중복체크</button>
                </S.CheckButton>
                <S.Field>비밀번호</S.Field>
                <input type="text"
                    placeholder="비밀번호를 입력해주세요"
                    size="29"
                    value={password}
                    onChange={savePassword} />
                <S.Field>비밀번호 확인</S.Field>
                <input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
                <span>닉네임</span>
                <input
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    value={nickname}
                    onChange={saveNickName} />
                <button onClick={postData}>회원가입</button>
            </S.Component>
        </>
    );
};

export default SignUp;

