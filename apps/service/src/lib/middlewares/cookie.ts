import cookieParser from "cookie-parser";

import environment from "../../environment";

const { cookieSecret } = environment.app;

const cookie = cookieParser(cookieSecret);

export default cookie;
