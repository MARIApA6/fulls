import { app } from "./app.mjs";

import fs from 'fs';

app.get("/files", (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        res.send(files);
    });
});

