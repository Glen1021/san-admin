(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路由和菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由和菜单"}},[t._v("#")]),t._v(" 路由和菜单")]),t._v(" "),a("p",[t._v("路由和菜单是组织起一个应用的关键骨架，San Admin 中的路由为了方便管理，使用了"),a("strong",[t._v("中心化")]),t._v("的方式，在 "),a("code",[t._v("config/routes.js")]),t._v(" 统一配置和管理（另外，我们计划后期会提供完全动态从后端加载的解决方案）。开始进行之前，请先阅读 "),a("a",{attrs:{href:"https://github.com/baidu/san-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("san-router"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本结构"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),a("p",[t._v("在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("路由管理")]),t._v(" 通过约定的语法根据在 "),a("code",[t._v("config/routes.js")]),t._v(" 中配置路由。")]),t._v(" "),a("li",[a("code",[t._v("菜单生成")]),t._v(" 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。")]),t._v(" "),a("li",[a("code",[t._v("面包屑")]),t._v(" 组件 PageContainer 中内置的面包屑也可由配置信息自动生成。")])]),t._v(" "),a("h3",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("目前脚手架中所有的路由都通过 "),a("code",[t._v("config/routes.js")]),t._v("来统一管理，在 "),a("code",[t._v("router")]),t._v(" 的配置中我们增加了一些参数，如 "),a("code",[t._v("hideInMenu")]),t._v(","),a("code",[t._v("name")]),t._v(","),a("code",[t._v("icon")]),t._v("，来辅助生成菜单。其中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("hideInMenu")]),t._v(" 用于隐藏不需要在菜单中展示的路由。")]),t._v(" "),a("li",[a("code",[t._v("name")]),t._v(" 和 "),a("code",[t._v("icon")]),t._v("分别代表生成菜单项的文本和图标，icon 列表具体可以查看 "),a("a",{attrs:{href:"https://ecomfe.github.io/santd/#/components/icon",target:"_blank",rel:"noopener noreferrer"}},[t._v("santd"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单"}},[t._v("#")]),t._v(" 菜单")]),t._v(" "),a("p",[t._v("菜单暂时根据 "),a("code",[t._v("config/route.js")]),t._v(" 生成，后期我们还会增加权限管理 / 动态菜单的功能。")]),t._v(" "),a("h3",{attrs:{id:"新增布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增布局"}},[t._v("#")]),t._v(" 新增布局")]),t._v(" "),a("p",[t._v("在 San Admin 中我们通过嵌套路由来实现布局模板。"),a("code",[t._v("routes.js")]),t._v("是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/new-router'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NewRouter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'star'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hideInMenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/new-router/new'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/src/pages/dashboard/analysis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新增页面'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);