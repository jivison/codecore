-- Exercise 1
-- SELECT
count(first_name)
FROM
  students
WHERE
  first_name = 'Elinore';
-- Exercise 2
  -- SELECT
  first_name,
  COUNT(first_name)
FROM
  students
GROUP BY
  first_name
HAVING
  COUNT(first_name) > 1;
-- Exercise 3
SELECT
  first_name,
  COUNT(first_name)
FROM
  students
GROUP BY
  first_name
HAVING
  COUNT(first_name) > 1
ORDER BY
  COUNT(first_name) DESC,
  first_name ASC
LIMIT
  20;
-- Exercise 4
SELECT
  *
FROM
  products
ORDER BY
  price DESC
LIMIT
  1;
-- Exercise 5
SELECT
  name,
  price,
  sale_price
FROM
  products
WHERE
  sale_price != price
ORDER BY
  sale_price ASC,
  price DESC
LIMIT
  1;
-- Exercise 6
SELECT
  SUM(sale_price * remaining_quantity)
FROM
  products;