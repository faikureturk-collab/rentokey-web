const UPSTREAM_SIGNUP_ENDPOINT = "https://app.rentokey.com/api/kayit-ol";

type SignupPayload = {
  email?: unknown;
  password?: unknown;
  fullName?: unknown;
};

type UpstreamResponse = {
  ok?: boolean;
  error?: string;
};

export async function POST(request: Request) {
  let payload: SignupPayload;

  try {
    payload = (await request.json()) as SignupPayload;
  } catch {
    return Response.json({ ok: false, error: "Geçersiz kayıt isteği." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const password = typeof payload.password === "string" ? payload.password : "";
  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";

  if (!email || email.length > 254 || !email.includes("@")) {
    return Response.json({ ok: false, error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }

  if (password.length < 8 || password.length > 72) {
    return Response.json({ ok: false, error: "Şifre 8–72 karakter arasında olmalıdır." }, { status: 400 });
  }

  if (fullName.length < 2 || fullName.length > 100) {
    return Response.json({ ok: false, error: "Ad soyad 2–100 karakter arasında olmalıdır." }, { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(UPSTREAM_SIGNUP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, fullName }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    let data: UpstreamResponse = {};

    try {
      data = (await upstreamResponse.json()) as UpstreamResponse;
    } catch {
      // Return a stable public error when the application API has no JSON body.
    }

    if (!upstreamResponse.ok || !data.ok) {
      return Response.json(
        { ok: false, error: data.error ?? "Hesap oluşturulamadı." },
        { status: upstreamResponse.ok ? 400 : upstreamResponse.status },
      );
    }

    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json(
      { ok: false, error: "Kayıt servisine şu anda ulaşılamıyor." },
      { status: 502 },
    );
  }
}
