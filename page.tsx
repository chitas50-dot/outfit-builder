import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function Home() {
  const [budget, setBudget] = useState<number>(100);
  const [image, setImage] = useState<string | null>(null);
  const [outfit, setOutfit] = useState<string[]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateOutfit = () => {
    // Mock: gera peças de exemplo (tu vais ligar a API real depois)
    const mockOutfit = [
      "Camisa branca minimal",
      "Calças pretas slim",
      "Ténis brancos",
      "Casaco cinzento oversized"
    ];
    setOutfit(mockOutfit);
  };

  return (
    <main className="flex flex-col items-center p-8 gap-6">
      <h1 className="text-3xl font-bold">Outfit Builder</h1>

      <input type="file" accept="image/*" onChange={handleFile} />
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="border rounded p-2 w-40"
        placeholder="Budget (€)"
      />
      <Button onClick={generateOutfit}>Gerar Outfit</Button>

      {image && <img src={image} alt="Inspiração" className="w-64 rounded-xl" />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {outfit.map((item, i) => (
          <Card key={i}>
            <p>{item}</p>
            <Badge>Dentro do orçamento</Badge>
          </Card>
        ))}
      </div>
    </main>
  );
}