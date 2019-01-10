<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::resource('clients', 'ClientController');
Route::put('buses/display', 'BusController@displayList');
Route::get('buses/display/{id}', 'BusController@displayList');
Route::resource('buses', 'BusController');

Route::resource('users', 'UserController');

Route::resource('ads', 'AdController');


Route::get('events/create_one', 'EventController@createOne');

Route::resource('events', 'EventController');

Route::resource('roles', 'RoleController');

Route::resource('villes', 'VilleController');

Route::resource('eventBuses', 'EventBusController');










Route::resource('secteurs', 'SecteurController');