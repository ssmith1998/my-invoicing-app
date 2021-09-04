<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'email' => 'required',
            'password' => 'required',
        ];
        $this->validate($request, $rules);

        $data = $request->input();


        $foundUser = User::where(['email' => $request->email])->first();

        if ($foundUser) {
            return response()->json(['success' => false, 'message' => 'User already exists with this email']);
        } else {
            $data['password'] = bcrypt($request->input('password'));
            $newUser = User::create($data);

            return response()->json(['success' => true, 'message' => 'User registered successfully', 'data' => $newUser]);
        }
    }
}
