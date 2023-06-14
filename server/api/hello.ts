export default defineEventHandler(event => {
  const { apiKey, nope } = useRuntimeConfig();
  return {
    message: `Hello, ${apiKey} (${nope})`
  }
})