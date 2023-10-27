export default async function getMobile(id) {
  const url = process.env.REACT_APP_SERVICE_URL;

  const request = await fetch(`${url}/mobiles/${id}`);
  const mobile = await request.json();
  return mobile;
}
