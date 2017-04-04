create table user(
  id int unsigned not null auto_increment primary key,
  name varchar(20),
  password varchar(20),
  email varchar(50),
  token varchar(32),
  created_at timestamp NOT NULL ,
  updated_at timestamp NOT NULL default CURRENT_TIMESTAMP()
)

/*文章一级目录
1 javascript 和对应头像图片地址
content
id content_name headpic_url created_at updated_at*/

create table content(
  id tinyint unsigned not null auto_increment primary key,
  content_name char(20) not null,
  headpic_url varchar(255),
  created_at datetime,
  updated_at timestamp,
  unique (content_name)
);

/*
文章二级目录
1 jquery  1 所属的文章主目录javascript
content_child
id content_child_name content_id created_at updated_at
*/


create table content_child(
  id smallint unsigned not null auto_increment primary key,
  content_child_name char(20) not null,
  content_id tinyint unsigned not null,
  created_at datetime,
  updated_at timestamp,
  unique (content_child_name)
)

/*
文章列表
1 什么是jquery  所属的1级目录id  所属的2级目录id
article
id title content_id content_child_id  created_at updated_at
*/

create table article(
  id int unsigned not null auto_increment primary key,
  title varchar(100) not null,
  content_id tinyint unsigned not null,
  content_child_id smallint unsigned not null,
  created_at datetime,
  updated_at timestamp,
  unique (article)
)



/*文章的内容分类
1 对应的文章id  文章的源码id 文章的教程id 文件的示例id
article_type
id article_id  code_id doc_id example_id created_at updated_at*/

create table article_type(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  doc_id int,
  code_id int,
  example_id int,
  created_at datetime,
  updated_at timestamp
)
/*
文章的源码
1 文章id 文章源码内容
code
id article_id code created_at updated_at*/

create table code(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  code text not null,
  created_at datetime,
  updated_at timestamp,
  unique (article_id)
)

/*文章的教程
1 文章id 文章教程内容
doc
id article_id doc created_at updated_at*/

create table doc(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  doc text not null,
  created_at datetime,
  updated_at timestamp,
  unique (article_id)
)

/*文章的示例
1 文章id 文章示例内容
example
id article_id example created_at updated_at*/

create table example(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  example text not null,
  created_at datetime,
  updated_at timestamp,
  unique (article_id)
)


/*文章的属性
1 文章的id 文章的浏览次数 文章的占赞次数 文章评论次数
article_attr
id article_id views goods comments last_view last_good last_comment created_at updated_at*/

create table article_attr(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  views int unsigned zerofill,
  goods int unsigned zerofill,
  comments int unsigned zerofill,
  last_view char(20),
  last_good char(20),
  last_comment char(20),
  created_at datetime,
  updated_at timestamp,
  unique (article_id)
)

/*
文章的标签
1 文章的id 文章的标签,用逗号分开
article_label
id article_id  label  created_at updated_at*/

create table article_label(
  id int unsigned not null auto_increment primary key,
  article_id int not null,
  label char(30) not null,
  created_at datetime,
  updated_at timestamp,
  unique (article_id)
)


/*上传图片资源
1 图片原来的名字 图片命名的名字 图片的大小 图片长尺寸 图片宽尺寸 图片的类型 图片的地址
image
id origin_name new_name  img_url created_at updated_at*/

create table image(
  id int unsigned not null auto_increment primary key,
  origin_name varchar(255) not null,
  new_name varchar(30),
  img_url varchar(255),
  created_at datetime,
  updated_at timestamp
)

/*image_attr
id image_id size(kb) width(px) heigth type  created_at updated_at*/

create table image_attr(
  id int unsigned not null auto_increment primary key,
  image_id int not null,
  size int,
  width int,
  heigth int,
  type char(10),
  created_at datetime,
  updated_at timestamp,
  unique (image_id)
)


/*上传视频资源
1 视频原来的名字 视频的命名名字 视频大小 视频时长 视频的长尺寸 视频的宽尺寸 视频的类型 视频的地址
video
id origin_name new_name video_url created_at updated_at
video_attr
id video_id size width height type  created_at updated_at*/

create table video(
  id int unsigned not null auto_increment primary key,
  origin_name varchar(255) not null,
  new_name varchar(30),
  video_url varchar(255),
  created_at datetime,
  updated_at timestamp
)

create table video_attr(
  id int unsigned not null auto_increment primary key,
  video_id int not null,
  size int,
  width int,
  heigth int,
  type char(10),
  created_at datetime,
  updated_at timestamp,
  unique (video_id)
)


/*提供的下载资源
download
id name download_url created_at updated_at
download_attr
id download_id introduce size type system article_id created_at updated_at*/

create table download(
  id smallint unsigned not null auto_increment primary key,
  name varchar(100) not null,
  download_url varchar(255),
  created_at datetime,
  updated_at timestamp
)

create table download_attr(
  id smallint unsigned not null auto_increment primary key,
  download_id smallint not null,
  introduce text,
  size int,
  type char(10),
  system char(30),
  article_id int,
  created_at datetime,
  updated_at timestamp
)




/*
评论留言
user
id user_ip user_name created_at updated_at
user_comment
id user_id article_id comment  created_at updated_at reply_status(有无即可) created_at updated_at
comments_reply
id user_id comment_id reply created_at updated_at*/

create table user(
  id int unsigned not null auto_increment primary key,
  user_ip char(20),
  user_name char(20),
  created_at datetime,
  updated_at timestamp
)


create table user_comments(
  id int unsigned not null auto_increment primary key,
  user_id int not null,
  article_id int not null,
  comment varchar(255),
  reply_status tinyint,
  created_at datetime,
  updated_at timestamp
)

create table comments_reply(
  id int unsigned not null auto_increment primary key,
  user_id int not null,
  comment_id int not null,
  reply varchar(255),
  created_at datetime,
  updated_at timestamp
)


/*alter table content_child
    add foreign key (content_id) references content(id);*/