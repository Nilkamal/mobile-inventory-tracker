export default async function getMobileByText(mobile) {
  const url = process.env.REACT_APP_SERVICE_URL;
  const request = await fetch(`${url}/mobiles/?mobile=${mobile}`);
  return await request.json();
}
