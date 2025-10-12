import { ethers } from "ethers";

export async function handler(event, context) {
  try {
    // Parse request query for player address
    const playerAddress = event.queryStringParameters?.player || "0x0000000000000000000000000000000000000000";

    // MegaETH RPC provider
    const provider = new ethers.JsonRpcProvider("https://carrot.megaeth.com/rpc");

    // Leaderboard contract
    const contractAddress = "0x1C38845ee1240D83B2bec9D5655aaB543fa74b77";
    const abi = [
      "function getScore(address player) view returns (uint256)"
    ];

    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Fetch player's cumulative score
    const score = await contract.getScore(playerAddress);

    return {
      statusCode: 200,
      body: JSON.stringify({ player: playerAddress, score: score.toString() }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}

