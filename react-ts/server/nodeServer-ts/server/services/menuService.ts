import { Request, Response } from "express";
import { menuModel } from "../model/menuModel";

type userMenus = {
  _id: string;
  name: string;
  flag: string;
};

const getMenuData = async (req: Request, res: Response) => {
  const role = req.params.role;
  try {
    let menus;
    if (role === "admin") {
      menus = await menuModel.find({}).exec()!;
    } else {
      menus = await menuModel.find({ flag: role }).exec();
    }
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
};

export { getMenuData};
