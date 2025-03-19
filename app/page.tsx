import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingCard } from "@/components/booking-card"
import { ServiceCard } from "@/components/service-card"
import { Building2, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Expertise en Crypto & Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Consultez nos experts pour tous vos besoins en cryptomonnaies et blockchain, que vous soyez
                  particulier ou entreprise.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
              <ServiceCard
                icon={<Users className="h-10 w-10 text-blue-600" />}
                title="Particulier"
                description="Accompagnement personnalisé pour les particuliers souhaitant se lancer dans les cryptomonnaies."
                features={[
                  "Création de wallet et phrase de récupération",
                  "Ache ter et vendre des cryptomonnaies",
                  "Conseil en sécurité",
                  "Récupération de cryptomonnaies perdues",
                  "Analyse de transactions suspectes",
                ]}
                href="/particulier"
              />
              <ServiceCard
                icon={<Building2 className="h-10 w-10 text-blue-600" />}
                title="Entreprise"
                description="Solutions professionnelles pour les entreprises souhaitant intégrer la blockchain."
                features={[
                  "Cérémonie des clés",
                  "Etude des solutions entreprise et institutionnel",
                  "Audit de sécurité",
                  "Conversion Euro / Crypto",
                  "Réglementation PSAN et MiCA",
                ]}
                href="/entreprise"
              />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Réservez votre consultation
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Choisissez le format qui vous convient le mieux
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
              <BookingCard
                title="En personne"
                location="Région Parisienne"
                price="80€"
                duration="1 heure"
                description="Rencontrez nos experts en face à face chez vous ou dans un lieu de votre choix pour une consultation personnalisée."
              />
              <BookingCard
                title="À distance"
                location="France et International"
                price="40€"
                duration="30 minutes"
                description="Consultez nos experts depuis n'importe où dans le monde par téléphone ou visio."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

