"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const cities_1 = __importDefault(require("./routes/cities"));
const departments_1 = __importDefault(require("./routes/departments"));
const regions_1 = __importDefault(require("./routes/regions"));
const demography_1 = __importDefault(require("./routes/demography"));
const politic_1 = __importDefault(require("./routes/politic"));
const images_1 = __importDefault(require("./routes/images"));
const religion_1 = __importDefault(require("./routes/religion"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('tiny'));
app.use('/docs', swagger_ui_express_1.default.serve);
app.use('/cities', cities_1.default);
app.use('/departments', departments_1.default);
app.use('/regions', regions_1.default);
app.use('/demography', demography_1.default);
app.use('/politic', politic_1.default);
app.use('/images', images_1.default);
app.use('/religion', religion_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send({
        message: 'Villes de France API',
    });
}));
app.get('/docs', swagger_ui_express_1.default.setup(swagger_json_1.default));
try {
    app.listen(port, () => {
        console.log(`Connected successfully on port ${port}`);
    });
}
catch (error) {
    throw new Error('error');
}
