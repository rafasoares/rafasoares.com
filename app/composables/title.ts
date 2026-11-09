export const useTitle = (title: string, description?: string) => {
  useSeoMeta({
    title: `${title} - Rafael Soares`,
    description,
    ogTitle: `${title} - Rafael Soares`,
    ogDescription: description,
  })
}
