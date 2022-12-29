import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const {
} = process.env;

const  start = async () => {

    try {
        const PORT = process.env.SERVER_PORT;
        const app = await  NestFactory.create(AppModule)
        app.enableCors()
        await app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`))

    }catch (e) {
        console.log(e)
    }
}

start()