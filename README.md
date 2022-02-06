## Project Structure

```

📦 public               ------------------- 어플리케이션에 사용되는 정적파일들
 ┃
📦 src
 ┣ 📂 components        ------------------- 레이아웃 및 공통 컴포넌트
 ┃ ┣ 📂 Component1
 ┃ ┣ 📂 Component2
 ┃ ┣ 📂 Component3
 ┣ 📂 consts            ------------------- 각종 상수관련 const 파일
 ┣ 📂 core              ------------------- 각종 핵심 파일 ? ( NativeBridge 나 중요 핵심? )
 ┣ 📂 hooks             ------------------- 각종 Custom Hooks 파일
 ┣ 📂 interfaces        ------------------- Data Interfaces
 ┃ ┣ 📜 interfaceTypes.ts
 ┃ ┗ 📜 Weverse.d.ts
 ┣ 📂 pages             ------------------- 각 페이지 담당(Dynamic Route)
 ┃ ┗ 📂 Page1
 ┃   📜 index.tsx
 ┃ ┗ 📂 Page2
 ┃   📜 index.tsx
 ┃ 📜 _app.tsx
 ┃ 📜 _document.tsx
 ┃ 📜 index.tx
 ┣ 📂 store             ------------------- 상태관리 관련
 ┃ ┣ 📜 xxx.ts
 ┃ ┣ 📜 yyy.ts
 ┃ ┗ 📜 index.ts
 ┗ 📂 utils             ------------------- 각 컴포넌트에서 사용되는 유틸 함수
 📦 styles
📜 .babelrc             ------------------- babel 관련
📜 .eslintrc            ------------------- eslint
📜 .nvmrc               ------------------- node 버전 관리를 위한 파일
📜 .prettierrc          ------------------- prettier
📜 tsconfig.json        ------------------- tsconfig
```

## prittier 관련 Tips

- 설정해놓은 prittier 현재폴더 지정해서 한번에 적용 시키는 방법

  적용시킬 폴더로 경로 이동 후 아래 명령어 실행 ( 이동하지않고 --write 뒤에 폴더 경로 설정해도 가능 )

```bash
npx prettier --write .
```

## Use Library

```bash
npm i mobx mobx-react

npm i -D prettier eslint eslint-plugin-prettier eslint-config-prettier

npm i sass

```
