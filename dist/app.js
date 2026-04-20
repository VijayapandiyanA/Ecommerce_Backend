"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const morganStreams_1 = __importDefault(require("./utils/morganStreams"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const CartRoutes_1 = __importDefault(require("./routes/CartRoutes"));
const OrderRoutes_1 = __importDefault(require("./routes/OrderRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./config/swagger"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined", { stream: morganStreams_1.default }));
app.use(express_1.default.json());
app.use('/api/users', UserRoutes_1.default);
app.use('/api/products', ProductRoutes_1.default);
app.use('/api/carts', CartRoutes_1.default);
app.use('/api/orders', OrderRoutes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use(errorMiddleware_1.default);
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the User API' });
});
const PORT = process.env.PORT || 5000;
const ConnectDB = async () => {
    try {
        await db_1.sequelize.authenticate();
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Unable to conect to the database :", error);
    }
};
ConnectDB();
