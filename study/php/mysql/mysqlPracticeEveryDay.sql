create table customers (
  customer_id int unsigned not null auto_increment primary key ,
  customer_name char(30) not null,
  age tinyint,
  address char(100),
  orders_id int unsigned not null,
  phone char(20) not null,
  created_time timestamp
);

create table books (
  book_id int unsigned not null auto_increment primary key ,
  title char(50) not null,
  author char(30) not null,
  amount int zerofill,
  created_time timestamp
);

create table orders (
  order_id int unsigned not null auto_increment primary key ,
  customer_id int not null,
  created_time timestamp
);


alter table orders
modify created_time timestamp not null;

alter table customers
change column orders_id order_id int;--修改表列名

insert into customers
values (1,'tom',23,'上海','1','15757130090',now() );

update customers
set address = '南美'
 where customer_id = 3;

delete from customers
where customer_id = 5;

select * from customers
where customer_id >2;


create table book_reviews (
  book_id  int unsigned not null primary key,
  review text
);


show databases;

show tables;

desc customers;

insert into books
values (1,'数学书','ming',23354,now() );

insert into orders
values (1,1,now() );


select *
from orders
left join customers
on orders.order_id = customers.orders_id;

--下面已经是比较复杂的查询了，用了聚合函数，子嵌套，结果赋值给变量，左关联，数据分组，排序
select max(var.counts)
from (
select count(*) as counts
from orders
left join customers
on orders.order_id = customers.orders_id
where orders.order_id > 1
group by customers.customer_id
order by orders.order_id desc
)
as var;

select *
from customers
limit 1,2;

select *
from customers
limit 1;

--子嵌套
select customer_id , amount
from orders
where amount = (select max(amount) from orders);

select customer_name
from customers
where customer_id in (select customer_id from orders);--子嵌套



