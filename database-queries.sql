/* Product Queries*/

/*Select a single product using an id */
SELECT product.product_name, product.price, brand.brand_name 
FROM product 
INNER JOIN brand 
ON product.brand_id=brand.id
WHERE product.id = 1

/*Select all products, with brand_name */
SELECT product.id, product.product_name, product.price, brand.brand_name 
FROM product 
INNER JOIN brand 
ON product.brand_id=brand.id

/*Select all products in a category */
SELECT product_category.product_id, product.product_name, product.price, brand.brand_name 
FROM product_category 
INNER JOIN product
ON product_category.product_id=product.id
INNER JOIN brand
ON product.brand_id=brand.id
WHERE category_id = 1

/*Select all categories */
SELECT * FROM category
