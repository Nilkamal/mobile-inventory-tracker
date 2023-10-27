import getBrand from "./getBrand";

export default async function getMobiles() {
  const url = process.env.REACT_APP_SERVICE_URL;
  const request = await fetch(`${url}/mobiles`);
  const mobiles = await request.json();
  const filteredResult = mobiles.filter((m) => m.quantity > 0);
  for (let mobile of filteredResult) {
    const getMobileRequest = await getBrand(mobile.brand);
    const { brand } = getMobileRequest;
    mobile.brand = brand;
  }
  return filteredResult;
}
