# 배나무 NEXT.js
배달 파티를 구성해 부담이 되는 배달료를 줄여보세요.

## Environment
node 16+ / yarn 3+

## Run project

setup

```
cp .env.example .env.local

yarn
```

start storybook

```
yarn storybook
```

start project

```
yarn dev
```

## Commit rules
### commit-type(scope: optional): subject

#### commit types
* *feat*: A new feature
* *fix*: A bug fix
* *docs*: Documentation only changes
* *style*: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* *refactor*: A code change that neither fixes a bug nor adds a feature
* *perf*: A code change that improves performance
* *test*: Adding missing tests or correcting existing tests
* *build*: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* *ci*: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* *chore*: Other changes that don't modify src or test files
* *revert*: Reverts a previous commit
