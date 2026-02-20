-- ============================================
-- SQL READ: SELECT and WHERE
-- Section 32: SQL - Querying data
-- ============================================

-- SELECT: choose which columns to return
-- WHERE: filter which rows to return

-- --------------------------------------------
-- SELECT basics
-- --------------------------------------------

-- Select all columns from a table
SELECT * FROM customers;

-- Select specific columns
SELECT first_name, last_name FROM customers;

-- Select with column alias (AS)
SELECT first_name AS fname, last_name AS lname FROM customers;


-- --------------------------------------------
-- WHERE: filter rows
-- --------------------------------------------

-- Equality
SELECT * FROM customers WHERE first_name = 'John';
SELECT * FROM products WHERE id = 1;

-- Inequality
SELECT * FROM products WHERE price != 1.20;
SELECT * FROM products WHERE id <> 2;

-- Comparison: less than, greater than
SELECT * FROM products WHERE price < 1.00;
SELECT * FROM products WHERE price > 1.00;
SELECT * FROM products WHERE stock >= 12;

-- Multiple conditions: AND
SELECT * FROM customers WHERE first_name = 'John' AND last_name = 'Doe';

-- Multiple conditions: OR
SELECT * FROM customers WHERE first_name = 'John' OR first_name = 'Angela';

-- IN: match any value in a list
SELECT * FROM customers WHERE first_name IN ('John', 'Angela');

-- NOT IN
SELECT * FROM products WHERE id NOT IN (2);

-- LIKE: pattern matching (e.g. names starting with 'J')
SELECT * FROM customers WHERE first_name LIKE 'J%';
-- % = any characters; _ = single character

-- NULL check
SELECT * FROM products WHERE price IS NULL;
SELECT * FROM products WHERE price IS NOT NULL;

-- BETWEEN (inclusive)
SELECT * FROM products WHERE price BETWEEN 0.5 AND 2.0;


-- --------------------------------------------
-- ORDER BY, LIMIT (often used with SELECT/WHERE)
-- --------------------------------------------

SELECT * FROM customers ORDER BY last_name;
SELECT * FROM products ORDER BY price DESC;
SELECT * FROM products WHERE stock > 0 ORDER BY price ASC LIMIT 5;
