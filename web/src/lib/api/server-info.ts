// Hardcoded server info so frontend works on Vercel
export async function getServerInfo() {
  return {
    turnstileSitekey: "0x4AAAAAAB3mhnXbqVWC5oEg", // your Cloudflare sitekey
  };
}
