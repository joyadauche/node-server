// simulating auth middleware assuming a request comes in to return a universally unique identifier for a user

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

      req.user = token; 
      next();
}