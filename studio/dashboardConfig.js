export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62043d8184e5953883c19bab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nxzvngoi',
                  apiId: '88583338-dbfd-490f-a5da-54267a3d0d7a'
                },
                {
                  buildHookId: '62043d8127db373aa57cd7f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r9hfd3zw',
                  apiId: '3c42252e-3e3e-4576-a97a-c4456ac8614f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hsujessica/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r9hfd3zw.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
