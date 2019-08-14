-- SQL: Basics

-- To connect to a database through terminal we use the command
-- psql -d database_name

-- To execute this file do
-- psql -d <databasename> < demo.sql

-- CREATE TABLE cars
-- (
--     -- Define a column 'id' with the type of BIGSERIAL
--     -- SERIAL will auto increment new records
--     id BIGSERIAL,
--     -- VARCHAR is a string type where characters are limited to the argument
--     brand VARCHAR(50),
--     model VARCHAR(50),
--     -- INTEGER is a number type that cannot have decimals, but can be negative
--     doors INTEGER,
--     -- TEXT is a string type with no max character count
--     car_description TEXT
-- );


-- All SQL statments must end in a semicolon;

-- CRUD

-- CREATE

INSERT INTO students
    ("first_name", "last_name", "email", "phone_number")
    VALUES
    ('brandon', 'lam', 'brandon@brandonlam.ca', '77872750492');
