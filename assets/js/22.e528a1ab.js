(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{412:function(n,t,e){"use strict";e.r(t);var a=e(54),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"开始使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[n._v("#")]),n._v(" 开始使用")]),n._v(" "),e("h2",{attrs:{id:"写在前面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[n._v("#")]),n._v(" 写在前面")]),n._v(" "),e("p",[n._v("San Admin 是一个基于"),e("a",{attrs:{href:"https://baidu.github.io/san/",target:"_blank",rel:"noopener noreferrer"}},[n._v("San"),e("OutboundLink")],1),n._v("的企业级中后台前端/设计解决方案，我们致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。")]),n._v(" "),e("blockquote",[e("p",[e("strong",[n._v("本项目默认你有一定的 San 基础和 Santd 使用经验,如果你对这些还不熟悉，我们建议你先查阅相关文档")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://baidu.github.io/san/",target:"_blank",rel:"noopener noreferrer"}},[n._v("San"),e("OutboundLink")],1),n._v("、"),e("a",{attrs:{href:"https://ecomfe.github.io/santd/#/docs/introduce",target:"_blank",rel:"noopener noreferrer"}},[n._v("Santd"),e("OutboundLink")],1)])]),n._v(" "),e("p",[n._v("我们基于上述目标和提供了以下的典型模板，它可以帮助你快速搭建企业级中后台产品原型。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("- Dashboard\n  - 分析页\n  - 监控页\n  - 工作台\n- 表单页\n  - 基础表单页\n  - 分步表单页\n  - 高级表单页\n- 列表页\n  - 查询表格\n  - 标准列表\n  - 卡片列表\n- 详情页\n  - 基础详情页\n  - 高级详情页\n- 结果\n  - 成功页\n  - 失败页\n- 异常\n  - 403 无权限\n  - 404 找不到\n  - 500 服务器出错\n- 个人页\n  - 个人中心\n  - 个人设置\n")])])]),e("h2",{attrs:{id:"前期准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[n._v("#")]),n._v(" 前期准备")]),n._v(" "),e("p",[n._v("你的本地环境需要安装 "),e("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[n._v("node"),e("OutboundLink")],1),n._v(" 和 "),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("git"),e("OutboundLink")],1),n._v("。我们的技术栈基于 "),e("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("ES2015+"),e("OutboundLink")],1),n._v("、"),e("a",{attrs:{href:"https://baidu.github.io/san/",target:"_blank",rel:"noopener noreferrer"}},[n._v("San"),e("OutboundLink")],1),n._v("、"),e("a",{attrs:{href:"https://ecomfe.github.io/santd/#/docs/introduce",target:"_blank",rel:"noopener noreferrer"}},[n._v("Santd"),e("OutboundLink")],1),n._v("、"),e("a",{attrs:{href:"https://ecomfe.github.io/san-cli/#/create-project",target:"_blank",rel:"noopener noreferrer"}},[n._v("San-cli"),e("OutboundLink")],1),n._v("、"),e("a",{attrs:{href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Echarts"),e("OutboundLink")],1),n._v("，提前了解和学习这些知识会非常有帮助。")]),n._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[n._v("#")]),n._v(" 安装")]),n._v(" "),e("p",[n._v("从 GitHub 仓库中直接安装最新的代码。")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" clone https://github.com/ecomfe/san-admin.git\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" san-admin\n")])])]),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[n._v("#")]),n._v(" 目录结构")]),n._v(" "),e("p",[n._v("我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("├── public\n│   ├── favicon.ico            \n│   ├── index.ejs                 # html模版文件\n├── mock                          # mock数据\n│   ├── list\n│   │   └── table-list.json5      # 列表数据\n│   ├── user\n│   │   └── user-info.json        # 用户相关数据\n│   └── index.js                  # mock server配置\n├── config                        # 项目编译相关配置文件\n│   └── index.js                  # 配置入口\n│   └── proxy.js                  # 代理配置\n│   └── themePluginConfig.js      # 主题更新逻辑\n│   └── updateSetting.js          # Setting更新逻辑\n├── src\n│   ├── assets                    # 公共资源\n│   ├── components                # 公共UI组件\n│   │   ├── BasicLayout           # 布局相关的所有组件\n│   │   │   ├── GlobalFooter      # 全局的Footer组件\n│   │   │   ├── GlobalHeader      # 全局的Header组件\n│   │   │   ├── PageContainer     # 包含面包屑的布局组件\n│   │   │   ├── SettingDrawer     # 抽屉组件，用于可视化配置页面布局\n│   │   │   ├── SiderMenu         # 侧边栏组件\n│   │   │   ├── TopNavHeader      # Nav组件\n│   │   │   ├── Header            # Header\n│   │   │   ├── Footer            # Footer\n│   │   │   ├── BasicLayout       # 包含SiderMunu，Header,Footer组件的一个重型布局组件\n│   │   │   ├── index.js          # 组件入口，用户批量导出组件\n│   │   └── ...\n│   ├── lib                       # lib 库\n│   │   ├── App.js                # 实例化根组件类\n│   │   ├── Store.js              # san-store封装类\n│   │   └── utils                 # 工具库\n│   │       ├── util.js           # 常用工具方法\n│   │       ├── request.js        # 封装的axios\n│   │       └── ...\n│   └── pages                     # 页面\n│       ├── list                  # 列表模块\n│       │   ├── card-list         # 卡片列表页面\n│       │   ├── basic-list        # 基础列表页面\n│       │   ├── ...               \n│       └── form                  # 表单模块\n│           └── ...\n├── .browserslistrc               # 目标浏览器版本\n├── .gitignore                    # git忽略目录及文件的配置文件\n├── .npmrc                        # npm源配置文件\n├── .prettierrc                   # Prettier插件的格式化配置文件\n├── .stylelintrc                  # stylelint的格式化检测配置文件，需配合插件和npm包\n├── package.json\n├── README.md\n├── san.config.js                 # san-cli配置\n├── stylelint.config.js           # stylelint配置\n└── yarn.lock                     # yarn版本锁定\n")])])]),e("h2",{attrs:{id:"本地开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发"}},[n._v("#")]),n._v(" 本地开发")]),n._v(" "),e("p",[n._v("安装依赖。")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("yarn")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n")])])]),e("blockquote",[e("p",[n._v("如果网络状况不佳，可以使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/tyarn",target:"_blank",rel:"noopener noreferrer"}},[n._v("tyarn"),e("OutboundLink")],1),n._v(" 进行加速")])]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("yarn")]),n._v(" run start\n")])])]),e("p",[n._v("启动完成后会自动打开浏览器访问 "),e("a",{attrs:{href:"http://localhost:8899/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:8899"),e("OutboundLink")],1),n._v("，接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。")])])}),[],!1,null,null,null);t.default=r.exports}}]);