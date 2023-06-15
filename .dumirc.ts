import { defineConfig } from 'dumi'

export default defineConfig({
  themeConfig: {
    name: '站点名称',
    logo: false,
    // 不配置时默认为约定式路由
    // nav
    // 不配置时默认为约定式侧边栏
    // sidebar
    showLineNums: true,
    // 默认开启的
    nprogress: true,
    prefersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: 'https://github.com/mudssky',
    },
  },
  base: '/mud-frontend-utilities/',
  resolve: {
    // docDirs:['docs'] ,//配置 Markdown 文档的解析目录
    // atomDirs 配置原子资产（例如组件、函数、工具等）Markdown 的解析目录。
    codeBlockMode: 'passive', //配置代码块的解析模式。dumi 默认会编译有关联技术栈的代码块、将其处理为组件，不需要编译的代码块需要添加 | pure 修饰符才能跳过编译；倘若你希望将这个行为反过来，可以将其配置为 passive。
    // entryFile 指定项目的入口文件，比如 ./src/index.ts，目前该配置会用于 API 解析，可参考指南 - 自动 API 表格。
    // forceKebabCaseRouting 配置强制 kebab-case 路由模式，即所有路径都会被转换为短横线模式，比如 HelloWorld 将会被转换为 hello-world，该配置默认开启，配置为 false 时将以实际文件路径为准。
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    // { id: 'en-US', name: 'EN' },
  ],
})
