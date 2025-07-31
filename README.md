# 🚀 김영찬 포트폴리오 사이트

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://kimyeoungchan.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 프론트엔드 개발자 김영찬의 개인 포트폴리오 웹사이트

## 📋 프로젝트 소개

반응형 디자인과 모던한 웹 기술을 활용한 개인 포트폴리오 사이트입니다. 
개발 서비스 소개, 기술 스택, 프로젝트 경험, 그리고 실제 동작하는 문의 시스템을 포함하고 있습니다.

## 🛠 기술 스택

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)

### Framework & Libraries
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)

### Backend & Services
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-013220?style=flat-square&logo=minutemailer&logoColor=white)

### Tools & Deployment
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)

## ✨ 주요 기능

- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- 🎨 **모던 UI/UX**: 직관적이고 세련된 인터페이스
- 💰 **가격 체계**: 개발 서비스별 상세한 가격 정보 제공
- 📧 **실시간 문의**: EmailJS를 통한 실제 동작하는 문의 시스템
- ⚡ **성능 최적화**: 빠른 로딩과 부드러운 애니메이션
- 🔍 **SEO 최적화**: 검색 엔진 친화적 구조

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/KimYeoungChan/KimYeoungChan.github.io.git

# 프로젝트 디렉토리로 이동
cd KimYeoungChan.github.io

# 로컬 서버 실행 (Python 3.x)
python -m http.server 8000

# 또는 Node.js를 사용하는 경우
npx http-server .

# 브라우저에서 확인
# http://localhost:8000
```

### 개발 환경 설정

1. **EmailJS 설정** (문의 기능 활성화)
   ```javascript
   // contactform/contactform.js
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form);
   ```

2. **커스터마이징**
   - `css/style.css`: 스타일 수정
   - `img/`: 이미지 교체
   - `index.html`: 콘텐츠 수정

## 📁 프로젝트 구조

```
KimYeoungChan.github.io/
├── 📄 index.html              # 메인 페이지
├── 📄 blog-single.html        # 블로그 상세 페이지
├── 📁 css/                    # 스타일시트
│   ├── style.css              # 메인 스타일
│   └── style-*.css            # 테마별 스타일
├── 📁 js/                     # JavaScript 파일
│   └── main.js                # 메인 스크립트
├── 📁 img/                    # 이미지 리소스
├── 📁 lib/                    # 외부 라이브러리
│   ├── bootstrap/             # Bootstrap 프레임워크
│   ├── jquery/                # jQuery 라이브러리
│   ├── animate/               # 애니메이션 라이브러리
│   └── ...
├── 📁 contactform/            # 문의 기능
│   ├── contactform.js         # EmailJS 통합
│   └── Readme.txt
└── 📄 README.md               # 프로젝트 문서
```

## 🎯 서비스 메뉴

| 서비스 | 가격 | 포함 사항 |
|--------|------|-----------|
| **기본 웹사이트** | ₩300,000~ | 반응형 디자인, 랜딩페이지(1~3페이지), 기본 SEO |
| **비즈니스 웹사이트** | ₩800,000~ | 다중페이지(5~10페이지), DB 연동, 관리 기능 |
| **쇼핑몰 웹사이트** | ₩1,500,000~ | 상품관리, 결제시스템, 주문관리, 회원시스템 |

### 추가 서비스
- 페이지 추가: ₩30,000/페이지
- 모바일 앱 변환: ₩500,000~
- 유지보수: ₩50,000/월
- 성능 최적화: ₩200,000~

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 자동 배포됩니다.

- **배포 URL**: https://kimyeoungchan.github.io
- **배포 방식**: GitHub Actions 자동 배포
- **도메인**: GitHub 제공 기본 도메인 사용

### 배포 과정

1. `main` 브랜치에 푸시
2. GitHub Pages 자동 빌드
3. 라이브 사이트 업데이트

## 📊 성능 및 최적화

- ⚡ **로딩 속도**: < 3초
- 📱 **모바일 최적화**: 100% 반응형
- 🔍 **SEO 점수**: Google PageSpeed 기준 90+
- ♿ **접근성**: WCAG 2.1 AA 준수

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 오픈

## 📝 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 연락처

**김영찬** - Frontend Developer

- 📧 Email: beethu@naver.com
- 📱 Phone: 010-9544-5508
- 🌐 Portfolio: [kimyeoungchan.github.io](https://kimyeoungchan.github.io)
- 💼 GitHub: [@KimYeoungChan](https://github.com/KimYeoungChan)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!