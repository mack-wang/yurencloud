#载入cmake的版本
cmake_minimum_required(VERSION 3.7)
#定义项目的名称
project(love_story)

#声明常量 CMAKE_C_STANDARD 代表 99
set(CMAKE_C_STANDARD 99)
#声明常量 SOURCE_FILES 代表 main.c
set(SOURCE_FILES main.c)

#生成可执行文件 love_story 从根目录下编译SOURCE_FILES（即main.c）
add_executable(love_story ${SOURCE_FILES})