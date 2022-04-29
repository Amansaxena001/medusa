/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getPostUsersMock = () => ({
  user: faker.helpers.randomize([{}, undefined]),
})

export const getGetUsersMock = () => ({
  users: faker.helpers.randomize([
    [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({})),
    undefined,
  ]),
})

export const getDeleteUsersUserMock = () => ({
  id: faker.helpers.randomize([faker.random.word(), undefined]),
  object: faker.helpers.randomize([faker.random.word(), undefined]),
  deleted: faker.helpers.randomize([faker.datatype.boolean(), undefined]),
})

export const getPostUsersUserMock = () => ({
  user: faker.helpers.randomize([{}, undefined]),
})

export const getGetUsersUserMock = () => ({
  user: faker.helpers.randomize([{}, undefined]),
})

export const getPostUsersUserPasswordMock = () => ({
  user: faker.helpers.randomize([{}, undefined]),
})

export const getUsersMSW = () => [
  rest.post("*/admin/users", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostUsersMock())
    )
  }),
  rest.get("*/admin/users", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetUsersMock())
    )
  }),
  rest.delete("*/admin/users/:userid", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getDeleteUsersUserMock())
    )
  }),
  rest.post("*/admin/users/:userid", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostUsersUserMock())
    )
  }),
  rest.get("*/admin/users/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetUsersUserMock())
    )
  }),
  rest.post("*/admin/users/password-token", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostUsersUserPasswordMock())
    )
  }),
]