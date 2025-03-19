"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, MapPin, Clock } from "lucide-react"

interface BookingCardProps {
  title: string
  location: string
  price: string
  duration: string
  description: string
}

export function BookingCard({ title, location, price, duration, description }: BookingCardProps) {
  const [date, setDate] = useState<Date>()
  const [isBookingSuccess, setIsBookingSuccess] = useState(false)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking process
    setTimeout(() => {
      setIsBookingSuccess(true)
    }, 1000)
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-blue-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-blue-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center font-bold text-lg">
            <span>{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Réserver</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {!isBookingSuccess ? (
              <>
                <DialogHeader>
                  <DialogTitle>Réserver un rendez-vous</DialogTitle>
                  <DialogDescription>
                    Pour l'instant vous pouvez réserver en nous contactant à email@francecrypto.org ou par téléphone / sms / whatsapp : 07 56 91 55 05
                  </DialogDescription>
                </DialogHeader>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <DialogTitle>Réservation confirmée !</DialogTitle>
                <DialogDescription>
                  Votre rendez-vous a été réservé avec succès. Vous recevrez un email de confirmation dans les
                  prochaines minutes.
                </DialogDescription>
                <Button onClick={() => setIsBookingSuccess(false)} className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Fermer
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

