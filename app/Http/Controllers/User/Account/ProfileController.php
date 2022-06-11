<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Rules\PhoneNumberValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Profile');
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => ['required', 'max:50'],
            'newProfileImageFile' => ['file', 'image', 'nullable'],
            'phoneNumber' => ['nullable', new PhoneNumberValidation, 'integer', 'unique:users,phone_number,' . $user->id],
            'dateOfBirth' => ['date', 'nullable'],
        ]);

        $user->update([
            'name' => $request->name,
            'profile_image_url' => $request->hasFile('newProfileImageFile') ?
                $this->updateNewProfileImage($request, $user->profile_image_url) : 
                ($request->profileImageUrl ?
                    $user->profile_image_url : 
                    $this->removeRecentProfileImage($user->profile_image_url)
                ),
            'phone_number' => $request->phoneNumber,
            'gender' => $request->gender,
            'date_of_birth' => $request->dateOfBirth ? Carbon::parse($request->dateOfBirth)->format('Y-m-d') : null
        ]);

        return redirect()->back();
    }

    protected function updateNewProfileImage($request, $oldProfileImageUrl)
    {
        $this->removeRecentProfileImage($oldProfileImageUrl);

        $newProfileImagePath = $request->file('newProfileImageFile')
            ->store('user/profile-image', 'public');

        return asset('storage/' . $newProfileImagePath);
    }

    protected function removeRecentProfileImage($oldProfileImageUrl)
    {
        if ($oldProfileImageUrl) {
            $contains = Str::contains($oldProfileImageUrl, 'arm-commerce');
            
            if ($contains) {
                $path = str_replace(asset('storage/'), '', $oldProfileImageUrl);
                Storage::disk('public')->delete($path);
            }

            return null;
        }
    }
}
