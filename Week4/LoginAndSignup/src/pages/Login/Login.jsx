const Login = () => {
    return (
        <>
            <h3>Login</h3>
            <span>ID</span>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <span>PASSWORD</span>
            <input type="text" placeholder="비밀번호를 입력해주세요" />
            <button type="button">로그인</button>
            <button type="button">회원가입</button>
        </>
    );
};

export default Login;