import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wallet, ShieldCheck, ArrowRightLeft, KeyRound, Search } from "lucide-react"

export default function ParticulierPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Services pour Particuliers
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Accompagnement personnalisé pour tous vos projets en cryptomonnaies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Création de wallet</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Apprenez à créer et sécuriser votre portefeuille de cryptomonnaies.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/particulier/wallet">En savoir plus</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <ArrowRightLeft className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Achat et vente</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Comment acheter et vendre des cryptomonnaies en toute sécurité.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/particulier/achat-vente">En savoir plus</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Conseil en sécurité</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Protégez vos actifs numériques contre les menaces et les arnaques.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/particulier/securite">En savoir plus</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <KeyRound className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Récupération crypto</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Solutions pour récupérer l'accès à vos cryptomonnaies.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/particulier/recuperation">En savoir plus</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Analyse de transactions suspectes</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Vous avez un doute sur un email ou une transaction ? Nous pouvons vous aider à l'analyser.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/particulier/analyse-suspecte">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pourquoi nous choisir ?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Des experts passionnés à votre service
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Expertise</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Des consultants avec une expérience approfondie dans le domaine des cryptomonnaies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sécurité</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Nous mettons l'accent sur les meilleures pratiques de sécurité pour protéger vos actifs numériques.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Confidentialité</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Vous pouvez si besoin nous contacter sous pseudonyme par Whatsapp, Signal ou Telegram.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#booking">Réserver une consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

