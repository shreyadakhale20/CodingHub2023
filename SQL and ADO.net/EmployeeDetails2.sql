/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Employeeid]
      ,[employeeName]
      ,[Gender]
      ,[Email]
      ,[mobileNumber]
      ,[City]
      ,[DOB]
  FROM [Championship].[dbo].[Employee]

  exec sp_help

  select * from City
  select * from Employee

  create table City1(
  Cityid int primary key identity,
  cityName varchar(50)
  )

  create table Employee1(
  Employeeid int primary key,
  employeeName varchar(500),
  Gender varchar(10),
  Email varchar(50),
  mobileNumber bigint,
  City varchar(50),
  DOB Date
  )
  select * from City1

  insert into City1 values('Nagpur'),('Mumbai'),('Delhi'),('Pune')