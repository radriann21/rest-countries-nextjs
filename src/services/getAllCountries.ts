export const getAllCountries = async (): Promise<Countries> => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all")
    if (!res.ok) {
      console.log('error')
    }
    const data:Countries = await res.json()
    if (!Array.isArray(data)) {
      console.log('error')
    }
    return data
  } catch(err) {
    if (err instanceof Error) {
      console.log('error')
    }
  }
  throw new Error('error')
}