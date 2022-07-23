# Available Routes for Owner

## Signup

```
PUT: /api/v1/owner/signup
```

### Payload
```
{
  owner: 'Lorem ipsum'
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
POST: /api/v1/owner/login
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
POST: /api/v1/owner/update
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