-- 1)
-- SELECT products.id, total_ordered + products.remaining_quantity
-- FROM (
--     SELECT products.id as products_id, SUM(quantity) AS total_ordered
--     FROM line_items
--     INNER JOIN products
--     ON products.id = line_items.product_id
--     GROUP BY products_id
-- ) AS total_orders
-- LEFT JOIN products
-- ON products.id = products_id
-- ORDER BY products.id;


-- 2)
SELECT SUM(line_items.price * line_items.quantity) / COUNT(DISTINCT(orders.id)) AS average
FROM orders
LEFT JOIN line_items
ON line_items.order_id = orders.id;


-- Mao's solution
-- SELECT SUM(quantity * price)/
--  COUNT(DISTINCT(orders.id))
-- FROM  orders
-- INNER JOIN line_items
-- ON order_id=orders.id;