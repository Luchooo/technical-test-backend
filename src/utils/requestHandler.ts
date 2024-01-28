export const requestHandler = async <T>(url: URL): Promise<T> => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await (res.json() as Promise<T>)
  } catch (error) {
    console.error(error)
    throw error
  }
}
