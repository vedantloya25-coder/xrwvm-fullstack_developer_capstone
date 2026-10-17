# Dealerships Review Portal - Full-Stack Capstone Project

## Project Overview
**Dealerships Review Portal** is a national automotive web application developed as part of the IBM Full-Stack Software Developer Capstone Project. The platform enables users and prospective car buyers across the United States to browse dealerships by state, view branch contact information, inspect certified vehicles and models, read verified customer reviews with AI-powered sentiment analysis, and post their own feedback.

## Architecture & Technology Stack
- **Frontend**: React.js, HTML5, Vanilla CSS3, Bootstrap 5.
- **Backend**: Django 4.x (Python) with RESTful API architecture.
- **Microservices**:
  - **Node.js & Express**: Connects to MongoDB database storing Dealerships and Customer Reviews.
  - **Sentiment Analyzer**: Flask / Python microservice evaluating customer review sentiment (positive, neutral, negative).
- **Databases**: SQLite (Django ORM for Car Makes and Models), MongoDB (Dealerships and Customer Reviews).
- **DevOps & Cloud**: Docker containerization, Kubernetes, GitHub Actions CI/CD pipeline, and IBM Cloud Code Engine deployment.

## Repository Structure
```
xrwvm-fullstack_developer_capstone/
├── server/
│   ├── djangoproj/             # Django project configurations & routing
│   ├── djangoapp/              # Core Django app: models, views, templates & APIs
│   │   ├── models.py           # CarMake and CarModel schemas
│   │   ├── views.py            # REST endpoints (auth, dealers, cars, reviews)
│   │   ├── restapis.py         # Microservice integration handlers
│   │   └── urls.py             # Route definitions
│   ├── database/               # Express microservice & MongoDB data files
│   │   ├── app.js              # Express REST APIs for dealerships & reviews
│   │   ├── dealerships.json    # US Dealership dataset
│   │   └── reviews.json        # Customer reviews dataset
│   └── frontend/               # React & static frontend
│       ├── static/             # Static pages (About.html, Contact.html, Home.html)
│       └── src/components/     # React components (Register, Login, Dealers, Reviews)
└── README.md
```

## Authors & Acknowledgments
- **Author**: Vedant Loya ([@vedantloya25-coder](https://github.com/vedantloya25-coder))
- **Course**: IBM Full-Stack Software Developer Professional Certificate