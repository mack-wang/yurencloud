/*
create user 创建新用户
create user 'username'@'host' [identified by 'password'];
host 可以是%，localhost,ip,域名等，限制访问来源

 */
 --示例
create user 'tom'@'localhost' identified by '123456';


/*
grant 创建用户，并给他权限

语法 []中括号中的内容均为可选内容
grant privileges [columns]    给权限，可以是all，也可以是某几项权限
on item   权限生效的数据库或表，可以是*表示所有数据库和表，也可以是shop_table.* 可以shop_table.member
to user_name [identified hy 'password']   给指定用户权限，可以是tom,也可以是tom@域名ip地址（限制访问ip）
[require ssl_options]   是否要求用户必须使用ssh加密通道访问，可选
[with [grant option | limit_option] ]   允许或者禁止该用户向其他用户发放权限，可选

revoke 收回权限，使用方式同grant，只是to改成了from
*/
-- 示例1
grant all --给全部权限
on * --可以作用所有数据库
to tom --创建tom用户，并把上述权限给他，tom的初始密码是123456
with grant option; --允许tom授权给其他用户

--示例1-2
revoke all privileges  --收加所有的权限
from tom@localhost;  --从tom用户这里收回

--示例2 设置tom没有任何权限
grant usage
on books.*
to tom;

--后来了解tom需要一些权限,便单独给了他select,insert,update,delete,index,alter,create,drop这些权限
grant select,insert,update,delete,index,alter,create,drop
on book.*
to tom

--再后来认为tom权限过高，收回部分权限
revoke alter,create,drop
on books.*
from tom;

--最后我们认为tom不需要权限了，收回全部权限
revoke all
on books.*
from tom

/*
create database - 创建新数据库
alter database - 修改数据库
create table - 创建新表
alter table - 变更（改变）数据库表
drop table - 删除表
create index - 创建索引（搜索键）
drop index - 删除索引

select - 从数据库表中获取数据
update - 更新数据库表中的数据
delete - 从数据库表中删除数据
insert into - 向数据库表中插入数据

create database database_name 创建数据库
create table table_name (columns) 创建数据表 //后面的这个(columns)表示数据表的字段

char和varchar的区别：前者占用固定长度的值，后者可以根据需要分配存储空间（加一个字节）。但char的速度比varchar快
float(6,2);浮点数字宽6位，小数点2位
tinyint 只能取-127~128或0-255之间的一个整数
 */
--示例 unsigned 表示存储整型数据无符号化，即只能是0或者一个正数，避免计算机在存储的时候出现异常结果，一般就为主键应用一下这个属性
create table customers (
  customer_id int unsigned not null auto_increment primary key,
  name char(50) not null,
  address char(100) not null,
  city char(30) not null
);

create table books (
  isbn char(13) not null primary key,
  author char(50),
  title char(100),
  price float(4,2)
);

create table orders (
  order_id int unsigned not null auto_increment primary key,
  customer_id int unsigned not null,
  amount float(6,2),
  date date not null
);

create table order_items (
  order_id int unsigned not null,
  isbn char(13) not null,
  quantity tinyint unsigned,
  primary key(order_id,isbn)
);

create table book_reviews (
  isbn   char(13) not null primary key,
  review text
);

/*
show database 显示所有数据库名字
show tables 显示所有数据表名字
describe books 显示books数据表的结构信息
*/

/*
索引
您可以在表中创建索引，以便更加快速高效地查询数据。
用户无法看到索引，它们只能被用来加速搜索/查询。
注释：更新一个包含索引的表需要比更新一个没有索引的表更多的时间，这是由于索引本身也需要更新。因此，理想的做法是仅仅在常常被搜索的列（以及表）上面创建索引。
create [unique | fulltext] index index_name
on table_name (index_column_name [(length) | [asc|desc],...])
*/

/*
标识符 就是可以create创建的对象，并给该对象取个名字，来指代表该对象
database  最长64位    是否区分大小写，同操作系统    允许所有字符(除./\)
table     最长64位    是否区分大小写，同操作系统    允许所有字符(除./\)
column    最长64位    不区分大小写               允许所有字符
index     最长64位    不区分大小写               允许所有字符
alias     最长255位   不区分大小写               允许所有字符

数据类型
基本数据类型：数字、日期和时间、字符串。三种
但每个类型中又包含多个不同的类型

在这里查看所有的数据类型http://www.w3school.com.cn/sql/sql_datatypes.asp

*/


--select 从表中选择数据
--select 列名称 from 表名称
/*
select [options] items
[info file_details]
from tables
[where conditions]
[group by group_type]
[having where_definition]
[order by order_type]
[limit limit_criteria]
[procedure proc_name(arguments)]
[lock_options]
*/
select *
from new_red_all_shop;--选择全部

select shop_name
from new_red_all_shop;--选择其中的shop_name的列

select distinct openid
from new_red_pv;--返回所有不同的openid的，这就相当于从pv中得到uv，distinct专门用来去除重复

select * from new_red_all_shop
where id>90;--选择id大于90的全部

select * from new_red_all_shop
where id>90 and area_id = 3;--where 可以用and连接多个条件，都为true时，返回一条记录

select * from new_red_all_shop
where id>90 or area_id = 3;--where 可以用or连接多个条件，只要任意一个为true时，返回一条记录

select *
from new_red_shop left join new_red_pv
using (shop_id) --在用join关联两表或多表时，可以使用using(列名)，效果同on table_a.shop_id = table_b.shop_id
where 后面略

--给表取个别名，方便引用和书写，相当于js中的变量赋值引用
select c.name
from customers as c,orders as o,order_items as oi,books as b
where c.customerid = o.customerid --效果同customers.customerid = orders.customerid


/*
order by 按一定规则对结果集进行排序显示
*/
select *
from new_red_all_shop
order by area_id;--根据地区的id按从小到大排行结果，默认为asc升序，升序的意思就是，第一条向最后一条的序号是向上升长的。

select *
from new_red_all_shop
order by area_id asc;--根据地区的id按从小到大排行结果，默认为asc升序，升序的意思就是，第一条向最后一条的序号是向上升长的。

select *
from new_red_all_shop
order by area_id desc;--根据地区的id按从大到小排行结果，降序

/*
group by 分组
聚合函数：统计结果，计算结果
*/
select count(*)
from new_red_all_shop;--统计商店有多少家

select count(*) as my_counts
from new_red_all_shop;--给结果取个别名，会显示在列名上，同时也代表结果，相当于 var my_counts = count(*);

select count(*) as my_counts
from new_red_all_shop
group by area_id;--根据不同地区，把商店分组，然后统计不同组的数量，返回一个统计结果数组



--下面这个示例，就叫做新建临时表，用作子查询
select avg(my_name.my_counts)
from(
select count(*) as my_counts
from new_red_all_shop
group by area_id
) as my_name;--给统计结果集命名为my_name,根据返回的统计结果集，再进行取平均值的操作，相当聚合函数的嵌套


select avg(my_counts)
from(
select count(*) as my_counts
from new_red_all_shop
group by area_id
) my_name;--上一个示例的简便写法

select avg(my_counts) as 平均每个地区有商店数量为
from(
select count(*) as my_counts
from new_red_all_shop
group by area_id
) my_name;--可以再给平均值计算的结果进行命名

/*
having 对聚合函数的返回的结果，进行像where一样操作
在 sql 中增加 having 子句原因是，where 关键字无法与合计函数一起使用。
*/

select count(*) as my_counts
from new_red_all_shop
group by area_id;--根据不同地区，把商店分组，然后统计不同组的数量，返回一个统计结果数组

select count(*) as my_counts
from new_red_all_shop
group by area_id
having count(*) > 50;--对结果集再次进行处理,返回地区商店数量大于50的结果

select count(*) as my_counts
from new_red_all_shop
group by area_id
where my_counts > 50;--效果同上


/*
limit 输出范围确定，参数：起始行数，返回行数
*/

select *
from new_red_all_shop
limit 50,5;--返回从第50行开始的5行

/*
使用子查询
子查询是一个嵌套在另一个查询内部的查询。
最常见的是一个查询，要用到别一个查询的结果作为比较条件
*/
select customer_id , amount
from orders
where amount = (select max(amount) from orders);


select customer_id, amountfrom orders
from orders
order by amount desc
limit 1;--这句同样能达到上面例子的效果，但limit与非mysql的软件不兼容，从技术的角度看，这种执行的效率要高得多



select shop_name
from new_red_all_shop
where area_id > (select avg(area_id) from new_red_all_shop);--计算出area_id的平均值，然后作为前者的比较参数

/*
特殊的子查询
any,some,all都仍然要使用比较操作符，而in可以省略比较操作符（因为in其实相当于隐藏了等号）
*/

select a
from table1
where a > any (select a from table2);--如果表2中有a,则在表1中查找数据a，并返回a.

select a
from table1
where a in (select a from table2);--效果同上

select a, b, c
from table1
where (a, b, c)  in (select a, b, c from table2);--效果同上

select a
from table1
where a > some (select a from table2);--效果同上

select a
from table1
where a > all (select a from table2);--效果同上


--特别提醒，下面这个在关联查询中很好用，且只能用在关联查询中
select id, b, c
from table1
where not exists (select * from table2 where table2.id = table1.id);

select book_id, book_name
from books
where not exists (select * from orders where orders.book_id = books.book_id);--返回还没有被订购的所有的书
--orders里的book_id都是已经卖出去的书了，exists是存在的意思，not exists是不存在的意思。

select book_id, book_name
from books
where exists (select * from orders where orders.book_id = books.book_id);--返回所有已经卖出去的书



/*
update更新数据库记录
update [low_priority] [ignore] table_name
set column1 = expression1,column2 = expression2,...
[where condition]
[order by order_criteria]
[limit number]
*/

update books
set price = price*0.8;--更新书的数据库，将其价格全部打八折.  price*0.8 这里的price是自己的一个引用

update books
set book_name = 'happy prince';
where book_id = 103;--把book_id为103的书，的书名改为happy prince

/*
alter 修改表的结构  这个作用比较大，具体可以百度
*/
alter table customers
modify name char(70) not null; --因为customers表中name这一列的数据长度原先最大为30字，不够用了，现在我把他改为最大为70字，用到了modify方法

alter table orders
add tax float(6,2) after amount; --现在我们需要为每笔订单计算税点，所以要在amount这一列的后面增加一列tax，用到了add方法

alter table orders
drop tax;  --现在国家政策给我们优惠，免税，所以我们要把税收这列给删除掉


/*
增删改查

增
insert into 语句用于向表格中插入新的行。
insert into 表名称 values (值1, 值2,....)//新建一条记录到表的最后
insert into table_name (列1, 列2,...) values (值1, 值2,....)//新建一条记录，往指定的列中写values值

删
delete from 表名称 where 列名称 = 值

改
update 表名称 set 列名称 = 新值 where 列名称 = 某值
*/

--增
insert into books values (1,'tom','hello world',98.00);--新建一条记录到表的最后
insert into books (isbn,title,price) values (2,'hello world2',70.00);--新建一条记录，往指定的列中写values值
--删
delete from books where isbn = 2;--删除isbn为2的记录
--改
update books set title = 'hello world3' where isbn = 1;--修改更新isbn为2的书名为hello world3


/*

top 获取前面几条的数据  //mysql中不支持这个写法
limit 获取前面几条的数据  所以mysql中可以使用这个写法

*/
select *
from new_red_shop
where id<11;--获取前10家商店信息,如果id是连续的话

select *
from new_red_shop
limit 10;--获取前10家商店信息

select *
from new_red_shop
limit 3,4;--获取前面第三家开始的后而4家商店信息

select top 10 *
from new_red_shop;--获取前10家商店信息,mysql中不支持

/*
从一个表中向另一个表复制所有的列或指定的列，mysql不支持
select *
into new_table_name [in externaldatabase]
from old_tablename
*/

/*




*/

--not null 值不允许为空
create table persons
(
id_p int not null,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255)
)

--zerofill 值默认为0
create table persons
(
id_p int not null zerofill,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255)
)

--unique 值不允许重复
create table persons
(
id_p int not null,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255),
unique (id_p)
)

--primary key 指定主键
create table persons
(
id_p int not null,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255),
primary key (id_p)
)

--foreign key 指定外键 和关联的其他表的主键
create table orders
(
id_o int not null,
orderno int not null,
id_p int,
primary key (id_o),
foreign key (id_p) references persons(id_p)
)

--check 限制值的范围 
create table persons
(
id_p int not null,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255),
check (id_p>0)
)

--default 设置某列的默认值，如果没设置默认值，则默认值为null
create table persons
(
id_p int not null,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255) default 'sandnes'
)


--auto_increment 设置自增列，id++的效果
create table persons
(
p_id int not null auto_increment,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255),
primary key (p_id)
)


/*
在terminal这样的终端查询数据库时，创建显示的视图
view_name 可以是一个句子，用引用引起来就可以
create view view_name as
select column_name(s)
from table_name
where condition
*/

/*
sql 日期
当我们处理日期时，最难的任务恐怕是确保所插入的日期的格式，与数据库中日期列的格式相匹配。
只要数据包含的只是日期部分，运行查询就不会出问题。但是，如果涉及时间，情况就有点复杂了。
在讨论日期查询的复杂性之前，我们先来看看最重要的内建日期处理函数。
mysql date 函数
下面的表格列出了 mysql 中最重要的内建日期函数：
函数	描述
now()	返回当前的日期和时间
curdate()	返回当前的日期
curtime()	返回当前的时间
date()	提取日期或日期/时间表达式的日期部分
extract()	返回日期/时间按的单独部分
date_add()	给日期添加指定的时间间隔
date_sub()	从日期减去指定的时间间隔
datediff()	返回两个日期之间的天数
date_format()	用不同的格式显示日期/时间

DATE - 格式 YYYY-MM-DD
DATETIME - 格式: YYYY-MM-DD HH:MM:SS
TIMESTAMP - 格式: YYYY-MM-DD HH:MM:SS
YEAR - 格式 YYYY 或 YY
*/

/*
聚合函数
sql 拥有很多可用于计数和计算的内建函数。
函数的语法
内建 sql 函数的语法是：
select function(列) from 表

SQL avg() 计算平均数
SQL count() 计算记录条数
SQL first()
SQL last()
SQL max()
SQL min()
SQL sum()
SQL Group By
SQL Having
SQL ucase()
SQL lcase()
SQL mid()
SQL len()
SQL round()
SQL now()
SQL format()



first() 函数  //我感觉mysql不支持
first() 函数返回指定的字段中第一个记录的值。
提示：可使用 order by 语句对记录进行排序。
sql first() 语法
select first(column_name) from table_name



a) 函数 avg([distinct] expr )
函数使用说明：返回 expr 的平均值。 distinct 选项可用于返回 expr 的不同值的平均值。
b) 函数 bit_and(expr )
函数使用说明：返回expr 中所有比特的 bitwise and 。计算执行的精确度为64 比特(bigint) 。若找不到匹配的行，则这个函数返回1844 ( 这是无符号 bigint 值，所有比特被设置为 1 ）。
c) 函数 bit_or(expr )
函数使用说明：返回expr 中所有比特的bitwise or 。计算执行的精确度为64 比特(bigint) 。若找不到匹配的行，则函数返回 0 。
d) 函数bit_xor(expr )
函数使用说明：返回expr 中所有比特的bitwise xor 。计算执行的精确度为64 比特(bigint) 。若找不到匹配的行，则函数返回 0 。
e) 函数 count(expr )
函数使用说明：返回select 语句检索到的行中非null 值的数目。若找不到匹配的行，则count() 返回 0
f) 函数 count(distinct搜索 expr ,[expr ...])
函数使用说明：返回不同的非null 值数目。若找不到匹配的项，则count(distinct) 返回 0
g) 函数 group_concat(expr )
函数使用说明：该函数返回带有来自一个组的连接的非null 值的字符串结果。其完整的语法如下所示：
group_concat([distinct] expr [,expr ...] [order by {unsigned_integer | col_name | expr }
[asc | desc] [,col_name ...]]
[separator str_val ])
h) 函数 min([distinct] expr ), max([distinct] expr )
函数使用说明：返回 expr 的最小值和最大值。 min() 和 max() 的取值可以是一个字符串参数；在这些情况下， 它们返回最小或最大字符串值。
i) 函数 std(expr ) stddev(expr )
函数使用说明：返回 expr 的总体标准偏差。这是标准 sql 的延伸。这个函数的 stddev() 形式用来提供和 oracle 的兼容性。可使用标准 sql 函数 stddev_pop() 进行代替
j) 函数 stddev_pop(expr )
函数使用说明：返回expr 的总体标准偏差(var_pop() 的平方根) 。你也可以使用 std() 或stddev(), 它们具有相同的意义，然而不是标准的 sql 。若找不到匹配的行，则stddev_pop() 返回 null
k) 函数 stddev_samp(expr )
函数使用说明：返回expr 的样本标准差 ( var_samp() 的平方根) 。若找不到匹配的行，则stddev_samp() 返回 null
l) 函数 sum([distinct] expr )
函数使用说明：返回expr 的总数。 若返回集合中无任何行，则 sum() 返回null 。distinct 关键词可用于 mysql 5.1 中，求得expr 不同值的总和。 若找不到匹配的行，则sum() 返回 null
m) 函数 var_pop(expr )
函数使用说明：返回 expr 总体标准方差。它将行视为总体，而不是一个样本， 所以它将行数作为分母。你也可以使用 variance(), 它具有相同的意义然而不是 标准的 sql
n) 函数 var_samp(expr )
函数使用说明：返回expr 的样本方差。更确切的说，分母的数字是行数减去1 。若找不到匹配的行，则var_samp() 返回null
o) 函数variance(expr )
函数使用说明：返回expr 的总体标准方差。这是标准sql 的延伸。可使用标准sql 函数 var_pop() 进行代替。若找不到匹配的项，则variance() 返回null

*/


/*
msyql支持MyISAM,InnoDB等多种数据类型。
在创建一个数据表时，可以为它设置一个类型。
MyISAM优点：响应快，支持全文索引，空间占用量比InnoDB小，但功能，安全，备份比InnoDB差；
InnoDB优点：提供提交，回滚，崩溃恢复，安全，支持外键，可与其他类型混合使用。
使用方法：
create table table_name (i int) engine = innodb;
create table table_name (i int) engine = myisam;

*/

--修改字符集 在mysql的配置文件中，比如linux下  /etc/my.cnf
-- character-set-server = gbk 字符集
--collation-server = gbk_chinese_ci 排序方式
--或命令的形式  create database if not exists mydb default character set utf8 collate utf8_general_ci;


/*
创建全文索引的使用
select book_name,price from books where match(detail) against('hello'); 全文索引的使用
select match(detail) against('hello') from books;

*/

--fulltext 创建全文索引
create table persons
(
p_id int not null auto_increment,
lastname varchar(255) not null,
firstname varchar(255),
address varchar(255),
city varchar(255),
fulltext (city) 创建全文索引
)
