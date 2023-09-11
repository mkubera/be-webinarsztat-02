import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

type User = {
  id: number;
  name: string;
};
type Users = User[];

let db: Users = [
  { id: 1, name: "Dominik" },
  { id: 2, name: "Piotr" },
  { id: 3, name: "Robert" },
];

// CRUD

// GET ONE
app.get("/users/:id", (req: Request, res: Response): void => {
  const user: User | undefined = db.find(
    (user) => user.id === Number(req.params.id)
  );

  res.json({ data: user ? user : "No user found.", msg: "OK" });
});

// GET ALL
app.get("/users", (req: Request, res: Response): void => {
  res.json({ data: db, msg: "OK" });
});

// CREATE ONE
app.post("/users", (req: Request, res: Response): void => {
  const body: { name: string } = req.body;

  const newUser: User = {
    id: db.length + 1,
    name: body.name,
  };

  db = [...db, newUser];

  res.json({ data: newUser, msg: "OK" });
});

// UPDATE ONE
app.get("/users/:id", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

// DELETE ONE
app.get("/users/:id", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
