module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6da76be83e0d48cec1a3b2cacf8c2280'),
  },
});
