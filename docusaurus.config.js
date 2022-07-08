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
        id: 'mev-boost-api',
        spec: 'openapi/mev/mev-boost-api.yml',
        route: '/api/mev-boost-api/',
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
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image",
  [
    '@easyops-cn/docusaurus-search-local',
    {
      hashed: true,
      docsRouteBasePath: ['docs', 'protodocs'],
      docsDir: ['docs', 'protodocs'],
      indexBlog: false,
    },
  ],
],
  presets: [
    /** ************ Your other presets' config  *********** */
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './generatedSidebarsProtodocs.js',
        },
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sambacha/eth2docs/tree/master/',
       },
      }, 
    ],
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { 
          customCss: [require.resolve('./src/css/style.scss')] },
          
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
  tagline: 'API Specifications Clients, Nodes, and DApps',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    meta: {
      description: 'Staking Node Documentation for Ethereum',
    },
  },
  url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Ethereum2 Node & Clients',
      items: [
        {
          label: 'Guidebook',
          position: 'left',
          to: '/docs',
        },
        {
          to: 'protodocs/common.proto',
          activeBasePath: 'protodocs',
          label: 'Erigion',
          position: 'left',
        },
        {
          label: 'Eth2 APIs',
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
            {
              label: 'MEV Boost API',
              to: '/api/mev-boost-api/',
            },
          ],
        },
        {
          label: 'v2022.06',
          position: 'right',
          items: [
            {
              label: 'v1.1.0',
              href: 'Eth2Spec',
            },
            {
              label: 'v1.0.0',
              href: '#',
            },
          ],
        },
        {
          href: 'https://github.com/sambacha/eth2docs',
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
          title: 'Resources',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/sambacha/eth2docs/',
            },
            {
              label: 'Blog Post',
              href: 'https://github.com/sambacha/eth2docs',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/manifoldfinance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ethereum-magicians.org/" target="_blank" rel="noopener noreferrer">Ethereum Contributors</a>. Powered by <a href="https://ethereum.org/en/upgrades/merge/" target="_blank" rel="noopener noreferrer">Ethereum</a>`,
    },
  },
};

module.exports = config;
