import app from "./app";
import { PORT } from "./util/dotenv";

app.listen( PORT || 8080, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );