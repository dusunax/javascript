# SSH Key, Secure Shell 🔐

> ✏️ SSH Key에 대해 정리합니다.

## SSH Key란?

- SHH key는 SSH(Secure Shell) 네트워크 프로토콜을 사용하여, 서버에 원격으로 접속할 때 사용하는 인증방식입니다.
- SSH Key는 **공개 키(Public key)**와 **개인 키(Private Key)** 두 개의 파일 쌍으로 구성됩니다. 공개 키는 SSH 서버에 등록되어, SSH client가 접속할 때 해당 공개키와 일치하는 개인 키를 가지고 있는지 확인하여 인증합니다. (개인 키를 분실하거나, 개인 키가 노출되지 않도록 합니다.)

---

# SHH Key 생성하기 ⏳

## SSH-Keygen

```tsx
ssh - keygen;
```

- 터미널에 `ssh-keygen` 명령어를 사용하여 공개키와 개인키를 생성할 수 있습니다.
  - 공개 키는 SSH 서버에 등록합니다. `authorized_keys` 파일에 공개 키를 추가합니다.
    - ex) 경로 `~/.ssh/authorized_keys`
  - SSH 클라이언트에서 개인 키를 사용하여 서버에 접속합니다.
- 기본 생성되는 파일명
  - 공개 키: id_rsa.pub
  - 개인 키: id_rsa
- 키 이름을 지정하는 경우, 키 이름을 사용해야 합니다.

## ssh -i <path>

- `ssh -i <path>`명령어는 SSH 클라이언트에서 인증을 위해 사용할 개인 키 파일의 경로를 지정하는 옵션입니다.
- 개인키는 보통 `~/.ssh/id_rsa` 또는 `~/.ssh/id_dsa`와 같이 특정한 파일 이름으로 저장됩니다. 하지만, 여러 개의 개인키를 사용해야 할 경우, `ssh -i <path>` 명령어를 사용하여 개인키 파일의 경로를 지정할 수 있습니다.
  ```tsx
  ssh -i ~/.ssh/example.pem user@example.com
  ```

---

# ~/.shh 폴더 🗃

## SSH Authorized keys

> 📂 `~/.ssh/authorized_keys`

- SSH client가 SSH 서버에 접속할 때, 인증에 사용되는 `공개 키`를 `저장`하는 파일입니다.
  - SHH 서버는 해당 사용자의 공개 키를 authorized_keys 파일에 저장하고,
    서버에 등록된 공개 키와 클라이언트의 개인 키를 사용하여 인증을 수행합니다.
- authorized_keys 파일은 다수의 공개 키를 포함할 수 있습니다.
  - 각 공개키는 한 줄씩 작성됩니다.

## Known_hosts

> 📂 `~/.shh/known_hosts`

- SSH client가 이전에 접속했던 SSH 서버의 호스트 키 정보를 저장하는 파일입니다.
- SSH 클라이언트가 SSH 서버에 접속할 때, 호스트 키의 무결성을 검증하기 위해 사용됩니다.
  - SSH 클라이언트가 자동으로 관리하기 때문에, 대부분의 경우 직접 수정할 필요가 없습니다.
- SSH 서버의 IP 주소나 도메인 이름이 변경되었을 때, known_hosts 파일에서 호스트 키 정보를 삭제하고 다시 접속을 시도해야 합니다.

## 핑거 프린트 Fingerprint

- 핑거프린트 FingerPirnt는 공개키 암호화 기술에서 `공개 키의 무결성을 검증하는 데 사용되는 값`입니다. 공개 키의 내용을 **해시** 함수를 통해 축약한 16진수의 값입니다.
  ```tsx
  9a:9c:7e:8e:22:3a:f3:3b:7d:32:8d:53:5b:e9:cf:7c
  ```
- SSH 서버의 핑거프린트를 확인함으로써, 클라이언트는 SSH 서버의 호스트 키가 유효하고 변경되지 않았음을 확인할 수 있습니다.

## SSH config

> 📂 `~/.shh/config`

- SSH config은 SSH client에서 사용되는 설정 파일입니다.

  - `hostname`: 서버의 호스트 이름이나 IP 주소
  - `setting`: 설정 옵션

  ```tsx
  Host <hostname>
    <setting> <value>
    <setting> <value>
    ...

  Host <hostname>
    <setting> <value>
    <setting> <value>
    ...
  ```

  | 설정 옵션    | 설명                                                                            |
  | ------------ | ------------------------------------------------------------------------------- |
  | User         | SSH 연결에 사용되는 사용자 이름을 지정합니다.                                   |
  | HostName     | SSH 연결에 사용되는 호스트 이름 또는 IP 주소를 지정합니다.                      |
  | Port         | SSH 서버의 포트 번호를 지정합니다.                                              |
  | IdentityFile | 사용할 개인키 파일의 경로를 지정합니다.                                         |
  | Compression  | SSH 연결에서 압축을 사용할지 여부를 지정합니다.                                 |
  | ForwardX11   | SSH 연결에서 X11 전송을 사용할지 여부를 지정합니다.                             |
  | ProxyCommand | SSH 연결에서 프록시 서버를 사용할 경우, 프록시 서버에 대한 명령어를 지정합니다. |

---

# SHH Forwarding 🔗

## SSH Forwarding이란?

- `SSH forwarding`은 SSH 연결을 통해 다른 호스트와의 네트워크 연결을 안전하게 전달하는 기능을 말합니다. 로컬 머신에서 작동하는 프로그램이 원격 서버에 연결되어 있는 것처럼 보일 수 있으며, 반대로 원격 서버에서 작동하는 프로그램이 로컬 머신에 연결되어 있는 것처럼 보일 수 있습니다.
  - SSH key를 사용하여 SSH 서버에 안전하게 접속한 후, SSH forwarding을 사용하여 로컬 머신에서 실행 중인 프로그램이 원격 서버에 연결할 수 있도록 전달할 수 있습니다.

## SSH Forwarding 명령어

```tsx
eval "$(ssh-agent -s)" ()
ssh-add -k
ssh -o ForwardAgent=yes ubuntu@<ip
```

### 1. eval "$(ssh-agent -s)" ()

> ✏️ **SSH agent**
>
> SSH key를 보호하고, SSH 연결 시 매번 SSH key를 입력하지 않아도 인증을 수행할 수 있도록 도와주는 프로그램입니다.
>
> 보통 SSH key를 사용하여 원격 서버에 접속하려면 매번 SSH key의 비밀번호를 입력해야 합니다. 하지만 ssh-agent를 사용하면 SSH key를 한번만 입력하고, ssh-agent가 이를 기억해두어 매번 비밀번호를 입력하지 않고도 SSH 인증을 수행할 수 있습니다.
>
> 일반적으로 로그인 시 실행되며, SSH key의 비밀번호를 한번만 입력하면 ssh-agent가 이를 기억해두고 다른 SSH 연결에서 이를 사용할 수 있도록 합니다.

- `eval "$(ssh-agent -s)" ()` 명령어로 ssh-agent를 실행합니다.
  - ssh-agent가 실행되고, ssh-agent의 PID와 환경 변수를 출력합니다.

### 2. ssh-add -k

- 이 명령어는 SSH key를 ssh-agent에 등록하는 명령어입니다.
  - `-k` 옵션으로 기본적으로 설정된 SSH key를 ssh-agent에 등록합니다. (id_rsa)
    - 다른 키 옵션도 사용할 수 있습니다.

### 3. ssh -o ForwardAgent=yes ubuntu@<ip>

- SSH 연결 시 ssh-agent를 사용하도록 설정하는 명령어입니다.
  - -o ForwardAgent=yes 옵션은 SSH 연결 시 forwad ssh-agent를 사용하도록 설정합니다.
  - `ubuntu@<ip>`는 SSH 연결할 서버의 IP 주소 또는 도메인 이름을 지정합니다.
- SSH 연결이 수행되며, SSH key를 입력하지 않고도 인증을 수행할 수 있습니다.

## ssh ubuntu@아이피주소

```tsx
ssh ubuntu@172.26.15.xxx
```

- 해당 명령어는 SSH 클라이언트를 사용하여 IP 주소가 172.26.15.xxx인 원격 서버에 ubuntu라는 사용자 이름으로 접속하는 명령어입니다.
- 여기서 `ssh`는 SSH 클라이언트를 실행하는 명령어이며, `ubuntu`는 접속에 사용될 원격 서버의 사용자 이름이고, `172.26.15.xxx`는 접속할 원격 서버의 IP 주소입니다.
  - IP 주소는 도메인으로도 사용할 수 있습니다.
  - ubuntu는 lightsail 서버를 만들었을 때 자동으로 생성되었던 서버 이름입니다.

## SSH Forwarding을 사용하여 해결할 수 있는 보안 이슈

### 1. 불필요한 SSH key 공유를 방지

- SSH forwarding을 사용하면 로컬 컴퓨터에 저장된 SSH key를 SSH 서버로 전송하지 않고도 인증할 수 있습니다.
  - 다른 사용자와 SSH key를 공유하지 않고, SSH 연결을 수행할 수 있습니다.

### 2. 불필요한 SSH port 열림 방지

- SSH forwarding을 사용하면 SSH 서버에서 SSH 클라이언트로 연결된 포트를 사용하여 로컬 컴퓨터에서 원격 호스트에 접속할 수 있습니다.
  - SSH 서버에서 로컬 컴퓨터로 SSH 연결을 열 필요가 없습니다.

### 3. 불필요한 로그인 시도를 방지

- SSH 서버에서 로그인할 필요 없이 로컬 컴퓨터에서 원격 호스트에 직접 로그인할 수 있습니다.
  - 로그인 시도가 발생하지 않으므로 보안 위험을 줄일 수 있습니다.
