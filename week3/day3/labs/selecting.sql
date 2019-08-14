-- Exercise 1
-- SELECT
*
FROM
  students
WHERE
  age BETWEEN 25
  AND 45
LIMIT
  10;
-- Exercise 2
SELECT
  *
FROM
  students
WHERE
  age > 25
  AND first_name LIKE '%le%'
ORDER BY
  id ASC,
  first_name DESC FETCH NEXT 10 ROWS ONLY;
-- Exercise 3
SELECT
  *
FROM
  students
WHERE
  age IS NOT NULL
ORDER BY
  age DESC
LIMIT
  10;
-- Exercise 4
SELECT
  *
FROM
  students
WHERE
  age = 45
  AND last_name LIKE '%n%';
-- Exercise 5
SELECT
  *
FROM
  products
WHERE
  price != sale_price;
-- Exercise 6
SELECT
  *
FROM
  products
WHERE
  price != sale_price
  AND remaining_quantity > 0
ORDER BY
  sale_price ASC;
-- Exercise  7
SELECT
  *
FROM
  products
WHERE
  price BETWEEN 25
  AND 50
  AND sale_price != price;