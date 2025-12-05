<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-..."
        crossorigin="anonymous" />
    <!-- Font Awesome CDN -->
    <!-- Font Awesome Latest CDN (v6.5.0+) -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>Orvie's Portfolio</title>
    @viteReactRefresh
    @vite('resources/js/app.jsx')

<body>
    <!-- React will be rendered inside this div -->
    <div id="root"></div>

    <script>
        $(document).ready(function() {
            new Splide('#projectSlider', {
                type: 'loop',
                perPage: 1,
                gap: '1rem',
                arrows: true,
                pagination: true,
                start: 0
            }).mount();
        });

        function observeFooterVisibility() {
            const chatButton = document.querySelector('.chat-button-minimized');
            const footer = document.querySelector('footer'); // Adjust selector if needed

            if (!chatButton || !footer) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            chatButton.classList.add('chat-button-margin');
                        } else {
                            chatButton.classList.remove('chat-button-margin');
                        }
                    });
                }, {
                    root: null,
                    threshold: 0.1,
                }
            );

            observer.observe(footer);
        }

        document.addEventListener('DOMContentLoaded', observeFooterVisibility);
    </script>

</body>

</html>