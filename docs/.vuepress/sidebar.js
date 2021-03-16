const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
  '/vue/': [
    {
      title: 'elementUI',
      collapsable: true,
      children: getChildren('.docs/vue/elementUI/')
    },
    // {
    //   title: '常用知识',
    //   collapsable: true,
    //   children: getChildren('./docs/css/commonUse/')
    // }
  ],
  // '/JavaScript/':[
  //   {
  //     title: '基础组件',
  //     collapsable: true,
  //     children: getChildren('./docs/coms/basicsCom/')
  //   },
  //   {
  //     title: '业务组件',
  //     collapsable: true,
  //     children: getChildren('./docs/coms/professionCom/')
  //   },
  // ],
  // '/vue/':[
  //   {
  //     title: 'vue整理',
  //     collapsable: true,
  //     children: getChildren('./docs/vue/')
  //   },
  //   {
  //     title: 'element-ui记录',
  //     collapsable: true,
  //     children: getChildren('./docs/vue/elementUI/')
  //   },
  // ],
  // '/other/': [
  //   {
  //     title: 'tools工具',
  //     collapsable: true,
  //     children: getChildren('./docs/other/tools/')
  //   },
  // ]
}
