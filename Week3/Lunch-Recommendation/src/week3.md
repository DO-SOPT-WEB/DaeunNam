### 🖤 리액트에 대하여

#### 컴포넌트는 어떤 기준과 방법으로 분리하는 것이 좋을까?
- 화면에 보여지는 것을 기준으로 하여, 나눌 수 있는 가장 작은 기준으로 나누어야 나중에 수정과 재사용에 용이하다고 생각한다. 

#### 좋은 상태 관리란 무엇일까?
1. 합성 컴포넌트를 적절히 사용해서 Prop Drilling 해소
2. 컴포넌트의 상태를 서로 관련이 있는 것들끼리만 모아서 위치시킨다. -> State Colocation
    - 최대한 영향이 가는 부분을 최소화!

#### 렌더링을 효과적으로 관리하는 방법은 무엇이 있을까?
###### 1) 객체 타입의 state는 최대한 분할하여 선언
- 객체가 크고 복잡한 구조의 경우, 분할할 수 있는 만큼 최대한 분할하는 것이 좋다.
- state에서 일부의 프로퍼티만 사용하는 하위 컴포넌트가 있다면, 그 컴포넌트는 해당 프로퍼티가 변경될 때만 리렌더링 되는 게 바람직하다.

###### 2) Hooks에서 shouldComponentUpdate를 대체하는 방법
- shouldComponentUpdate는 클래스형 컴포넌트에서 리렌더링 여부를 결정하는 로직을 만드는 생명주기 메소드이다.
- 이는 리렌더링을 방지해서 렌더링 최적화를 위해 클래스형 컴포넌트에서 자주 사용되던 메소드이다.

###### 3) React.memo를 이용한 컴포넌트 메모이제이션 방법
- React.memo는 컴포넌트를 래핑하여 props를 비교하여 리렌더링을 막을 수 있는 메모이제이션 기법을 제공하는 함수이다.
```
Index
ㄴUserList
  ㄴUserItem
```
- 위와 같은 컴포넌트의 구조가 있을 때 React.memo를 이용해 메모이제이션 기법을 적용하면 UserList의 길이가 변할 때 새로 변경된 UserItem만 렌더링하고 기존에 이미 렌더링된 UserItem들은 리렌더링 되지 않도록 할 수 있다.

###### 4) useMemo
- useMemo는 종속 변수들이 변하지 않으면 함수를 굳이 다시 호출하지 않고 이전에 변환한 참조값을 재사용한다.
    - 즉, 함수 호출 시간도 세이브할 수 있고, 같은 값을 props로 받는 하위 컴포넌트의 리렌더링도 방지할 수 있다.

###### 5) useCallback
- 기존에는 상위 컴포넌트에서 하위 컴포넌트로 함수를 props로 넘겨줄 때 상위 컴포넌트가 리렌더링 될 때마다 상위 컴포넌트 안에 선언된 함수를 새로 생성하기 때문에 그때마다 새 참조 함수를 하위 컴포넌트로 넘겨준다.
    -> 이때 `useCallback` 함수를 선언해주면 종속 변수들이 변하지 않으면 함수를 재생성하지 않고 이전에 있던 참조 변수를 그대로 하위 컴포넌트에 props에 전달하여 하위 컴포넌트의 리렌더링을 방지한다.

#### Props Drilling이란 무엇이고 이를 어떻게 해결할 수 있는가?
- Props Drilling은 props를 오로지 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트들을 거치면서, React Component 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정이다.
###### 언제 문제가 되는가?
- Prop 전달이 10 ~ 15개 같이 많은 과정을 거치게 되면 코드를 읽을 때 해당 prop를 추적하기 힘들어진다.
    - 때문에 유지 보수 또한 어려워진다.
###### 해결 방법?
1) 전역 상태관리 라이브러리 사용
- redux, MobX, recoil 등을 사용해 값이 필요한 컴포넌트에서 직접 불러서 사용한다.
2) children 사용
- Children ? 
    - 태그와 태그 사이의 모든 내용을 포시하기 위해 사용되는 특수한 propㄴ

https://velog.io/@sjgske/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B5%AC%EC%A1%B0

https://cocoder16.tistory.com/36

https://slog.website/post/13
