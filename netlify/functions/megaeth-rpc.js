// netlify/functions/megaeth-rpc.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const player = event.queryStringParameters?.player || "";

    const rpcUrl = "https://carrot.megaeth.com/rpc";

    const payload = {
      jsonrpc: "2.0",
      method: "getTopScores",
      params: [1000], // top 1000 scores
      id: 1,
    };

    const res = await fetch(rpcUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`RPC error: ${res.statusText}`);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.result || []),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
      headers: { "Content-Type": "application/json" },
    };
  }
};
