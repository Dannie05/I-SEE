import https from "https";
export const paymentInit = (email, amount) => {
  const params = JSON.stringify({
    email: email,
    amount: amount * 100,
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: "sk_test_ac7583cfe06dc699098616c5f64624910f8fb58e",
      "Content-Type": "application/json",
    },
  };

  const req = https
    .request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(JSON.parse(data));
      });
    })
    .on("error", (error) => {
      console.error(error);
    });

  req.write(params);
  req.end();
};
