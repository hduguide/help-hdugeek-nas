/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  sidebar: [
    {
      title: 'Home',
      link:'/'
    },
    {
      title: '基本功能',
      link: '/weblinks'
    },
    {
      title: '网络结构',
      link: '/network'
    },
    {
      title: '账号与密码',
      link: '/namepw'
    },
    {
      title: '文件结构',
      link: '/file'
    },
    {
      title: '文件挂载',
      link: '/filemount'
    },
    {
      title: '更新日志',
      link: '/log'
    },
  ]
})
