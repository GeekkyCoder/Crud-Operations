const usersDB = require("./users.mongo");

const users = [
  {
    userId: 1,
    fullName: "Faraz Ahmed",
    email: "f@gmail.com",
    profession: "full stack developer",
    contact: "234335435",
  },
];

async function getUsers() {
   return await usersDB.find({});
}

async function saveDocumentsIntoDataBase(users) {
  await usersDB.updateOne(
    {
      userId: users.userId,
    },
    {
      userId: users.userId,
    },
    {
      upsert: true,
    }
  );
}

async function addNewuser(user) {
  const newUser = Object.assign(user, { userId: user.id++ });
  await saveNewUser(newUser);
}

async function saveNewUser(newUser) {
  await usersDB.findOneAndUpdate(
    {
      userId: newUser.userId,
    },
    newUser,
    {
      upsert: true,
    }
  );
}

async function removeUserFromDB(id) {
  await usersDB.deleteOne({userId:id})
}

async function userExistWithId(id){
  return await usersDB.findOne({userId:id})
}

module.exports = {
  users,
  saveDocumentsIntoDataBase,
  getUsers,
  addNewuser,
  userExistWithId,
  removeUserFromDB
};
