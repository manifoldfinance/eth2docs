const urls = [
  {
    name: 'Master Spec',
    path: '/api/master/',
  },
  { name: 'Beacon Spec', path: '/api/beacon-api/' },
  { name: 'Execution Spec', path: '/api/execution-api' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

module.exports = () => {
  const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';
  return urls.map(({ name, path }) => {
    return {
      name,
      url: `${baseUrl}${path}`,
    };
  });
};
