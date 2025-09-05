import api from "./api";

// Fetch homepage content
export const getHomepage = async (country: string, lang: string) => {
  const { data } = await api.get(`/pages?where[slug][equals]=home&locale=${lang}`);
  return data.docs?.[0] || null;
};

// Fetch all sectors
export const getSectors = async (lang: string) => {
  const { data } = await api.get(`/sectors?locale=${lang}`);
  return data.docs || [];
};

// Fetch a single sector
export const getSector = async (slug: string, lang: string) => {
  const { data } = await api.get(`/sectors?where[slug][equals]=${slug}&locale=${lang}`);
  return data.docs?.[0] || null;
};

// Fetch products by sector
export const getProductsBySector = async (sectorId: string, lang: string) => {
  const { data } = await api.get(`/products?where[sector][equals]=${sectorId}&locale=${lang}`);
  return data.docs || [];
};
