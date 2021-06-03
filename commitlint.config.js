/**
 * 规范 commit 提交信息
 * 前置：yarn add -D @commitlint/cli @commitlint/config-conventional
 * - 配合 husky 和 lint-staged 一起使用效果更佳
 *
 * 类型：
 * feat: A new feature
 * fix: A bug fix
 * docs: Documentation only changes
 * style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * refactor: A code change that neither fixes a bug nor adds a feature
 * perf: A code change that improves performance
 * test: Adding missing tests or correcting existing tests
 * build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 * ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
 * chore: Other changes that don't modify src or test files
 * revert: Reverts a previous commit
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
