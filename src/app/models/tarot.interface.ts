export interface TarotCard {
  name: string;
  number: string;
  arcana: string;
  suit: string;
  frontside: string;
  fortune_telling: string[];
  keywords: string[];
  meanings: {
    light: string[];
    shadow: string[];
  };
  Archetype: string;
  'Hebrew Alphabet': string;
  Numerology: string;
  Elemental: string;
  'Mythical/Spiritual': string;
  'Questions to Ask': string[];
  backside?: string;
}

export interface TarotData {
  description: string;
  imageBackCard: string;
  cards: TarotCard[];
}
