import Image from "next/image";
import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="container-page pb-20 sm:pb-28">
      <div className="flex flex-col items-center rounded-3xl bg-brand-navy-deep px-8 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
          <Image
            src="/logo/rentokey-icon-white.png"
            alt=""
            width={33}
            height={24}
            aria-hidden
          />
        </span>
        <h2 className="mt-6 max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          Aracınızı değil, operasyonunuzu büyütün.
        </h2>
        <Button href="/ucretsiz-dene" size="lg" icon className="mt-7">
          Ücretsiz dene
        </Button>
        <p className="mt-5 text-sm text-white/50">1 gün içinde kurulum · Kredi kartı gerekmez</p>
      </div>
    </section>
  );
}
