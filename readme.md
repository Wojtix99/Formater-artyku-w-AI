README - Aplikacja OpenAI Article Formatter

Opis aplikacji
Aplikacja app.js jest narzędziem służącym do formatowania artykułów. Pozwala na wczytanie tekstu artykułu z pliku, przetworzenie go za pomocą API OpenAI i zapisanie sformatowanego tekstu do nowego pliku. Dzięki zastosowaniu OpenAI API, artykuł zostaje poddany zaawansowanemu formatowaniu i poprawkom stylistycznym, co poprawia jego czytelność i prezentację.

Zasada działania aplikacji
Wczytywanie artykułu
Artykuł wczytywany jest z pliku article.txt, który musi znajdować się w tym samym katalogu, co plik app.js. Zawartość pliku article.txt jest odczytywana i przygotowywana do wysłania do API OpenAI.

Przetwarzanie artykułu przez API OpenAI
Skrypt korzysta z API OpenAI do przetworzenia zawartości artykułu. Za pomocą odpowiednich zapytań, treść artykułu jest poddawana analizie i modyfikacjom w celu poprawy struktury, formatowania oraz czytelności.

Zapis sformatowanego artykułu
Po przetworzeniu artykułu przez API, nowa wersja tekstu jest zapisywana w pliku formatted_article.txt. Można go otworzyć w dowolnym edytorze tekstu lub przekleić do innych aplikacji.

Wymagania
Aplikacja wymaga zainstalowanego Node.js oraz dostępu do klucza API OpenAI. W pliku app.js należy ustawić swój klucz API, aby aplikacja mogła prawidłowo komunikować się z usługami OpenAI.

Konfiguracja projektu
Instalacja Node.js
Upewnij się, że Node.js jest zainstalowany na Twoim komputerze. Jeśli Node.js nie jest zainstalowany, pobierz go z oficjalnej strony Node.js i postępuj zgodnie z instrukcjami instalacji.

Pobranie zależności projektu
Projekt wymaga biblioteki node-fetch, która umożliwia wykonywanie zapytań HTTP do API OpenAI. Aby zainstalować tę bibliotekę, przejdź do katalogu projektu w terminalu i uruchom:
npm install node-fetch

Konfiguracja klucza API OpenAI
W kodzie app.js znajduje się zmienna apiKey, do której musisz przypisać swój klucz API. Otwórz plik app.js w edytorze kodu, znajdź linię zawierającą const apiKey, i zamień 'your-api-key' na rzeczywisty klucz, który uzyskałeś na platformie OpenAI:


const apiKey = 'your-api-key';
Uwaga: Twój klucz API jest prywatny i nie powinien być udostępniany innym osobom ani umieszczany w publicznych repozytoriach.

Upewnienie się, że plik article.txt jest poprawnie przygotowany:
Ponieważ posiadasz już plik article.txt, umieść go w katalogu projektu, w tym samym miejscu, gdzie znajduje się app.js. Plik ten powinien zawierać pełną treść artykułu, który chcesz przetworzyć i sformatować. Skrypt automatycznie odczyta ten plik i przekaże jego zawartość do API.

Sprawdzenie poprawności konfiguracji
Po wykonaniu powyższych kroków i zainstalowaniu node-fetch, Twój projekt powinien być gotowy do uruchomienia.

Uruchomienie aplikacji
Przygotowanie artykułu
Upewnij się, że masz plik article.txt w katalogu projektu. Jeśli nie masz jeszcze tego pliku, stwórz go lub skopiuj treść artykułu, który chcesz przetworzyć.

Uruchomienie aplikacji
Aby uruchomić aplikację, przejdź do katalogu projektu w terminalu i wykonaj poniższe polecenie:
node app.js

Sprawdzenie wyników
Po wykonaniu skryptu, w tym samym katalogu powinien pojawić się plik formatted_article.txt. Otwórz go, aby zobaczyć sformatowany artykuł.

Zakończenie
W tym projekcie celem jest wczytanie treści artykułu z pliku tekstowego, przetworzenie go przy użyciu API OpenAI, a następnie zapisanie sformatowanego artykułu w nowym pliku. Projekt wykorzystuje Node.js oraz bibliotekę node-fetch do komunikacji z API.

Pamiętaj, aby zachować ostrożność w kwestii udostępniania swojego klucza API, oraz dbaj o bezpieczeństwo i prywatność danych przetwarzanych przez aplikację.