-- Create the City table
CREATE TABLE City (
    city_id INT PRIMARY KEY,
    city_name VARCHAR(50) NOT NULL
);
drop table Employee
-- Create the Employee table with the foreign key constraint
CREATE TABLE Employee (
    EmployeeNumber INT PRIMARY KEY,
    Name VARCHAR(500),
    Gender VARCHAR(10),
    Email VARCHAR(500),
    MobileNumber VARCHAR(12),
    City varchar(50),
    DateOfBirth DATE,
);

-- Insert data into the City table
INSERT INTO City (city_id, city_name) VALUES
(100, 'Nagpur'),
(101, 'Mumbai'),
(102, 'Banglore'),
(103, 'Pune');

-- Insert data into the Employee table
INSERT INTO Employee (EmployeeNumber, Name, Gender, Email, MobileNumber, emp_city_id, DateOfBirth) VALUES
(201, 'John Doe', 'Male', 'john.doe@example.com', '555-1234', 100, '1990-01-15'),
(202, 'Jane Smith', 'Female', 'jane.smith@example.com', '555-5678', 101, '1985-07-20'),
(203, 'Bob Johnson', 'Male', 'bob.johnson@example.com', '555-9876', 102, '1995-03-05');
truncate table Employee
-- Select data from the City and Employee tables
SELECT * FROM City;
SELECT * FROM Employee;

delete from Employee where EmployeeNumber in (101,102,103)


drop table Employee
drop table City