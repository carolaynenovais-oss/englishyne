// Englishyne: guarda e devolve o progresso de cada pessoa logada (Netlify Identity + Netlify Blobs).
import { getStore, connectLambda } from "@netlify/blobs";

const json = (statusCode, data) => ({
  statusCode,
  headers: { "content-type": "application/json", "cache-control": "no-store" },
  body: JSON.stringify(data),
});

export const handler = async (event, context) => {
  const user = context.clientContext && context.clientContext.user;
  if (!user || !user.sub) return json(401, { error: "Faça login para continuar." });

  connectLambda(event);
  const store = getStore("englishyne-progress");
  const key = "user-" + user.sub;

  if (event.httpMethod === "GET") {
    const data = await store.get(key, { type: "json" });
    return json(200, data || null);
  }

  if (event.httpMethod === "PUT") {
    let body;
    try {
      const raw = event.isBase64Encoded ? Buffer.from(event.body || "", "base64").toString("utf8") : event.body || "";
      body = JSON.parse(raw);
    } catch {
      return json(400, { error: "Dados inválidos." });
    }
    if (!body || typeof body.state !== "string" || body.state.length > 3000000) {
      return json(400, { error: "Dados inválidos." });
    }
    await store.setJSON(key, { v: 1, updatedAt: Number(body.updatedAt) || Date.now(), state: body.state });
    return json(200, { ok: true });
  }

  return json(405, { error: "Método não permitido." });
};
