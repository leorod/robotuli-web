export class AuthService {
  getOAuthUrl(): string {
    const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI;
    const scope = import.meta.env.VITE_DISCORD_SCOPE;
    const oauthUrl = import.meta.env.VITE_DISCORD_OAUTH_URL;

    return `${oauthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
  }

  async fetchDiscordUser(token: string) {
    const response = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  }

  async exchangeCodeForToken(code: string) {
    const tokenUrl = import.meta.env.VITE_DISCORD_TOKEN_URL;
    const params = new URLSearchParams();
    
    params.append('client_id', import.meta.env.VITE_DISCORD_CLIENT_ID);
    params.append('client_secret', import.meta.env.VITE_DISCORD_CLIENT_SECRET); // Agregarlo acá
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', import.meta.env.VITE_DISCORD_REDIRECT_URI);

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    console.log(response)

    if (!response.ok) {
      throw new Error('Token exchange failed');
    }

    const data = await response.json();
    return data.access_token;
  }
}