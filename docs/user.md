# Available Routes for User

## Signup

```
PUT: /api/v1/user/user/signup
```

### Payload
```
{
  user: 'Lorem ipsum'
  email: 'example@mail.com'
  password: '1234@Lorem'
  phoneNumber: '9876543210',
  dob: '15/12/1999',
  address: '1/21,Park street, Salem',
  image: <url of your image>,
}
```

## Login

```
POST: /api/v1/user/login
```

### Payload
```
{
  email: 'example@mail.com'
  password: '1234@Lorem'
}
````


## Update

```
POST: /api/v1/user/update
```

### Payload
```
{
  user: 'Lorem ipsum'
  email: 'example@mail.com'
  password: '1234@Lorem'
  phoneNumber: '9876543210',
  dob: '15/12/1999',
  address: '1/21,Park street, Salem',
  image: <url of your image>,
}
```