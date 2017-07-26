<?php
namespace Man;

interface Girl{
    function eat();
    function walk();
//    function play();
//    function go();
}

class Woman implements Girl {
    function eat(){
        echo 'eat';
    }

    function walk()
    {
        echo 'walk';
    }

    function run(){
        echo 'run';
    }

}




class SuperMan extends Fly
{

    public function do()
    {
        $fly = new Fly();
        $fight = new Fight();
        echo 'hello';
    }

    public function doFight(){
        $fight = new Fight();
        $fight->fight1();
        //$fight->fight2();
        //$fight->fight3();

    }
}

class Fly
{
    public function __construct()
    {
        echo 'fly()';
    }

    public function does()
    {
        echo 'do fly()';
    }
}
class Fight
{
    public function __construct()
    {
        echo 'fight()';
    }

    public function fight1(){
        echo 'do fight1()';
    }

    protected function fight2(){
        echo 'do fight2()';
    }

    private function fight3(){
        echo 'do fight3()';
    }
}
class Swim
{
    public function __construct()
    {
        echo 'swim()';
    }
}

echo 'hello';
$s = new SuperMan();
$s->does();
$s->doFight();
