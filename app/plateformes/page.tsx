import { ExternalLink } from "lucide-react"

const platforms = [
  // Liste complète des plateformes
  { name: "AscendEX (ex-BitMax)", company: "AscendEX Technology SRL", address: "Str. Mihai Eminescu 105-107 Et. 5 Ap. 19 Cod 020073, Bucarest, Roumanie", source: "ListaFirme.ro", website: "https://ascendex.com/en-us/register?inviteCode=UXI7PWNWE" },
  { name: "Arkham Exchange", company: "Arkham Markets International, S.R.L", address: "Punta Cana, République dominicaine", source: "*ADRESSE EXACTE INTROUVABLE*", website: "http://arkm.com/" },
  { name: "Bibox", company: "BIBOX TECHNOLOGY OÜ", address: "Pille Tn 7/5, Tallinn, 10135, Estonie", source: "Page Bibox de Dun & Bradstreet", website: "https://www.bibox.com/" },
  { name: "BingX", company: "BINGX SG PTE. LTD.", address: "60 Paya Lebar Road #12-03, Paya Lebar Square LEBAR SQUARE, Singapour", source: "Registre des entreprises enregistrées à Singapour", website: "https://bingx.com/" },
  { name: "Binance", company: "Binance France SAS", address: "France", source: "Liste des PSAN enregistrés auprès de l'AMF", website: "https://www.binance.com/" },
  { name: "Bitcoin.com", company: "Saint Bitts LLC", address: "Nelson Springs Commercial Complex, Colquhoun Estate, Company Number L17015, Saint-Christophe-et-Nieves", source: "Page Privacy Policy de Bitcoin.com", website: "https://www.bitcoin.com/" },
  { name: "Bitfinex", company: "iFinex Inc", address: "Third Floor Jayla Place Wickhams Cay I, Road Town, VG1110, Iles Vierges britanniques", source: "Registre des sociétés des BVI", website: "https://www.bitfinex.com/" },
  { name: "bitFlyer", company: "bitFlyer EUROPE S.A", address: "121 rue de Hollerich, L-1741, Luxembourg", source: "Conditions générales d'utilisation de bitFlyer", website: "https://www.bitflyer.com/" },
  { name: "Bitget", company: "Singapore Bitget Pte Ltd", address: "10 UBI Crescent No 05-23 UBI Techpark Singapore, 408564 Singapour", source: "Bloomberg", website: "https://www.bitget.com/" },
  { name: "Bithumb", company: "Bithumb Korea Corporation", address: "11, 14~18F, 124, Teheran-ro, Gangnam-gu, Seoul, Corée du Sud", source: "Page d'accueil de Bithumb", website: "https://www.bithumb.com/" },
  { name: "BitMEX", company: "HDR Global Trading Limited", address: "Global Gateway 8, Rue de la Perle, Providence Mahé, Seychelles", source: "Pied de page du support de BitMEX", website: "https://www.bitmex.com/" },
  { name: "Bitpanda", company: "Bitpanda GmbH", address: "Stella-Klein-Low Weg 17, 1020 Vienne, Autriche", source: "Page « Mentions légales » de Bitpanda", website: "https://www.bitpanda.com/" },
  { name: "Bitrue", company: "Realb Singapore Pte. Ltd.", address: "10 Anson Road #28-18, International Plaza, 079903, Singapour", source: "Site singapourien référençant les sociétés locales", website: "https://www.bitrue.com/" },
  { name: "Bitstamp", company: "Bitstamp Europe S.A.", address: "40, avenue Monterey, Luxembourg, L-2163, Luxembourg", source: "https://www.bitstamp.net/legal/europe-sa/", website: "https://www.bitstamp.net/", byRobinhood: true },
  { name: "Bitstack", company: "Bitstack France", address: "France", source: "Liste des PSAN enregistrés auprès de l'AMF", website: "https://www.bitstack.fr/" },
  { name: "Bitvavo", company: "Bitvavo B.V.", address: "Keizersgracht 281, 1016 ED Amsterdam, Pays-Bas", source: "Page « About » de Bitvavo", website: "https://www.bitvavo.com/" },
  { name: "Blockchain.com", company: "Blockchain (LT) UAB", address: "Upes str. 23, Vilnius, Lituanie", source: "Page « Terms » de Blockchain.com", website: "https://www.blockchain.com/" },
  { name: "Bullish", company: "Bullish (GI) Limited", address: "26/F, The Centrium, 60 Wyndham Street, Central, Hong Kong", source: "Pied de page de la page d'accueil de Bullish", website: "https://bullish.com/" },
  { name: "Bybit", company: "Bybit Fintech Limited", address: "C/O Campbells, Floor 2 Romasco Place, Road Town, Tortola, Îles Vierges britanniques", source: "Page Bybit de Dun & Bradsheet", website: "https://www.bybit.com/" },
  { name: "BYDfi (ex-Bityard)", company: "BYDFi Fintech LTD", address: "306,Victoria House, Victoria, Mahe, 8684, Seychelles", source: "Page BYDFi sur Info-Clipper.com", website: "https://www.bydfi.com/" },
  { name: "CEX.IO", company: "CEX IO EU Limited", address: "22 Northumberland Road, Ballsbridge, Dublin 4, Irlande", source: "Page « Terms of Use » de CEX.IO", website: "https://cex.io/" },
  { name: "Coinbase", company: "Coinbase Europe Limited", address: "70 Sir John Rogerson’s Quay, Dublin D02 R296, Irlande", source: "Page des mentions légales de Coinbase", website: "https://coinbase.com/join/7VVCUYL?src=referral-link" },
  { name: "CoinEx", company: "CoinEx Technology Limited", address: "Onfem Towe, 29 Wyndham St, Central, Hong Kong", source: "Page LinkedIn de CoinEx", website: "https://www.coinex.com/" },
  { name: "Coinmama", company: "Cmama Ltd", address: "42 Pearse St., Dublin D02 YX88, Irlande", source: "Page Privacy de Coinmama", website: "https://www.coinmama.com/" },
  { name: "CoinList", company: "SLA Services Ltd", address: "Suite 106, 2nd Floor Charles Court Building, Main Street, Road Town, Tortola, VG1110, Îles Vierges britanniques", source: "Page « Terms of Service » de CoinList", website: "https://coinlist.co/" },
  { name: "Crypto.com", company: "Foris DAX MT Limited", address: "Level 7, Spinola Park, Triq Mikiel Ang Borg, St. Julian's SPK 1000, Malte", source: "Page Privacy de Crypto.com", website: "https://crypto.com/" },
  { name: "Deribit", company: "DRB Panama Inc", address: "Via Espana, Delta Bank Building, 6th Floor, Suite 604D, Panama City, Panama", source: "Page « Privacy Policy » de Deribit", website: "https://www.deribit.com/", byCoinbase: true },
  { name: "eToro", company: "eToro (Europe) Ltd", address: "4 Profiti Ilia Street, Kanika International Business Center (KIBC) 7th Floor, Germasogeia 4046, Limassol, Chypre", source: "Page « Our Offices » de eToro", website: "https://www.etoro.com/" },
  { name: "Finst", company: "Finst", address: "Herengracht 454, 1017 CA Amsterdam, Pays-Bas", source: "CGU de Finst", website: "https://www.finst.com/" },
  { name: "Gate (ex Gate.io)", company: "Gate.com", address: "P.O. Box 31119 Grand Pavilion, Hibiscus Way, 802 West Bay Road, Grand Cayman, KY1-1205, Îles Caïmans", source: "Page LinkedIn de Gate.io", website: "https://www.gate.io/" },
  { name: "Gatehub", company: "Gatehub", address: "90 Hatton Gardens, London, England CR4 4, GB, Royaume-Uni", source: "Page LinkedIn de Gatehub", website: "https://www.gatehub.net/" },
  { name: "Gemini", company: "Gemini Intergalactic Europe Limited", address: "70 Sir John Rogerson’s Quay, Dublin 2, Irlande", source: "Page Privacy Policy de Gemini", website: "https://www.gemini.com/" },
  { name: "HitBTC", company: "HiTech Digital Business Ltd", address: "Av Vitacura 2969, Las Condes, Region Metropolitana, Chilie", source: "Page « Contact » de HitBTC", website: "https://hitbtc.com/" },
  { name: "HTX (ex Huobi)", company: "Huobi Global Limited", address: "Suite 10, 3rd Floor, La Ciotat Mont Fleuri, Mahé, Seychelles", source: "USPTO Trademark & Patent Filings", website: "https://www.htx.com/" },
  { name: "ICONOMI", company: "ICONOMI Limited", address: "10 Orange St, London WC2H 7DQ, Royaume-Uni", source: "Page Terms and Conditions d'ICONOMI", website: "https://www.iconomi.com/" },
  { name: "Kraken", company: "Payward Ireland Limited", address: "70 Sir John Rogerson’s Quay, Dublin Docklands, Dublin 2, Ireland D02 R296", source: "Publication officielle sur les adresses de Kraken", website: "https://www.kraken.com/" },
  { name: "KuCoin", company: "Vistra Corporate Services Centre", address: "Suite 23, 1er étage, Eden Plaza, Eden Island, Mahé, Seychelles", source: "Demande au support de KuCoin", website: "https://www.kucoin.com/" },
  { name: "LATOKEN", company: "Payex OÜ", address: "Lasnamae Linnaosa, Katusepapi tn. 4-A803, 11412 Harju maakond, Tallinn, Estonie", source: "Page Terms of use de LATOKEN", website: "https://latoken.com/" },
  { name: "LBANK", company: "UAB LBANK EXCHANGE", address: "Eisiskiu Sodu 18-oji g., 11, Naujininki seniinija, Vilnius, Lituanie", source: "Organisme de gestion des listes d'agents financiers et de courtiers en crédit", website: "https://www.lbank.com/" },
  { name: "LiteBit", company: "2525 Ventures BV", address: "Weena 740, 15de etage, 3014 DA Rotterdam, Pays-Bas", source: "Site Web de LiteBit", website: "https://www.litebit.eu/" },
  { name: "Luno", company: "Luno Pte Ltd", address: "5 Shenton Way, 10-01 UIC Building, 068808 SG, Singapour", source: "Site Web de Luno", website: "https://www.luno.com/" },
  { name: "Monerium", company: "Monerium EMI ehf.", address: "Bjargargata 1, 102 Reykjavík, Islande", source: "Site web Monerium", website: "https://www.monerium.com/" },
  { name: "Mt Pelerin", company: "Mt Pelerin Group SA", address: "Microcity, Rue de la Pierre-à-Mazel 39, 2000 Neuchâtel, Suisse", source: "Site web Mt Pelerin", website: "https://www.mtpelerin.com/" },
  { name: "MEXC", company: "MEXC Global Ltd", address: "Sertus Chambers, Second Floor, The Quadrant, Manglier Street, Victoria, Mahé, Seychelles", source: "Page LinkedIn de MEXC", website: "https://www.mexc.com/auth/signup?inviteCode=1JygR" },
  { name: "NC Wallet", company: "Zafiro Innovation Systems LLC", address: "Sabana de la Soda Tapia, 10108 San Jose, Costa Rica", source: "Article 25 des conditions d'utilisation de NC Wallet", website: "https://ncwallet.net/" },
  { name: "Nexo", company: "Nexo AG", address: "15 Grafenaustrasse, 6300 Zug, Suisse", source: "Page de Nexo sur Craft.co", website: "https://nexo.com/" },
  { name: "OKX (ex OKCoin)", company: "OKCoin Europe LTD", address: "30, Kenilworth, Flat 3, Sir Augustus Bartolo Street, Ta Xbiex XBX 1093, Malte", source: "Page des licences de OKCoin", website: "https://www.okcoin.com/" },
  { name: "Paxos", company: "Paxos Global Pte. Ltd", address: "30 Duxton Road, 020-00, 089494, Singapour", source: "Page « Privacy Policy » de Paxos", website: "https://paxos.com/" },
  { name: "Phemex", company: "Phemex Financial Pte Ltd", address: "111 North Bridge Road, #29-06A, Peninsula Plaza, Singapour (179098)", source: "Site singapourien référençant les sociétés locales", website: "https://phemex.com/" },
  { name: "Plutus", company: "Block Code LT UAB", address: "Vilkpėdės g. 22, Vilnius, Lituanie", source: "Page d'accueil de Plutus", website: "https://plutus.it/" },
  { name: "Poloniex", company: "Polo Digital Assets Ltd", address: "F20, 1st Floor, Eden Plaza, Eden Island, Seychelles", source: "Page Dun & Bradstreet de Poloniex", website: "https://poloniex.com/" },
  { name: "Prime XBT", company: "Prime XBT Trading Services LLC", address: "First floor, First St. Vincent Bank Ltd Building, James Street, Kingstown, Saint-Vincent et les Grenadines", source: "PDF des termes et conditions de Prime XBT", website: "https://primexbt.com/" },
  { name: "ProBit", company: "PROBIT GLOBAL SERVICES Ltd", address: "Suite 9, Ansuya Estate, Revolution Avenue, Victoria, Mahe, Seychelles", source: "Support de ProBit", website: "https://www.probit.com/" },
  { name: "Quantfury", company: "Quantfury Trading Limited", address: "4th Floor, Lyford Cay House, Western Rd, Nassau, Bahamas", source: "Pied de page sur site Web de Quantfury", website: "https://quantfury.com/" },
  { name: "SwissBorg", company: "SBorg SA", address: "8 rue du Grand-Chêne, 1003 Lausanne, Suisse", source: "Page d'accueil de SwissBorg", website: "https://swissborg.com/" },
  { name: "Trade Republic", company: "Trade Republic Bank GmbH", address: "Köpenicker Strasse 40c 10179, Allemagne", source: "Mentions légales de Trade Republic", website: "https://traderepublic.com/" },
  { name: "Transak", company: "Transak Sp. z o.o", address: "46/410 Hoża Street, 00-682 Varsovie, Pologne", source: "Mentions légales Transak", website: "https://transak.com/" },
  { name: "Upbit", company: "Upbit Singapore Pte Ltd", address: "1 Harbourfront Avenue 16-02, Keppel Bay Tower, S098632, Singapour", source: "Page d'accueil de Upbit Global", website: "https://upbit.com/" },
  { name: "Uphold", company: "Uphold Lithuania UAB", address: "Upes g. 23-1, Vilnius, Lituanie", source: "Page d'accueil de Uphold", website: "https://uphold.com/" },
  { name: "WhiteBIT", company: "UAB Clear White Technologies", address: "26, J. Basanaviciaus Street, Vilnius, Lituanie", source: "Page « User Agreement » de WhiteBIT", website: "https://whitebit.com/" },
  { name: "Wirex", company: "UAB Wirex", address: "Perkunkiemio g. 13 – 91, Vilnius, Lituanie", source: "Page d'accueil de Wirex", website: "https://wirexapp.com/" },
  { name: "Woo X", company: "Wootech Limited", address: "Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, GEORGE TOWN, GRAND CAYMAN, KY1-1002, Îles Caïmans", source: "Dun&Bradstreet", website: "https://woo.org/" },
  { name: "Xapo", company: "Xapo Inc", address: "364 University Avenue, Palo Alto, CA 94301, États-Unis", source: "Page « Terms of Use » de Xapo", website: "https://www.xapobank.com/" },
  { name: "YouHolder", company: "YouHolder", address: "Arch Makariou III, 172, Melford Tower, 3027 Limassol, Chypre", source: "Page « Privacy Policy » de YouHolder", website: "https://app.youhodler.com/sign-up?ref=RUMK2FKW" },
  { name: "Young Platform", company: "Young Platform", address: "Via Francesco Cigna n.96/17, CAP 10155, Turin, Italie", source: "Page « Termes et conditions » de Young Platform »", website: "https://youngplatform.com/" },
]

export default function PlateformesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mb-8 p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-900 text-center">
            Vous souhaitez fermer un compte ?{' '}
            <a href="/donner-crypto-dust" className="text-blue-600 underline font-bold">Donnez la balance restante, la poussière "dust" crypto à FranceCrypto</a>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Plateformes d'échange
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Liste des plateformes d'échange crypto, avec leur société, adresse et source officielle. Cliquez sur le nom pour visiter le site.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-6">
              {platforms.map((p, i) => (
                <li key={i} className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline flex items-center">
                      {p.name}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    {p.closed && (
                      <span className="ml-2 px-2 py-1 text-xs rounded bg-red-100 text-red-700 border border-red-200">Fermée</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300"><b>Société :</b> {p.company}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300"><b>Adresse :</b> {p.address}</div>
                  <div className="text-xs text-gray-400"><b>Source :</b> {p.source}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
