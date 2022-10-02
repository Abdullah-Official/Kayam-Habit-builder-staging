const response = require("../helpers/response");
const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
    const JWT_SECRET =  process.env.JWT_SECRET || "test";
    const { authorization } = req.headers;
    console.log(authorization)
    if (!authorization) {
      return response.sendUnauthorized(res, "You must be logged in.")
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        console.log(JWT_SECRET)
        console.log(err, " ERROR")
        console.log(payload)
        return response.sendUnauthorized(res, "You must be logged in.")
      }
      const { id } = payload;
      if(id){
        console.log(id)
        next()
      }
    });
  };
  
module.exports = {authMiddleware}