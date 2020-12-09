const eslintrc = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended', // ts 推荐规则
    'plugin:jest/recommended'

  ],
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    project: '${workspaceFolder}/tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'space-before-function-paren': ['error', 'never'], // 方法名后空格
    'semi': ['error', 'always'], // 无分号
    'indent': ['error', 2], // 缩进2
    'quotes': ['error', 'single'],   // 单引号
    'comma-dangle': ['error', 'never']// 禁用拖尾逗号
  } // 自定义
};

module.exports = eslintrc;
