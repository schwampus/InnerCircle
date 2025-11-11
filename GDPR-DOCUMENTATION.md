# GDPR Dokumentation - InnerCircle

## Behandlingsregister enligt GDPR Artikel 30

Uppdaterad: 2025-11-11

---

## DEL 1: PERSONUPPGIFTSANSVARIG (Data Controller)

### 1. Namn och kontaktuppgifter

**Personuppgiftsansvarig:** InnerCircle  
**Organisationsnummer:** [Ditt organisationsnummer]  
**Adress:** [Din organisations adress]  
**E-post:** privacy@innercircle.se  
**Telefon:** [Telefonnummer]

**Företrädare för personuppgiftsansvarig:**  
Namn: [Namn på ansvarig person]  
Roll: VD/Ansvarig chef  
E-post: [E-postadress]

**Dataskyddsombud (DPO):**  
Namn: [Namn eller "Ej utsett - organisation under 250 anställda"]  
E-post: dpo@innercircle.se

---

### 2. Ändamål med behandlingen

InnerCircle behandlar personuppgifter för följande ändamål:

| Ändamål | Rättslig grund | Beskrivning |
|---------|---------------|-------------|
| Tillhandahålla tjänsten | Fullgörande av avtal | Möjliggöra användning av social nätverksplattform |
| Användarautentisering | Fullgörande av avtal | Hantera inloggning och säker åtkomst |
| Kommunikation mellan användare | Fullgörande av avtal | Möjliggöra inlägg, kommentarer och interaktion |
| Säkerhet och integritet | Berättigat intresse | Förhindra missbruk och skydda användare |
| Systemunderhåll | Berättigat intresse | Säkerställa funktionalitet och prestanda |

---

### 3. Kategorier av registrerade och personuppgifter

#### Registrerade personer
- Registrerade användare av InnerCircle-plattformen
- Besökare på webbplatsen (begränsad data)

#### Kategorier av personuppgifter

**Obligatoriska uppgifter:**
- Användarnamn
- E-postadress
- Krypterat lösenord
- Konto skapandedatum
- Senaste inloggning

**Frivilliga uppgifter:**
- Profilbild
- Biografi/beskrivning
- Kontaktinformation
- Plats/land

**Genererade uppgifter:**
- Användarposter (inlägg)
- Kommentarer
- IP-adress (loggning)
- Enhetsinformation
- Tidsstämplar för aktivitet

---

### 4. Kategorier av mottagare

Personuppgifter kan delas med följande kategorier av mottagare:

| Mottagare | Syfte | Typ av data |
|-----------|-------|-------------|
| Andra användare | Visa publikt innehåll | Användarnamn, profilbild, inlägg |
| Hosting-leverantör | Teknisk drift | All användardata (krypterad) |
| Databasleverantör | Datalagring | All användardata |
| Säkerhetstjänster | DDoS-skydd, säkerhet | IP-adresser, metadata |
| Myndigheter | Rättsliga krav | Vid lagligt krav |

**Aktuella leverantörer:**
- [Hosting-leverantör namn, t.ex. "DigitalOcean, USA"]
- [Databas-leverantör, t.ex. "PostgreSQL self-hosted"]
- [CDN/säkerhet, om tillämpligt]

---

### 5. Överföringar till tredjeland eller internationell organisation

| Mottagare | Land | Skyddsåtgärd |
|-----------|------|--------------|
| [Leverantör namn] | USA | EU-US Data Privacy Framework |
| [Leverantör namn] | [Land] | Standardavtalsklausuler (SCC) |

*Om inga överföringar sker:*  
Inga personuppgifter överförs till tredjeland eller internationella organisationer.

---

### 6. Tidsfrister för radering

| Kategori | Lagringstid | Motiv |
|----------|-------------|-------|
| Aktivt användarkonto | Tills konto raderas | Fullgörande av avtal |
| Raderat konto | 30 dagar (soft delete) | Möjlighet till återställning |
| Inaktiva konton | 24 månader inaktivitet | Datasäkerhet och GDPR minimering |
| Inlägg och kommentarer | Så länge konto är aktivt | Tjänstens funktionalitet |
| Loggfiler | 90 dagar | Säkerhet och felsökning |
| Säkerhetskopior | 30 dagar | Katastrofåterställning |

**Raderingsprocess:**
1. Användaren begär radering via inställningar
2. Konto markeras som "raderat" (soft delete)
3. Efter 30 dagar raderas all data permanent
4. Användardata anonymiseras i äldre säkerhetskopior

---

### 7. Tekniska och organisatoriska säkerhetsåtgärder

#### Tekniska åtgärder

**Åtkomstkontroll:**
- Användarautentisering med säkra lösenord
- Lösenord hashas med bcrypt (12 rounds minimum)
- Session-baserad autentisering
- HTTPS/TLS-kryptering för all kommunikation
- Säkra HTTP-headers (CSP, HSTS, X-Frame-Options)

**Dataskydd:**
- Databaskryptering i vila
- Krypterad kommunikation (TLS 1.3)
- Regelbundna säkerhetskopior (dagligen)
- Säker förvaring av säkerhetskopior
- Input-validering mot SQL injection och XSS

**Övervakning:**
- Loggning av säkerhetshändelser
- Övervakning av onormal aktivitet
- Automatisk utloggning vid inaktivitet
- Rate limiting mot brute force-attacker

**Infrastruktur:**
- Brandväggar och nätverkssäkerhet
- Regelbundna säkerhetsuppdateringar
- Isolerade utvecklings- och produktionsmiljöer
- Säker hantering av API-nycklar och hemligheter

#### Organisatoriska åtgärder

**Policy och rutiner:**
- Dokumenterad säkerhetspolicy
- Incidenthanteringsplan
- Rutin för personuppgiftsintrång
- Åtkomsthantering och behörighetskontroll

**Personal:**
- Sekretessavtal för personal
- Utbildning i dataskydd
- Begränsad åtkomst (need-to-know basis)

**Regelbunden översyn:**
- Årlig säkerhetsgenomgång
- Regelbunden uppdatering av dokumentation
- Granskning av tredjepartsleverantörer

---

## DEL 2: PERSONUPPGIFTSBITRÄDE (Data Processor)

*Om InnerCircle agerar som personuppgiftsbiträde för andra organisationer*

### 1. Namn och kontaktuppgifter

**Personuppgiftsbiträde:** InnerCircle  
**För personuppgiftsansvarigs räkning:** [Kund-organisation]  
**Kontaktuppgifter:** processor@innercircle.se

**Företrädare:** [Namn]  
**Dataskyddsombud:** [Namn eller "Se ovan"]

---

### 2. Kategorier av behandling

- Datalagring
- Användarhantering
- Säkerhetskopiering
- Tekniskt underhåll

---

### 3. Överföringar till tredjeland

*Se samma information som under Del 1, punkt 5*

---

### 4. Säkerhetsåtgärder

*Se samma information som under Del 1, punkt 7*

---

## ANVÄNDARRÄTTIGHETER

InnerCircle respekterar följande användarrättigheter enligt GDPR:

### Tillgång (Artikel 15)
Användare kan begära kopia av sina personuppgifter via:
- Inställningar > Ladda ner mina data
- E-post till: privacy@innercircle.se

**Svarstid:** 30 dagar

### Rättelse (Artikel 16)
Användare kan uppdatera sina uppgifter via:
- Profilinställningar
- E-post till: privacy@innercircle.se

### Radering (Artikel 17)
Användare kan radera sitt konto via:
- Inställningar > Ta bort konto
- E-post till: privacy@innercircle.se

### Begränsning (Artikel 18)
Användare kan begära begränsad behandling

### Dataportabilitet (Artikel 20)
Export i JSON/CSV-format tillgängligt

### Invändning (Artikel 21)
Rätt att invända mot viss behandling

### Återkalla samtycke
Samtycke kan återkallas när som helst

---

## DATASKYDDSOMBUD (DPO)

**Kontakta DPO:**  
E-post: dpo@innercircle.se  
Adress: [Adress]

**DPO:s ansvar:**
- Övervaka GDPR-efterlevnad
- Rådge om dataskydd
- Samarbeta med tillsynsmyndighet
- Kontaktpunkt för registrerade

---

## PERSONUPPGIFTSINTRÅNG

**Rapportering:**
- Till Integritetsskyddsmyndigheten: Inom 72 timmar
- Till berörda användare: Utan onödigt dröjsmål

**Kontakt vid intrång:**  
E-post: security@innercircle.se  
Telefon: [24/7 nummer]

---

## TILLSYNSMYNDIGHET

**Integritetsskyddsmyndigheten (IMY)**  
Box 8114  
104 20 Stockholm  
Telefon: 08-657 61 00  
E-post: imy@imy.se  
Webbplats: www.imy.se

---

## VERSIONSHISTORIK

| Version | Datum | Ändringar | Godkänd av |
|---------|-------|-----------|------------|
| 1.0 | 2025-11-11 | Initial version | [Namn] |

---

## BILAGOR

- Bilaga A: Personuppgiftsbiträdesavtal (mall)
- Bilaga B: Säkerhetspolicy
- Bilaga C: Incidenthanteringsplan
- Bilaga D: Användaravtal och integritetspolicy

---

*Detta dokument ska granskas och uppdateras minst en gång per år eller vid väsentliga ändringar i behandlingen.*