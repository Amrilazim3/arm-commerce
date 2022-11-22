@servers(['web' => ['amril@amril-azim-server1']])

@story('deploy')
    git
    work
@endstory

@task('git')
    cd /var/www/arm-commerce
    git pull
@endtask

@task('work')
    php artisan queue:work
    php artisan schedule:run
@endtask