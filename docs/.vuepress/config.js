const  sidebar = require('./sidebar.js');
debugger
console.log(sidebar);
module.exports = {
  title: 'shulongcc笔记', //网站的标题
  description: "✨Your time is limited，so don't waste it living someone else's life✨", //网站的描述
  base: '/', // 部署配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Css', link: '/css/basis/' },
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: 'Vue', link: '/vue/' },
      // 下拉
      { 
        text: '其它', 
        items: [
          { text: 'GitHub地址', link: 'https://github.com/shulongcc' },
          {
            text: '工具',
            link: '/other/tools/'
          }
        ]
      },
    ],
    // sidebar, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    collapsable:true,
  },
  plugins: ['@vuepress/back-to-top'],
  // dest: './docs/.vuepress/dist',
  lastUpdated: '上次更新时间', // string | boolean    最后更新时间 前缀
}
