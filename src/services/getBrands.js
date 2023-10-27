export default async function getBrands() {
  const url = process.env.REACT_APP_SERVICE_URL;
  const request = await fetch(`${url}/brands`);
  const brands = await request.json();
  return brands;
}
