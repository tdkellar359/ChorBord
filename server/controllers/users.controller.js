module.exports = (router) => {
  router.get('/users', (_, res) => {
    res.status(200).json({ url: '/api/users' });
  });
};
