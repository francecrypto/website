import { ExternalLink } from "lucide-react"

export default function DonnerCryptoDust() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Donner vos poussières (dust) crypto
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Vous voulez fermer un compte mais il reste quelques centimes ?<br />
                Faites un don à FranceCrypto de vos cryptos dont vous ne voulez plus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Plateformes CEX</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>
                <span className="font-bold">YouHodler</span> (
                  <a href="https://app.youhodler.com/sign-up?ref=RUMK2FKW" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : Faire envoyer à utilisateur YouHodler avec YouTag <b>@stable</b>
              </li>
              <li>
                <span className="font-bold">MEXC</span> (
                  <a href="https://www.mexc.com/auth/signup?inviteCode=1JygR" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) :
                <br />Dans Spot Wallet, choisir Send ou Withdraw, et MEXC user
                <br />MEXC UID : <b>45102101</b>
              </li>
              <li>
                <span className="font-bold">Coinbase</span> (
                  <a href="https://coinbase.com/join/7VVCUYL?src=referral-link" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) :
                <br />Donner vos poussières sur Coinbase : <a href="/contact" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Contactez-nous</a> pour obtenir notre email, puis choisir la crypto, et faire "envoyer" ou "send", et saisir l'email du destinataire
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Blockchains</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold">Ethereum & EVM :</span> francecrypto.eth<br />
                <a href="https://etherscan.io/address/0x9E07a24C1057B04A5c548EcFb4ed1dd112b87b6e" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">0x9E07a24C1057B04A5c548EcFb4ed1dd112b87b6e</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}