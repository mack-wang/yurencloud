<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Request;

class sendHello extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hello:send {user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '向用户说声hello';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    protected $username;

    public function __construct()
    {
        parent::__construct();

        $this->username='mack';

    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        echo '你好'.$this->username;
    }
}
