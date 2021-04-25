module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  globals: {
    require: true
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 'no-console': 0, //禁用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-unused-vars': 1, // 禁止出现未使用过的变量

    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'none',
        jsxBracketSameLine: true,
        semi: false,
        endOfLine: 'auto'
        // printWidth: 50
        //  "endOfLine": "auto" //不同系统换行符不一致
      }
    ]
  }
}
