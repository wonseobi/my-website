<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class whmcs
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $client = \Whmcs::Servers();

        $health = $client->GetHealthStatus();

        return $health['result'] == "success" ? $next($request) : response()->json([
            'status' => 'error',
            'message' => 'WHMCS is not available'
        ], 500);
    }
}
