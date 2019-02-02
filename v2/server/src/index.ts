import {bootstrap} from "vesper";
import { IbizaVersion } from "./entity/IbizaVersion";
import { IbizaVersionController } from "./controller/IbizaVersionController";
import { FusionVersion } from "./entity/FusionVersion";
import { DevOpsData } from "./entity/DevOpsData";
import { GithubCommit} from "./entity/GithubCommits";
import { FusionVersionController } from "./controller/FusionVersionController";
import "reflect-metadata";
import * as fs from 'fs';
if(!fs.existsSync('./ormconfig.json')){
    console.log('creating ormconfig.json')
    fs.writeFileSync('./ormconfig.json',`{
        "type": "postgres",
        "host": "${process.env.POSTGRES_ENDPOINT}",
        "port": 5432,
        "username":"${process.env.POSTGRES_USERNAME}", 
        "password": "${process.env.POSTGRES_PASSWORD}",
        "database": "${process.env.POSTGRES_DB}",
        "entities": ["src/**/**.entity{.ts,.js}"],
        "ssl": true,
        "synchronize": true
      }`, {encoding:"UTF-8"})
}
bootstrap({
    port: 3001,
    controllers: [
        IbizaVersionController,
        FusionVersionController
    ],
    entities: [
        IbizaVersion,
        FusionVersion,
        DevOpsData,
        GithubCommit
    ],
    schemas: [__dirname + "/schema/**/*.graphql"],

}).then(() => {
    console.log("Your app is up and running on http://localhost:3001 . " +
        "You can use Playground in development mode on http://localhost:3001/playground");

}).catch(error => {
    console.error(error.stack ? error.stack : error);
});