import getMobileByText from "./getMobileByText";

export default async function saveMobile(mobile) {
  const url = process.env.REACT_APP_SERVICE_URL;
  const method = mobile.id > 0 ? "put" : "post";
  const requestUrl =
    mobile.id > 0 ? `${url}/mobiles/${mobile.id}` : `${url}/mobiles`;
  debugger;
  const findMobiles = await getMobileByText(mobile.mobile);

  const updateMobile = findMobiles.find(
    (m) => m.ram === mobile.ram && m.storage === mobile.storage
  );
  mobile.quantity =
    updateMobile && mobile.id === 0
      ? updateMobile.quantity + mobile.quantity
      : mobile.quantity;

  // create new mobile
  const request = await fetch(requestUrl, {
    method,
    body: JSON.stringify(mobile),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();
  return response;
}
