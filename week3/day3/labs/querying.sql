-- Exercise 1
-- SELECT
--     name, sale_price * remaining_quantity as remaining_value
--     FROM
--     products
--     ORDER BY
--     remaining_value DESC
--     LIMIT
--     1;
-- Exercise 2
-- SELECT
--     *
--     FROM
--     products
--     WHERE
--     remaining_quantity > 0
--     AND price BETWEEN 25
--     AND 50
--     ORDER BY
--     price DESC
--     LIMIT
--     1;
-- Exercise 3
-- SELECT
--     *
--     FROM
--     products
--     WHERE
--     price != sale_price
--     AND remaining_quantity > 0
--     ORDER BY
--     price,
--     name;
-- Exercise 4 (What is this asking?)
-- SELECT
--     *
--     FROM
--     products
--     WHERE
--     price != sale_price
--     AND remaining_quantity > 0
--     ORDER BY
--     price,
--     name
--     OFFSET 20;
-- Exercise 5
-- SELECT
--     AVG(price)
--     FROM
--     products;
-- Exercise 6
-- SELECT
--     AVG(sale_price)
--     FROM
--     products
--     WHERE
--     sale_price != price;
-- Exercise 7
-- SELECT
--     AVG(sale_price)
--     FROM
--     products
--     WHERE
--     sale_price != price
--     AND remaining_quantity > 0;
-- Exercise 8
-- UPDATE
--     products
--     SET
--     remaining_quantity = 0
--     WHERE
--     name ILIKE '%paper%';
-- Exercise 9
-- UPDATE
--     products
--     SET
--     remaining_quantity = floor(random() *(26 -5) + 5)
--     WHERE
--     name ILIKE '%paper%'
--     OR name ILIKE '%steel%' RETURNING *;
-- Exercise 10
-- SELECT
--     *
--     FROM
--     products
--     WHERE
--     remaining_quantity > 0
--     ORDER BY
--     sale_price OFFSET 10 FETCH NEXT 10 ROWS ONLY;
-- Exercise 11
-- SELECT
--     COUNT(price) AS product_count,
--     SUM(remaining_quantity)
--     FROM
--     products
--     GROUP BY
--     sale_price;
-- Exercise 12
-- UPDATE
--     products
--   SET
--     remaining_quantity = 2 * remaining_quantity
--   WHERE
--     id IN (
--       SELECT
--         id
--       FROM
--         products
--       ORDER BY
--         price
--       LIMIT
--         1
--     ) RETURNING *;