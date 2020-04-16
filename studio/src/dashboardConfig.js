export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e986bf998cb35017342889f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-p75kpdto',
                  apiId: 'a40d6793-b85c-40a9-ba37-2be68e558003'
                },
                {
                  buildHookId: '5e986bf998cb3502684288c2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-7k1mnnj3',
                  apiId: '6dfc559a-b1fc-4ca5-b889-40b5907e57d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennyg3011/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-7k1mnnj3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
