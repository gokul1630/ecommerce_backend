# Available Routes for Cart

## Get all items from Cart

```
GET: /api/v1/cart
```

### Payload
```
{}
```

## Add New item to Cart

```
PUT: /api/v1/cart/add
```

### Payload
```
{
  name: 'Lorem Ipsum',
  brand: 'Lorem',
  imageLink: <url of product image>,
  quantity: 1,
  price: 100,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
}
````


## Update Cart Items

```
POST: /api/v1/cart/add
```

### Payload
```
{
  _id: <MongoDB ObjectId>,
  name: 'Lorem Ipsum',
  brand: 'Lorem',
  imageLink: <url of product image>,
  quantity: 1,
  price: 100,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
}
````

## Delete Cart Items

```
DELETE: /api/v1/cart/remove
```

### Payload
```
{
	_id: <MongoDB ObjectId>,
}
````