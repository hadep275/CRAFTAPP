import jwt from 'jsonwebtoken'

const generateToken = (user) => {
    const payload = {
      id: user._id,
      username: user.username,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
  }

  export default generateToken