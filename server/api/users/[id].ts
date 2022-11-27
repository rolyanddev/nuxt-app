export default defineEventHandler(async event => {
  const { id } = getRouterParams(event)

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  if (response.status === 404) {
    throw createError({
      statusCode: 404,
      statusMessage: `User not found by id: ${id}`
    })
  }
  const user = response.json()
  return user
})
