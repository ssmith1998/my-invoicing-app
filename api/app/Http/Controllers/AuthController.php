<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            return response()->json(['success' => true, 'message' => 'login successful', 'data' => Auth::user()]);
        } else {
            return response()->json(['success' => false, 'message' => 'The credentials entered are invalid']);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
    }
}
