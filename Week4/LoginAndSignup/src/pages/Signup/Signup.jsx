import { GlobalStyle } from '../../style/GlobalStyle'
import axios from "axios";
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [isExist, setIsExist] = useState('none');
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const [signupButton, setSignupButton] = useState(false);
    const navigate = useNavigate();

    const saveUsername = event => {
        setUsername(event.target.value);
    };

    const savePassword = event => {
        setPassword(event.target.value);
    };

    const saveNickName = event => {
        setNickname(event.target.value);
    };

    const moveLoginPage = () => {
        navigate(`/login`);
    };

    const postData = async () => {
        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/members`, {
                "username": username,
                "nickname": nickname,
                "password": password
            }).then(() => {
                console.log("성공🤩");
                console.log(`아이디 : ${username}`);
                console.log(`비번 : ${password}`);
                console.log(`닉네임 : ${nickname}`);
            })
        } catch (err) {
            console.log(err);
        }
    };

    const duplicationCheck = () => {
        let inputID = document.querySelector(".id-input").value;

        axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/members/check`, {
            params: {
                "username": `${inputID}`,
            },
        })
            .then((response) => {
                const isDuplicate = response.data.isExist;
                console.log(isDuplicate);
                if (isDuplicate) {
                    setIsExist('exist');
                    console.log("중복되는 아이디 입니다.");
                } else {
                    setUsername(inputID);
                    setIsExist('notExist');
                    console.log("🔥사용 가능한 아이디입니다.🔥");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onChangePasswordConfirm = useCallback(
        (e) => {
            const passwordConfirmCurrent = e.target.value
            if (password === passwordConfirmCurrent) {
                console.log('✅비밀번호 일치✅');
                setIsPasswordConfirm(true)
            } else {
                console.log('🚨비밀번호 불일치🚨');
                setIsPasswordConfirm(false)
            }
        },
        [password]
    )

    useEffect(() => {
        username && isExist === 'notExist' && isPasswordConfirm && nickname ? (
            setSignupButton(true)
        ) : (
            setSignupButton(false)
        )
    }, [username, isExist, isPasswordConfirm, nickname]);

    return (
        <>
            <GlobalStyle />
            <S.Container>
                <S.PageTitle>Sign Up</S.PageTitle>
                <S.Field className='id-field'>ID</S.Field>
                <input
                    className='id-input'
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    size="19"
                    value={username}
                    onChange={(e) => {
                        saveUsername(e);
                        setIsExist('none');
                    }} />
                <S.CheckButton
                    type="button"
                    className={(isExist === 'exist') ? 'id-exist' :
                        (isExist === 'notExist') ? 'id-notExist' : 'none'}
                    onClick={(event) => {
                        saveUsername(event);
                        duplicationCheck();
                    }}
                >중복체크
                </S.CheckButton>
                <S.Field className='pwd-field'>비밀번호</S.Field>
                <input type="text"
                    placeholder="비밀번호를 입력해주세요"
                    size="28"
                    value={password}
                    onChange={savePassword} />
                <S.Field className={`pwd-${isPasswordConfirm ? 'success' : 'error'}`}>비밀번호 확인</S.Field>
                <input
                    type="text"
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                    size="28"
                    onChange={onChangePasswordConfirm} />
                <S.Field className='nickname-field'>닉네임</S.Field>
                <input
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    size="28"
                    value={nickname}
                    onChange={saveNickName} />
                <S.SignUpBtn
                    type='button'
                    disabled={!signupButton}
                    onClick={() => {
                        postData();
                        moveLoginPage();
                    }}>
                    회원가입
                </S.SignUpBtn>
            </S.Container>
        </>
    );
};

export default SignUp;

