"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

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
        </div>
      </div>
    </div>
  )
}

