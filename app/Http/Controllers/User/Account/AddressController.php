<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\User;
use App\Rules\PhoneNumberValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        $states = Cache::remember('states', now()->addMinutes(7200), function () {
            $states = Http::get('https://raw.githubusercontent.com/hazz1925/malaysian-states/master/states.json')->json();
            // our statesCities variable bellow doesn't have this 3 states, we need to exclude it.
            foreach ($states as $index => $state) {
                if ($state == "Kuala Lumpur" || $state == "Labuan" || $state == "Putrajaya") {
                    unset($states[$index]);
                }
            }
            array_push($states, "Wilayah Persekutuan");
            sort($states);
            return $states;
        });

        $statesCities = Cache::remember('states:cities', now()->addMinutes(7200), function () {
            return [
                "Johor" => [
                    "Johor Bahru",
                    "Tebrau",
                    "Pasir Gudang",
                    "Bukit Indah",
                    "Skudai",
                    "Kluang",
                    "Batu Pahat",
                    "Muar",
                    "Ulu Tiram",
                    "Senai",
                    "Segamat",
                    "Kulai",
                    "Kota Tinggi",
                    "Pontian Kechil",
                    "Tangkak",
                    "Bukit Bakri",
                    "Yong Peng",
                    "Pekan Nenas",
                    "Labis",
                    "Mersing",
                    "Simpang Renggam",
                    "Parit Raja",
                    "Kelapa Sawit",
                    "Buloh Kasap",
                    "Chaah"
                ],
                "Kedah" => [
                    "Sungai Petani",
                    "Alor Setar",
                    "Kulim",
                    "Jitra / Kubang Pasu",
                    "Baling",
                    "Pendang",
                    "Langkawi",
                    "Yan",
                    "Sik",
                    "Kuala Nerang",
                    "Pokok Sena",
                    "Bandar Baharu"
                ],
                "Kelantan" => [
                    "Kota Bharu",
                    "Pangkal Kalong",
                    "Tanah Merah",
                    "Peringat",
                    "Wakaf Baru",
                    "Kadok",
                    "Pasir Mas",
                    "Gua Musang",
                    "Kuala Krai",
                    "Tumpat"
                ],
                "Melaka" => [
                    "Bandaraya Melaka",
                    "Bukit Baru",
                    "Ayer Keroh",
                    "Klebang",
                    "Masjid Tanah",
                    "Sungai Udang",
                    "Batu Berendam",
                    "Alor Gajah",
                    "Bukit Rambai",
                    "Ayer Molek",
                    "Bemban",
                    "Kuala Sungai Baru",
                    "Pulau Sebang",
                    "Jasin"
                ],
                "Negeri Sembilan" => [
                    "Seremban",
                    "Port Dickson",
                    "Nilai",
                    "Bahau",
                    "Tampin",
                    "Kuala Pilah"
                ],
                "Pahang" => [
                    "Kuantan",
                    "Temerloh",
                    "Bentong",
                    "Mentakab",
                    "Raub",
                    "Jerantut",
                    "Pekan",
                    "Kuala Lipis",
                    "Bandar Jengka",
                    "Bukit Tinggi"
                ],
                "Perak" => [
                    "Ipoh",
                    "Taiping",
                    "Sitiawan",
                    "Simpang Empat",
                    "Teluk Intan",
                    "Batu Gajah",
                    "Lumut",
                    "Kampung Koh",
                    "Kuala Kangsar",
                    "Sungai Siput Utara",
                    "Tapah",
                    "Bidor",
                    "Parit Buntar",
                    "Ayer Tawar",
                    "Bagan Serai",
                    "Tanjung Malim",
                    "Lawan Kuda Baharu",
                    "Pantai Remis",
                    "Kampar"
                ],
                "Perlis" => [
                    "Kangar",
                    "Kuala Perlis"
                ],
                "Pulau Pinang" => [
                    "Bukit Mertajam",
                    "Georgetown",
                    "Sungai Ara",
                    "Gelugor",
                    "Ayer Itam",
                    "Butterworth",
                    "Perai",
                    "Nibong Tebal",
                    "Permatang Kucing",
                    "Tanjung Tokong",
                    "Kepala Batas",
                    "Tanjung Bungah",
                    "Juru"
                ],
                "Sabah" => [
                    "Kota Kinabalu",
                    "Sandakan",
                    "Tawau",
                    "Lahad Datu",
                    "Keningau",
                    "Putatan",
                    "Donggongon",
                    "Semporna",
                    "Kudat",
                    "Kunak",
                    "Papar",
                    "Ranau",
                    "Beaufort",
                    "Kinarut",
                    "Kota Belud"
                ],
                "Sarawak" => [
                    "Kuching",
                    "Miri",
                    "Sibu",
                    "Bintulu",
                    "Limbang",
                    "Sarikei",
                    "Sri Aman",
                    "Kapit",
                    "Batu Delapan Bazaar",
                    "Kota Samarahan"
                ],
                "Selangor" => [
                    "Subang Jaya",
                    "Klang",
                    "Ampang Jaya",
                    "Shah Alam",
                    "Petaling Jaya",
                    "Cheras",
                    "Kajang",
                    "Selayang Baru",
                    "Rawang",
                    "Taman Greenwood",
                    "Semenyih",
                    "Banting",
                    "Balakong",
                    "Gombak Setia",
                    "Kuala Selangor",
                    "Serendah",
                    "Bukit Beruntung",
                    "Pengkalan Kundang",
                    "Jenjarom",
                    "Sungai Besar",
                    "Batu Arang",
                    "Tanjung Sepat",
                    "Kuang",
                    "Kuala Kubu Baharu",
                    "Batang Berjuntai",
                    "Bandar Baru Salak Tinggi",
                    "Sekinchan",
                    "Sabak",
                    "Tanjung Karang",
                    "Beranang",
                    "Sungai Pelek",
                    "Sepang",
                ],
                "Terengganu" => [
                    "Kuala Terengganu",
                    "Chukai",
                    "Dungun",
                    "Kerteh",
                    "Kuala Berang",
                    "Marang",
                    "Paka",
                    "Jerteh"
                ],
                "Wilayah Persekutuan" => [
                    "Kuala Lumpur",
                    "Labuan",
                    "Putrajaya"
                ]
            ];
        });


        return Inertia::render('User/Account/Addresses', [
            'addresses' => User::where('id', Auth::id())->first()->addresses, // using lazy load still acceptable because we only accessing one user's addresses
            'states' => $states,
            'statesCities' => $statesCities
        ]);
    }

    public function store(Request $request)
    {
        $this->validateAddress($request);

        $this->setIsDefaultColumnToFalse($request);

        Address::create([
            'user_id' => Auth::user()->id,
            'full_name' => $request->fullName,
            'phone_number' => $request->phoneNumber,
            'state' => $request->state,
            'city' => $request->city,
            'postal_code' => $request->postalCode,
            'street_name' => $request->streetName,
            'is_default' => $request->isDefault
        ]);

        return redirect()->back();
    }

    public function update(Address $address, Request $request)
    {
        $this->validateAddress($request);

        $this->setIsDefaultColumnToFalse($request);

        Address::where('id', $address->id)->update([
            'user_id' => Auth::user()->id,
            'full_name' => $request->fullName,
            'phone_number' => $request->phoneNumber,
            'state' => $request->state,
            'city' => $request->city,
            'postal_code' => $request->postalCode,
            'street_name' => $request->streetName,
            'is_default' => $request->isDefault
        ]);

        return redirect()->back();
    }

    public function destroy(Address $address)
    {
        Address::where('id', $address->id)->delete();
        return redirect()->back();
    }

    protected function validateAddress($request)
    {
        $request->validate([
            'phoneNumber' => ['required', new PhoneNumberValidation, 'integer'],
            'fullName' => ['required'],
            'state' => ['required'],
            'city' => ['required'],
            'postalCode' => ['required', 'integer', 'digits:5', 'postal_code:MY'],
            'streetName' => ['required'],
            'isDefault' => ['boolean']
        ]);
    }

    protected function setIsDefaultColumnToFalse($request)
    {
        if ($request->isDefault == true) {
            Address::where('user_id',  $request->user()->id)
                ->lazyById(10, 'id')
                ->each->update(['is_default' => false]);
        }
    }
}
