# VSCode 插件推荐

## Vetur

安装 Vetur

## Prettier

安装 prettier 插件

将 _.prettierrc_ 放置在项目根目录

```json
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "vueIndentScriptAndStyle": true,
  "endOfLine": "crlf",
  "trailingComma": "all",
  "arrowParens": "always",
  "printWidth": 100,
  "tabWidth": 2,
  "htmlWhitespaceSensitivity": "ignore"
}
```

## ESLint

安装 ESLint 插件, 项目 _.eslintrc.js_ 基本配置.

主要的规则包括:

- 末尾要分号
- 对象最后一个属性增加逗号
- 箭头函数的参数一定要括号
- JS 中代码使用以单引号为主

具体的规则详细在 [plugin:vue/essential](https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention) 中查看(**建议学习**).

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  plugins: ['vue'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
```

必要依赖 _package.json_

```javascript
{
  "devDependencies": {
    ...
    "babel-eslint": "^10.0.3",
    "eslint": "^6.7.1",
    "eslint-plugin-vue": "^6.0.1",
    ...
  }
}
```

一般@vue/cli 创建的项目都有

```shell
$ npm i babel-eslint eslint eslint-plugin-vue -D
```

## settings.json 基本配置

```json
{
  "editor.maxTokenizationLineLength": 2000,
  "editor.renderWhitespace": "none",
  "editor.formatOnSave": true,
  "editor.fontLigatures": true,
  "editor.wordWrapColumn": 140,
  "editor.multiCursorModifier": "alt",
  "editor.find.addExtraSpaceOnTop": false,
  "editor.wrappingIndent": "deepIndent",
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "singleQuote": true,
      "wrap_attributes": "force-aligned"
    }
  }
}
```

其他的配置可以自己加
