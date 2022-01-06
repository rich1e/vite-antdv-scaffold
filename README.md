# Vite Scaffold

## Introduction

Vite Scaffold is a free and open source front-end template. Using the latest `vue3`, `vite2`, `TypeScript` and other mainstream technology development.

## Feature

- [Vue 3.0](https://v3.cn.vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://cn.vitejs.dev/)
- [Pnpm](https://pnpm.io/)
- [JSX/TSX Syntax](https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)
- [Element Plus - A Vue.js 3 UI library](https://element-plus.org/zh-CN/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

```sh
# clone the project
git clone git@github.com:rich1e/vite-scaffold.git

# enter the project directory
cd outclass-website

# install dependency
pnpm install

# develop
pnpm dev

# develop for mock
pnpm dev:mock

# develop for online
pnpm dev:online
```

## Build

```sh
# build for fat environment
pnpm fat

# build for uat environment
pnpm uat

# build for production environment
pnpm pro
```

## Release

```sh
# first release
pnpm release --first-release
```

## Advanced

```sh
# preview the release environment effect
pnpm preview

# preview the release environment effect + static resource analysis
pnpm report

# typescript check
pnpm lint:tsc

# code format check and auto fix
pnpm lint:lint-staged
```

## VSCode Plugin

- [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## VSCode Settings

```json
{
  "npm.packageManager": "pnpm",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## FQA

### Error: Failed to fetch gitmoji JSON

if you meet the below error. It means that you failed to fetch the gitmojis.json file.

```
Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/plugin#fetch-error for help.
```

the solution is that manual downloads the [gitmoji.json](https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json) file and add it to node_modules/commitlint-plugin-gitmoji/lib folder.

---

[Fetch Error](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-plugin#fetch-error)

## License

[MIT © rich1e-2021](./LICENSE)
