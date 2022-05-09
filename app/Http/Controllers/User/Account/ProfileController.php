<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use League\CommonMark\Extension\CommonMark\Node\Inline\Strong;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Profile');
    }

    public function update(Request $request)
    {        
        $request->validate([
            'name' => ['required', 'max:50'],
            'newProfileImageFile' => ['file', 'image', 'nullable'],
            'phoneNumber' => ['numeric', 'nullable'],
            'dateOfBirth' => ['date', 'nullable'],
        ]);

        $user = Auth::user();

        $user->update([
            'name' => $request->name,
            'profile_image_url' => $request->hasFile('newProfileImageFile') ?
                $this->updateNewProfileImageUrl($request, $user->profile_image_url) :
                $user->profile_image_url,
            'phone_number' => substr($request->phoneNumber, 2),
            'gender' => $request->gender,
            'date_of_birth' => Carbon::parse($request->dateOfBirth)->format('Y-m-d')
        ]);

        return redirect()->back();
    }

    protected function updateNewProfileImageUrl($request, $oldProfileImageUrl)
    {
        if ($oldProfileImageUrl) {
            $contains = Str::contains($oldProfileImageUrl, 'arm-commerce');
            if ($contains) {
                $path = str_replace(asset('storage/'), '', $oldProfileImageUrl);
                Storage::disk('public')->delete($path);
            }
        }

        $newProfileImagePath = $request->file('newProfileImageFile')
            ->store('user/profile-image', 'public');

        return asset('storage/' . $newProfileImagePath);
    }
}
