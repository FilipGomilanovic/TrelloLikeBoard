"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const board_routes_1 = __importDefault(require("./routers/board.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/TrelloLikeBoardDB');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
// app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', router);
router.use('/board', board_routes_1.default);
// app.get("/getAllUsers", (req: express.Request, res: express.Response) =>{
//     User.find({}, (err, users) => {
//         if (err) console.log(err);
//         else res.json(users)
//     })
//  })
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map