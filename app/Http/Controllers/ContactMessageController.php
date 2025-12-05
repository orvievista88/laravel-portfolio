<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactMessage;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        ContactMessage::create($request->only('email', 'message'));

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}
