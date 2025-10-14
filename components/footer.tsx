import Link from "next/link"
import { Bitcoin } from "lucide-react"
import { TelegramIcon } from "./icons/telegram"
import { DiscordIcon } from "./icons/discord"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-blue-600" />
          <span className="text-lg font-bold">FranceCrypto.org</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:underline">
            Mentions légales
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://t.me/francecrypto_org" target="_blank" rel="noopener noreferrer" aria-label="Telegram FranceCrypto">
            <TelegramIcon className="w-9 h-9 text-gray-400 hover:text-blue-500 transition-colors duration-200" />
          </Link>
          <Link href="https://discord.gg/4wQ6NAKtjw" target="_blank" rel="noopener noreferrer" aria-label="Discord FranceCrypto">
            <DiscordIcon className="w-9 h-9 text-gray-400 hover:text-indigo-500 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

