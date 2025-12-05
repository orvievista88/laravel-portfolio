<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    public function reply(Request $request)
    {
        $message = $request->input('message');

        Log::info('Chatbot input:', ['message' => $message]);

        $cvContext = <<<EOT
You are a helpful AI assistant. If the question is related to the CV of Orvie Vista, use the following data to respond accurately:

Full Name: Orvie Vista
Title: Senior PHP Developer
Location: Taguig City, Philippines
Email: Orvie.vista88@gmail.com
Phone: 09760119998
Experience: 8+ years as a PHP Developer

Frameworks: Laravel, Yii2, CodeIgniter, React.js, Vue.js, Node.js  
Languages: PHP, JavaScript, SQL, VB.NET, C++, Java  
Frontend: HTML, CSS, JavaScript, jQuery, Vue, React.js  
Backend: Laravel, Yii2, CodeIgniter, Node.js  
Tools: Git, Bitbucket, Tortoise SVN, Adobe Photoshop, Sony Vegas, Gimp, MS Office, Selenium  
Integrations: Salesforce, Xero, Zendesk, Zabbix, Symbio, Hubspot, NBN, Trustpilot, Brevo, Google APIs  
Platforms: Shopify, WordPress  
Education:
- BS Information Technology - The Fisher Valley College
- Diploma in IT - STI College  
Hobbies: Travelling, Mountaineering, Watching Movies, Singing, Playing games

Current Jobs:
- Full Stack PHP Developer at Sonicelectronix, Kentucky, USA (2024-09 – Present)
    - Enhanced public and admin panel features.
    - Integrated Google Analytics, Auth, and AI tools.
    - Designed mobile/desktop landing pages with improved UI/UX.
    - Translating Figma Design into web interface.
    - Managed Shopify templates and content.
- Senior PHP Developer (Part Time) at DGTONE Dental Clinic, Quezon City (2022-10 – Present)
    - Built booking system and admin panel with RBAC.
    - Integrated HR, payroll, revenue tracking, and KPI dashboards.
    - Real-time monitoring and financial reporting tools.

Past Experience:
- Mid Level PHP Developer at Hosted Network, NSW, Australia (2018-10 – 2024-08)
    - Led financial reporting system.
    - Integrated Salesforce, Xero, Zendesk, Zabbix, Symbio.
    - Conducted network vulnerability audits and automation.
- Mid Level PHP Developer at Dottystyle Creative, Makati City (2017-09 – 2018-03)
    - Structured data models for frontend performance.
    - Defined startup-friendly operational processes.
    - Maintained SEO-ready WordPress sites.
- Laravel/SQL Developer (Project Based) at Ziosoft Inc. (2017-09 – 2018-03)
    - Extracted/manipulated PBX data for summary reports.
    - Created UI and workflows integrated with PBX system.
- PHP-CodeIgniter/SQL Developer at Londa Online Technologies (2015-11 – 2016-04)
    - Built multi-currency trading platform from scratch.
    - Handled full software lifecycle.
- Analyst/Programmer at Rustans MKTG Corp, Makati City (2015-06 – 2016-04)
    - Generated financial reports using complex SQL.
    - Built internal features for finance workflows.
- System Analyst & IT Instructor at Taguig City University, CASAP, Fisher Valley College (2014-06 – 2015-03)
    - Developed Enrollment System (MIS Dept).
    - Taught programming, networking, IT courses.

If the question is about something else (e.g., coding, fun facts, general knowledge), you can still respond as a helpful AI assistant.
EOT;

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('OPENROUTERAI_API_KEY'),
            'HTTP-Referer' => 'http://localhost', // Required by OpenRouter
            'Content-Type' => 'application/json',
        ])->post('https://openrouter.ai/api/v1/chat/completions', [
            'model' => 'mistralai/mistral-7b-instruct', // or try 'openchat/openchat-3.5-1210'
            'messages' => [
                ['role' => 'system', 'content' => $cvContext],
                ['role' => 'user', 'content' => $message],
            ],
            'temperature' => 0.7,
            'max_tokens' => 700,
        ]);

        if (!$response->successful()) {
            Log::error('OpenRouter API failed', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return response()->json([
                'error' => 'AI service failed to respond.',
                'details' => $response->json(),
            ], 500);
        }

        $data = $response->json();
        $reply = $data['choices'][0]['message']['content'] ?? 'No reply.';

        return response()->json(['reply' => $reply]);
    }
}
