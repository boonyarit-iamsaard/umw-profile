import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="py-8">
      <section className="container max-w-screen-sm">
        <Card className="flex flex-col items-center">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl font-bold">Umawan Iamsa-ard</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button>Click me</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
