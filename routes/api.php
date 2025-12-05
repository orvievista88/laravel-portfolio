<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatbotController;

Route::post('/chatbot', [ChatbotController::class, 'reply']);

Route::get('/version', function () {
    return response()->json([
        'laravel' => app()->version(),
    ]);
});