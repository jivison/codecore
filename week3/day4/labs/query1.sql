-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
SELECT filtered_orders.id, AVG(line_items.quantity * line_items.price) AS avg_total_price
FROM (
    SELECT id FROM orders
    WHERE EXTRACT(MONTH FROM completed_on) = 1
    AND EXTRACT(YEAR FROM completed_on) = 2016
) AS filtered_orders
INNER JOIN line_items
ON filtered_orders.id = line_items.order_id
GROUP BY filtered_orders.id
ORDER BY avg_total_price DESC;

-- Select product names, product prices and the lowest price they were sold at during the last 20 months.
SELECT products.id, MIN(recent_line_items.price) AS avg_price
FROM (
    SELECT price, product_id, created_at
    FROM line_items
    WHERE created_at BETWEEN '2017-12-15' AND '2019-08-15'
) AS recent_line_items
INNER JOIN products
ON recent_line_items.product_id = products.id
GROUP BY products.id
ORDER BY products.id DESC; 
