DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY (role),
    REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manage_id),
    REFERENCES manager_id ON DELETE SET NULL
    
)

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    role_title VARCHAR(30),
    FOREIGN KEY (payrate) REFERENCES salary(id) ON DELETE SET NULL,
    FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL
    
)

CREATE TABLE salary (
    id INTEGER NOT NULL, 
    payrate DECIMAL (10, 2) NOT NULL
)

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    dept_name VARCHAR(30) NOT NULL,

);

