export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cdccc0498772f9235e9f121',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v25mk3a5',
                  apiId: '95738034-4e82-494d-8bfb-11834aea51f5'
                },
                {
                  buildHookId: '5cdccc05dd0e5f0643ce2c41',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bac446vb',
                  apiId: 'ccd36438-9063-4b81-853a-c790a1558742'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edu1998/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-bac446vb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
