import fs from 'fs';
import fetch from 'node-fetch';

// 1. Wczytanie artykułu z pliku 'article.txt'
const readArticle = () => {
  return fs.readFileSync('article.txt', 'utf8');
};

// 2. Funkcja do wysyłania zapytania do OpenAI
const fetchAIResponse = async (articleContent) => {
  const apiKey = 'your-api-key';
//z powodów bezpieczeństwa zmieniłem prawdziwy klucz do Api na your-api-key, przed publikacją w repozytoriium
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Używamy gpt-3.5-turbo
        messages: [
          {
            role: "system",
            content: "Jesteś asystentem, który przekształca artykuły w kod HTML."
          },
          {
            role: "user",
            content: `Przekształć poniższy artykuł w kod HTML spełniający następujące wymagania:\n\n
            1. Użyj odpowiednich tagów HTML, aby artykuł był dobrze strukturyzowany, tj. sekcje oznaczaj nagłówkami (h1, h2, h3), paragrafami (p), listami punktowanymi (ul, li) lub numerowanymi (ol, li) tam, gdzie to potrzebne.
            2. Dodaj miejsca na grafiki, które wzbogacą treść wizualnie, zwłaszcza w sekcjach wymagających ilustracji, wykresów lub zdjęć – użyj tagów <img src="image_placeholder.jpg"> i dodaj do każdego obrazka atrybut alt z opisem obrazka, który może posłużyć jako prompt do jego wygenerowania.
            3. W każdym miejscu, gdzie dodasz <img> użyj tagu <figcaption> do podpisu obrazka, który dodatkowo opisze, co przedstawia grafika.
            4. Odpowiedni kod HTML umieść tylko w zakresie tagów <body>, nie dodawaj sekcji <html>, <head> ani <body>. 
            5. Pomiń CSS i JavaScript, aby HTML był czysty i zgodny z wymaganiami.\n\nArtykuł:\n${articleContent}`
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // Logowanie pełnej odpowiedzi
    console.log("Odpowiedź API:", data);

    // Sprawdzenie, czy odpowiedź zawiera oczekiwane dane
    if (!data || !data.choices || !data.choices[0] || !data.choices[0].message.content) {
      throw new Error('Błąd w odpowiedzi API: Brak danych.');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Błąd w API:", error.message);
    return null;  // Zwracamy null w przypadku błędu
  }
};

// 3. Zapisanie wygenerowanego kodu HTML do pliku 'artykul.html'
const saveToFile = (content) => {
  if (content) {
    fs.writeFileSync('artykul.html', content);
    console.log("Kod HTML zapisany w artykul.html");
  } else {
    console.log("Brak treści do zapisania.");
  }
};

// 4. Funkcja główna: wczytuje artykuł, wysyła do API, zapisuje wynik
const main = async () => {
  try {
    const articleContent = readArticle();
    const htmlContent = await fetchAIResponse(articleContent);
    saveToFile(htmlContent);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
};

// Uruchomienie funkcji główną
main();
