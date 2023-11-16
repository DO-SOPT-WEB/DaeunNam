import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import * as S from './style';
import { useState } from 'react';

const MyPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [nickname, setNickname] = useState("");

    const moveLoginPage = () => {
        navigate(`/login`);
    };

    const getLoginData = async () => {
        try {
            axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/members/${userId}`, {
                userId: userId,
            }).then((response) => {
                setUsername(response.data.username);
                setNickname(response.data.nickname);
                console.log("✨🔥성공🔥✨");

            })
        } catch (err) {
            console.log(err);
        }
    };
    getLoginData();

    return (
        <S.Container>
            <S.PageTitle>MY PAGE</S.PageTitle>
            <S.TextArea>
                ID : {username}
            </S.TextArea>
            <S.TextArea>
                닉네임 : {nickname}
            </S.TextArea>
            <S.Button type="button" onClick={moveLoginPage}>로그아웃</S.Button>
        </S.Container>
    );
};

export default MyPage;