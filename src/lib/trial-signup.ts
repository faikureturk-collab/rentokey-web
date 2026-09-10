const TRIAL_SIGNUP_ENDPOINT = "/api/kayit-ol";

type TrialSignupInput = {
  email: string;
  password: string;
  fullName: string;
};

type TrialSignupResponse = {
  ok?: boolean;
  error?: string;
};

export async function createTrialAccount(input: TrialSignupInput) {
  let response: Response;

  try {
    response = await fetch(TRIAL_SIGNUP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  } catch {
    throw new Error("network_error");
  }

  let data: TrialSignupResponse = {};

  try {
    data = (await response.json()) as TrialSignupResponse;
  } catch {
    // The status code still determines failure when the upstream response has no JSON body.
  }

  if (!response.ok || !data.ok) {
    throw new Error(data.error ?? "Hesap oluşturulamadı.");
  }
}

export function getTrialSignupErrorMessage(error: unknown, locale: "tr" | "en" = "tr") {
  const message = error instanceof Error ? error.message.trim() : "";
  const normalizedMessage = message.toLocaleLowerCase("en-US");
  if (locale === "en") {
    if (message === "network_error") return "The account service is unavailable. Check your connection and try again.";
    if (/already registered|already exists|user exists/.test(normalizedMessage)) return "An account already exists for this email. Sign in or reset your password in the app.";
    if (/weak password|password should|password must/.test(normalizedMessage)) return "Please choose a stronger password.";
    if (/invalid email|email address is invalid/.test(normalizedMessage)) return "Enter a valid work email address.";
    if (/rate limit|too many request/.test(normalizedMessage)) return "Too many attempts. Please wait a few minutes and try again.";
    return "Your account could not be created. Check your details and try again, or contact support.";
  }

  if (message === "network_error") {
    return "Hesap oluşturma servisine şu anda ulaşılamıyor. Lütfen bağlantınızı kontrol edip yeniden deneyin.";
  }

  if (
    normalizedMessage.includes("already registered") ||
    normalizedMessage.includes("already exists") ||
    normalizedMessage.includes("user exists")
  ) {
    return "Bu e-posta adresiyle daha önce bir hesap oluşturulmuş. Giriş yapabilir veya şifrenizi sıfırlayabilirsiniz.";
  }

  if (
    normalizedMessage.includes("weak password") ||
    normalizedMessage.includes("password should") ||
    normalizedMessage.includes("password must")
  ) {
    return "Şifreniz yeterince güçlü değil. Daha uzun ve tahmin edilmesi zor bir şifre belirleyin.";
  }

  if (
    normalizedMessage.includes("invalid email") ||
    normalizedMessage.includes("email address is invalid")
  ) {
    return "Geçerli bir iş e-posta adresi girin.";
  }

  if (
    normalizedMessage.includes("rate limit") ||
    normalizedMessage.includes("too many request")
  ) {
    return "Kısa süre içinde çok fazla deneme yapıldı. Lütfen birkaç dakika bekleyip yeniden deneyin.";
  }

  if (
    message &&
    !normalizedMessage.includes("internal server error") &&
    !normalizedMessage.includes("unexpected error")
  ) {
    return message;
  }

  return "Hesap oluşturulamadı. Bilgilerinizi kontrol edip yeniden deneyin.";
}
