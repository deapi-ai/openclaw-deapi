# deAPI for OpenClaw

Adds [deAPI](https://deapi.ai) to [OpenClaw](https://github.com/openclaw/openclaw): image, video, speech and music generation, transcription of files and YouTube, TikTok, X, Twitch and Kick links, video description and OCR.

It contains:

- `openclaw.plugin.json`: deAPI's hosted MCP server (`https://mcp.deapi.ai/mcp`) as `deapi`, authenticated with `DEAPI_API_KEY`;
- `skills/deapi`: when to use which deAPI tool, checking prices before long jobs, not guessing model names.

## Install

1. Create an API key at [app.deapi.ai/settings/api-keys](https://app.deapi.ai/settings/api-keys) and set `DEAPI_API_KEY` in the Gateway environment.
2. Install the plugin from ClawHub (`deapi-ai`), or from this repository:

   ```bash
   openclaw plugins install https://github.com/deapi-ai/openclaw-deapi
   ```

3. Start a new session and try: *"Transcribe https://www.youtube.com/watch?v=... and summarise it"*.

Calls may wait up to 15 minutes, which covers video generation and long transcriptions. An `mcp.servers.deapi` entry in your OpenClaw config replaces the plugin's server definition.

## Notes

- Jobs are paid from your deAPI balance. Every generation tool has a `*_price` twin that returns the cost without running the job.
- deAPI filters NSFW content. A rejected prompt comes back as an error.
- Requests carry an `X-Deapi-Source: openclaw` header so deAPI can see traffic from this plugin. Nothing about you or your prompts is added.

## License

MIT
