
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

## Nest Project Structure
```
├ build
├ src
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
