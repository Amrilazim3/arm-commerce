@component('mail::message')
# Hye there

Your order has been shipped!

@component('mail::button', ['url' => 'https://arm-commerce.amrilazim.com/user/purchase/to-receive'])
you can check it here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent