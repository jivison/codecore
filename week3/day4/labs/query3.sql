-- 1)
SELECT products.name, products.id FROM line_items
RIGHT JOIN products
ON products.id = line_items.product_id
WHERE line_items.created_at > NOW() - INTERVAL '2' YEAR;


-- 2)
SELECT products_id, MAX(total_price) AS max_total_price
FROM (
    SELECT products.id AS products_id, SUM(line_items.quantity * line_items.price) AS total_price
    FROM line_items
    INNER JOIN products
    ON products.id = line_items.product_id
    --                       There are no products purchased in the past year...
    WHERE line_items.created_at > NOW() - INTERVAL '5' YEAR
    GROUP BY products.id
) AS total_prices
GROUP BY products_id
ORDER BY max_total_price DESC
LIMIT 10;


-- 3)
SELECT products.name, products.id, line_items.id, line_items.created_at
FROM products
LEFT JOIN line_items
ON products.id = line_items.product_id
WHERE line_items.created_at < NOW() - INTERVAL '2' YEAR
OR line_items.product_id IS NULL



