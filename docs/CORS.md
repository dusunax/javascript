# CORS & SOP

> origin, CORS, SOP와 CORS 시나리오, 그리고 Proxy에 대해 간단히 알아봅니다.
> 

## Origin이란?

### **출처 origin**

 - 웹 페이지 또는 자원에 액세스하는 특정 `프로토콜`, `호스트`, `포트`의 조합

### **확인하는 곳**

- window location객체의 origin
- 브라우저의 관리자 도구의 네트워크 요청
    - Request의 origin 헤더  
       ![image](https://user-images.githubusercontent.com/94776135/214586732-f1818e67-a667-43a5-a013-b885a814564f.png)
    - Response의  Access-Control-Allow-Origin헤더  
       ![image](https://user-images.githubusercontent.com/94776135/214586888-566df1cc-b16c-4b19-bcfa-c4375ad39ac8.png)


### CORS와 SOP가 왜 필요하나요?

- 웹 어플리케이션의 보안을 위한 개념입니다.

    - CORS는 cross-site 공격을 막기 위한 보안 매커니즘입니다. ex) CSRF, XSS

    >🤔 **CSRF (Cross-Site Request Forgery)** : 이미 인증된 사용자가 웹 사이트에서 작업을 수행하도록 속이는 공격입니다. 이는 사용자가 방문하는 웹 사이트에 악성 링크 또는 양식을 삽입하여 수행될 수 있습니다. 사용자가 클릭하면, 대상 웹 사이트에서 작업이 수행되며 사용자는 이를 알지 못합니다. CORS는 인증된 도메인으로부터의 요청만 허용하고 인증되지 않은 도메인으로부터의 요청은 거부하는 것으로 CSRF를 방지할 수 있습니다.
    >
    > **XSS(Cross-Site Scripting)** : 공격자가 웹 사이트에 악성 스크립트를 삽입하는 공격입니다. 이는 웹 사이트가 사용자 입력을 적절하게 검증하지 않고 악성 코드를 실행할 수 있는 경우 발생할 수 있습니다. CORS는 인증된 도메인에서만 스크립트를 실행하도록 하여 XSS 공격을 방지할 수 있습니다. (+XSS filter, whitelist lib)
    
    | 개념 | 영어 | 쓰임 | 요약 |
    | --- | --- | --- | --- |
    | CORS | Cross-Origin Resource Sharing | 보안 매커니즘 | 서버가 다른 도메인의 자원에 액세스 하도록 허용 |
    | CSRF | Cross-Site Request Forgery | 보안 공격 | 인증된 사용자가 악성 링크에서 작업을 수행하도록 함 |
    | XSS | Cross-Site Scripting | 보안 공격 | 웹 사이트에 악성 코드를 삽입하여 실행하게 함 |

---

## Cross-Origin Resource Sharing

>👉 CORS는 "Cross-Origin Resource Sharing", 교차 출처 자원 공유의 약자입니다.
>
>**하나의 도메인**에서 작성된 웹 페이지가 **다른 도메인의 자원에 액세스**할 수 있도록 **허용**하는 정책입니다. 웹 브라우저는 기본적으로 다른 도메인으로의 요청을 허용하지 않기 때문에 CORS가 필요합니다.
>
>즉, CORS는 서버가 다른 도메인의 웹 페이지에서 자원에 액세스 할 수 있도록 허용하게금 합니다.


## SOP Same-Origin Policy

>👉 SOP는 "Same-Origin Policy" 동일 출처 정책의 약자입니다.
>
>하나의 origin에서 작성된 웹 페이지가 다른 origin의 웹 페이지 또는 자원과 상호 작용하는 것을 방지하는 것입니다.
>
>(자원 예시: 스크립트, 이미지, 스타일시트 등)

### 같은 출처 예시

- https://google.co.kr와 같은 origin인지 여부를 확인합니다.

| url | Same Origin | 설명 |
| --- | --- | --- |
| https://google.co.kr/maps | O | 호스트가 같음 |
| http://google.co.kr | X | 포트가 다르므로 다른 origin입니다. |
| https://google.co.kr:443/maps?hl=en&authuser=0 | O | 포트번호가 의도적으로 명시되어 있습니다.(https) |
| https://api.google.co.kr | X | 호스트가 다름 |
| https://google.co.kr:8080 | Δ | 대부분의 브라우저: 같은 출처 / IE: 다른 출처 |

> 🤔 port에 대한 CORS 정책이 명확하지 않았기 때문에,
> 같은 호스트의 다른 프로토콜이 동일 출처이냐에 대해서 브라우저의 차이가 있었습니다.
>
>(IE : 포트가 다르면 같은 출처로 인정하지 않습니다. 안녕 IE!)

---

# CORS 시나리오

>👉 request와 response의 헤더를 비교하여 같은 출처를 확인합니다.

- Request의 origin 헤더  
   ![image](https://user-images.githubusercontent.com/94776135/214586732-f1818e67-a667-43a5-a013-b885a814564f.png)
- Response의  Access-Control-Allow-Origin헤더  
   ![image](https://user-images.githubusercontent.com/94776135/214586888-566df1cc-b16c-4b19-bcfa-c4375ad39ac8.png)
       
## 1. 사전 요청 Preflight Request

| 구분 | 조건 | 비고 |
| --- | --- | --- |
| Method | OPTIONS | 출처 |
| Prefilight Request | Origin, Access-Control-Request-Header, Access-Control-Request-Method | 실제 요청의 메소드 & 헤더 |
| Prefilight Response | Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Max-Age | 허가한 출처 & 메소드 & 헤더 그리고 응답 캐시 시간 |

### 사전 요청 Preflight이란?

![image](https://user-images.githubusercontent.com/94776135/214588181-7ceabcc4-dbd0-42d1-a89c-8f800db40ee0.png)

- 브라우저가 서버에 접속하면, OPTIONS 메소드로 예비요청(사전 요청)을 보냅니다.
    - Origin과 Acess-control-allow-origin이 같으면 `200 OK` : 본 요청(실제 요청)을 보냅니다.
    
>👉 내용
>
>- prefilight request
>    - Origin 뿐만 아니라, 예비요청 이후 보낼 본 요청에 대한 정보들 포함
>    - Access-Control-Request-Header : 실제 요청의 추가 헤더
>    - Access-Control-Request-Method : 실제 요청의 메소드
>- Prefilight Response
>    - Access-Control-Allow-Origin : 허가 출처
>    - Access-Control-Allow-Methods : 허가 메소드
>    - Access-Control-Allow-Headers : 허가 헤더
>    - Access-Control-Max-Age: Prefilight 응답 캐시 시간

    
### 응답 시

- Prefilight Response의 응답 코드는 200이어야 한다.
- origin과 acess-control-allow-origin이 다르다면, 본 요청(실제 요청)을 보내지 않음

![image](https://user-images.githubusercontent.com/94776135/214588502-d76f7888-a758-484f-9632-29f70c892d15.png)


## 2. 단순 요청 Simple Request

### 단순 요청 Simple Request란?

- 사전 요청 없이, 바로 본 요청을 보냅니다.
- 단, 제약조건 때문에 사용하는 경우가 별로 없습니다.

>👉 조건
>
>- 메소드 : GET, POST, HEAD
>- content-type
>    - application/x-www-form-urlencoded
>    - multipart/form-data
>    - text
>- 헤더
>    - Accept, Accept-Language, Content-Language, Content-Type

## 3. 인증(보안) 요청 Credentialed Request

- 옵션값을 통해 인증된 사용자인지 확인하는 절차를 거침

| 옵션 값 | 설명 |
| --- | --- |
| Same-Origin | 기본값, 같은 출처 간 요청에만 인증 정보를 담음 |
| Include | 모든 요청에 인증 정보를 담음 |
| Omit | 모든 요청에 인증 정보를 담지 않음 |

### Credentialed Request란?

![image](https://user-images.githubusercontent.com/94776135/214588655-31a64e37-9e30-4597-80a3-1aba3be3fe9e.png)

- 인증 관련 헤더를 포함할 때 사용

> 👉 내용
> 
> - credentials: include
>     - 쿠키 또는 JWT 토큰을 담아서 서버에 보낼 때 사용한다.

### 제약사항

- Access-Control-Allow-Origin에는 *을 사용할 수 없으며, 명시적인 URL이어야 한다.
- 응답 헤더에는 Access-control-allow-credentials: true가 존재해야 한다.

---

# CORS 해결 방법: Cross-Origin Resource Sharing

> Cross-Origin Resource Sharing, 교차 출처 자원 공유
> 
> 
> 모든 출처의 자원을 받을 경우 보안 상의 위험이 있으므로, 특정 출처에서만 자원만 공유받는 것을 말합니다.
> 

1. Webpack Dev Server 리버스 프록싱 (우회)
    - 프론트 서버에서 백엔드 서버로 요청을 보낼 때, url을 변경한다.
    - 로컬 환경에서만 가능한 방법입니다.
2. 응답 헤더 설정
    - 프론트에 응답을 내려줄 때, 올바른 Access-Control-Allow-Origin을 세팅해야 한다.
    - 직접 헤더에 설정을 추가한다.
3. 스프링부트(자바) 설정
    - 설정 클래스를 만들고 `WebMvcConfigurer`을 구현하면 `addCorsMappings`란 메서드를 사용하여 CORS의 출처 및 설정 관리를 할 수 있다.

---

레퍼런스 : 

- [https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [https://velog.io/@frankle97/CORS란](https://velog.io/@frankle97/CORS%EB%9E%80)
- [https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)
- [https://chat.openai.com/chat](https://chat.openai.com/chat)
- [https://www.youtube.com/watch?v=dHcjwTvrxTk](https://www.youtube.com/watch?v=dHcjwTvrxTk)
- [https://www.youtube.com/watch?v=7iGIfcEsc2g](https://www.youtube.com/watch?v=7iGIfcEsc2g)
