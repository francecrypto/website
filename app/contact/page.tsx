"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { TelegramIcon } from "@/components/icons/telegram"
import { DiscordIcon } from "@/components/icons/discord"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-600" />
              <a href="mailto:email@francecrypto.org" className="hover:underline">
                email@francecrypto.org
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-blue-600" />
              <a href="tel:+33756915505" className="hover:underline">
                +33 7 56 91 55 05
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg mb-4">Vous pouvez aussi nous contacter sur Telegram ou Discord</p>
            <div className="flex items-center gap-4">
              <Link href="https://t.me/francecrypto_org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <TelegramIcon className="w-6 h-6 text-blue-500" />
                <span>Telegram</span>
              </Link>
              <Link href="https://discord.gg/4wQ6NAKtjw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <DiscordIcon className="w-6 h-6 text-indigo-500" />
                <span>Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

