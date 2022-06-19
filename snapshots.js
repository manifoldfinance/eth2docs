const urls = [
  {
    name: 'Master Spec',
    path: '/api/master/',
  },
  { name: 'Beacon Spec', path: '/api/beacon-api/' },
  { name: 'Execution Spec', path: '/api/execution-api' },
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
