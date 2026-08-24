import { createClient, type AuthError, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (browserClient) return browserClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase public environment variables are missing.");
  }

  browserClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return browserClient;
}

export function getTrialSignupErrorMessage(error: AuthError) {
  switch (error.code) {
    case "weak_password":
      return "Şifreniz yeterince güçlü değil. Daha uzun ve tahmin edilmesi zor bir şifre belirleyin.";
    case "email_address_invalid":
    case "validation_failed":
      return "Geçerli bir iş e-posta adresi girin.";
    case "over_email_send_rate_limit":
    case "over_request_rate_limit":
      return "Kısa süre içinde çok fazla deneme yapıldı. Lütfen birkaç dakika bekleyip yeniden deneyin.";
    case "signup_disabled":
      return "Yeni hesap oluşturma geçici olarak durduruldu. Lütfen Rent Okey ekibiyle iletişime geçin.";
    default:
      return "Hesap oluşturulamadı. Bilgilerinizi kontrol edip yeniden deneyin.";
  }
}
