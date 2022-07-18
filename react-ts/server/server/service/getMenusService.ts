import { menuModel } from "../model/menuModel";
import { ROLE } from "../constants";

type userMenus = {
  _id: string;
  name: string;
  flag: string;
};

const getMenusService: (role: string) => Promise<null|userMenus[]> = async(role) => {
  try {
    let menus: userMenus[];
    if (role === ROLE.ADMIN) {
      menus = await menuModel.find<userMenus>({}).exec()!;
    } else {
      menus = await menuModel.find<userMenus>({ flag: role }).exec();
    }
    return menus;
  } catch (error) {
    return null;
  }
};

export {getMenusService}