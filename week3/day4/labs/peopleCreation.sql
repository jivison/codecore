CREATE TABLE people (
    id BIGSERIAL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INTEGER,
    gender CHAR,
    person_job_id INTEGER,
    address_id INTEGER
)

-- people <-> jobs through table
CERATE TABLE person_job (
    id BIGSERIAL,
    job_id INTEGER,
    person_Id INTEGER
)

-- Table that holds jobs
CREATE TABLE jobs (
    id BIGSERIAL,
    title VARCHAR(50),
)

-- Table that holds addresses
CREATE TABLE addresses (
    id BIGSERIAL,
    house_number BIGINT,
    street VARCHAR(50),
    city VARCHAR(100),
    department VARCHAR(50),
    country VARCHAR(30)
)