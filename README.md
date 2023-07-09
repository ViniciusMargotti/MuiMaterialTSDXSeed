# MuiMaterialTSDX Components

Welcome to MuiMaterialTSDX Components, a React components project.

> **Note:** this project is a fork of [tsdx] tsdx is a zero-config CLI that helps you develop, test, and publish modern
> TypeScript packages with ease--so you can focus on your awesome new library and not waste another afternoon on the
> configuration.

## Commands

the build is output to `/dist` and runs in watch mode, so any edits saved within `src` cause a rebuild to `/dist`.

To run single build, use `npm run build` or `yarn build`.

To run tests , use `npm run test:watch` or `yarn test:watch`.

## Configuration

Quallity of code is configured with `prettier`, `eslint`, using the eslint-config-react-app standards.
eslint-config-react-app is a set of linting rules that are used in create-react-app.

TSDX usa [Rollup](https://rollupjs.org) como um bundler e gera múltiplas configurações do rollup para vários formatos de
módulo e configurações de build.

TSDX use [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configurations for various module
formats and build settings.

### TypeScript

`tsconfig.json` está configurado para interpretar `dom` e `esnext` types, assim como `react` para `jsx`.

`tsconfig.json` is configured to target `dom` and `esnext` types, as well as `react` for `jsx`.
Adjust according to your needs.

## Publishing to NPM

To publish to npm, use `npm publish` or `yarn publish`.
