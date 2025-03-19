import { Button } from "@/components/ui/button"
import Link from "next/link"
import { KeyRound, ShieldCheck, ArrowRightLeft } from "lucide-react"

export default function EntreprisePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Services pour Entreprises
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Solutions professionnelles pour l'intégration de la blockchain dans votre entreprise
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <KeyRound className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Cérémonie des clés</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mise en place sécurisée de vos infrastructures cryptographiques avec des protocoles rigoureux.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Audit sécurité</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Évaluation complète de la sécurité de vos systèmes blockchain et recommandations d'amélioration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <ArrowRightLeft className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Achat et vente</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Solutions institutionnelles pour l'acquisition et la gestion d'actifs numériques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pourquoi intégrer la blockchain ?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Les avantages pour votre entreprise
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Transparence et traçabilité</h3>
              <p className="text-gray-500 dark:text-gray-400">
                La blockchain offre une transparence inégalée dans les transactions et les processus, permettant une
                traçabilité complète et immuable.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Grâce à la cryptographie avancée, la blockchain offre un niveau de sécurité supérieur pour protéger vos
                données et transactions.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Réduction des coûts</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Éliminez les intermédiaires et automatisez les processus grâce aux contrats intelligents pour réduire
                significativement vos coûts opérationnels.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Innovation et différenciation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Positionnez votre entreprise à l'avant-garde de l'innovation technologique et différenciez-vous de la
                concurrence.
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

