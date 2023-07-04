## 웹 그래픽이란? (WebGL, OpenGL, WebGPU)

| 목표     | 웹 그래픽에 대해서 간단히 알아보자.              |
| -------- | ------------------------------------------------ |
| 학습내용 | 웹 그래픽 기본 개념, WebGL과 OpenGL, WebGPU 소개 |
| 난이도   | 🥚                                               |

> 📎 레퍼런스
>
> 1. 브라우저의 하드웨어 가속: https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/core-features/gpu-hardware-acceleration
> 2. WebGL 좋은 문서 👍: https://webglfundamentals.org/webgl/lessons/ko/  
>    https://github.com/gfxfundamentals/webgl-fundamentals
> 3. 100초 만에 WebGL 알아보기: https://www.youtube.com/watch?v=f-9LEoYYvE4
> 4. OpenGL: https://registry.khronos.org/OpenGL-Refpages/es2.0/xhtml/
> 5. WebGPU: https://www.youtube.com/watch?v=m6T-Mq1BPXg  
>    https://developer.chrome.com/blog/webgpu-release/ > https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
> 6. WebGL & WebGPU 관련 라이브러리  
    - spline https://spline.design/  
    - Three.js https://threejs.org/  
    - Babylon.js https://www.babylonjs.com/  
    - (ML) Tensorflow https://www.tensorflow.org/js?hl=ko  

# 1. 웹 그래픽에 대해서 🖼

웹 그래픽은 일반적으로 사용자의 웹 브라우저에 의해 렌더링됩니다.
웹 브라우저는 웹 페이지의 그래픽 요소(이미지, 동영상, 애니메이션 등)을 화면에 랜더링하기 위해 GPU을 사용합니다.

## **하드웨어 가속 Hardware Acceleration 이란?**

https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/core-features/gpu-hardware-acceleration

하드웨어 가속은 그래픽과 텍스트 랜더링을 CPU에서 GPU로 오프로드하여 처리하는 기능입니다.
이를 통해 그래픽 작업의 처리 속도가 향상되고 더 복잡한 그래픽 효과와 애니메이션을 원활하게 렌더링할 수 있고, 동시에 CPU는 다른 작업을 수행할 수 있습니다.

일반적으로 3D 그래픽 애플리케이션은 복잡한 조명, 텍스처, 그림자, 물리 시뮬레이션 등을 처리해야 합니다. 이러한 작업은 많은 계산과 병렬 처리를 필요로 하는데, 이때 하드웨어 가속은 GPU의 성능을 활용하여 작업을 빠르고 효율적으로 처리합니다. 이는 영상 및 음성 처리, 데이터 시각화, 인공지능 등 다른 영역에서도 사용될 수 있습니다.

## GPU, Graphics Proccessing Unit 를 사용하는 이유

> 컴퓨터가 60fps에서 그래픽을 랜더링하려면 수많은 linear algebra (선형 대수) 혹은 matrix multiplication (행렬 곱셉) 계산을 필요로 합니다.

### 성능과 효율성

그래픽 렌더링은 매우 많은 수의 데이터(버텍스, 텍스처, 조명 정보 등)를 처리하고, 복잡한 그래픽 알고리즘을 수행해야 합니다. 이러한 작업은 **병렬 처리**와 **고성능 벡터 연산**을 필요로 합니다.

CPU는 일반적으로 코어 수가 제한되어 있고, 직렬적인 작업에 더 적합한 설계를 갖고 있습니다. 반면에 그래픽 가속기인 GPU는 많은 수의 병렬 처리 유닛을 가지고 있어 동시에 많은 작업을 처리할 수 있습니다.

|     | 적합한 작업   | 특징                                   |
| --- | ------------- | -------------------------------------- |
| CPU | 직렬적인 작업 | 코어 수가 제한되어 있음                |
| GPU | 병렬적인 작업 | 많은 수의 코어와 벡터 연산 유닛을 가짐 |

따라서 GPU는 그래픽 렌더링 작업에 **특화된 아키텍처**를 가지고 있어, 동시에 여러 개의 데이터를 처리하는 데 적합하므로 CPU보다 더 높은 성능과 효율성을 제공할 수 있습니다.

---

# 2. OpenGL & WebGL 🚎

WebGL은 HTML5와 함께 등장하였으며, 대부분의 주요 웹 브라우저(Chrome, Firefox, Safari, Edge 등)에서 지원됩니다. OpenGL과 WebGL은 **크로노스 그룹 Khronos Group**에서 담당합니다.

## OpenGL, Open Graphic Library

![](https://velog.velcdn.com/images/dusunax/post/82634be2-d457-4f45-b28a-05087cd20015/image.png)

1992년부터 사용해온 OpenGL은 2D 및 3D 그래픽 애플리케이션을 개발하기 위한 크로스 플랫폼 API입니다. 주로 C 또는 C++로 작성되었으며 컴퓨터의 그래픽 카드(GPU)를 사용하여 그래픽 작업을 수행할 수 있도록 합니다. 웹 환경에서 사용하기 위해서는 외부 플러그인을 필요로 합니다.

## WebGL, Web Graphic Library

![](https://velog.velcdn.com/images/dusunax/post/6d0ea421-ad7e-4796-bf8c-6ec4bc9069ab/image.png)

WebGL이란 인터렉티브한 2D 및 3D 백터 그래픽을 구현하기 위한 자바스크립트 API 입니다. **클라이언트의 GPU**를 사용하며, 외부 플러그인(ex 플래시) 없이 직접 웹 애플리케이션 canvas에 하드웨어 가속 그래픽을 적용할 수 있습니다.

사용 예시: 3D Web Design, Games(unity engine), Data Visualization, Physics simulations

|                | OpenGL                                          | WebGL                     |
| -------------- | ----------------------------------------------- | ------------------------- |
| 사용 시작 시기 | 초기, 1992                                      | HTML5, 2011               |
| 정의           | 네이티브 그래픽 라이브러리                      | 웹 표준 그래픽 라이브러리 |
| 플랫폼         | 크로스 플랫폼 API, 데스크톱 및 모바일 운영 체제 | 웹 브라우저               |
| 언어           | C, C++ 등                                       | JavaScript                |

---

# 3. 개선된 네이티브 그래픽 API 🚄

2014년부터 2016년 사이에는 점점 높아지는 그래픽 렌더링 수준과, 머신 러닝 및 새로운 렌더링 알고리즘을 위한 새로운 네이티브 GPU API 들이 발표되었습니다.

이 기간에 릴리즈된 GPU API로는 크로노스 그룹(Khronos Group)이 개발한 Vulkan과 OpenGL 및 WebGL을 대체하는 목적으로 만들어진 애플의 Metal, 그리고 마이크로소프트의 Direct3D 12가 있습니다.

| Vulkan                               | Metal                         | Direct3D12                  |
| ------------------------------------ | ----------------------------- | --------------------------- |
| Khronos Group                        | Apple                         | Microsoft                   |
| 크로스 플랫폼 그래픽 및 컴퓨팅 API   | 애플의 자체 그래픽 API        | 마이크로소프트의 그래픽 API |
| 다양한 운영 체제 (Windows, macOS 등) | macOS, iOS                    | Windows, Xbox               |
| C, C++, Vulkan API                   | Objective-C, Swift, Metal API | C++, C#, Direct3D API       |

**Vulkan**은 **크로노스 그룹**이 개발한 저레벨 GPU API로, 높은 성능과 다양한 플랫폼에서의 크로스 플랫폼 지원을 목표로 합니다. Vulkan은 렌더링, 컴퓨팅 및 가속화된 그래픽 작업을 위한 강력한 기능을 제공하며, 개발자가 하드웨어의 세부 사항을 직접 제어할 수 있는 저수준 API입니다.

**Metal**은 **애플**이 macOS 및 iOS에서 OpenGL을 대체하기 위해 도입한 자체 그래픽 API입니다. Metal은 빠른 성능과 저전력 소모, 낮은 오버헤드 등을 특징으로 하며, 애플의 하드웨어 및 소프트웨어 통합에 최적화된 설계를 갖추고 있습니다.

**Direct3D 12**는 **마이크로소프트**가 Windows 운영 체제용으로 개발한 저수준 GPU API입니다. Direct3D 12는 다중 스레딩 및 병렬 처리를 지원하여 CPU 및 GPU 간의 효율적인 작업 분배를 가능하게 합니다. 이를 통해 높은 성능과 최적화된 그래픽 렌더링을 제공합니다.

이러한 새로운 GPU API는 더 나은 성능과 제어력을 제공하여 더 복잡하고 현실감 있는 그래픽 렌더링을 구현할 수 있게 되었습니다. 개발자들은 이러한 API를 사용하여 높은 수준의 그래픽 품질과 성능을 달성하며, 머신 러닝 및 새로운 알고리즘을 적용한 혁신적인 그래픽 애플리케이션을 개발할 수 있습니다.

## 저수준 GPU API & 고수준 GPU API

저수준 GPU API는 그래픽 처리를 위한 하드웨어 인터페이스를 제공하는 프로그래밍 API로, 개발자에게 하드웨어의 세부 사항에 직접적으로 접근하고 제어할 수 있는 기능을 제공합니다. 이는 고수준 그래픽 API보다 더 낮은 수준의 추상화를 제공하여 더 많은 제어와 최적화를 할 수 있게 합니다.

고수준 GPU API(예: OpenGL, DirectX 11)는 개발자가 그래픽 작업을 추상화된 인터페이스를 통해 수행하도록 설계되었습니다. 이러한 API는 개발자가 그래픽 작업을 더 간단하게 처리할 수 있도록 해주지만, 하드웨어의 세부 사항이나 최적화 옵션에 대한 직접적인 접근은 제한적입니다.

|                        | 저수준 GPU API               | 고수준 그래픽 API            |
| ---------------------- | ---------------------------- | ---------------------------- |
| 추상화 수준            | 낮음                         | 높음                         |
| 하드웨어 접근          | 직접적                       | 제한적                       |
| 개발자 요구 사항       | 고성능 렌더링 및 최적화      | 그래픽 작업                  |
| 유연성                 | 높음                         | 제한적                       |
| 주로 사용되는 API 종류 | Vulkan, Metal, DirectX 12 등 | OpenGL, DirectX 11, WebGL 등 |

---

# 4. WebGPU 🏗

[Chrome ships WebGPU - Chrome Developers](https://developer.chrome.com/blog/webgpu-release/)

WebGPU는 앞서 설명한 새로운 GPU API를 웹 환경 기반에서 사용할 수 있도록 하는 새로운 웹 그래픽 API입니다. W3C의 “GPU for the Web”과 함께 하고 있으며, Apple, Google, Mozilla, Microsoft, Intel 등 많은 회사와 협업하고 있습니다.

## 2023년 현재 **Goolge Chrome 113**에서 사용 가능합니다!

WebGL을 계승하여, 웹에서 Vulkan, Metal, DirectX 12와 같은 모던 API를 사용할 수 있도록 하므로,
웹사이트가 브라우저의 WebGL이 아닌, 유저의 GPU를 사용하고 제어할 수 있습니다.

이는 그래픽 랜더링 뿐만 아니라, 머신 러닝에도 많은 변화점을 가져올 수 있습니다.
(예를 들어 브라우저 자체에서 AI 모델을 실행할 수도 있습니다.)

또한 Javascript에만 국한된 것이 아니라, Rust의 wgpu와 같은 라이브러리를 사용하여 코드를 작성하고 WebAssembly로 컴파일하여 유저 브라우저에서 사용할 수도 있습니다.

> 그 외의 자세한 추가 및 변화 내용은 [Google Chrome Developers](https://www.youtube.com/@ChromeDevs) 로!

- 2023 ecosystem  
  ![](https://velog.velcdn.com/images/dusunax/post/7e969c28-d7e2-48a2-9ed4-ed43ad9f7903/image.png)
- WebGPU 샘플 확인하기
  https://webgpu.github.io/webgpu-samples/samples/helloTriangle
