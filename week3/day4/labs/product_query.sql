SELECT products.name, products.id, line_items.id, line_items.created_at
FROM products
LEFT JOIN line_items
ON products.id = line_items.product_id
WHERE line_items.created_at < NOW() - INTERVAL '1' MONTH
OR line_items.product_id IS NULL