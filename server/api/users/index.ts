export default defineEventHandler(async event => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = response.json()
  return users
})
