import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

// Everything lives in openclaw.plugin.json (MCP server) and skills/ (the deapi skill).
export default definePluginEntry({
  id: "deapi",
  name: "deAPI",
  description: "deAPI MCP server and skill.",
  register: () => {},
});
