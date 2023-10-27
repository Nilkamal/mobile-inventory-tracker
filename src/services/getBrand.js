export default async function getBrand(id) {
  const url = process.env.REACT_APP_SERVICE_URL;
  const request = await fetch(`${url}/brands/${id}`);
  const brand = await request.json();
  return brand;
}
