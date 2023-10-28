import express from "express";
import path from "path";
import { players } from "./utils/players";
import { logger } from "./utils/logger";
import { authorize } from "./auth/auth";
import morgan from 'morgan';

// req => middleware => res
const app = express();

// to setup middleware and static
// app.use(express.static('./public'));
// app.use(morgan('tiny'));

// app.get('/',(req:any,res:any)=>{
//     res.sendFile(path.resolve(__dirname,'./public/index.html'));
// })

app.use([authorize,logger])

app.get('/', logger, (req: any, res: any) => {
    res.send(`<h1>All Top <a href="/api/players">Players :</a></h1>`);
})

app.get("/api/players", [logger, authorize], (req: any, res: any) => {
    const allP = players.map((player: any) => {
        const { name, position, country, club, age } = player;
        return { name, position, country, club, age };
    })
    res.json(allP);
})

app.get("/api/players/:playerId", (req: any, res: any) => {
    console.log(req.user);
    const singlePlayer = players.find((player) => player.id === Number(req.params.playerId))
    if (singlePlayer) {
        res.json(singlePlayer);
    } else {
        res.status(404).send("Product not found")
    }
})

// demo_url: http://localhost:5000/api/query?search=P
app.get("/api/query", (req: any, res: any) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedPlayers = [...players];
    if (search) {
        sortedPlayers = players.filter((player: any) => {
            console.log(player.name);
            return player.name.startsWith(search)
        })
    }
    if (limit) {
        sortedPlayers = players.slice(0, Number(limit))
    }
    if (sortedPlayers.length < 1) {
        return res.status(200).json({ status: true, data: sortedPlayers })
    }
    res.status(200).json(sortedPlayers);
})




app.get('/about', (req: any, res: any) => {
    res.send("Aboit ")
})

app.all('*', (req: any, res: any) => {
    res.send(`<h1 style="color:blue" >Wrong Page!!!</h1>`)
})

app.listen(5000, () => {
    console.log("I'm listening Thoroughly");
})
