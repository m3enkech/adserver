<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'companyName' => 'required|string|max:255',
            'managerName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:255',
            'mobileNumber' => 'string|max:255',
            'accountType' => 'string|max:255',
            'address' => 'required|string|max:255',
            'secteurActivite' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',

        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'companyName' => $data['companyName'],
            'managerName' => $data['managerName'],
            'phoneNumber' => $data['phoneNumber'],
            'mobileNumber' => $data['mobileNumber'],
            'accountType' => $data['accountType'],
            'address' => $data['address'],
            'city' => $data['city'],
            'secteurActivite' => $data['secteurActivite'],
            'email' => $data['email'],
            'secteurActivite' => $data['secteurActivite'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
