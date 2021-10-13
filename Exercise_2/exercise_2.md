# Zadanie nr 2
<ol>
<li>
  Stwórz początkową aplikację korzystając ze skryptu "create-react-app". Następnie zapoznaj się z wygenerowaną strukturą plików i uruchom aplikację w przeglądarce. Zmodyfikuj plik App.js, aby wyświetlił listę 5 obiektów na drodze do celu wyprawy. Dane obiektu do wyświetlenia: nazwa, długość i szerokość geograficzna, odległość od poprzedniego obiektu (liczona w programie), planowana data dotarcia w formie tekstowej. Przykładowo: Przylądek Leeuwin, 34°22′35″S 115°08′11″E, 2972 NM, 20.06.2021. Dodaj odpowiedni styl CSS.
</li>
<li>
  Dodaj komponent PrintDistance, który będzie pobierał koordynaty dwóch obiektów (dla każdej koordynaty: liczba stopni, liczba minut, liczba sekund, kierunek świata). Zadaniem komponentu będzie obliczenie odległości w milach morskich i jej wyświetlenie. 
</li>
<li>
  Dodaj komponent PrintDays, który będzie pobierał dwie daty (dotarcia do dwóch kolejnych obiektów) formie tekstowej. Zadaniem komponentu będzie wyświetlanie liczby dni potrzebnych na podróż pomiędzy tymi dwoma obiektami. Komponent ten będzie renderowany w komponencie App, przy każdym obiekcie (oprócz portu wypłynięcia). Wyświetl informację w taki sposób. WSKAZÓWKA: Żeby pobrać dzisiejszą datę możesz wykorzystać new Date().getFullYear(). Funkcja ta zwróci obecny rok w postaci liczbowej.
</li>  
<li>
  W celu weryfikacji wartości przekazywanych do komponentów PrintDays i PrintDistance, użyj właściwości propTypes. Oznacz wszystkie właściwości jako obowiązkowe. Liczby minut i sekund w danych koordynat powinny posiadać wartości domyślne równe 0
</li>   
