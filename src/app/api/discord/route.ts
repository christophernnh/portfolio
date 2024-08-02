import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const userId = searchParams.get('userId');
    const botToken = process.env.BOT_TOKEN;
  
    if (!botToken) {
      console.error('Bot token is not defined');
      return Response.json({message: 'Bot token is not defined'}, {status: 500})
    }
  
    try {
      const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
        headers: {
          Authorization: `Bot ${botToken}`,
          'Content-Type': 'application/json',
        },
      });
      return Response.json(response.data, {status: 200})
    } catch (error) {
      console.error('Error fetching profile:', error);
      return Response.json({message: 'Error fetching profile'}, {status: 500})
    }
}