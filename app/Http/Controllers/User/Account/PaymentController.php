<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        $bankLists = Cache::remember('bank:lists', now()->addMinutes(7200), function () {
            $banks = Http::get('https://gist.githubusercontent.com/zulhfreelancer/acf1abd1d0e22a0b59c9a51715c89b1e/raw/89cf373fe13743700f5ab611b86427853a21cf83/malaysia_banks.json')->json();
            $arr = [];
            foreach ($banks as $bank) {
                array_push($arr, $bank['name']);
            }
            return $arr;
        });

        return Inertia::render('User/Account/Payments', [
            'bankLists' => $bankLists
        ]);
    }
}
