<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;  
use App\Http\Controllers\AuthController;  


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::resource('products',ProductController::class);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::post('/register',[AuthController::class,'register']);


Route::post('/login',[AuthController::class,'login']);
Route::group(['middleware'=>'auth:sanctum'],function(){
          Route::get('/Profile',[AuthController::class,'Profile']);
        //  Route::post('/store',[ProductController::class,'store']);
        //  Route::post('/logout',[AuthController::class,'logout']);
      
     });


