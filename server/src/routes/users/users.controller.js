const {
  users,
  getUsers,
  addNewuser,
  removeUserFromDB,
  userExistWithId,
} = require("../../modal/users.modal");

async function getAllUsers(req, res) {
  return res.status(200).json(await getUsers());
}

let latestUserId = 1;

function getAUser(req, res) {
  const { id } = Number(req.params.id);
  console.log(id);
  const userExist = users.find((user) => user.id === id);
  if (!userExist)
    return res.status(400).json({
      error: "user not found",
    });
  const user = users.filter((user) => user.id !== id);
  res.status(200).json(user);
}

async function postAUser(req, res) {
  const responseUser = req.body;
  users.push(Object.assign(responseUser, { id: latestUserId++ }));
  await addNewuser(responseUser);
  return res.status(200).json(responseUser);
}

async function deleteAUser(req, res) {
  const id = Number(req.params.id);
  const userExist = await userExistWithId(id);
  if (!userExist) return;
  await removeUserFromDB(id);
  return res.status(200).json(userExist)
}

module.exports = {
  getAllUsers,
  getAUser,
  postAUser,
  deleteAUser,
};
