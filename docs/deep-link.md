> 레퍼런스
> Deep Link: https://en.wikipedia.org/wiki/Deep_linking  
> Slack: https://api.slack.com/reference/deep-linking

| 목표     | 웹개발 개념들에 대해서 간단히 알아보자. |
| -------- | --------------------------------------- |
| 학습내용 | Deep Link                               |
| 난이도   | 🥚                                      |

# 자투리 공부 👉 궁금해요: 딥링크

### 딥링크 **Deep link란?**

딥링크(Deep Link)는 모바일 애플리케이션에서 특정한 내부 화면이나 기능으로 사용자를 바로 연결하는 링크입니다.

일반적으로 URL의 형태를 가지며, **특정한 액션** 또는 **기능을 수행**하는 데 사용됩니다.

링크를 클릭하면 애플리케이션 내부의 특정 화면, 기능, 또는 데이터로 직접 연결할 수 있게 해줍니다. 딥링크는 주로 모바일 애플리케이션에서 사용되는 개념이지만, 일부 경우에는 데스크탑 브라우저에서도 실행할 수 있습니다.

### 딥링크의 구성 요소

```tsx
scheme://host/path?query_parameters
```

| 구성 요소        | 설명                                                                   | 예시                                   |
| ---------------- | ---------------------------------------------------------------------- | -------------------------------------- |
| scheme           | 앱의 커스텀 URL 스킴 또는 표준 URL 스킴                                | myapp://                               |
| host             | 앱의 도메인 또는 호스트                                                | example.com                            |
| path             | 앱 내에서 특정 화면이나 기능을 가리키는 경로                           | /home, /settings/profile, /product/123 |
| query_parameters | 선택적으로, 딥 링크에 추가 정보를 전달하기 위해 사용되는 쿼리 파라미터 | ?param1=value1&param2=value2           |

- 알게 모르게 사용하던 딥링크 예시: `mailto://user@email.com`로 메일 프로그램 실행

### 사용 예시: 슬랙

- https://api.slack.com/reference/deep-linking
- `<a href="slack://open">슬랙 열기</a>`

### 커스텀 URI 프로토콜

- 딥링크를 사용할 때, 커스텀 URI 프로토콜을 사용할 수 있습니다. 다음은 직접 프로토콜을 설정하는 예시입니다.
  - [https://yjh5369.tistory.com/entry/Windows-브라우저에서-프로그램-실행하는-방법Custom-Uri-Scheme](https://yjh5369.tistory.com/entry/Windows-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95Custom-Uri-Scheme)

### 웹 어셈블리와 데몬(딥링크)

- 목적: 연산 코드 실행
- 딥링크의 경우: 브라우저 => 딥링크 => 데몬 => 다른 언어 코드
- 웹 어셈블리의 경우: 브라우저 => 웹어셈블리 => 다른 언어 코드
