const router = require("express").Router();
import data = require("../data/data.json");
import { Request, Response } from "express";
import { menuModel } from "../schema/menuSchema";

type userMenus = {
  _id: string;
  name: string;
  flag: string;
};

type next = {
  page: number;
  limit: number;
};

type Data = {
  userId: number,
  id: number,
  title: string,
  body: string
}


router.get("/posts", (req: Request, res: Response) => {
  const page = parseInt(req.query.page! as string);
  const limit = parseInt(req.query.limit! as string);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results: {
    next: next;
    previous: next;
    results :Data[] 
  } = {
    next: { page: 0, limit: 0 },
    previous: { page: 0, limit: 0 },
    results : [{
      userId : 0,
      id : 0,
      title : '',
      body: ''
    }]
  };  
  if (endIndex < data.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }  
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = data.slice(startIndex, endIndex)
  res.json(results)  
});

router.get("/:role", async (req: Request, res: Response) => {
  const role = req.params.role;
  console.log(role);

  try {
    let allMenus;
    if (role === "admin") {
      allMenus = await menuModel.find({}).exec();
      console.log(allMenus);
    } else {
      allMenus = await menuModel.find({ flag: role }).exec();
    }
    const menus = allMenus;
    res.status(200).json({
      status: "success",
      menus: menus,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      msg: "something went wrong",
    });
  }
});


export { router as menuRouter };
