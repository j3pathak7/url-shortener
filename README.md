# URL Shortener

URL Shortener is a web application built using Django and Next.js. It allows users to shorten long URLs into shorter, more manageable links,
customize their shortened links with branding or custom aliases, and track link analytics.

## Overview

URL Shortener simplifies the process of sharing long URLs by providing users with shortened links. It includes features such as branded links,
QR code generation, link analytics, user authentication, and more.

## Technologies Used

- Django: Backend framework for handling URL shortening logic and user management.
- Next.js: Frontend framework for building fast, modern web applications.
- Render: Hosting platform for deploying the Django backend.
- Vercel: Hosting platform for deploying the Next.js frontend.

## Features

- URL Shortening: Shorten long URLs into shorter, more manageable links.
- Branded Links: Customize shortened links with branding or custom aliases.
- QR Code Generation: Generate QR codes for shortened URLs.
- Link Analytics: Track the number of clicks, geographic locations, and other metrics for shortened links.
- User Authentication: Allow users to manage their shortened links and view analytics through user authentication.
- Custom URL Slug: Enable users to create custom slugs for their shortened URLs.
- Expiration Dates: Allow users to set expiration dates for shortened links.
- RESTful API: Provide a RESTful API for programmatically creating and managing shortened links.
- Social Media Integration: Integrate with social media platforms to easily share shortened links.
- Cross-Platform Support: Ensure seamless functionality across different devices and platforms.

## Getting Started

To get started with URL Shortener, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
```

2. Install dependencies:

```bash
cd url-shortener
pip install -r requirements.txt
cd frontend
npm install
```

3. Set up environment variables:

Create a \`.env\` file in the \`frontend\` directory and add your environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

4. Run the Django server:

```bash
python manage.py runserver
```

5. Run the Next.js frontend:

```bash
cd frontend
npm run dev
```

6. Open your web browser and navigate to \`http://localhost:3000\` to view the app.

## Deployment

### Deploying on Render

1. Sign up for a Render account if you haven't already.
2. Follow the Render Django guide to deploy your Django backend.
3. Follow the Render Next.js guide to deploy your Next.js frontend.

### Deploying on Vercel

1. Sign up for a Vercel account if you haven't already.
2. Follow the Vercel Next.js guide to deploy your Next.js frontend.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
