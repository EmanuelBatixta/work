# Work API Project

Welcome to the [emanuelbatixta](https://github.com/emanuelbatixta) repository!

## About

This project is a Node.js RESTful API designed for warranty and product management, with authentication and documentation ready for real-world use. The API is modular, scalable, and built with Express, JWT authentication (via cookies), and Swagger for easy testing and integration.

### Main Features
- User registration and authentication (JWT via cookie)
- Product management (CRUD)
- Warranty management (CRUD)
- Modular route and controller structure
- Swagger documentation with ready-to-use schemas for fast API testing
- Validation and error handling

### Project Structure
- `src/routes/` — All API routes (users, products, warranties, authentication, docs)
- `src/controllers/` — Business logic for each resource
- `src/models/` — Data models (MongoDB, Mongoose, or similar)
- `src/utils/` — Helpers, validators, and middleware
- `src/swagger/` — Swagger config and generated docs

### How to Use
1. Clone the repository:
    ```bash
    git clone https://github.com/emanuelbatixta/work.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure your environment variables (see `.env.example` if available).
4. Start the server:
    ```bash
    npm start
    ```
5. Access the API documentation at `/v1/api-docs` (Swagger UI).

### API Documentation
All endpoints are documented using Swagger. Example schemas for Product and Warranty are available for quick testing in the Swagger UI.

### Upcoming Features
- Sales module: The next update will introduce a sales management feature, allowing you to track and manage product sales, integrate with existing products and warranties, and provide analytics.

---

## Contact

- GitHub: [emanuelbatixta](https://github.com/emanuelbatixta)

> ⭐️ Don't forget to star the project if you like it!