import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/test")({
  GET: async () => {
    return {
      message: "API test endpoint is working!",
      timestamp: new Date().toISOString(),
      status: "success",
    };
  },
  POST: async ({ data }) => {
    return {
      message: "POST test endpoint is working!",
      receivedData: data,
      timestamp: new Date().toISOString(),
      status: "success",
    };
  },
});
