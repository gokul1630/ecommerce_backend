# Available Routes for Products

## To fetch All Products
```
GET: /api/v1/products/
```

### Payload
```
{}
```

## To fetch Product by Id
```
GET: /api/v1/products/<productId>
```

### Payload
```
{}
```

## To fetch Products by Category
```
GET: /api/v1/products/<categoryId>
```

### Payload
```
{}
```

## To Add New Product

#### Note: you need to have Owner Account to Access this Route

```
PUT: /api/v1/products/add
```

### Payload
```
{
  name: 'Sonata',
  price: 100,
  brand: 'TATA',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut     enim ad minim veniam, quis nostrud exercitation',
  stocks: 100,
  categoryId: <Category ObjectID>,   	// Optional
  ratings: '4.5 out of 5',           	// Optional
  image: <image url>,
  images: [<Array of Image Urls>],   	// Optional
  seller: 'Amazon',
  sellerImage: <Seller image url>,   	// Optional
  sellerStoreLink: <Seller store link>	// Optional
}
```

## To Update Product

#### Note: you need to have Owner Account to Access this Route

```
POST: /api/v1/products/update
```

### Payload
```
{
  _id: <Product ObjectId>,
  name: 'Sonata',
  price: 100,
  brand: 'TATA',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut     enim ad minim veniam, quis nostrud exercitation',
  stocks: 100,
  categoryId: <Category ObjectID>,   	// Optional
  ratings: '4.5 out of 5',           	// Optional
  image: <image url>,
  images: [<Array of Image Urls>],   	// Optional
  seller: 'Amazon',
  sellerImage: <Seller image url>,   	// Optional
  sellerStoreLink: <Seller store link>	// Optional
}
```

## To Delete Product

#### Note: you need to have Owner Account to Access this Route

```
DELETE: /api/v1/products/remove
```

### Payload
```
{
  _id: <Product ObjectId>,
}
```