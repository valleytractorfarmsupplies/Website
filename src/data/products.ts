export type Product = {
  id: string;
  name: string;
  image: string;
  available: boolean;
};

// Add new products here. Set available to false when an item is out of stock.
export const products: Product[] = [
  { id: "tractor", name: "Tractors", image: "/images/Tractor.jpg", available: true },
  { id: "blower", name: "Blowers", image: "/images/Blower.jpg", available: true },
  { id: "chainsaw", name: "Chainsaws", image: "/images/Chainsaw.jpg", available: false },
  { id: "disk-harrow", name: "Disk Harrows", image: "/images/diskharrow.jpg", available: true },
  { id: "peg-harrow", name: "Peg Harrows", image: "/images/pegharrow.jpg", available: true },
  { id: "generator", name: "Generators", image: "/images/generator.jpg", available: true },
  { id: "tube", name: "Tubes & Fittings", image: "/images/tube.jpg", available: false },
  { id: "wire", name: "Wire", image: "/images/wire.jpg", available: true },
];
