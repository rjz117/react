const router = require("express").Router();
import {menuModel} from "../schema/menuSchema";

import {Request, Response} from 'express';

type userMenus = {
    _id: string;
    name: string;
    flag: string;
  };

router.get("/:role", async (req:Request, res:Response) => {
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

export { router as menuRouter};
