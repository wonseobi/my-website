<?php

use App\Http\Middleware\whmcs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(whmcs::class)->group(function () {
    Route::get('/user', function (Request $request) {
        $client = \Whmcs::Client();

        $response = $client->GetClients();


        dump($client->GetClients());
        // dd($client->GetClientPassword(['email' => 'desarrollo@certerus.com']));
        // dd($client->GetClientPassword(['email' => 'omar@nubew.com']));

        return $response;
    });
});