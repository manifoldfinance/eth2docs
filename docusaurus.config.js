/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'master-api',
        spec: 'openapi/bundle/openapi.yaml',
        route: '/api/master/',
      },
      {
        id: 'beacon-api',
        spec: 'openapi/beacon/beacon-api.yaml',
        route: '/api/beacon-api/',
      },
      {
        id: 'execution-api',
        spec: 'openapi/execution/openapi.yaml',
        route: '/api/execution-api/',
      },
      /*    {
        id: 'using-remote-url',
        // Remote File
        spec: 'https://redocly.github.io/redoc/openapi.yaml',
        route: '/examples/using-remote-url/',
      },
      
      {
        id: 'using-custom-page',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-page/index.jsx')
      },
      {
        id: 'using-custom-layout',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
      */
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#1890ff',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

if (process.env.VERCEL_URL) {
  process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
}

/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */
const config = {
  presets: [
    /** ************ Your other presets' config  *********** */
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          routeBasePath: '/docs',
          editUrl: 'https://github.com/sambacha/eth2api/edit/master/',
        },
      },
    ],
    // Redocusaurus Config
    redocusaurus,
  ],
  title: 'Ethereum2 APIs',
  tagline: 'OpenAPI Ethereum2 Documentation',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    meta: {
      description: 'Redoc generated documentation for Ethereum2',
    },
  },
  url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Ethereum2 Clients',
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: '/docs',
        },
        {
          label: 'Examples',
          position: 'left',
          items: [
            {
              label: 'All',
              to: '/api/master',
            },
            {
              label: 'Beacon API',
              to: '/api/beacon-api',
            },
            {
              label: 'Execution APIs',
              to: '/api/execution-api/',
            },
          ],
        },
        {
          label: 'v1',
          position: 'right',
          items: [
            {
              label: 'v0',
              href: '#',
            },
            {
              label: 'v1',
              href: '#',
            },
          ],
        },
        {
          href: 'https://github.com/sambacha/eth2api',
          position: 'right',
          className: 'header-github-logo',
          'aria-label': 'GitHub Repo',
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: 'Redocusaurus Logo',
      //   src: 'img/logoDark.png',
      // },
      links: [
        {
          title: ' API Clients',
          items: [
            {
              label: 'Beacon API',
              href: 'https://github.com/ethereum/beacon-apis/',
            },
            {
              label: 'Consensus APIc',
              href: 'https://github.com/ethereum/consensus-specs/',
            },
            {
              label: 'Execution API',
              href: 'https://github.com/ethereum/execution-apis',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/sambacha/eth2api/',
            },
            {
              label: 'Blog Post',
              href: 'https://github.com/sambacha/eth2api',
            },
            {
              label: 'Contact',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="#" target="_blank" rel="noopener noreferrer">Ethereum Contributors</a>. Built with <a href="#" target="_blank" rel="noopener noreferrer">Docusaurus</a>`,
    },
  },
};

module.exports = config;
