import { Layout } from "@/components/Layout/Layout";

export const Privacy = () => {
  return (
    <Layout>
      <div>
        <p>
          <strong>Polityka Prywatności</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Wprowadzenie</strong>
            </p>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i
              ochrony danych osobowych użytkowników serwisu Obudynku.pl.
            </p>
          </li>
          <li>
            <p>
              <strong>Administrator Danych Osobowych</strong>
            </p>
            <p>
              Administratorem danych osobowych jest serwis Obudynku.pl z
              siedzibą w Polsce.
            </p>
          </li>
          <li>
            <p>
              <strong>Zakres przetwarzania danych</strong>
            </p>
            <ul>
              <li>
                Użytkownicy serwisu mogą przekazywać swoje opinie o budynkach,
                podając ewentualnie numer mieszkania oraz adres e-mail.
              </li>
              <li>
                Podanie adresu e-mail jest dobrowolne i służy jedynie celom
                edycji lub usuwania opinii.
              </li>
              <li>
                Serwis zbiera również adresy IP użytkowników w celach
                bezpieczeństwa i analizy ruchu.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Cel przetwarzania danych</strong>
            </p>
            <p>Dane przetwarzane są w celu:</p>
            <ul>
              <li>umożliwienia użytkownikom dodawania opinii,</li>
              <li>
                umożliwienia edycji lub usuwania opinii przez użytkowników,
                którzy podali adres e-mail,
              </li>
              <li>analizy ruchu na stronie za pomocą Google Analytics.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Przechowywanie danych</strong>
            </p>
            <ul>
              <li>
                Dane są przechowywane na serwerach znajdujących się w Polsce.
              </li>
              <li>
                Dane będą przechowywane przez nieokreślony czas, chyba że
                użytkownik zdecyduje się usunąć swoją opinię.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Prawa użytkownika</strong>
            </p>
            <p>Użytkownik ma prawo do:</p>
            <ul>
              <li>dostępu do swoich danych,</li>
              <li>poprawiania swoich danych,</li>
              <li>usunięcia swoich danych,</li>
              <li>ograniczenia przetwarzania danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania danych.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Bezpieczeństwo danych</strong>
            </p>
            <ul>
              <li>
                Administrator zobowiązuje się do ochrony danych zgodnie z
                obowiązującymi przepisami prawa.
              </li>
              <li>
                Dane są chronione przed dostępem osób trzecich za pomocą
                technologii HTTPS oraz odpowiednich zabezpieczeń serwera i bazy
                danych.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Cookies i narzędzia analityczne</strong>
            </p>
            <ul>
              <li>
                Serwis korzysta z Google Analytics do analizy ruchu na stronie.
              </li>
              <li>
                Użytkownik może w każdej chwili wyłączyć obsługę plików cookies
                w ustawieniach swojej przeglądarki.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Zmiany w Polityce Prywatności</strong>
            </p>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w
              Polityce Prywatności. Użytkownicy serwisu zostaną o tym
              poinformowani.
            </p>
          </li>
          <li>
            <p>
              <strong>Kontakt</strong>
            </p>
          </li>
          <p>
            Wszelkie pytania dotyczące Polityki Prywatności prosimy kierować na
            adres e-mail: [
            <a href="mailto:obudynkupl@gmail.com" target="_new">
              obudynkupl@gmail.com
            </a>
            ].
          </p>
          <li>
            <strong>Postanowienia końcowe</strong>
          </li>
          <ul>
            <li>
              Korzystając z serwisu, użytkownik akceptuje niniejszą Politykę
              Prywatności.
            </li>
            <li>
              W sprawach nieuregulowanych niniejszą Polityką Prywatności mają
              zastosowanie przepisy RODO oraz inne obowiązujące przepisy prawa
              polskiego.
            </li>
          </ul>
        </ol>
        <p>Data ostatniej aktualizacji: 20.09.2023.</p>
      </div>
    </Layout>
  );
};

export default Privacy;
