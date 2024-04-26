import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
