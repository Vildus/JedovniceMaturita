# Správa procesů

## Základní koncepty
**Program** - zápis algoritmu v nějakém programovacím jazyce, je statický, neměnný 

**Proces** – je běžící program je tvořen neměnným kódem, proměnnými 

Pro běh procesu jsou nutné následující zdroje systému:
* Procesor
* Vnitřní paměť
* Další prostředky (I/O zařízení soubory apod.)

## Proces může vzniknout
* Z binárního spustitelného souboru – tento soubor nazýváme obrazem procesu
* Z textového spustitelného souboru – obrazem je jeho interpretační program (např. script v Pythonu nebo .bat)

Životní cyklus procesu je možno charakterizovat pomocí přechodů mezi stavy procesu 

## Stavy procesu
* **Nový** - proces byl vytvořen, jsou nim přidělovány prostředky
* **Připravený** - čeká na přidělení procesoru
* **Běžící** - proces má přidělen procesor, jeho kód je vykonáván
* **Čekající** - čeká na přistup k I/0 zařízení, nebo čeká na událost - stisk klávesy 
* **Ukončený** - proces byl ukončen 

![Stavový diagram](/Procesy.svg)


## Proces je vytvořen
* příkazem uživatele 
* na žádost OS 
* na žádost jiného procesu

## Proces je ukončen
* **Násilně**
    *  vyrušením časového limit
    *  provedením chybné instrukce
    *  uživatelem
* **Normálně**
    *  proces byl celý proveden

## Klasifikace operačních systémů z hlediska stupně paralelnosti práce
* **Jednouživatelské jednoúlohové** - s podporou operačního systému se zpracovává pouze jeden proces a to trvale.
* **Jednouživatelské víceúlohové** - jeden uživatel má současně spuštěno více aplikací (např. na pozadi probíhá náročný výpočet, hraje hudba, probíhá komunikace po Internetu a současně s tím uživatel edituje dokument).
* **Víceuživatelské víceúlohové** - více uživatelů sdílí tytéž prostředky. Někdy se Označují jako operační systémy se sdílením času. 
* **[Systémy s reálným časem (RTOS)](/ops#realtimovy-operacni-system-rtos)** - Minimální OS určený pro kritické zabudované systémy.

## Základní členění operačních systémů z hlediska počtu pracujících uživatelů a počtu paralelně pracujících úloh (procesů)

| Systém          | Jednouživatelský     | Víceuživatelský      |
| --------        | --------             | --------             |
| Jednoúlohový    | MS-DOS               | *Nepoužívá se lmao*  |
| Víceúlohový     | Windows              | Unix, Windows Server |


## Datové struktury související s procesy 
Správce procesů vede tabulku procesů. Záznam v této tabulce o konkrétním procesu nazýváme Proces Control Block (PCB)

Je to souhrn všech dat, která OS potřebuje k řízení procesu. 

Obsahuje:
* PID (indentifikační číslo procesu) 
* Stav procesu 
* **Programový čítač** - určuje, která instrukce se právě provádí (nebo má být provedena) 
* Ukazatel do front, ve kterých proces čeká 
* Informace pro správce paměti (tabulky obsazení paměti, evidence stránek, segmentů procesu) 
* Informace týkající se přidělovaní procesoru 


## Priority procesů 
Každý proces má přiřazenou prioritu. Používá se zejména při plánování přidělování procesoru 

Priorita se rozlišuje:
* **základní/statická** - je přiřazena při spuštění programu a za běhu se obvykle nemění
* **dynamická** - mění se při běhu programu

## Běh procesů a multitasking

Procesy mohou běžet několika způsoby:
* **Sekvenčne** - dolší proces se spustí až po ukončení předchozího -> kooperativní multitasking
* **Sekvenčne paralelně** - Je spuštěno více procesů, které se délí o čas procesoru (v časových intervalech se přepínají) -> preemptivní multitasking
* **Paralelně** - Procesy běží současně na jiných procesorech/jádrech/vláknech -> multiprocesorový systém

## Kontext procesu

Souhrn běhových informacích o procesu. Slouží k obnovení předchozího procesu. Proces musí být obnoven v přesně definovaném stavu (tak, jak byl přerušen)

**Přepínaní kontextu** - dochází k němu při střídáním procesů na jednom procesoru

## Multitasking

**Kooperativní multitasking** - Procesy se na multitasking aktivne podílí. Jeden proces aktivně běží a ostatní čekají. Aktivní proces si sám určí, kdy je čas přepnout na jiný proces

**Preemptivní multitaking** - Procesy se přepínají v pravidelných intervalech. Používá se dnes v současných operačních systémech.

Proces je přerušen:
* po uplynutí určitého časového intervalu
* při přerušení vygenerovanou událostí
* je-li skončen před koncem intervalu
* tuto metodu používají všechny moderní OS Windows od verze win 95, win NT, Linux, MacOS
* kontext musí být rozsáhlejší než u kooperativního multitaskingu

## Multithreading

Paralení zprostředkovaní uvnitř jedoho procesu
* Proces se skládá z několika "vláken" (threadů), které běží zdánlivě souběžně
* Jedno vlákno je vždy hlavní - to, které se vytvořilo spuštěním procesu (ostatní vlákna jsou vytvořena za běhu)
* Vlákno má: 
    * svůj kód
    * ukazatel do něj (programový počítač - instrukce, která právě běží/běžela)
    * TID (Thread ID)
    * čas procesoru
    * kontext (pamět/proměnné)
* Vlákna zpravidla mají společný paměťový prostor -> není proto nutná ochrana paměťového prostoru

## Fronty

Správa front procesů
* fronty jsou tvořeny procesy, které čekají na přidělení procesoru

Správce front
* vytváří a ruší fronty
* přidává a odebírá procesy z fronty

Druhy front procesů:
* **bežná fronta** - firts-in first-out (FIFO)
* **prioritní fronta** – jsou zohledňovány priority procesů
* **fronty typu delta-list** - procesy čekají na uplynutí určitého časového okamžiku

## Přidělování procesu

* plánování procesu (CPU Scheduling)
    * používá fronty připravených procesů
    * určuje, který proces právě běží a na jak douho
* dispatcher
    * vlastní přidělení procesu, přepnutí kontextu
    * při přepnutí procesu se uloží kontext právě běžícího procesu, načte se kontext nového procesu a spustí ho od bodu, kde byl naposledy přerušen

## Přidělování procesoru
* časovým kontextem – doba, na kterou je přidělen procesor (desítky až stovky ms)
* procesy dělíme na:
    * CPU-bound - procesy které hodně využívají procesor (např. Výpočetní úlohy)
    * I/O-bound - interaktivní procesy které více využívají vstupně/výstupní zařízení
    * realtimové procesy

## Metody plánování procesoru

* Fronta (FCFS) - First Come First Served – fronta procesů je organizovaná jako klasická FIFO struktura
    * Je to nepreemptivní metoda -> procesy využívají procesor jak dlouho potřebují, nebo do vygenerovaného přerušení
    * CPU procesy si vyžadují větší čas procesoru a I/O procesy jsou znevýhodněny
    * Používá se v kombinaci s prioritami
* Cyklické plánování RR (round robin)
    * používá též frontu FIFO
    * proces může běžet na procesoru po určitou stejnou dobu (časové kvantum) -> je to preemptivní proces
    * opět jsou zvýhodněny CPU procesy, protože předbíhají I/O procesy, čekající ve frontě na přidělení zařízení
* Priority
    * Procesor přidělujeme procesu s nejvyšší prioritou
    * Priorita 
        * **statická** - je stanovená předem 
        * **dynamická** - mění se při běhu procesu
    * Dynamícká priorita snižuje riziku stárnutí procesů -> u déle čekajících procesů je zvyšována
* Nejkratší vlákna SPN (Shortest process next)
    * procesor je přednostě přidělen tomu procesu, u kterého se přepokládá nejkratší doba jeho využívání
* Kombinace metod s více frontami
    * je vedeno více front procesů
    * procesy jsou zařazovány do front podle parametrů (priorita)
    * každá fronta má stanovenou metodu plánování
    * jedna z metod je použita při rozhodoání mezi frontami

