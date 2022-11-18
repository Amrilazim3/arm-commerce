@component('mail::message')
# Hey admin of arm-commerce

Your customer are making an order, please prepare it as soon as possible.

@component('mail::button', ['url' => 'https://arm-commerce.com/admin/products/shippings'])
you can check it here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent