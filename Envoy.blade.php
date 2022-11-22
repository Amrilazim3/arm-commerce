@servers(['ssh' => ['amril@128.199.131.110']])

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