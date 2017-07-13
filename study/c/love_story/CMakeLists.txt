#载入cmake的版本
cmake_minimum_required(VERSION 3.7)
#定义项目的名称
project(love_story)

#声明常量 CMAKE_C_STANDARD 代表 99
set(CMAKE_C_STANDARD 99)
#声明常量 SOURCE_FILES 代表 main.c (还可以继续添加多个c的源文件进行编译，共同使用同一个常量)
set(SOURCE_FILES main.c hello.c)

#生成可执行文件 love_story 从根目录下编译SOURCE_FILES（即main.c）
add_executable(love_story ${SOURCE_FILES})


#生成库的参考
#project(HELLO)
#set(LIB_SRC hello.c)
#set(APP_SRC main.c)
#add_library(libhello ${LIB_SRC}) add_executable(hello ${APP_SRC})
#target_link_libraries(hello libhello)

#按目录对源文件和库文件进行分类
#基本思路是每个目录下都要有一个CMakeLists.txt文件，根目录下的该文件负责载入子目录下的所有CMakeLists

#分离可执行文件目录bin和可执行文件目录lib