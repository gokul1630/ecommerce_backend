# Available Routes for Category

## To Get list of Category

```
GET: /api/v1/category
```

### Payload

```
{}
```

## To Get Category by Id

```
GET: /api/v1/category/<categoryId>
```

### Payload

```
{}
```

## To Add New Category

#### Note: you need to have Owner Account to Access this Route

```
PUT: /api/v1/category/add
```

### Payload

```
{
  category: 'Electronics',
  image: <image url of category image>,
}
```

## To Update a Category

#### Note: you need to have Owner Account to Access this Route

```
POST: /api/v1/category/add
```

### Payload

```
{
  _id: <Category ObjectId>
  category: 'Electronics',
  image: <image url of category image>,
}
```

## To Delete a Category

#### Note: you need to have Owner Account to Access this Route

```
DELETE: /api/v1/category/remove
```

### Payload

```
{
  _id: <Category ObjectId>
}
```
