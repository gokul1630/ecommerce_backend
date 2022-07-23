# Ecommerce Backend

[![CodeFactor](https://www.codefactor.io/repository/github/gokul1630/ecommerce_backend/badge)](https://www.codefactor.io/repository/github/gokul1630/ecommerce_backend)

# Running This Repo Locally

### You need to create a .env file with below contents in root of the project

```
JWT_SECRET= <your secret key>
EXPIRES_IN= <jwt token expire time>
MONGO_URL= <url for mongodb>
```

### use this commands to generate `secret key`

```
node
require('crypto').randomBytes(64).toString('hex')
```

## Then run below commands to start the server

```
npm install && npm start
```

# Documentation for Available Routes

- [User](https://github.com/gokul1630/backend_ecommerce/blob/main/docs/user.md)
- [Owner](https://github.com/gokul1630/backend_ecommerce/blob/main/docs/owner.md)
- [Products](https://github.com/gokul1630/backend_ecommerce/blob/main/docs/products.md)
- [Category](https://github.com/gokul1630/backend_ecommerce/blob/main/docs/category.md)
- [Cart](https://github.com/gokul1630/backend_ecommerce/blob/main/docs/cart.md)


# Packages Used

- express (main framework for this backend)
- bcrypt (to encrypt & decrypt the password)
- jsonwebtoken (to protect routes from unauthorised access)
- mongoose (ODM for connecting the MongoDB with this backend)
- cors (to resolve cross orgin resource issues)
- dotenv (to load env files)

# Todo

- rate limiter
- pagination