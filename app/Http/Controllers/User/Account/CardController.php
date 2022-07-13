<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function store(Request $request)
    {
        return redirect()->back();
        dd($request);
    }

    public function update(Request $request, Card $card)
    {
        dd($request);
    }

    public function destroy(Card $card)
    {
        dd($card);
    }
}
