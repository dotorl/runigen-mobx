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
 ┣ 📂 store             ------------------- Redux 상태관리 관련
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

## Use Library

```bash
npm i mobx mobx-react

npm i -D prettier eslint eslint-plugin-prettier eslint-config-prettier

npm i sass

```

- 기본적인 prettier과 eslint만 적용

- prettier 적용 안될 시 VScode setting 확인 ( Format On Save 및 Default defaultFormatter 제대로 적용 되어있는지 )

- sass를 추가하였으나, 각 폴더안에서 따로 scss를 관리하여 하고싶었는데, 해당부분은 웹팩등 다른 추가 라이브러리를 써서 custom해야 해서 추후에 처리하던지해야할듯 기본적으론 next.js 에서 \_app.tsx 에서 global하게 scss import 권장함

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
