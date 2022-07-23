module.exports = Object.freeze({
  EMAIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD_REGEX: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  EMAIL_NOT_REGISTRED: "Email isn't registred yet",
  CART_IS_EMPTY: 'Cart is Empty',
  ITEM_ALREDY_IN_CART: 'Item Already Added To Cart',
  ITEM_DELETED: 'Item Deleted',
  ITEM_NOT_FOUND: 'Item Not Found',
  INVALID_PASSWORD_WARNING:
    'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  INVALID_EMAIL_WARNING: 'Provide Valid Email',
  ALL_REQUIRED_FIELDS_WARNING: 'Please provide All Required Fields',
  PASSWORD_NOT_MATCHED: "Password doesn't match",
  NOT_AUTHORISED: "You aren't Authorised",
  MISSED_TOKEN: 'Auth Token missing',
  INVALID_TOKEN: 'Invalid Token',
  DEFAULT_USER_AVATAR:
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
  PRODUCT_DELETED: 'Product Deleted',
  PRODUCT_NOT_FOUND: 'Product Not Found',
  CATEGORY_NOT_FOUND:'Category Not Found',
  CATEGORY_DELETED:'Category Deleted',
})
