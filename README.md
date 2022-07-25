
  <p align="center">RSQUARE BFF<a href="https://www.mobilelive.ca/blog/why-backend-for-frontend-application-architecture" target="_blank">(Backend For Frontend)</a> For Global RTB
    <p align="center">

## Description

Global RTB 에 대응하기 위한 BFF

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build

```bash
$ npm run build
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Codegen

```bash
$ npm run rcodegen:rfind
```

### rcodegen (by RSQUARE)
- OpenApi 스펙을 nestjs 에 맞춰서 API 코드를 생성
- 현재 OpenApi 3.0 만 지원
- axios 베이스

## Project Structure
```
├ build
|    ├ codegen //rcodegen 빌드 스크립트
├ src
|    ├ apis    //호출 타겟 서버별 api
|    |    ├ (가칭 rtb-xxx)
|    |    ├ (가칭 rtb-yyy)
|    |    ├ . . .
|    ├ common  // 프로젝트 공통
|    |    ├ axios  //axios 셋업. request/response 전후처리 (토큰, 공통 예외처리 등..)
|    |    ├ header //공통 header 관련
|    |    ├ util   //유틸
|    ├ modules // nest 모듈 (중계 대상의 성격별 controller 모음)
|    |    ├ core // 서버의 기본 공통 api (버전, health check 등...)
|    |    ├ (가칭 rtb-collect-info-common)
|    |    ├ (가칭 rtb-collect-info-pc)
|    |    ├ (가칭 rtb-collect-info-mobile)
|    |    ├ . . .
|    ├ nest  // nest 관련 요소의 모음
|    |    ├ dev
|    |    |    ├ base (개발 베이스 클래스 모음)
|    |    ├ guards (nest guard)
|    |    ├ interceptors (nest interceptor)
|    . . .
|    app.module.ts  // root module (application 최상단 모듈)
|    main.ts        // nest main entry point
├ test

codegen.option.json   //codegen option (for openapi-generator)
Dockerfile            //docker image
nest-cli.json         //nest 설정
openapitools.json     //openapi-generator config
package-lock.json
package.json
pm2.config.js         //pm2 config (cluster 모드)
rcodegen.config.json  //rcodegen 용 config
README.md
tsconfig.build.json   //nest build 용 tsconfig
tsconfig.json
webpack-hmr.config.js //HMR 지원버전 webpack config
webpack.config.js     //nest build 시 사용되는 webpack config
```
