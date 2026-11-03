# UEFA Çempionlar Liqası — Liqa mərhələsi, 4-cü tur (03.11.2026) — Kupon strategiyası

### ⚠️ ÖN QEYDLƏR

- **Heyətlər hələ açıqlanmayıb.** Bütün heyət məlumatı UEFA-nın *gözlənilən heyətlər* səhifəsindən götürülüb (03.11.2026). Rəsmi heyətlər oyundan ~1 saat əvvəl açıqlanır: **20:45 Bakı** (21:45-də başlayan oyunlar) və **23:00 Bakı** (00:00-da başlayan oyunlar).
- **Saatlar (Bakı, UTC+4):** Shakhtar–Sporting və Galatasaray–Stuttgart **03.11, 21:45**; qalan 7 oyun **04.11, 00:00** (18:45 / 21:00 CET).
- **misli.az əmsalları oxunmadı** (səhifə JavaScript ilə yüklənir, məzmun boş gəldi). Əvəzində:
  - 1X2 → **Oddsportal** (03.11.2026). Bu əmsallar bazarın ən yaxşı əmsallarına yaxındır (marja ~0,3–1%). **misli.az-da əmsallar adətən 3–7% aşağı olur**, yəni buradakı "dəyər" rəqəmləri misli.az-da daha aşağı çıxacaq.
  - Ü/A 3.5, 4.5, 2.5 → **BetRivers** (RG.org vasitəsilə, 01.11.2026).
  - Qalan bütün bazarlar (QV, 1X/X2, İY, İY/MS, handikap, 60+ dəq., oyunçu) → **[T]**: modelin ədalətli əmsalı × 0,95 (5% marja fərz edildi). Oynamazdan əvvəl misli.az-da yoxla.
- **Model:** Ehtimallar bukmeker konsensusundan çıxarılıb (marjası təmizlənmiş 1X2 + Ü/A xətti), sonra Dixon-Coles düzəlişli Poisson modelinə uyğunlaşdırılıb. Hissələr arasında qolların paylanması 44% / 56% götürülüb. Bu səbəbdən İY/MS cəmləri 1X2 ilə ±2 bal daxilində uyğun gəlir.
  ➜ **Nəticə:** model bazarı "döymür". Hər seçimin dəyəri ~0,95–1,00 arasındadır, **müsbət gözlənilən dəyər (edge) yoxdur**.
- **⚠️ ZAYIF VERİ:** ÇL statistikası hər komanda üçün yalnız **3 oyundur**. Bu rəqəmlər əsaslandırmada yalnız kontekst kimi verilir, ehtimalın mənbəyi deyil. K1–K4-də ehtimal bazar modelindən gəlir; 10+ oyunluq nümunəsi olan dəstək yalnız bunlardır: Barça (son 10 oyunda 7 dəfə Ü4.5, 1 quru oyun) və Roma (Serie A-da 17 oyun məğlubiyyətsiz).
- **Veri yox:** hakim təyinatları (UEFA hələ açıqlamayıb) → **🟨 Kart bazarı istifadə olunmadı**. Künc statistikası tapılmadı → **🚩 Künc istifadə olunmadı**. Hissələr üzrə son 10 oyunluq statistika, H2H (son 5 il) və həftəsonu fikstürü də tapılmadı.
- **⛔ ŞÜBHƏLİ matç yoxdur.** Etibarlı mənbələrdə rəsmi araşdırma və ya şikə xəbəri tapılmadı.
- **Xal cədvəli:** UEFA-nın 1–3-cü tur nəticələrindən hesablanıb, tarixi **21.10.2026** (3-cü turdan sonra). Bərabərlikdə əvvəl averaj, sonra vurulan qol nəzərə alınıb.
- Bu, ehtimal təhlilidir. Mərc oyunlarında gözlənilən dəyər mənfidir. Yalnız itirməyə hazır olduğun məbləğlə oyna.

---

### 🔎 ADDIM 1 — MATÇ MƏLUMATLARI

| # | Matç | Bakı saatı | Məkan | 1X2 [G] (Oddsportal) | Gol xətti [G] (BetRivers) | Kontekst (nümunə) | Əsas eksiklər (UEFA gözlənilən heyət) |
|---|---|---|---|---|---|---|---|
| 1 | Shakhtar – Sporting | 03.11 21:45 | Ukraynadan kənarda "ev" oyunu (məkan təsdiqlənmədi) | 3.70 / 3.87 / 2.08 | Ü2.5 1.68 / A2.5 2.17 | Shakhtar Q-H-M (5:3), Sporting Q-Q-M (7:4); Suárez 4 qol (3 oyun ⚠️) | SHA: Marlon Santos. SPO: Debast, Nuno Santos; Zalazar şübhəli |
| 2 | Galatasaray – Stuttgart | 03.11 21:45 | Rams Park, İstanbul | 2.15 / 4.34 / 3.20 | Ü3.5 2.07 / A3.5 1.75 | Gala 3 oyunda 6:9, hər oyunda ≥4 qol; Stuttgart 7:2, Demirović 4 qol (3 oyun ⚠️) | STU: **Stiller**, Sauer, Vagnoman. GAL: eksik yoxdur |
| 3 | Atlético – Bayern | 04.11 00:00 | Atlético-nun ev stadionu | 2.86 / 4.00 / 2.45 | Ü3.5 2.15 / A3.5 1.70 | Bayern son 2 oyunda 5 qol buraxıb (3:3, 2:2); Kane 4 qol + 2 asist (3 oyun ⚠️) | BAY: **L. Díaz, Gnabry, Musiala**, Saibari; Neuer və Olise şübhəli. ATM: **Hjulmand (cəzalı)**, Cardoso; Koke şübhəli |
| 4 | Barcelona – Aston Villa | 04.11 00:00 | Barça-nın ev stadionu | 1.32 / 7.10 / 9.60 | Ü4.5 2.23 / A4.5 1.65 | Barça son 10 oyunda 7 dəfə Ü4.5, 1 quru oyun (Rotowire, 10 oyun ✓); ÇL oyunlarında 6, 5, 6 qol. Villa 3/3 qələbə, 12:3 | BAR: **Koundé, E. García, Christensen** (müdafiə), Olmo, Espart. AVL: Wan-Bissaka, Ruggeri |
| 5 | Feyenoord – Inter | 04.11 00:00 | De Kuip (təsdiqlənmədi) | 3.81 / 4.26 / 1.97 | Ü3.5 2.04 / A3.5 1.78 | Inter 2026-da 7 ÇL oyununun hamısında qol vurub, 2 quru oyun (Goal) | FEY: **Bos, Nieuwkoop, Smal, St. Juste**, Moder. INT: **Lautaro, Bastoni (cəzalı), Stones**, Jones |
| 6 | Bodø/Glimt – Lille | 04.11 00:00 | Aspmyra, süni ot (təsdiqlənmədi) | 1.79 / 4.40 / 4.65 | Ü3.5 2.14 / A3.5 1.71 | Lille 0 xal, 3 oyunda 10 qol buraxıb (⚠️) | LIL: Mbappé (cəzalı), Bentaleb, Ueda, T. Santos. BOD: 4 eksik (Mikkelsen və b.) |
| 7 | LASK – Slovan | 04.11 00:00 | LASK-ın ev stadionu | 1.39 / 6.00 / 8.20 | Ü3.5 2.08 / A3.5 1.75 | Slovan 3 oyunda 1:13 (⚠️); LASK Sporting-i 3:2 məğlub edib | LASK: Bello şübhəli. SLO: Čerepkai şübhəli |
| 8 | Man United – Roma | 04.11 00:00 | Old Trafford | 2.25 / 4.15 / 3.09 | Ü3.5 2.35 / A3.5 1.60 | MU bütün yarışlarda 9 oyundur qalib gəlmir (3H 6M, 9 oyun ⚠️); Roma Serie A-da 17 oyun məğlubiyyətsiz ✓; Malen 3 qol + 2 asist | MU: **Šeško, Rashford, Shaw**, Dorgu; Diallo şübhəli. ROM: **Svilar (qapıçı)**, Koné, Pellegrini; Dybala şübhəli |
| 9 | Villarreal – PSG | 04.11 00:00 | Estadio de la Cerámica (təsdiqlənmədi) | 4.30 / 4.55 / 1.79 | Ü3.5 1.88 / A3.5 1.91 | PSG 14:5 (3 oyun ⚠️), 9 oyunluq qələbə seriyasında 2 quru oyun; Villarreal oyunlarında 5, 4, 7 qol | PSG: **Dembélé, Kvaratskhelia, Marquinhos, Nuno Mendes**. VIL: Foyth, Moreno, Akhomach, Alassane |

**Hakim:** veri yox (hamısı) · **H2H (son 5 il):** veri yox / yoxlanmadı · **Həftəsonu fikstürü:** veri yox.

---

### 📊 XAL CƏDVƏLİ VƏ MOTİVASİYA

Hədəf həddləri **[T]** (2024-25 istinadı): ilk 8 → **16 xal**, ilk 24 → **11 xal**. Hər komandanın 5 oyunu qalıb. 4-cü turda motivasiya fərqi **aşağı çəki** ilə nəzərə alınıb.

| Komanda | Sıra | Xal | Averaj | Qalan | Hədəf | Lazım olan xal | Xal ehtiyacı | Heç-heçə hər ikisinə yetir? | Rotasiya | Mənbə / tarix |
|---|---|---|---|---|---|---|---|---|---|---|
| PSG | 1 | 9 | +9 | 5 | İlk 8 | ~7 | 🟡 ORTA | Xeyr | Rotasiya yox, amma 4 əsas oyunçu eksik | UEFA, 21.10 |
| Villarreal | 19 | 3 | 0 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Barcelona | 8 | 6 | +5 | 5 | İlk 8 | ~10 | 🟠 YÜKSƏK (xəttin üstündə) | Xeyr | veri yox | UEFA, 21.10 |
| Aston Villa | 2 | 9 | +9 | 5 | İlk 8 | ~7 | 🟡 ORTA | Xeyr | veri yox | UEFA, 21.10 |
| Stuttgart | 6 | 7 | +5 | 5 | İlk 8 | ~9 | 🟠 YÜKSƏK (+1) | Xeyr | veri yox | UEFA, 21.10 |
| Galatasaray | 24 | 3 | −3 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK (son pley-off yeri) | Xeyr | veri yox | UEFA, 21.10 |
| Atlético | 16 | 4 | +1 | 5 | İlk 8 / 24 | ~12 / ~7 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Bayern | 14 | 5 | +5 | 5 | İlk 8 | ~11 | 🟠 YÜKSƏK (8-ciyə 1 xal) | Xeyr | veri yox (çoxlu zədə) | UEFA, 21.10 |
| Sporting | 12 | 6 | +3 | 5 | İlk 8 | ~10 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Shakhtar | 17 | 4 | +1 | 5 | İlk 24 | ~7 | 🟠 YÜKSƏK (25-ciyə +1) | Xeyr | veri yox | UEFA, 21.10 |
| Inter | 20 | 3 | −1 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Feyenoord | 26 | 3 | −4 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK (zonanın xaricində) | Xeyr | veri yox | UEFA, 21.10 |
| Man United | 21 | 3 | −1 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK | Xeyr | veri yox (9 oyunluq qələbəsizlik) | UEFA, 21.10 |
| Roma | 15 | 4 | +3 | 5 | İlk 24 / 8 | ~7 / ~12 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| LASK | 23 | 3 | −3 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Slovan | 36 | 0 | −12 | 5 | Elənməmək | ~11 (5 oyundan) | 🔴 KRİTİK (praktik olaraq ⚪-yə yaxın) | Xeyr | veri yox | UEFA, 21.10 |
| Bodø/Glimt | 28 | 3 | −5 | 5 | İlk 24 | ~8 | 🟠 YÜKSƏK | Xeyr | veri yox | UEFA, 21.10 |
| Lille | 35 | 0 | −6 | 5 | Elənməmək | ~11 | 🔴 KRİTİK | Xeyr | veri yox | UEFA, 21.10 |

➜ Heç bir komanda ⚪/⚫ deyil, ona görə də bu səbəbdən heç bir seçim məhdudlaşdırılmadı. Heç bir matçda heç-heçə hər iki tərəfə yetmir. Averaj ehtiyacı hələ həlledici deyil.

---

### 🧠 ADDIM 3 — ƏSAS TEZİSLƏR (model 1X2)

| Matç | Tezis | Motivasiya (ev / səf.) | Güvən | 1 · X · 2 |
|---|---|---|---|---|
| Shakhtar – Sporting | Sporting (Suárez, 3 oyunda 4 qol) məğlub olmur və qol vurur | 🟠 / 🟠 | **73%** (X2) | 27,0 · 25,2 · 47,8 |
| Galatasaray – Stuttgart | Rams Park-da Gala bir az üstündür; Stiller-siz Stuttgart-ın ortası zəifdir; açıq, qarşılıqlı qollu oyun | 🟠 / 🟠 | **68%** (QV) | 46,0 · 23,1 · 30,9 |
| Atlético – Bayern | Bayern bir az önə çıxır, amma 4 hücumçusu eksikdir; Hjulmand-sız Atlético da qol vurur | 🟠 / 🟠 | **67%** (QV) | 35,2 · 23,8 · 41,0 |
| Barcelona – Aston Villa | Barça evdə qalib gəlir; 3 müdafiəçinin eksikliyi Villa-ya qol şansı verir; qollu oyun | 🟠 / 🟡 | **76%** (MS 1) | 75,6 · 13,9 · 10,5 |
| Feyenoord – Inter | Inter məğlub olmur; hər iki müdafiə eksikdir (FEY 4 müdafiəçi, INT Bastoni/Stones) → qollar | 🟠 / 🟠 | **73%** (X2) | 26,7 · 22,4 · 50,9 |
| Bodø/Glimt – Lille | Bodø evdə (süni ot) məğlub olmur; Lille 0 xal, 10 qol buraxıb, Mbappé cəzalıdır | 🟠 / 🔴 | **78%** (1X) | 56,1 · 21,8 · 22,1 |
| LASK – Slovan | LASK qalib gəlir; Slovan 3 oyunda 13 qol buraxıb (⚠️) | 🟠 / 🔴 | **71%** (MS 1) | 71,3 · 17,2 · 11,5 |
| Man United – Roma | Hər iki tərəf qol vurur: MU 9 oyundur qələbəsizdir və son 2 Avropa oyununda 6 qol buraxıb; Roma-da Svilar yoxdur | 🟠 / 🟠 | **64%** (QV) | 43,9 · 24,3 · 31,9 |
| Villarreal – PSG | PSG məğlub olmur; Dembélé, Kvara, Marquinhos və Mendes olmadan Villarreal qol tapır | 🟠 / 🟡 | **76%** (X2) | 23,5 · 21,0 · 55,5 |

Bütün tezislərin güvəni ≥60%-dir, ona görə hər matç 4 kupona qədər daxil ola bilər. HEDGE (tezisə zidd seçim) istifadə olunmadı.

---

### ⏱️ ADDIM 4 — İY/MS

**Komandaların hissə statistikası (son 10 oyun):** veri yox. İY/MS ehtimalları Poisson modelindən hesablanıb (44% / 56% paylanma).

**9 kombinasyon (%):**

| Matç | 1/1 | 1/X | 1/2 | X/1 | X/X | X/2 | 2/1 | 2/X | 2/2 | İY 1·X·2 | MS cəmi 1·X·2 (yoxlama) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SHA–SPO | 15,6 | 5,1 | 2,9 | 10,1 | 13,7 | 16,1 | 1,9 | 5,1 | 29,5 | 23,7·39,8·36,5 | 27,7·23,9·48,5 ✓ |
| GAL–STU | 28,7 | 5,4 | 2,6 | 14,4 | 11,2 | 10,5 | 3,5 | 5,4 | 18,4 | 36,7·36,1·27,2 | 46,6·22,0·31,4 ✓ |
| ATM–BAY | 21,2 | 5,5 | 3,1 | 11,8 | 11,7 | 13,3 | 2,8 | 5,5 | 25,1 | 29,8·36,9·33,4 | 35,8·22,6·41,6 ✓ |
| BAR–AVL | 53,6 | 3,5 | 1,1 | 17,8 | 6,4 | 3,8 | 4,5 | 3,5 | 5,9 | 58,2·27,9·13,8 | 75,8·13,3·10,8 ✓ |
| FEY–INT | 15,7 | 5,2 | 3,7 | 9,2 | 10,9 | 15,5 | 2,3 | 5,2 | 32,2 | 24,6·35,7·39,8 | 27,2·21,3·51,4 ✓ |
| BOD–LIL | 36,1 | 4,9 | 1,9 | 16,9 | 10,9 | 8,0 | 3,7 | 4,9 | 12,7 | 42,8·35,8·21,3 | 56,6·20,7·22,6 ✓ |
| LAS–SLO | 48,6 | 3,7 | 1,0 | 19,4 | 8,9 | 4,6 | 3,7 | 3,7 | 6,4 | 53,3·32,9·13,8 | 71,7·16,3·12,0 ✓ |
| MUN–ROM | 27,0 | 5,4 | 2,5 | 14,4 | 12,3 | 11,1 | 3,1 | 5,4 | 18,9 | 34,8·37,8·27,4 | 44,5·23,0·32,5 ✓ |
| VIL–PSG | 13,7 | 5,0 | 4,0 | 8,1 | 10,0 | 16,1 | 2,2 | 5,0 | 35,9 | 22,7·34,2·43,1 | 24,0·20,0·56,0 ✓ |

Bütün MS cəmləri ADDIM 3-dəki 1X2 ilə ≤1,3 bal fərqlidir (≤2 sərhədi daxilində).

| Matç | Ən ehtimallı İY/MS (% · əmsal) | 2-ci | 3-cü | Ən dəyərli İY/MS | Dönüş 1/2 · 2/1 (%) |
|---|---|---|---|---|---|
| SHA–SPO | 2/2 · 29,5% · 3.23 [T] | X/2 · 16,1% · 5.90 | 1/1 · 15,6% · 6.09 | 2/2 (0,95) | 2,9 · 1,9 |
| GAL–STU | 1/1 · 28,7% · 3.31 [T] | 2/2 · 18,4% · 5.16 | X/1 · 14,4% · 6.60 | 1/1 (0,95) | 2,6 · 3,5 |
| ATM–BAY | 2/2 · 25,1% · 3.79 [T] | 1/1 · 21,2% · 4.48 | X/2 · 13,3% · 7.14 | 2/2 (0,95) | 3,1 · 2,8 |
| BAR–AVL | 1/1 · 53,6% · 1.77 [T] | X/1 · 17,8% · 5.34 | X/X · 6,4% · 14.8 | X/1 (0,95) | 1,1 · 4,5 |
| FEY–INT | 2/2 · 32,2% · 2.95 [T] | 1/1 · 15,7% · 6.05 | X/2 · 15,5% · 6.13 | X/2 (0,95) | 3,7 · 2,3 |
| BOD–LIL | 1/1 · 36,1% · 2.63 [T] | X/1 · 16,9% · 5.62 | 2/2 · 12,7% · 7.48 | 1/1 (0,95) | 1,9 · 3,7 |
| LAS–SLO | 1/1 · 48,6% · 1.95 [T] | X/1 · 19,4% · 4.89 | X/X · 8,9% · 10.7 | X/1 (0,95) | 1,0 · 3,7 |
| MUN–ROM | 1/1 · 27,0% · 3.52 [T] | 2/2 · 18,9% · 5.03 | X/1 · 14,4% · 6.60 | — (tezis tərəf seçmir) | 2,5 · 3,1 |
| VIL–PSG | 2/2 · 35,9% · 2.65 [T] | X/2 · 16,1% · 5.90 | 1/1 · 13,7% · 6.93 | 2/2 (0,95) | 4,0 · 2,2 |

Bütün [T] İY/MS əmsalları eyni marja ilə hesablandığı üçün dəyər hamısında ~0,95-dir. "Ən dəyərli" sütunu kuponlarda istifadə olunan seçimi göstərir.

**Dönüş seçimləri (1/2, 2/1) heç bir kupona daxil edilmədi:** "son 10 oyunda ≥2 geri dönüş" şərtini yoxlamaq üçün veri yoxdur.

---

### 🎟️ KUPONLAR

> Ehtimal = model ehtimalı · Ədalətli əmsal = 100 ÷ ehtimal · Dəyər = əmsal × ehtimal · [T] əmsallar misli.az-da yoxlanmalıdır.

## 🎟️ KUPON 1 | 🟢 Banko | Risk: 🟢 | Əmsal: ~1.77 | Ehtimal: ~48,4% | Dəyər: 0,86

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Bodø – Lille | 1X | 🎯 Nəticə | 1.22 [T] (ədalətli 1.28) | 77,9% | Bazar Bodø-nu 56% favorit görür. Lille 3 oyunda 0 xal və 10 buraxılmış qol (⚠️ 3 oyun), Mbappé cəzalı. Lille 🔴 olsa da, motivasiya çəkisi aşağıdır | 🟢 |
| Atlético – Bayern | Atlético qol vurur | 🥅 Qol | 1.18 [T] (1.25) | 80,3% | Ev λ=1,62. Bayern son 2 oyunda 5 qol buraxıb (⚠️). Atlético 3/3 ÇL oyununda qol vurub | 🟢 |
| Villarreal – PSG | 60+ dəqiqədə qol var | 🔥 Xüsusi | 1.23 [T] (1.29) | 77,4% | Cəm λ=3,68 (bazarın ən yüksək Ü3.5 xətti, 1.88). Villarreal oyunlarında 5, 4, 7 qol (⚠️) | 🟢 |

💡 **Güclü tərəfi:** üç seçimin hər biri ≥77% ehtimallıdır və bir-birindən asılı deyil.
⚠️ **Riski:** ~1.77 əmsalı 2–3.5 hədəfinin altındadır. ≥75% şərti ilə [G] əmsal bu turda tapılmadı, buna görə [T] istifadə olundu.
🔁 **Sistem 2/3** (3 × 0,33 AZN): 2 tutsa ~0,48–0,50 AZN, 3 tutsa ~1,46 AZN.

## 🎟️ KUPON 2 | 🟢 Banko | Risk: 🟢 | Əmsal: ~1.93 | Ehtimal: ~46,8% | Dəyər: 0,90

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Barcelona – Villa | MS 1 | 🎯 Nəticə | 1.32 [G] (1.32) | 75,6% | Barça son 10 oyunda 8Q 2M, oyunda orta hesabla 4 qol (10 oyun ✓). Barça 🟠 (8-ci, xəttin üstündə) | 🟢 |
| Shakhtar – Sporting | Sporting qol vurur | 🥅 Qol | 1.16 [T] (1.22) | 81,8% | Səfər λ=1,70. Suárez 4 qol; Sporting 7 qol vurub (⚠️ 3 oyun) | 🟢 |
| Feyenoord – Inter | 60+ dəqiqədə qol var | 🔥 Xüsusi | 1.26 [T] (1.32) | 75,6% | Cəm λ=3,50. Feyenoord-da 4 müdafiəçi, Inter-də Bastoni və Stones yoxdur | 🟢 |

💡 **Güclü tərəfi:** Barça seçimi [G] əmsallıdır və dəyəri ~1,00-dir. Seçimlər arasında korrelyasiya yoxdur.
⚠️ **Riski:** Barça-nın 3 müdafiəçisi eksikdir, Villa 3/3 qələbə ilə gəlir.
🔁 **Sistem 2/3:** 2 tutsa ~0,49–0,55 AZN, 3 tutsa ~1,55 AZN.

## 🎟️ KUPON 3 | 🟢🟡 Təhlükəsiz | Risk: 🟢 | Əmsal: ~2.39 | Ehtimal: ~37,3% | Dəyər: 0,89

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| LASK – Slovan | MS 1 | 🎯 Nəticə | 1.39 [G] (1.40) | 71,3% | Bazar 71%. Slovan 1:13 (⚠️ 3 oyun). LASK 🟠 (23-cü, xəttin sərhədində) | 🟡 |
| Galatasaray – Stuttgart | QV (KG Var) | 🥅 Qol | 1.40 [T] (1.47) | 67,9% | Gala-nın hər oyununda ≥4 qol, Stuttgart xG 2,0/90 (⚠️). Stiller yoxdur | 🟡 |
| Barcelona – Villa | Hər iki hissədə qol | 🔥 Xüsusi | 1.23 [T] (1.30) | 77,0% | Cəm λ=4,27. Barça son 10 oyunda 7 dəfə Ü4.5 (10 oyun ✓) | 🟢 |

💡 **Güclü tərəfi:** qol seçimləri ən qollu iki matça yönəlib, nəticə seçimi isə ən zəif müdafiəyə qarşıdır.
⚠️ **Riski:** ≥65% qaydası ilə 3.5+ əmsal riyazi olaraq demək olar mümkün deyil (0,65³ ≈ 27% → ədalətli əmsal ~3.6).
🔁 **Sistem 2/3:** 2 tutsa ~0,57–0,65 AZN, 3 tutsa ~1,79 AZN.

## 🎟️ KUPON 4 | 🟢🟡 Təhlükəsiz | Risk: 🟢 | Əmsal: ~2.38 | Ehtimal: ~35,8% | Dəyər: 0,85

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Shakhtar – Sporting | X2 | 🎯 Nəticə | 1.30 [T] (1.37) | 73,0% | Bazarda Sporting 48% / Shakhtar 27%. Shakhtar-da Marlon Santos yoxdur, Marlon Gomes kart riski altındadır | 🟡 |
| Feyenoord – Inter | QV (KG Var) | 🥅 Qol | 1.41 [T] (1.49) | 67,3% | Inter yalnız 2 quru oyun keçirib (2026-da 7 oyun); Feyenoord ev λ=1,45 | 🟡 |
| Man United – Roma | 60+ dəqiqədə qol var | 🔥 Xüsusi | 1.30 [T] (1.37) | 72,9% | MU son 2 Avropa oyununda 6 qol buraxıb (⚠️). Roma-da qapıçı Svilar yoxdur | 🟡 |

💡 **Güclü tərəfi:** üç fərqli tezisə (nəticə, qarşılıqlı qol, gec qol) yayılıb.
⚠️ **Riski:** Sporting 3-cü turda evdə LASK-a 2:3 uduzub.
🔁 **Sistem 2/3:** 2 tutsa ~0,56–0,61 AZN, 3 tutsa ~1,79 AZN.

## 🎟️ KUPON 5 | 🟡 Orta | Risk: 🔴 (9,8%, sərhəddə) | Əmsal: ~8.81 | Ehtimal: ~9,8% | Dəyər: 0,86

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Atlético – Bayern | 60+ dəqiqədə qol var | 🔥 Xüsusi | 1.28 [T] (1.34) | 74,5% | Cəm λ=3,38. Bayern-in Avropa oyunlarında orta hesabla 4,59 qol (17 oyun ✓, Goal) | 🟡 |
| Galatasaray – Stuttgart | İY/MS 1/1 | ⏱️ Hissə | 3.31 [T] (3.48) | 28,7% | İY 1 36,7%. Gala 🟠, evdə hücuma çıxacaq | 🔴 |
| LASK – Slovan | Ü3.5 | 🥅 Qol | 2.08 [G] (2.18) | 45,9% | LASK ev λ=2,53. Slovan oyunlarında 7, 3, 4 qol (⚠️) | 🔴 |

💡 **Güclü tərəfi:** bir [G] seçim var, ən yüksək ehtimallı seçim isə 17 oyunluq dəstəyə malikdir.
⚠️ **Riski:** İY/MS 1/1 dar bazardır; Gala-nın ilk hissə profili haqqında veri yoxdur.

## 🎟️ KUPON 6 | 🟡 Orta | Risk: 🟡 | Əmsal: ~8.33 | Ehtimal: ~10,2% | Dəyər: 0,85

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Barcelona – Villa | Ü4.5 | 🥅 Qol | 2.23 [G] (2.35) | 42,5% | Barça son 10 oyunda 7 dəfə Ü4.5 (10 oyun ✓), ÇL oyunları 6/5/6 qol. Villa-nın oyunları 5/6/4 | 🔴 |
| Villarreal – PSG | İY/MS 2/2 | ⏱️ Hissə | 2.65 [T] (2.79) | 35,9% | PSG İY 2 43,1%. PSG 9 oyunluq qələbə seriyasındadır | 🔴 |
| Galatasaray – Stuttgart | Hər iki hissədə qol | 🔥 Xüsusi | 1.41 [T] (1.49) | 67,2% | Cəm λ=3,48 | 🟡 |

💡 **Güclü tərəfi:** Ü4.5 bu turda 10+ oyunluq statistika ilə ən güclü dəstəklənən seçimdir.
⚠️ **Riski:** PSG 4 əsas oyunçusu olmadan əvvəlcədən qabağa keçməyə bilər.

## 🎟️ KUPON 7 | 🔴 Riskli | Risk: 🔴 | Əmsal: ~13.43 | Ehtimal: ~6,4% | Dəyər: 0,86

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Man United – Roma | D. Malen qol vurur ⏰ | ⚽ Oyunçu | 2.46 [T] (2.59) | 38,6% | 3 oyunda 3 qol + 2 asist (⚠️). Roma səfər λ=1,48, Malen-in payı ~33% fərz edildi | 🔴 |
| Atlético – Bayern | İY/MS 2/2 | ⏱️ Hissə | 3.79 [T] (3.98) | 25,1% | Bayern MS 41%, İY 2 33% | 🔴 |
| Bodø – Lille | Hər iki hissədə qol | 🔥 Xüsusi | 1.44 [T] (1.52) | 66,0% | Cəm λ=3,40. Lille hər oyunda qol buraxıb (⚠️) | 🟡 |

💡 **Güclü tərəfi:** üç fərqli tezis birləşdirilib, korrelyasiya aşağıdır.
⚠️ **Riski:** Malen ilk 11-də olmasa, seçim əvəzlənməlidir (bax: ⏰ bölməsi).

## 🎟️ KUPON 8 | 🔴 Riskli | Risk: 🔴 | Əmsal: ~13.42 | Ehtimal: ~6,4% | Dəyər: 0,85

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Feyenoord – Inter | Handikap Inter −1.5 | 🎯 Nəticə | 3.15 [T] (3.31) | 30,2% | Feyenoord-da 4 müdafiəçi yoxdur; Barça Feyenoord-u 5:1 məğlub edib (⚠️) | 🔴 |
| Shakhtar – Sporting | Hər iki hissədə qol | 🔥 Xüsusi | 1.62 [T] (1.71) | 58,5% | Cəm λ=2,93 | 🟡 |
| Bodø – Lille | İY/MS 1/1 | ⏱️ Hissə | 2.63 [T] (2.77) | 36,1% | Bodø İY 1 42,8%; Lille 0 xal | 🔴 |

💡 **Güclü tərəfi:** iki matçın tezisi ilə tam uyğundur.
⚠️ **Riski:** Lautaro-suz Inter 2 qol fərqi ilə qalib gəlməyə bilər.

## 🎟️ KUPON 9 | 🔴 Cəsarət | Risk: 🔴 | Əmsal: ~26.98 | Ehtimal: ~3,3% | Dəyər: 0,90

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Man United – Roma | Ü3.5 | 🥅 Qol | 2.35 [G] (2.46) | 40,6% | QV tezisi. MU 2 oyunda 6 qol buraxıb (⚠️); Roma-da Svilar yoxdur | 🔴 |
| Barcelona – Villa | İY/MS X/1 | ⏱️ Hissə | 5.34 [T] (5.62) | 17,8% | Villa 3/3 qələbə ilə ilk hissəyə müqavimət göstərə bilər, Barça isə 2-ci hissədə üstün gələ bilər (İY heç-heçə statistikası: veri yox) | 🔴 |
| Galatasaray – Stuttgart | MS 1 | 🎯 Nəticə | 2.15 [G] (2.17) | 46,0% | Bazar 46%. Stiller, Sauer və Vagnoman yoxdur. Gala 🟠 | 🔴 |

💡 **Güclü tərəfi:** iki [G] seçim var (dəyər 0,95 və 0,99), 25%-dən aşağı yalnız 1 seçim var.
⚠️ **Riski:** X/1 dar bazardır, ehtimalı 17,8%-dir.

## 🎟️ KUPON 10 | 🔴 Cəsarət | Risk: 🔴 | Əmsal: ~25.10 | Ehtimal: ~3,4% | Dəyər: 0,86

| Matç | Seçim | Kateqoriya | Əmsal | Ehtimal | Əsaslandırma | Risk |
|---|---|---|---|---|---|---|
| Atlético – Bayern | H. Kane qol vurur ⏰ | ⚽ Oyunçu | 1.88 [T] (1.98) | 50,5% | 4 qol + 2 asist (⚠️ 3 oyun). Bayern λ=1,76; Díaz, Gnabry və Musiala olmadığı üçün Kane-in payı ~40% fərz edildi | 🔴 |
| LASK – Slovan | İY/MS X/1 | ⏱️ Hissə | 4.89 [T] (5.15) | 19,4% | LASK favoritdir, ilk hissə heç-heçəsi 32,9% | 🔴 |
| Villarreal – PSG | Handikap PSG −1.5 | 🎯 Nəticə | 2.73 [T] (2.87) | 34,8% | PSG 3 oyunda 14 qol (⚠️); Villarreal-da müdafiəçi Foyth yoxdur | 🔴 |

💡 **Güclü tərəfi:** Kane seçimi Bayern-in hücum eksikliyi ilə məntiqi əlaqədədir.
⚠️ **Riski:** PSG 4 əsas oyunçusu olmadan 2+ fərqlə qalib gəlməyə bilər.

---

### 📊 MÜQAYİSƏ

| Kupon | Səviyyə | Əmsal | Ehtimal | Dəyər | Yatırım | Mümkün qazanc | Gözlənilən gəlir |
|---|---|---|---|---|---|---|---|
| K1 | 🟢 Banko | 1.77 | 48,4% | 0,857 | 1 AZN | 1,77 AZN | 0,86 AZN |
| K2 | 🟢 Banko | 1.93 | 46,8% | 0,902 | 1 AZN | 1,93 AZN | 0,90 AZN |
| K3 | 🟢🟡 Təhlükəsiz | 2.39 | 37,3% | 0,893 | 1 AZN | 2,39 AZN | 0,89 AZN |
| K4 | 🟢🟡 Təhlükəsiz | 2.38 | 35,8% | 0,853 | 1 AZN | 2,38 AZN | 0,85 AZN |
| K5 | 🟡 Orta | 8.81 | 9,8% | 0,864 | 1 AZN | 8,81 AZN | 0,86 AZN |
| K6 | 🟡 Orta | 8.33 | 10,2% | 0,854 | 1 AZN | 8,33 AZN | 0,85 AZN |
| K7 | 🔴 Riskli | 13.43 | 6,4% | 0,859 | 1 AZN | 13,43 AZN | 0,86 AZN |
| K8 | 🔴 Riskli | 13.42 | 6,4% | 0,854 | 1 AZN | 13,42 AZN | 0,85 AZN |
| K9 | 🔴 Cəsarət | 26.98 | 3,3% | 0,897 | 1 AZN | 26,98 AZN | 0,90 AZN |
| K10 | 🔴 Cəsarət | 25.10 | 3,4% | 0,856 | 1 AZN | 25,10 AZN | 0,86 AZN |

**Ümumi yatırım:** 10 AZN · **Ümumi gözlənilən gəlir:** ~8,69 AZN → **Gözlənilən dəyər mənfidir (~−13%).**
misli.az əmsalları burada istifadə olunanlardan aşağı olarsa, itki daha böyük olacaq.

---

### 🧩 TEZİS ASILILIĞI

| Matç | Əsas tezis | Motivasiya (ev / səf.) | Güvən | İstifadə olunduğu kuponlar | Tezis çöksə yanan kuponlar |
|---|---|---|---|---|---|
| SHA–SPO | Sporting məğlub olmur | 🟠 / 🟠 | 73% | K2, K4, K8 | Shakhtar qalib → K4; Sporting qolsuz → K2 (maks. 3) |
| GAL–STU | Gala üstün + QV | 🟠 / 🟠 | 68% | K3, K5, K6, K9 | Az qollu Stuttgart qələbəsi → 4/10 (40%, sərhəddə) |
| ATM–BAY | Bayern üstün + QV | 🟠 / 🟠 | 67% | K1, K5, K7, K10 | Az qollu Atlético qələbəsi → 4/10 (sərhəddə) |
| BAR–AVL | Barça qalib + qollu | 🟠 / 🟡 | 76% | K2, K3, K6, K9 | Barça qalib deyil → K2, K9; az qol → K3, K6 |
| FEY–INT | Inter məğlub olmur + qollu | 🟠 / 🟠 | 73% | K2, K4, K8 | maks. 3 |
| BOD–LIL | Bodø məğlub olmur | 🟠 / 🔴 | 78% | K1, K7, K8 | maks. 3 |
| LAS–SLO | LASK qalib | 🟠 / 🔴 | 71% | K3, K5, K10 | maks. 3 |
| MUN–ROM | QV / qollu | 🟠 / 🟠 | 64% | K4, K7, K9 | maks. 3 |
| VIL–PSG | PSG məğlub olmur + qollu | 🟠 / 🟡 | 76% | K1, K6, K10 | maks. 3 |

Heç bir tezisin çökməsi kuponların 40%-dən çoxunu (4-dən çoxunu) yandırmır. Yenidən paylama lazım olmadı.

---

### 🔁 SEÇİM XƏRİTƏSİ

| Matç | K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9 | K10 | İstifadə |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SHA–SPO | — | Sporting qol vurur | — | X2 | — | — | — | Hər iki hissədə qol | — | — | 3 |
| GAL–STU | — | — | QV | — | 1/1 | Hər iki hissədə qol | — | — | MS 1 | — | 4 |
| ATM–BAY | Atlético qol vurur | — | — | — | 60+ qol | — | 2/2 | — | — | Kane qol | 4 |
| BAR–AVL | — | MS 1 | Hər iki hissədə qol | — | — | Ü4.5 | — | — | X/1 | — | 4 |
| FEY–INT | — | 60+ qol | — | QV | — | — | — | Inter −1.5 | — | — | 3 |
| BOD–LIL | 1X | — | — | — | — | — | Hər iki hissədə qol | 1/1 | — | — | 3 |
| LAS–SLO | — | — | MS 1 | — | Ü3.5 | — | — | — | — | X/1 | 3 |
| MUN–ROM | — | — | — | 60+ qol | — | — | Malen qol | — | Ü3.5 | — | 3 |
| VIL–PSG | 60+ qol | — | — | — | — | 2/2 | — | — | — | PSG −1.5 | 3 |
| **Cəm** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **30** |

---

### 🏅 HƏR MATÇ ÜÇÜN ƏN YAXŞI SEÇİM

| Matç | 🥇 Ən yüksək ehtimallı seçim (əmsal ≥1.20) | Əmsal | Ehtimal | 💎 Ən dəyərli seçim (ehtimal ≥45%) | Dəyər | ⏱️ Ən ehtimallı İY/MS |
|---|---|---|---|---|---|---|
| SHA–SPO | X2 | 1.30 [T] | 73,0% | MS 2 · 2.08 [G] | 0,99 | 2/2 (29,5%) |
| GAL–STU | Stuttgart qol vurur | 1.20 [T] | 78,9% | MS 1 · 2.15 [G] | 0,99 | 1/1 (28,7%) |
| ATM–BAY | 60+ dəqiqədə qol | 1.28 [T] | 74,5% | QV · 1.42 [T] ([G] seçim ≥45% yoxdur) | 0,95 | 2/2 (25,1%) |
| BAR–AVL | Hər iki hissədə qol | 1.23 [T] | 77,0% | MS 1 · 1.32 [G] | 1,00 | 1/1 (53,6%) |
| FEY–INT | Feyenoord qol vurur | 1.24 [T] | 76,6% | MS 2 · 1.97 [G] | 1,00 | 2/2 (32,2%) |
| BOD–LIL | 1X | 1.22 [T] | 77,9% | MS 1 · 1.79 [G] | 1,00 | 1/1 (36,1%) |
| LAS–SLO | 60+ dəqiqədə qol | 1.26 [T] | 75,4% | MS 1 · 1.39 [G] | 0,99 | 1/1 (48,6%) |
| MUN–ROM | Roma qol vurur | 1.23 [T] | 77,2% | QV · 1.47 [T] | 0,95 | 1/1 (27,0%) |
| VIL–PSG | 60+ dəqiqədə qol | 1.23 [T] | 77,4% | MS 2 · 1.79 [G] | 0,99 | 2/2 (35,9%) |

💎 sütunundakı ~1,00 dəyəri Oddsportal-ın ən yaxşı əmsallarına aiddir. misli.az-ın marjası ilə bu rəqəm ~0,93–0,96 olacaq.

---

### 🧾 ƏN YAXŞI EHTİMAL KUPONU (opsional, 10 AZN-ə daxil deyil)

- **Tək kupon (9 🥇 seçim):** əmsal **~7.08** · birləşmiş ehtimal **~8,9%**.
  Hər seçim ~74–79% ehtimallı olsa da, 9 seçimin birlikdə tutma ehtimalı ~9%-dir (9 × 78% ≈ 11%).
- **Bölünmüş versiya (3 × 3, ehtimallar balanslaşdırılıb):**
  - A: SHA X2 + Stuttgart qol vurur + VIL 60+ qol → **~1.92** · **~44,5%**
  - B: ATM 60+ qol + BAR hər iki hissədə qol + BOD 1X → **~1.92** · **~44,7%**
  - C: Feyenoord qol vurur + LAS 60+ qol + Roma qol vurur → **~1.92** · **~44,6%**
- Çıxarılan matç yoxdur (⛔ yoxdur). ZAYIF VERİ qeydi bütün matçlara aiddir, amma ehtimallar bazar konsensusundan gəldiyi üçün heç bir matç kənarda qalmadı.

---

### ⏰ HEYƏTDƏN SONRA YOXLAMA

| Seçim | Kupon | Yoxlama saatı (Bakı) | Şərt | Əvəzedici seçim |
|---|---|---|---|---|
| D. Malen qol vurur | K7 | **04.11, ~23:00** | İlk 11-də olmalıdır | MUN "12" (75,7% · 1.25 [T]) → K7 ~6.8-ə düşür. Daha yüksək əmsal lazımdırsa, K7-ni oynama |
| H. Kane qol vurur | K10 | **04.11, ~23:00** | İlk 11-də olmalıdır | "Bayern Ü1.5 qol" (52,6% · 1.81 [T]) → K10 ~24.2 olur. ATM-də 🥅 kateqoriyası ikinci dəfə istifadə olunur: başqa uyğun kateqoriya qalmayıb |
| Bayern (Neuer, Olise şübhəli) | K1, K5, K7 | 04.11, ~23:00 | Olise oynamasa, Bayern-in hücumu daha da zəifləyir | K7 2/2 riski artır, dəyişiklik tələb olunmur |
| Barça müdafiəsi | K2, K9 | 04.11, ~23:00 | — | — |
| Inter (Luis Henrique şübhəli) | K8 | 04.11, ~23:00 | — | — |

misli.az-ın "oyunçu oynamasa seçim ləğv olunur (void)" qaydası **yoxlanmadı**. Oynamazdan əvvəl saytın qaydalarında yoxla.

---

### 🏆 GÜNÜN ƏN YAXŞI KUPONU

**Kupon 2:** ~46,8% ehtimal və 0,90 dəyər — K1–K4 arasında ən yüksək dəyər budur. Barça MS 1 [G] əmsallıdır (dəyər ~1,00), qalan iki seçim isə bir-birindən asılı olmayan qol tezislərinə əsaslanır.

---

### ✅ SON YOXLAMA

- [x] Xəritədə təkrarlanan seçim yoxdur
- [x] Hər kuponda 3 fərqli matç və 3 fərqli kateqoriya var
- [x] Heç bir matç 4-dən çox kupona düşməyib (maks. 4: GAL, ATM, BAR)
- [x] Əmsal hasilləri və gözlənilən gəlir skriptlə yenidən hesablanıb
- [x] Ziddiyyətli tezis yoxdur (HEDGE istifadə olunmayıb)
- [x] K1–K4-də oyunçu bazarı, dar bazar və İY/MS yoxdur. ZAYIF VERİ yalnız kontekst kimi istifadə olunub (ehtimalın mənbəyi bazardır)
- [x] Xal cədvəli 21.10.2026 tarixinə aiddir (matç günündən əvvəl), mənbəyi UEFA-dır
- [x] ⚪/⚫ komanda yoxdur
- [x] İY/MS ehtimalları 1X2 ilə uyğundur (≤1,3 bal fərq)
- [x] Dönüş İY/MS (1/2, 2/1) heç bir kupona daxil edilməyib (veri yox)
- [x] Manipulyasiya fərziyyəsi yoxdur, ⛔ matç yoxdur
- [x] Təxmini əmsallar [T] ilə işarələnib
- [ ] ⚠️ **Qaydadan kənarlaşmalar:**
  - K1–K2-də [G] şərti tam ödənmir (≥75% ehtimallı [G] seçim yoxdur).
  - K1–K4 əmsalları hədəfdən aşağıdır.
  - K5-in birləşmiş ehtimalı 9,8%-dir (🔴 sərhədi).

---

### 📚 MƏNBƏLƏR

- UEFA — 2026/27 liqa mərhələsinin fikstürü və nəticələri (1–4-cü tur): https://www.uefa.com/uefachampionsleague/news/02a8-2174c9e9019d-f909a77bd77a-1000--2026-27-champions-league-all-the-league-phase-fixtures-a/
- UEFA — 4-cü tur üçün gözlənilən heyətlər, zədələr və cəzalar: https://www.uefa.com/uefachampionsleague/news/02ab-21f9907f0a27-6a6a67e9775d-1000--champions-league-predicted-line-ups-matchday-4-team-news-/
- Oddsportal — ÇL 1X2 əmsalları (03.11.2026): https://www.oddsportal.com/football/europe/champions-league/
- RG.org — DraftKings / FanDuel / BetRivers əmsalları, Ü/A 2.5–4.5 (01.11.2026): https://rg.org/news/soccer/barcelona-vs-aston-villa-atletico-vs-bayern-champions-league-odds
- Rotowire — 4-cü tur proqnozları (Barça, MU, PSG statistikası): https://www.rotowire.com/soccer/article/champions-league-predictions-today-tuesday-nov-3-matchday-4-best-bets-picks-145048
- Goal.com — 4-cü tur qol bazarları (28.10.2026): https://www.goal.com/en-us/betting/opinion/champions-league-matchday-four-bets/A%3Abltdb7b637071c55c16
- Fanatik — Stuttgart zədələri (Stiller, Sauer): https://www.fanatik.com.tr/en/two-stars-injured-major-shock-in-stuttgart-ahead-of-the-galatasaray-match-2642780
- Khel Now — MU və Barça zədə xəbərləri: https://khelnow.com/football/manchester-united-injury-news-as-roma-uefa-champions-league-202611 · https://khelnow.com/football/barcelona-injury-news-aston-villa-uefa-champions-league-202611
- Paramount+ — Galatasaray–Stuttgart başlama saatı: https://www.paramountplus.com/sneak-peak/how-to-watch-galatasaray-vs-stuttgart-ucl-matchday-4-2026/
- misli.az — əmsallar oxunmadı (JavaScript səhifəsi)
