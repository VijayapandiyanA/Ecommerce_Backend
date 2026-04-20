import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API Documentation",
      version: "1.0.0",
      description: "Swagger documentation for Node.js + Express ecommerce backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        RegisterRequest: {
  type: "object",
  required: ["name", "email", "password"],
  properties: {
    name: {
      type: "string",
      example: "Vijay",
    },
    email: {
      type: "string",
      example: "vijay@gmail.com",
    },
    password: {
      type: "string",
      example: "123456",
    },
  },
},

LoginRequest: {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
      example: "vijay@gmail.com",
    },
    password: {
      type: "string",
      example: "123456",
    },
  },
},

LoginResponse: {
  type: "object",
  properties: {
    message: {
      type: "string",
      example: "Login successful",
    },
    token: {
      type: "string",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.token",
    },
    user: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          example: 1,
        },
        name: {
          type: "string",
          example: "Vijay",
        },
        email: {
          type: "string",
          example: "vijay@gmail.com",
        },
        role: {
          type: "string",
          example: "user",
        },
      },
    },
  },
},
        Product: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Nike Air Max",
            },
            description: {
              type: "string",
              example: "Comfortable running shoes",
            },
            price: {
              type: "number",
              example: 2999,
            },
            stock: {
              type: "integer",
              example: 10,
            },
            category: {
              type: "string",
              example: "Running",
            },
            imageUrl: {
              type: "string",
              example: "https://example.com/images/nike-air-max.jpg",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
          },
        },

        ProductInput: {
          type: "object",
          required: ["name", "description", "price", "stock", "category", "imageUrl"],
          properties: {
            name: {
              type: "string",
              example: "Nike Air Max",
            },
            description: {
              type: "string",
              example: "Comfortable running shoes",
            },
            price: {
              type: "number",
              example: 2999,
            },
            stock: {
              type: "integer",
              example: 10,
            },
            category: {
              type: "string",
              example: "Running",
            },
            imageUrl: {
              type: "string",
              example: "https://example.com/images/nike-air-max.jpg",
            },
          },
        },

        ProductUpdateInput: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Nike Air Max Updated",
            },
            description: {
              type: "string",
              example: "Updated running shoe description",
            },
            price: {
              type: "number",
              example: 3499,
            },
            stock: {
              type: "integer",
              example: 15,
            },
            category: {
              type: "string",
              example: "Sports",
            },
            imageUrl: {
              type: "string",
              example: "https://example.com/images/nike-air-max-new.jpg",
            },
          },
        },

        CartItem: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            userId: {
              type: "integer",
              example: 5,
            },
            productId: {
              type: "integer",
              example: 2,
            },
            quantity: {
              type: "integer",
              example: 3,
            },
            product: {
              $ref: "#/components/schemas/Product",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
          },
        },

        AddToCartInput: {
          type: "object",
          required: ["productId", "quantity"],
          properties: {
            productId: {
              type: "integer",
              example: 2,
            },
            quantity: {
              type: "integer",
              example: 1,
            },
          },
        },

        UpdateCartInput: {
          type: "object",
          required: ["productId", "quantity"],
          properties: {
            productId: {
              type: "integer",
              example: 2,
            },
            quantity: {
              type: "integer",
              example: 4,
            },
          },
        },

        RemoveFromCartInput: {
          type: "object",
          required: ["productId"],
          properties: {
            productId: {
              type: "integer",
              example: 2,
            },
          },
        },

        Order: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            userId: {
              type: "integer",
              example: 5,
            },
            totalAmount: {
              type: "number",
              example: 5999,
            },
            status: {
              type: "string",
              example: "pending",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
          },
        },

        OrderItem: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            orderId: {
              type: "integer",
              example: 1,
            },
            productId: {
              type: "integer",
              example: 2,
            },
            quantity: {
              type: "integer",
              example: 2,
            },
            price: {
              type: "number",
              example: 2999,
            },
            product: {
              $ref: "#/components/schemas/Product",
            },
          },
        },

        OrderWithItems: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            userId: {
              type: "integer",
              example: 5,
            },
            totalAmount: {
              type: "number",
              example: 5999,
            },
            status: {
              type: "string",
              example: "completed",
            },
            items: {
              type: "array",
              items: {
                $ref: "#/components/schemas/OrderItem",
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-17T10:00:00.000Z",
            },
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Something went wrong",
            },
          },
        },
      },
    },
  },

  apis: [
    "./src/routes/*.ts",
    "./src/modules/**/*.ts",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;