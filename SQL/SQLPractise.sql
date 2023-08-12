create database DatabasePractise
create table student(
Srno int primary key identity,
FirstName varchar(50),
LastName varchar(50),
Age int
)

insert into StudentDetails values('Shreya','Dakhale',22,768923)
insert into studentDetails values('Mahi','Jaiswal',23,540326)

update StudentDetails set FirstName = 'Mihika' where FirstName = 'Shreya'

delete from StudentDetails where FirstName = 'Mahi'
delete from StudentDetails
select * from studentDetails

alter table student add EnrollmentNo int	--add column in the table student using alter 
alter table student alter column EnrollmentNo bigint	--alter column in the table student using alter

alter table student drop column EnrollmentNo --drop column in the table student using alter
alter table student alter column EnrollmentNo bigint not null	--add a constraint not null in the table student using alter

truncate table student --truncate table student
--Wrong RENAME TABLE 'student' TO 'studentDetails';
--Wrong ALTER TABLE 'student' RENAME 'studentDetails';
--Wrong RENAME TABLE student TO studentDetails;
--Wrong ALTER TABLE student RENAME studentDetails;
--Wrong rename 'student','studentDetails'

--To rename a table name
sp_rename 'student','studentDetails';

select * from studentDetails

--To rename a column name
EXEC sp_rename 'studentDetails.EnrollmentNo', 'SeatNo', 'COLUMN'







