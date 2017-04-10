<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SendEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:send {user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '向用户打招呼';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    protected $username;
    public function __construct()
    {
        parent::__construct();
        $this->username = 'mack';
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        echo 'hello '.$this->username;
    }
}
