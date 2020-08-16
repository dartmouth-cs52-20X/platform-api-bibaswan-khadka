import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.username);
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;

  console.log(email);
  console.log(password);
  console.log(username);

  if (!email || !password || !username) {
    res.status(422).send('You must provide email and password');
  } else {
    User.findOne({ email })
      .then((result) => {
        if (result != null) {
          res.status(500).send('User already exists with email');
        } else {
          const newuser = new User();
          newuser.email = email;
          newuser.password = password;
          newuser.username = username;
          newuser.save()
            .then((saveduser) => {
              res.send({ token: tokenForUser(newuser) });
            })
            .catch((error) => {
              res.status(500).send('saving failed');
            });
        }
      });
  }
};

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
