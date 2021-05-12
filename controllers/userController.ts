import UserService from "../services/UserService.ts"

const userService = new UserService()

// @desc Get all users
// @route GET /api/v1/users
export const getUsers = async ({ response }: {response: any}) => {
  response.body = await userService.getUsers()
}

// @desc Add a user
// @route POST /api/v1/users
export const createUser = async ({ request, response} : { request: any, response: any}) => {
  if(!request.hasBody) {
    response.status = 400
    response.body = { msg: "Invalid data"}
    return
  }

  const { value: {name, age}} = await request.body()

  const userId = await userService.createUser({name, age})

  response.body = {msg: 'user created', userId}
}
