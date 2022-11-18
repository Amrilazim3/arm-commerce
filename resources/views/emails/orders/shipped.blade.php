@component('mail::message')
# Hey name user tu

Your order has been shipped!

@component('mail::button', ['url' => 'https://arm-commerce.com/user/purchase/to-receive'])
you can check it here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent