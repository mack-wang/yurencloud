create table customers (
  customers_id int unsigned not null auto_increment primary key ,
  name char(30) not null,
  age tinyint,
  address char(100),
  orders_id int unsigned not null,
  phone char(20) not null
)