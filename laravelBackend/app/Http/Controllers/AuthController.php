<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     *
     *Returns the profile information of the currently authenticated user.
     *@function
     *@returns {Object} - The profile information of the authenticated user.
     *@throws {Error} - Throws an error if the user is not authenticated.
     */
    public function Profile()
    {
        return auth()->user();
    }

    /**
     *
     *Registers a new user with the given information.
     *@function
     *@async
     *@param {Object} request - The HTTP request object containing the user information.
     *@param {string} request.name - The name of the user.
     *@param {string} request.email - The email of the user.
     *@param {string} request.passwosrd - The password of the user.
     *@param {string} request.password_confirmation - The confirmation of the user's password.
     *@return {Promise<Object>} - The HTTP response containing the newly created user and token.
     *@throws {Error} - Throws an error if any of the required fields are missing or the email is already taken.
     */
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);
        $token = $user->createToken('myapptoken')->plainTextToken;


        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([

            'email' => 'required|string',
            'password' => 'required|string'
        ]);


        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $user->tokens()->delete();
        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token,
            'status' => 'ok'
        ];
        return response($response, 201);
    }


    //$token = $user->createToken('myapptoken')->plainTextToken;

    //dd($user->tokens()->count());
    // $response=[
    //     'user'=>$user,
    //     'token'=>$token,
    //     'status'=>'ok'
    // ];
    // return response($response,201);


    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Logged out'
        ];
    }
}
