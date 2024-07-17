import Image from 'next/image';
import Link from 'next/link';

import { Phone, Smartphone } from 'lucide-react';

import profile from '@/assets/images/profile.webp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="py-8">
      <section className="container max-w-screen-sm space-y-4">
        <Card className="flex flex-col items-center pt-6">
          <div className="relative aspect-square w-full max-w-72 rounded-full bg-neutral-100 p-6">
            <Image
              src={profile}
              alt="profile"
              fill
              // TODO: adjust the sizes
              sizes="100vw"
              className="rounded-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Umawan Iamsa-ard</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-center text-sm font-medium text-muted-foreground">
              <p>Head of Academic Support Section</p>
              <p>&</p>
              <p>Academic Officer</p>
              <p>(Master of Management - Weekend Program)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-lg">Contact</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex max-w-40 flex-col items-baseline">
              <Button asChild variant="link">
                <Link href="tel:+6627273689">
                  <Phone className="mr-2 h-4 w-4" />
                  02-727-3689
                </Link>
              </Button>
              <Button asChild variant="link">
                <Link href="tel:+66831814500">
                  <Smartphone className="mr-2 h-4 w-4" />
                  083-181-4500
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
