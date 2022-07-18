import { Request, Response } from "express";
import { getMenusService } from "../service/getMenusService";

type error = {
  status: string;
  msg: string;
};

type userMenus = {
  _id: string;
  name: string;
  flag: string;
};


type MenuResponse = {
  status: "success",
  menus: userMenus[],
}

const getMenus: (
  req: Request,
  res: Response
) => Promise<Response<MenuResponse | error>> = async (
  req: Request,
  res: Response
) => {
  const role = req.params.role;  
  const response = await getMenusService(role);
  if (response === null) {
    return res.status(400).send({
      status: "fail",
      msg: "something went wrong.",
    });
  } else {
    return res.status(200).send({
      status: "success",
      menus: response,
    });
  }
};

export { getMenus };
