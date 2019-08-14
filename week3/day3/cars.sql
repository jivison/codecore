
-- We can add multiple records in the same transaction by separating the values with commas
INSERT INTO cars
    (brand, model, doors, car_description)
    VALUES
    ('bmw', 'i8', 2, 'electric'),
    ('ford', 'mustang', 2, 'horse'),
    ('tesla', 'model x', 5, 'electric')
    ;