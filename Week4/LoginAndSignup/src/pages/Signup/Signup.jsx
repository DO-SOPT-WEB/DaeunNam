const Signup = () => {
    return (
        <>
            <h3>Sign Up</h3>
            <span>ID</span>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <button type="button">중복체크</button>
            <span>비밀번호</span>
            <input type="text" placeholder="비밀번호를 입력해주세요" />
            <span>비밀번호 확인</span>
            <input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
            <span>닉네임</span>
            <input type="text" placeholder="닉네임을 입력해주세요" />
            <button type="button">로그인</button>
            <button type="button">회원가입</button>
        </>
    );
};

export default Signup;