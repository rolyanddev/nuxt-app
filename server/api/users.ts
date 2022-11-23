export default defineEventHandler(event => {
  const { name } = getQuery(event)

  return {
    msg: 'List of users ' + (name || '')
  }
})
