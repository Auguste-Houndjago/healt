'use client';

import React from 'react';
import { hopitaux } from '@/components/hopital/mockHotipal';
import { notFound } from 'next/navigation';
import { Building, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from '@repo/ui/components/button';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function HopitalPage({ params }: PageProps) {
  const hopital = hopitaux.find(h => h.slug === params.slug);

  if (!hopital) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        {/* En-tête de l'hôpital */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-200 dark:from-zinc-200 dark:to-zinc-500 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4">
            <Building className="h-16 w-16" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {hopital.nom}
              </h1>
              <p className="text-lg  mt-2">
                {hopital.localisation}
              </p>
            </div>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Adresse */}
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="text-red-500" />
              Adresse
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {hopital.adresse}
            </p>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Phone className="text-green-500" />
              Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {hopital.contact}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-card rounded-xl p-6 shadow-lg border mt-8">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {hopital.description}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Button>
            Prendre rendez-vous
          </Button>
          <Button>
            Voir les médecins
          </Button>
        </div>
      </div>
    </div>
  );
}
