# Operační systémy

## Definice pojmů
**Výpočetní systém** - Soubor vzájemně propojených fyzických a logických prostředků určených k provádění výpočetních operací.

**Holý počítač** - výpočetní systém s pouze nejzákladnějším programovým vybavením (BIOS)

**Instrukce** - nejkratší, již dále nedělitelný povel

**Operační systém** - Základní programové vybavení počítače. Program, který spravuje a řídí hardware počítače a poskytuje uživatelské rozhraní pro interakci s počítačem
- Je načten při spuštění počítače
- Je složen z řady programů, které koordinují hardware a aplikační programy

**Paměťový prostor** - je souhrn všech pamťových možností procesu, tedy jemu přidělená operační paměť pro programový kód a data procesu

**Adresový prostor** - je pamět’ový prostor ve vnitřní paměti, který je vyhrazen tomuto procesu. Je to pamět’ový prostor procesu, na kterém jsou zavedeny adresy

## Fyzické prostředky výpočetního systému 
Hardware, tedy fyzické komponenty, jako procesory, paměťová zařízení, periferie, atd.
- **procesor** - vykonává zadání instrukce
- **vnitřní pamět’** - (operační pamět’ - RAM)
- **vnější pamět’** - slouží k uložení dat a programů , které zrovna nejsou zpracovávány. Je určena na trvalé ukládání souborů
- **vstupně-výstupní** - systém (I/O, I/O systém, periferní zařízení)

## Logické prostředky výpočetního systému 
Software, soubor programů, datových struktur a pravidel pro manipulaci s daty a hardwarem
- **uživatel** – každý, do zadává zakázkuvýpočetnímu systému
- **úloha (job)** – posloupnost činností potřebných ke splnění zakázky
- **krok úlohy** – část úlohy
- **proces** – úloha běžící pod správou operačního systému

## Funkce operačního systému
   * **Správa paměti -** Kontroluje přístup k paměti a optimalizuje její využití pro běžící programy.
   * **[Správa procesů](/procesy) -** Koordinuje a řídí běh procesů na počítači, zajišťuje efektivní využití procesoru.
       * **Multitasking** (více úloh, běžících současně)
            * Kooperativní
                * Starší
                * OS dá programu k dispozici procesor na potřebnou dobu, když jej program nepotřebuje, vrátí jej systému
            * Preemptivní
                * Novější
                * OS přiděluje a odebírá procesor jednotlivým programům na určitou dobu
   * **Správa periférií -** Řídí komunikaci mezi počítačem a externími zařízeními (periferiemi), jako jsou tiskárny nebo skenery. (ovladače)
   * **Správa souborů -** Organizuje a zajišťuje přístup k souborům na úložištích, spravuje jejich vytváření, čtení, zápis a mazání. Využívá souborových systémů, jako je např. FAT32, NTFS, či ext4
   * **Správa uživatelů -** Zodpovídá za vytváření a správu uživatelských účtů, včetně řízení přístupových práv
   * **Uživatelské rozhraní -** Poskytuje prostředky pro interakci mezi uživatelem a počítačem, může být textové nebo grafické
   * **Programové rozhraní -** Definuje způsob, jakým mohou aplikace komunikovat s operačním systémem, poskytuje soubor funkcí a procedur pro programátory
## Rozdělení operačních systémů

### Podle počtu ovládaných procesorů
- **Jednoprocesorové systémy** - Operační systémy určené pro počítače s jedním procesorem
- **Multiprocesorové systémy** - Operační systémy schopné efektivně využívat více procesorů najednou

### Podle schopnosti správy uživatelů
- **Jednouživatelské systémy** - Systém může používat pouze jede uživatel zároveň
- **Víceuživatelské systémy** - Podporují současný běh více uživatelů s oddělenými účty

### Podle počtu provozovaných programů (multitasking)
- **Jednoúlohové systémy** - Běží na něm pouze jeden program najednou
- **Multitaskingové systémy** - Schopny provozovat více programů současně, rozdělují čas procesoru mezi ně (podporuje multitasking)

### Podle Míry specializace
- **Obecné operační systémy** - Navrženy pro širokou škálu aplikací (Windows, Linux)
- **Specializované operační systémy** - Přizpůsobeny konkrétním účelům, např. pro vestavěné systémy nebo superpočítače (Specifické Linuxové distribude, různé druhy RTOS)

## Realtimový operační systém (RTOS)
Speciální typ OS, kde je kladen důraz na rychlou a předvídatelnou reakci na události. Oproti běžným OS má zaručené maximální časy odezvy. Jeho velikost je většinou do 1 MB. Jsou velmi minimální.

Používaný v průmyslu, robotice, kritických zabudovaných systémech, přístroje ve vesmíru, v letadlech, atd.

FreeRTOS, VxWorks, atd.

## Distribuovaný systém
Systém rozdělený mezi více propojenýmch počítačů, kteřé spolupracují na společném úkolu

### Granualita
   * **Hrubá granularita** - Distribuovaný systém je rozdělen do malého počtu počítačů/uzlů
   * **Jemná granularita** - Distribuovaný systém je rozdělen do velkého počtu počítačů/uzlů

### Distribuovaný operační systém
Operační systém, který spravuje distribuovaný systém. Je rozdělen do několikati uzlů (počítaču). Používaný v datacentrech

#### Vlastinosti
   * **Transparentnost** - Skrývání detailů o distribuovaném prostředí před uživatelem nebo aplikacemi. Systém se jeví jako jeden celek
   * **Flexibilita** - Schopnost přizpůsobit se různým prostředím. *např. výpadek uzlu*
   * **Rozšiřitelnost** - Možnost přidání dalších počítačů do distribuovaného systému

## Různé typy operačnich systémů
**Monolitický systém** - Jednotný program, kde všechny funkce jsou v jednom bloku kódu

**Vrstvený (hierarchický) systém** - Rozdělení funkcí na vrstvy pro lepší správu
* Nejběžnější u moderních operačních systémů
* Každá vrstva využívá služeb nižších vrstev
* Vrstva jádra (Kernelspace)
* Vrstva uživatelská (Userspace)

![Stavový diagram](/LayerdOS.svg)

**Virtuální stroje** - umožňuje běh programů v izolovaném prostředí, známém jako virtuální stroj. Virtuální stroj poskytuje abstrakci nad fyzickým hardwarem a umožňuje spouštění různých operačních systémů nezávisle na hostitelském systému

**Abstraktní stroje** - systém je rozdělen do modulů, kde každý dělá jen jednu věc a nic jiného ji nedělá (např. modul pro přístup k tiskárně)

**Modulární struktura** - Systém rozdělený na samostatné moduly

**Model klient-server** - Rozdělení úloh mezi klienta (uživatele) a server (poskytovatele služby)