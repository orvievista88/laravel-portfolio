<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return view('welcome');
});


Route::resource('posts', PostController::class);

Route::get('/react', function () {
    return view('react');
});

Route::get('/test-gemini', function () {
    $apiKey = env('GEMINI_API_KEY');
    $model = 'gemini-1.5-pro-002';

    if (!$apiKey) {
        return response()->json([
            'error' => 'Gemini API key not found. Check your .env file.'
        ], 400);
    }

    $endpoint = "https://generativelanguage.googleapis.com/v1/models/{$model}:generateContent?key={$apiKey}";

    $payload = [
        'contents' => [
            [
                'parts' => [
                    ['text' => 'What is 1 + 1?']
                ]
            ]
        ]
    ];

    $response = Http::withHeaders([
        'Content-Type' => 'application/json'
    ])->post($endpoint, $payload);

    // Log raw response for debugging
    Log::info('Gemini API Response', [
        'status' => $response->status(),
        'body' => $response->body()
    ]);

    if (!$response->successful()) {
        return response()->json([
            'error' => 'Gemini AI failed to respond.',
            'details' => $response->json()
        ], $response->status());
    }

    $json = $response->json();
    $text = $json['candidates'][0]['content']['parts'][0]['text'] ?? 'No meaningful reply.';

    return response()->json([
        'reply' => $text
    ]);
});



Route::get('/list-gemini-models', function () {
    $apiKey = env('GEMINI_API_KEY');
    $endpoint = "https://generativelanguage.googleapis.com/v1/models?key=$apiKey";

    $response = Http::get($endpoint);
    return $response->json();
});


Route::get('/test-openrouter', function () {
    $apiKey = env('OPENROUTERAI_API_KEY');

    $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . $apiKey,
        'HTTP-Referer' => 'http://localhost', // Required by OpenRouter
        'Content-Type' => 'application/json',
    ])->post('https://openrouter.ai/api/v1/chat/completions', [
        'model' => 'mistralai/mistral-7b-instruct',
        'messages' => [
            ['role' => 'system', 'content' => 'You are a helpful assistant.'],
            ['role' => 'user', 'content' => 'What is 1 + 1?'],
        ],
        'temperature' => 0.7,
        'max_tokens' => 50,
    ]);

    if (!$response->successful()) {
        return response()->json([
            'error' => 'OpenRouter AI failed to respond.',
            'details' => $response->json()
        ], 500);
    }

    return $response->json();
});

Route::post('/contact-message', function (Illuminate\Http\Request $request) {
    \App\Models\ContactMessage::create($request->only('email', 'message'));
    return redirect('/#Contact')->with('success', 'Message sent!');
});
