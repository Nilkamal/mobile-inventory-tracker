import getBrand from "./getBrand";

export default async function searchMobiles({ mobile, storage, ram, brand }) {
  const url = process.env.REACT_APP_SERVICE_URL;

  let query = "?";

  if (mobile) {
    query += `mobile=${mobile}&`;
  }

  if (storage) {
    query += `storage=${storage}&`;
  }

  if (ram) {
    query += `ram=${ram}&`;
  }
  if (brand) {
    query += `brand=${brand}&`;
  }
  const request = await fetch(`${url}/mobiles/${query}`);
  const mobiles = await request.json();
  for (let mobile of mobiles) {
    const getMobileRequest = await getBrand(mobile.brand);
    const { brand } = getMobileRequest;
    mobile.brand = brand;
  }
  return mobiles;
}
