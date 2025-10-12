import { ethers } from "ethers";

export async function handler(event) {
  try {
    const player = event.queryStringParameters?.player || null;

    const provider = new ethers.JsonRpcProvider("https://carrot.megaeth.com/rpc");
    const contractAddress = "0x1C38845ee1240D83B2bec9D5655aaB543fa74b77";
    const abi = [
      "function getPlayerBestScore(address player) view returns (uint256)",
      "function getTopScores(uint256 limit) view returns (tuple(address player,uint256 score,uint256 timestamp)[])"
    ];
    const contract = new ethers.Contract(contractAddress, abi, provider);

    let result;
    if (player) {
      result = await contract.getPlayerBestScore(player);
    } else {
      result = await contract.getTopScores(10); // default top 10
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
