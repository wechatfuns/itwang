import { serve } from "https://deno.land/std@0.220.1/http/server.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const targetUrl = "https://vpevlnqjsqir.sealoshzh.site"; // 这里替换为你想要代理的目标服务器

  // 构建新的请求URL
  const proxyUrl = new URL(url.pathname + url.search, targetUrl);

  // 复制原始请求的headers
  const headers = new Headers(req.headers);
  
  try {
    // 发送代理请求
    const response = await fetch(proxyUrl.toString(), {
      method: req.method,
      headers,
      body: req.body,
    });

    // 返回代理响应
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    console.error("代理请求失败:", error);
    return new Response("代理请求失败", { status: 500 });
  }
}

console.log("代理服务器启动在 http://localhost:8000");
await serve(handler, { port: 8000 }); 