import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title:
    'Let\u0027s\u0020Design\u0020the\u0020Future\u0020with\u0020OktoPeople\u0020UX\u0020\u0026\u0020Product\u0020Design\u0020Powerhouse',
  meta: [
    { name: 'keywords', content: '' },
    {
      name: 'keywords',
      content:
        'User\u0020Experience\u0020\u0028UX\u0029,\u0020User\u0020Interface\u0020\u0028UI\u0029,\u0020Usability,\u0020Wireframes,\u0020Visual\u0020Designer,\u0020Prototyping,\u0020Information\u0020Architecture,\u0020User\u002DCentered\u0020Design,\u0020Human\u002DCentered\u0020Design,\u0020Interaction\u0020Design,\u0020User\u0020Research,\u0020User\u0020Testing,\u0020Minimum\u0020Viable\u0020Product\u0020\u0028MVP\u0029,\u0020Product\u0020Designer,\u0020Investor\u0020Deck,\u0020Decentralized\u0020Applications\u0020\u0028DApps\u0029,\u0020Blockchain\u0020Technology,\u0020Smart\u0020Contracts,\u0020Cryptocurrency,\u0020Tokenization,\u0020Web3\u0020Development,\u0020Digital\u0020Identity,\u0020Web3\u0020Integrations,\u0020Web3\u0020Wallets,\u0020Metaverse,\u0020Software\u0020as\u0020a\u0020Service\u0020\u0028SaaS\u0029,\u0020Cloud\u002DBased\u0020Software,\u0020Subscription\u0020Software,\u0020SaaS\u0020Solutions,\u0020SaaS\u0020Platforms,\u0020SaaS\u0020Integration,\u0020SaaS\u0020Development,\u0020SaaS\u0020Security,\u0020SaaS\u0020Analytics,\u0020SaaS\u0020Implementation,\u0020Financial\u0020Technology\u0020\u0028Fintech\u0029,\u0020Digital\u0020Banking,\u0020Online\u0020Payments,\u0020Mobile\u0020Wallets,\u0020Insurtech,\u0020Regtech,\u0020Neobanks,\u0020Blockchain\u0020in\u0020Finance,\u0020Peer\u002Dto\u002DPeer\u0020Lending,\u0020Financial\u0020Innovation.Experiencia\u0020del\u0020Usuario\u0020\u0028UX\u0029,\u0020Interfaz\u0020de\u0020Usuario\u0020\u0028UI\u0029,\u0020Usabilidad,\u0020Wireframes,\u0020Dise\u00F1ador\u0020Visual,\u0020Prototipado,\u0020Arquitectura\u0020de\u0020la\u0020Informaci\u00F3n,\u0020Dise\u00F1o\u0020Centrado\u0020en\u0020el\u0020Usuario,\u0020Dise\u00F1o\u0020Centrado\u0020en\u0020el\u0020Humano,\u0020Dise\u00F1o\u0020de\u0020Interacci\u00F3n,\u0020Investigaci\u00F3n\u0020de\u0020Usuario,\u0020Pruebas\u0020de\u0020Usuario,\u0020Producto\u0020M\u00EDnimo\u0020Viable\u0020\u0028MVP\u0029,\u0020Dise\u00F1ador\u0020de\u0020Productos,\u0020Presentaci\u00F3n\u0020para\u0020Inversionistas,\u0020Aplicaciones\u0020Descentralizadas\u0020\u0028DApps\u0029,\u0020Tecnolog\u00EDa\u0020Blockchain,\u0020Contratos\u0020Inteligentes,\u0020Criptomonedas,\u0020Tokenizaci\u00F3n,\u0020Desarrollo\u0020Web3,\u0020Identidad\u0020Digital,\u0020Integraciones\u0020Web3,\u0020Carteras\u0020Web3,\u0020Metaverso,\u0020Software\u0020como\u0020Servicio\u0020\u0028SaaS\u0029,\u0020Software\u0020Basado\u0020en\u0020la\u0020Nube,\u0020Software\u0020de\u0020Suscripci\u00F3n,\u0020Soluciones\u0020SaaS,\u0020Plataformas\u0020SaaS,\u0020Integraci\u00F3n\u0020SaaS,\u0020Desarrollo\u0020SaaS,\u0020Seguridad\u0020SaaS,\u0020Anal\u00EDticas\u0020SaaS,\u0020Implementaci\u00F3n\u0020SaaS,\u0020Tecnolog\u00EDa\u0020Financiera\u0020\u0028Fintech\u0029,\u0020Banca\u0020Digital,\u0020Pagos\u0020en\u0020L\u00EDnea,\u0020Carteras\u0020M\u00F3viles,\u0020Insurtech,\u0020Regtech,\u0020Neobancos,\u0020Blockchain\u0020en\u0020Finanzas,\u0020Pr\u00E9stamos\u0020entre\u0020Pares,\u0020Innovaci\u00F3n\u0020Financiera.Benutzererfahrung\u0020\u0028UX\u0029,\u0020Benutzeroberfl\u00E4che\u0020\u0028UI\u0029,\u0020Benutzerfreundlichkeit,\u0020Wireframes,\u0020Visual\u0020Designer,\u0020Prototyping,\u0020Informationsarchitektur,\u0020Benutzerzentriertes\u0020Design,\u0020Menschzentriertes\u0020Design,\u0020Interaktionsdesign,\u0020Benutzerforschung,\u0020Benutzertests,\u0020Minimales\u0020Produkt\u0020\u0028MVP\u0029,\u0020Produkt\u0020Designer,\u0020Investorenpr\u00E4sentation,\u0020Dezentrale\u0020Anwendungen\u0020\u0028DApps\u0029,\u0020Blockchain\u002DTechnologie,\u0020Smart\u0020Contracts,\u0020Kryptow\u00E4hrung,\u0020Tokenisierung,\u0020Web3\u002DEntwicklung,\u0020Digitale\u0020Identit\u00E4t,\u0020Web3\u002DIntegrationen,\u0020Web3\u0020Wallets,\u0020Metaverse,\u0020Software\u0020als\u0020Dienst\u0020\u0028SaaS\u0029,\u0020Cloud\u002Dbasierte\u0020Software,\u0020Abonnement\u002DSoftware,\u0020SaaS\u002DL\u00F6sungen,\u0020SaaS\u002DPlattformen,\u0020SaaS\u002DIntegration,\u0020SaaS\u002DEntwicklung,\u0020SaaS\u002DSicherheit,\u0020SaaS\u002DAnalytik,\u0020SaaS\u002DImplementierung,\u0020Finanztechnologie\u0020\u0028Fintech\u0029,\u0020Digitale\u0020Bank,\u0020Online\u002DZahlungen,\u0020Mobile\u0020Geldb\u00F6rsen,\u0020Insurtech,\u0020Regtech,\u0020Neobanken,\u0020Blockchain\u0020in\u0020der\u0020Finanzwirtschaft,\u0020Peer\u002Dto\u002DPeer\u002DKredite,\u0020Finanzinnovation.\u7528\u6237\u4F53\u9A8C\u0020\u0028UX\u0029,\u0020\u7528\u6237\u754C\u9762\u0020\u0028UI\u0029,\u0020\u53EF\u7528\u6027,\u0020\u7EBF\u6846,\u0020\u89C6\u89C9\u8BBE\u8BA1\u5E08,\u0020\u539F\u578B\u5236\u4F5C,\u0020\u4FE1\u606F\u67B6\u6784,\u0020\u7528\u6237\u4E2D\u5FC3\u8BBE\u8BA1,\u0020\u4EBA\u672C\u8BBE\u8BA1,\u0020\u4E92\u52A8\u8BBE\u8BA1,\u0020\u7528\u6237\u7814\u7A76,\u0020\u7528\u6237\u6D4B\u8BD5,\u0020\u6700\u5C0F\u53EF\u884C\u4EA7\u54C1\u0020\u0028MVP\u0029,\u0020\u4EA7\u54C1\u8BBE\u8BA1\u5E08,\u0020\u6295\u8D44\u8005\u6F14\u793A,\u0020\u53BB\u4E2D\u5FC3\u5316\u5E94\u7528\u0020\u0028DApps\u0029,\u0020\u533A\u5757\u94FE\u6280\u672F,\u0020\u667A\u80FD\u5408\u7EA6,\u0020\u52A0\u5BC6\u8D27\u5E01,\u0020\u4EE3\u5E01\u5316,\u0020Web3\u5F00\u53D1,\u0020\u6570\u5B57\u8EAB\u4EFD,\u0020Web3\u96C6\u6210,\u0020Web3\u94B1\u5305,\u0020\u5143\u5B87\u5B99,\u0020\u4F5C\u4E3A\u670D\u52A1\u7684\u8F6F\u4EF6\u0020\u0028SaaS\u0029,\u0020\u4E91\u7AEF\u8F6F\u4EF6,\u0020\u8BA2\u9605\u8F6F\u4EF6,\u0020SaaS\u89E3\u51B3\u65B9\u6848,\u0020SaaS\u5E73\u53F0,\u0020SaaS\u96C6\u6210,\u0020SaaS\u5F00\u53D1,\u0020SaaS\u5B89\u5168\u6027,\u0020SaaS\u5206\u6790,\u0020SaaS\u5B9E\u65BD,\u0020\u91D1\u878D\u79D1\u6280\u0020\u0028Fintech\u0029,\u0020\u6570\u5B57\u94F6\u884C,\u0020\u7F51\u4E0A\u652F\u4ED8,\u0020\u79FB\u52A8\u94B1\u5305,\u0020\u4FDD\u9669\u79D1\u6280,\u0020\u76D1\u7BA1\u79D1\u6280,\u0020\u65B0\u5174\u94F6\u884C,\u0020\u91D1\u878D\u4E1A\u4E2D\u7684\u533A\u5757\u94FE,\u0020\u4E2A\u4EBA\u5BF9\u4E2A\u4EBA\u8D37\u6B3E,\u0020\u91D1\u878D\u521B\u65B0.Exp\u00E9rience\u0020Utilisateur\u0020\u0028UX\u0029,\u0020Interface\u0020Utilisateur\u0020\u0028UI\u0029,\u0020Utilisabilit\u00E9,\u0020Maquettes,\u0020Designer\u0020Visuel,\u0020Prototypage,\u0020Architecture\u0020de\u0020l\u0027Information,\u0020Conception\u0020Ax\u00E9e\u0020sur\u0020l\u0027Utilisateur,\u0020Conception\u0020Ax\u00E9e\u0020sur\u0020l\u0027Humain,\u0020Conception\u0020d\u0027Interaction,\u0020Recherche\u0020Utilisateur,\u0020Tests\u0020Utilisateur,\u0020Produit\u0020Minimum\u0020Viable\u0020\u0028MVP\u0029,\u0020Designer\u0020de\u0020Produits,\u0020Pr\u00E9sentation\u0020aux\u0020Investisseurs,\u0020Applications\u0020D\u00E9centralis\u00E9es\u0020\u0028DApps\u0029,\u0020Technologie\u0020Blockchain,\u0020Contrats\u0020Intelligents,\u0020Cryptomonnaie,\u0020Tokenisation,\u0020D\u00E9veloppement\u0020Web3,\u0020Identit\u00E9\u0020Num\u00E9rique,\u0020Int\u00E9grations\u0020Web3,\u0020Portefeuilles\u0020Web3,\u0020M\u00E9tavers,\u0020Logiciel\u0020en\u0020tant\u0020que\u0020Service\u0020\u0028SaaS\u0029,\u0020Logiciel\u0020Bas\u00E9\u0020sur\u0020le\u0020Cloud,\u0020Logiciel\u0020d\u0027Abonnement,\u0020Solutions\u0020SaaS,\u0020Plateformes\u0020SaaS,\u0020Int\u00E9gration\u0020SaaS,\u0020D\u00E9veloppement\u0020SaaS,\u0020S\u00E9curit\u00E9\u0020SaaS,\u0020Analyses\u0020SaaS,\u0020Mise\u0020en\u0020\u0152uvre\u0020SaaS,\u0020Technologie\u0020Financi\u00E8re\u0020\u0028Fintech\u0029,\u0020Banque\u0020Num\u00E9rique,\u0020Paiements\u0020en\u0020Ligne,\u0020Portefeuilles\u0020Mobiles,\u0020Insurtech,\u0020Regtech,\u0020N\u00E9obanques,\u0020Blockchain\u0020dans\u0020la\u0020Finance,\u0020Pr\u00EAts\u0020de\u0020Pair\u0020\u00E0\u0020Pair,\u0020Innovation\u0020Financi\u00E8re.',
    },
    {
      property: 'og\u003Adescription',
      content:
        'Transformons\u0020vos\u0020actifs\u0020num\u00E9riques\u0020pour\u0020obtenir\u0020des\u0020rendements\u0020\u00E9lev\u00E9s\u0020gr\u00E2ce\u0020\u00E0\u0020nos\u0020pratiques\u0020de\u0020UX\u0020\u00E9prouv\u00E9es\u0020et\u0020\u00E0\u0020nos\u0020sprints\u0020de\u0020conception\u0020collaboratifs.\u0020Web3,\u0020IA,\u0020Contrats\u0020Intelligents,\u0020DAO,\u0020Blockchain,\u0020NFT,\u0020DeFi.\u0020D\u00E9couvrez\u0020les\u0020meilleurs\u0020talents\u0020dans\u0020les\u0020domaines\u0020du\u0020SaaS,\u0020du\u0020Web3,\u0020du\u0020Web3\u0020Gaming\u0020et\u0020des\u0020designers\u0020UX\u0020\u0026\u0020Produits\u0020pour\u0020la\u0020Fintech.\u0020Trouvez\u0020et\u0020embauchez\u0020des\u0020experts\u0020sp\u00E9cialis\u00E9s\u0020dans\u0020la\u0020cr\u00E9ation\u0020d\u0027exp\u00E9riences\u0020utilisateur\u0020exceptionnelles\u0020et\u0020de\u0020conceptions\u0020de\u0020produits\u0020pour\u0020les\u0020domaines\u0020de\u0020pointe\u0020que\u0020sont\u0020le\u0020SaaS,\u0020le\u0020Web3,\u0020le\u0020Web3\u0020Gaming\u0020et\u0020la\u0020Fintech.\u0020\u00C9levez\u0020vos\u0020produits\u0020num\u00E9riques\u0020et\u0020restez\u0020en\u0020avance\u0020dans\u0020ces\u0020industries\u0020dynamiques\u0020gr\u00E2ce\u0020aux\u0020professionnels\u0020du\u0020design\u0020appropri\u00E9s.\u0020Ils\u0020peuvent\u0020\u00E9galement\u0020vous\u0020aider\u0020\u00E0\u0020construire\u0020des\u0020tableaux\u0020de\u0020bord,\u0020\u00E0\u0020cr\u00E9er\u0020des\u0020pages\u0020de\u0020destination,\u0020\u00E0\u0020concevoir\u0020des\u0020pr\u00E9sentations\u0020et\u0020\u00E0\u0020vous\u0020aider\u0020\u00E0\u0020d\u00E9velopper\u0020votre\u0020MVP.\u0020Obtenez\u0020le\u0020soutien\u0020complet\u0020en\u0020mati\u00E8re\u0020de\u0020conception\u0020et\u0020de\u0020d\u00E9veloppement\u0020dont\u0020vous\u0020avez\u0020besoin\u0020pour\u0020donner\u0020vie\u0020\u00E0\u0020vos\u0020id\u00E9es\u0020et\u0020r\u00E9ussir\u0020dans\u0020le\u0020paysage\u0020num\u00E9rique.',
    },
    {
      property: 'og\u003Adescription',
      content:
        '\u901A\u8FC7\u6211\u4EEC\u7ECF\u8FC7\u9A8C\u8BC1\u7684UX\u5B9E\u8DF5\u548C\u534F\u4F5C\u5F0F\u8BBE\u8BA1\u51B2\u523A\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u5C06\u60A8\u7684\u6570\u5B57\u8D44\u4EA7\u8F6C\u5316\u4E3A\u9AD8\u56DE\u62A5\u3002Web3\uFF0C\u4EBA\u5DE5\u667A\u80FD\uFF0C\u667A\u80FD\u5408\u7EA6\uFF0CDAO\uFF0C\u533A\u5757\u94FE\uFF0CNFT\uFF0CDeFi\u3002\u5728SaaS\u3001Web3\u3001Web3\u6E38\u620F\u548CFintech\u9886\u57DF\u53D1\u73B0\u9876\u5C16\u4EBA\u624D\uFF0C\u5305\u62ECUX\u548C\u4EA7\u54C1\u8BBE\u8BA1\u5E08\u3002\u627E\u5230\u5E76\u96C7\u4F63\u4E13\u4E1A\u4EBA\u58EB\uFF0C\u4ED6\u4EEC\u64C5\u957F\u4E3ASaaS\u3001Web3\u3001Web3\u6E38\u620F\u548CFintech\u7B49\u524D\u6CBF\u9886\u57DF\u6253\u9020\u5353\u8D8A\u7684\u7528\u6237\u4F53\u9A8C\u548C\u4EA7\u54C1\u8BBE\u8BA1\u3002\u63D0\u5347\u60A8\u7684\u6570\u5B57\u4EA7\u54C1\uFF0C\u901A\u8FC7\u6B63\u786E\u7684\u8BBE\u8BA1\u4E13\u4E1A\u4EBA\u5458\u5728\u8FD9\u4E9B\u5145\u6EE1\u6D3B\u529B\u7684\u884C\u4E1A\u4E2D\u4FDD\u6301\u9886\u5148\u5730\u4F4D\u3002\u4ED6\u4EEC\u8FD8\u53EF\u4EE5\u534F\u52A9\u60A8\u6784\u5EFA\u4EEA\u8868\u677F\uFF0C\u521B\u5EFA\u7740\u9646\u9875\u9762\uFF0C\u5236\u4F5C\u6F14\u793A\u6587\u7A3F\uFF0C\u5E76\u534F\u52A9\u60A8\u6784\u5EFAMVP\u3002\u83B7\u5F97\u5168\u9762\u7684\u8BBE\u8BA1\u548C\u5F00\u53D1\u652F\u6301\uFF0C\u5C06\u60A8\u7684\u521B\u610F\u4ED8\u8BF8\u5B9E\u8DF5\uFF0C\u5728\u6570\u5B57\u9886\u57DF\u53D6\u5F97\u6210\u529F\u3002',
    },
    {
      property: 'og\u003Adescription',
      content:
        'Lassen\u0020Sie\u0020uns\u0020Ihre\u0020digitalen\u0020Assets\u0020mit\u0020hohen\u0020Renditen\u0020durch\u0020bew\u00E4hrte\u0020UX\u002DPraktiken\u0020und\u0020kollaborative\u0020Design\u002DSprints\u0020transformieren.\u0020Web3,\u0020KI,\u0020Smart\u0020Contracts,\u0020DAOs,\u0020Blockchain,\u0020NFTs,\u0020DeFis.\u0020Entdecken\u0020Sie\u0020Top\u002DTalente\u0020im\u0020Bereich\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020und\u0020Fintech\u0020UX\u002D\u0020und\u0020Produkt\u002DDesigner.\u0020Finden\u0020und\u0020engagieren\u0020Sie\u0020Experten,\u0020die\u0020sich\u0020auf\u0020die\u0020Entwicklung\u0020au\u00DFergew\u00F6hnlicher\u0020Benutzererfahrungen\u0020und\u0020Produktdesigns\u0020f\u00FCr\u0020die\u0020f\u00FChrenden\u0020Bereiche\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020und\u0020Fintech\u0020spezialisiert\u0020haben.\u0020Heben\u0020Sie\u0020Ihre\u0020digitalen\u0020Produkte\u0020auf\u0020ein\u0020h\u00F6heres\u0020Niveau\u0020und\u0020bleiben\u0020Sie\u0020in\u0020diesen\u0020dynamischen\u0020Branchen\u0020mit\u0020den\u0020richtigen\u0020Designprofis\u0020immer\u0020einen\u0020Schritt\u0020voraus.\u0020Sie\u0020k\u00F6nnen\u0020Sie\u0020auch\u0020beim\u0020Erstellen\u0020von\u0020Dashboards,\u0020Landing\u0020Pages,\u0020Pitchdecks\u0020und\u0020beim\u0020Aufbau\u0020Ihres\u0020MVP\u0020unterst\u00FCtzen.\u0020Holen\u0020Sie\u0020sich\u0020die\u0020umfassende\u0020Unterst\u00FCtzung\u0020im\u0020Design\u0020und\u0020Entwicklung,\u0020die\u0020Sie\u0020ben\u00F6tigen,\u0020um\u0020Ihre\u0020Ideen\u0020zum\u0020Leben\u0020zu\u0020erwecken\u0020und\u0020im\u0020digitalen\u0020Umfeld\u0020erfolgreich\u0020zu\u0020sein',
    },
    {
      property: 'og\u003Adescription',
      content:
        'Transformemos\u0020tus\u0020activos\u0020digitales\u0020para\u0020obtener\u0020altos\u0020rendimientos\u0020con\u0020nuestras\u0020pr\u00E1cticas\u0020de\u0020UX\u0020probadas\u0020y\u0020design\u0020sprints\u0020colaborativos.\u0020Web3,\u0020IA,\u0020Contratos\u0020Inteligentes,\u0020DAO\u0027s,\u0020Blockchain,\u0020NFT\u0027s,\u0020DeFi.\u0020Descubre\u0020a\u0020los\u0020mejores\u0020talentos\u0020en\u0020el\u0020\u00E1mbito\u0020de\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020y\u0020dise\u00F1adores\u0020de\u0020UX\u0020y\u0020productos\u0020para\u0020Fintech.\u0020Encuentra\u0020y\u0020contrata\u0020a\u0020expertos\u0020especializados\u0020en\u0020crear\u0020experiencias\u0020de\u0020usuario\u0020excepcionales\u0020y\u0020dise\u00F1os\u0020de\u0020productos\u0020para\u0020los\u0020campos\u0020de\u0020vanguardia\u0020de\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020y\u0020Fintech.\u0020Eleva\u0020tus\u0020productos\u0020digitales\u0020y\u0020mantente\u0020a\u0020la\u0020vanguardia\u0020en\u0020estas\u0020din\u00E1micas\u0020industrias\u0020con\u0020los\u0020profesionales\u0020de\u0020dise\u00F1o\u0020adecuados.\u0020Tambi\u00E9n\u0020pueden\u0020ayudarte\u0020a\u0020construir\u0020paneles\u0020de\u0020control,\u0020crear\u0020p\u00E1ginas\u0020de\u0020destino,\u0020elaborar\u0020presentaciones\u0020y\u0020contribuir\u0020en\u0020la\u0020construcci\u00F3n\u0020de\u0020tu\u0020Producto\u0020M\u00EDnimo\u0020Viable\u0020\u0028MVP\u0029.\u0020Obt\u00E9n\u0020el\u0020apoyo\u0020integral\u0020en\u0020dise\u00F1o\u0020y\u0020desarrollo\u0020que\u0020necesitas\u0020para\u0020dar\u0020vida\u0020a\u0020tus\u0020ideas\u0020y\u0020triunfar\u0020en\u0020el\u0020panorama\u0020digital.',
    },
    {
      property: 'og\u003Atitle',
      content:
        'Trouvez,\u0020embauchez\u0020des\u0020concepteurs\u0020UX\u0020et\u0020de\u0020produits\u0020pour\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020et\u0020Fintech.',
    },
    {
      property: 'og\u003Atitle',
      content:
        'Encuentra,\u0020contrata\u0020dise\u00F1adores\u0020UX\u0020y\u0020de\u0020productos\u0020para\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming\u0020y\u0020Fintech.',
    },
    {
      property: 'og\u003Atitle',
      content:
        '\u5BFB\u627E\u3001\u8058\u7528SaaS\u3001Web3\u3001Web3\u6E38\u620F\u548C\u91D1\u878D\u79D1\u6280UX\u4E0E\u4EA7\u54C1\u8BBE\u8BA1\u5E08',
    },
    {
      property: 'og\u003Atitle',
      content:
        'Finde,\u0020stelle\u0020SaaS,\u0020Web3,\u0020Web3\u002DGaming\u0020und\u0020Fintech\u0020UX\u0020\u0026\u0020Produkt\u0020Designer\u0020ein',
    },
    {
      name: 'description',
      content:
        'Find,\u0020hire\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming,\u0020and\u0020Fintech\u0020UX\u0020\u0026\u0020Product\u0020Designers.\u0020',
    },
    {
      name: 'description',
      content:
        'Let\u0027s\u0020transform\u0020your\u0020digital\u0020assets\u0020with\u0020high\u0020returns\u0020with\u0020our\u0020proven\u0020UX\u0020practices\u0020and\u0020collaborative\u0020design\u0020sprints.Web3,\u0020AI,\u0020Smart\u0020Contracts\u0020DAO\u0027s\u0020Blockchain\u0020NFT\u0027s,\u0020DeFi\u0027s.\u0020Discover\u0020top\u0020talent\u0020in\u0020the\u0020realm\u0020of\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming,\u0020and\u0020Fintech\u0020UX\u0020\u0026\u0020Product\u0020Designers.\u0020Find\u0020and\u0020hire\u0020experts\u0020who\u0020specialize\u0020in\u0020crafting\u0020exceptional\u0020user\u0020experiences\u0020and\u0020product\u0020designs\u0020for\u0020the\u0020cutting\u002Dedge\u0020fields\u0020of\u0020SaaS,\u0020Web3,\u0020Web3\u0020Gaming,\u0020and\u0020Fintech.\u0020Elevate\u0020your\u0020digital\u0020products\u0020and\u0020stay\u0020ahead\u0020in\u0020these\u0020dynamic\u0020industries\u0020with\u0020the\u0020right\u0020design\u0020professionals.\u0020They\u0020can\u0020also\u0020assist\u0020you\u0020in\u0020building\u0020dashboards,\u0020creating\u0020landing\u0020pages,\u0020crafting\u0020pitch\u0020decks,\u0020and\u0020helping\u0020you\u0020build\u0020your\u0020MVP.\u0020Get\u0020the\u0020comprehensive\u0020design\u0020and\u0020development\u0020support\u0020you\u0020need\u0020to\u0020bring\u0020your\u0020ideas\u0020to\u0020life\u0020and\u0020succeed\u0020in\u0020the\u0020digital\u0020landscape.',
    },
  ],
  link: [],
  style: [],
  script: [
    {
      type: 'text/javascript',
      innerHTML:
        '\u003Cscript\u0020type\u003D\u0022text/javascript\u0022\u003E\u0020\u0020\u0020\u0020\u0028function\u0028c,l,a,r,i,t,y\u0029\u007B\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020c\u005Ba\u005D\u003Dc\u005Ba\u005D\u007C\u007Cfunction\u0028\u0029\u007B\u0028c\u005Ba\u005D.q\u003Dc\u005Ba\u005D.q\u007C\u007C\u005B\u005D\u0029.push\u0028arguments\u0029\u007D\u003B\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020t\u003Dl.createElement\u0028r\u0029\u003Bt.async\u003D1\u003Bt.src\u003D\u0022https\u003A//www.clarity.ms/tag/\u0022\u002Bi\u003B\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020y\u003Dl.getElementsByTagName\u0028r\u0029\u005B0\u005D\u003By.parentNode.insertBefore\u0028t,y\u0029\u003B\u0020\u0020\u0020\u0020\u007D\u0029\u0028window,\u0020document,\u0020\u0022clarity\u0022,\u0020\u0022script\u0022,\u0020\u0022gmrwt2ie6l\u0022\u0029\u003B\u003C/script\u003E',
    },
  ],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className='relative bg-white z-50 py-4'>
            <div className='container px-4 mx-auto'>
              <div className='flex items-center relative rounded-xl'>
                <a className='inline-block text-lg font-bold' href='index.html'>
                  <img
                    className='h-20'
                    src='images/OktoLogo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <div className='xl:hidden ml-auto'>
                  <button className='navbar-burger flex w-12 h-12 items-center justify-center hover:bg-gray-200 rounded-md transition duration-200'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3 12H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 6H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 18H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <ul className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-10'>
                  <li className='group relative'>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='index.html'
                    >
                      Home
                    </a>
                    <div className='hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50'>
                      <div className='-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45' />
                      <div className='w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4'>
                        <div className='pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            Featured
                          </a>
                          <a
                            className='block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            Solutions
                          </a>
                        </div>
                        <div className='pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-download.svg'
                              alt=''
                            />
                            <span className='ml-3'>Download</span>
                          </a>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-slack.svg'
                              alt=''
                            />
                            <span className='ml-3'>Community</span>
                          </a>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-help.svg'
                              alt=''
                            />
                            <span className='ml-3'>Help</span>
                          </a>
                        </div>
                        <div className='flex items-center pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='inline-block px-4 py-3 mr-6 text-sm font-semibold text-orange-900 hover:text-gray-900'
                            href='connect.html'
                          >
                            Connect
                          </a>
                          <a
                            className='inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200'
                            href='#'
                          >
                            Create an account
                          </a>
                        </div>
                        <div className='flex items-center'>
                          <div className='flex w-10 h-10 items-center justify-center bg-orange-50 rounded-full'>
                            <img
                              src='saturn-assets/images/headers/icon-email-me.svg'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <span className='block text-xs text-gray-500'>
                              Drop us a line
                            </span>
                            <a
                              className='text-sm font-semibold text-black hover:text-orange-900'
                              href='#'
                            >
                              hello@shuffle.dev
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='ux-design-team-story.html'
                    >
                      Our Ethos
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='ux-design-process.html'
                    >
                      Methodology
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                <div className='hidden xl:block ml-auto'>
                  <div className='flex items-center'>
                    <a
                      className='inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900'
                      href='ux-blog.html'
                    >
                      News &amp; Insights
                    </a>
                    <a
                      className='relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300'
                      href='connect.html'
                    >
                      <div className='absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500 font-sans rounded-xl' />
                      <span className='relative font-bold'>CONNECT &amp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 hidden'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-16'>
                <a
                  className='mr-auto text-2xl font-medium leading-none'
                  href='#'
                >
                  <img
                    className='h-10'
                    src='images/OktoLogo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <button className='navbar-close'>
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul className='mb-2'>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='index.html'
                      contentEditable='false'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='ux-design-team-story.html'
                      contentEditable='false'
                    >
                      Our Ethos
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='ux-design-process.html'
                    >
                      Methodology
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                <div className='py-8 px-6 mb-6 border-t border-b border-gray-200'>
                  <a
                    className='flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600'
                    href='connect.html'
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox='0 0 18 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-3' contentEditable='false'>
                      Connect&nbsp;
                    </span>
                  </a>
                </div>
                <div>
                  <div className='flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full'>
                    <svg
                      width={29}
                      height={28}
                      viewBox='0 0 29 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                  <span className='block mb-3 text-sm text-gray-500'>
                    Drop us a line
                  </span>
                  <a
                    className='font-semibold text-black'
                    href='#'
                    contentEditable='false'
                  >
                    hello@oktopeople.com
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='bg-white'>
          <div className='container mx-auto overflow-hidden'></div>
          <div className='overflow-hidden pt-10 bg-white'>
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full md:w-1/2 m-0 p-10'>
                  <span
                    className='inline-block py-1 px-3 font-semibold text-orange-900 bg-orange-50 rounded-full text-xs mb-5 font-black text-base'
                    contentEditable='false'
                    data-gramm='false'
                    wt-ignore-input='true'
                    data-quillbot-element='PMSS_NrmGYps0CVbJbuQA'
                  >
                    👋 WEB3 UX DESIGN PARTNER <br />
                  </span>
                  <h1
                    className='font-bold tracking-tight leading-10 pt-2 font-serif'
                    contentEditable='false'
                  >
                    <span data-metadata='<!--(figmeta)eyJmaWxlS2V5IjoiWjJDM2dJaW9BWVo5WjlFNkt6Y1VQZiIsInBhc3RlSUQiOjE4OTQ2NDYxMDIsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)-->' />
                    <span data-buffer='<!--(figma)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(/figma)-->' />
                    <span
                      style={{ whiteSpace: 'pre-wrap' }}
                      className='font-heading ease-in duration-300 transform leading-12 text-5xl xs:text-6xl md:text-7xl'
                      contentEditable='false'
                    >
                      We design the future.{' '}
                    </span>
                  </h1>
                  <p className='text-lg font-medium leading-normal mx-auto text-2xl md:max-w-1xl mt-2'>
                    Let's transform your digital assets with high returns with
                    our proven UX practices.
                  </p>
                  <p
                    className='mb-11 text-lg text-gray-900 font-medium md:max-w-md'
                    contentEditable='false'
                  />
                  <div className='flex flex-wrap ml-0 pl-0'>
                    <div className='w-full md:w-auto'>
                      <div className='block'>
                        <button
                          className='w-full text-white focus:ring transition ease-in-out duration-200 font-bold pointer-events-auto py-5 px-7 bg-red-800 rounded rounded-xl'
                          type='button'
                          contentEditable='false'
                        >
                          {' '}
                          <a
                            className='text-white hover:text-gray-200 hover:no-underline font-extrabold'
                            href='https://calendly.com/oktopeople/30min'
                            contentEditable='false'
                            data-gramm='false'
                            wt-ignore-input='true'
                            data-quillbot-element='5Tc9R7GUGwQ0tDEZ8vXwB'
                          >
                            BOOK A MEETING &amp;
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className='w-full md:w-auto'>
                      <div className='block'></div>
                    </div>
                  </div>
                  <div className='w-80'>
                    <div className='pt-5'></div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 pt-2 transform animate-moving transition-opacity'>
                  <img
                    className='transform transition ease-in-out duration-1000 hover:-translate-y-4 mb-8 z-30 relat'
                    src='images/oktopeople11-1.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative overflow-hidden py-10'>
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-wrap -mx-4 mb-18 items-center'>
                <div className='w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0'>
                  <div>
                    <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900'>
                      <span>Industry</span>
                      <span className='font-serif italic'>Expertise</span>
                    </h1>
                  </div>
                </div>
                <div className='w-full xl:w-1/2 px-4'>
                  <div className='max-w-sm lg:ml-auto max-w-xl'>
                    <p
                      className='text-lg text-gray-500 font-black'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='nyOEM2ka-RlMVA7BS3i88'
                    >
                      At the core of our expertise lie high-tech solutions such
                      as SaaS, PaaS, Marketplaces, utility dashboards,
                      complemented by our experience in Finance,
                      Edtech,&nbsp;E-com, Automotive, Prop Tech, and Wellness
                      Sports Tech.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full xl:w-1/2 px-4 mb-8 xl:mb-0'>
                  <div className='relative h-100 md:h-125'>
                    <img
                      className='block h-full w-full rounded-3xl object-cover'
                      src='images/okto.svg'
                      alt=''
                    />
                    <div
                      className='absolute top-0 left-0 h-full w-full p-8 md:p-12 transition-colors right-200'
                      contentEditable='false'
                    >
                      <div
                        className='flex flex-col items-start justify-between h-full max-w-sm'
                        contentEditable='false'
                      >
                        <div>
                          <h3
                            className='text-3xl md:text-4xl text-white font-semibold'
                            contentEditable='false'
                            data-gramm='false'
                            wt-ignore-input='true'
                            data-quillbot-element='n5uqHCVDlOX56Yr97-XzZ'
                          >
                            Web3, Fintech, AI, Smart Contracts DAO's NFT's &amp;
                            DeFi's
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full xl:w-1/2 px-4'>
                  <div className='flex flex-wrap h-full -mx-4'>
                    <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                      <div className='flex flex-col h-full'>
                        <a
                          className='relative block h-full mb-7 pt-8 px-8 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200 pb-5 bg-indigo-50 hover:bg-indigo-100'
                          href='connect.html'
                        >
                          <div className='flex flex-col h-full justify-between max-w-sm'>
                            <p className='text-sm mb-10 md:mb-6 font-semibold text-base text-gray-700'>
                              High tech, software startups, SaaS, PaaS
                              Marketplace, minimal utility
                              dashboards.&nbsp;&nbsp;
                            </p>
                            <span className='text-3xl font-semibold text-gray-900'>
                              B2B-SaaS
                            </span>
                          </div>
                          <img
                            className='absolute bottom-0 right-0 m-5'
                            src='saturn-assets/images/features/arrow.svg'
                            alt=''
                          />
                        </a>
                        <a
                          className='relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 transition duration-200 bg-indigo-50 hover:bg-indigo-100'
                          href='#'
                        >
                          <div className='flex flex-col h-full justify-between max-w-sm text-base'>
                            <p className='mb-10 md:mb-6 font-semibold text-base text-gray-700'>
                              E-com, adtech, hospitality, HealthTech, Wellness,
                              SportsTech, FemTech
                            </p>
                            <span className='text-3xl font-semibold text-gray-900'>
                              B2C Consumer
                            </span>
                          </div>
                          <img
                            className='absolute bottom-0 right-0 m-5'
                            src='saturn-assets/images/features/arrow.svg'
                            alt=''
                          />
                        </a>
                      </div>
                    </div>
                    <div className='w-full md:w-1/2 px-4'>
                      <a
                        className='relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-orange-50 transition duration-200 bg-indigo-50 hover:bg-indigo-100'
                        href='connect.html'
                      >
                        <div className='flex h-full flex-col items-start justify-between max-w-sm text-base'>
                          <p className='text-sm mb-10 md:mb-6 font-semibold text-base text-gray-700'>
                            EdTech, HRTech, PropTech, Creator Economy, Venture
                            Capital, Portfolio Management
                          </p>
                          <span className='text-3xl font-semibold text-gray-900'>
                            Other Verticals
                          </span>
                        </div>
                        <img
                          className='absolute bottom-0 right-0 m-5'
                          src='saturn-assets/images/features/arrow.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative overflow-hidden border-dotted pt-5 pb-20'>
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-md lg:max-w-7xl mx-auto'>
              <div className='flex flex-wrap -mx-4 items-center mb-10'>
                <div className='w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0'>
                  <div className='max-w-lg'>
                    <span className='inline-block py-1 px-3 mb-4 text-xs text-orange-900 bg-orange-50 rounded-full text-base mb-5 font-black'>
                      EXCELLENCE SINCE 2015 &amp;
                    </span>
                    <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900'>
                      <span>Magnificent Case</span>
                      <span className='font-serif italic'>Studies</span>
                    </h1>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 xl:w-1/2 px-4'>
                  <div className='max-w-lg lg:ml-auto'>
                    <p className='text-lg text-gray-500 font-bold mt-10'>
                      Creating jaw-dropping user experiences requires a holistic
                      perspective and a multi-disciplinary team that can
                      translate market demands with business requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                  <div>
                    <img
                      className='block mb-6 w-full h-100'
                      src='images/case-study1111-p.svg'
                      alt=''
                    />
                    <div>
                      <h3 className='text-3xl font-semibold mb-5'>
                        Contributed to Papara's 10X revenue growth&nbsp;
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                  <div>
                    <img
                      className='block mb-6 w-full h-100'
                      src='images/case-study222.svg'
                      alt=''
                    />
                    <div>
                      <h3 className='text-3xl font-semibold mb-5'>
                        95% Success rate on delivering the projects{' '}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div>
                    <img
                      className='block mb-6 w-full h-100'
                      src='images/case-study333-1.svg'
                      alt=''
                    />
                    <div>
                      <h3 className='text-3xl font-semibold mb-5'>
                        Contributed to Modanisa's +221% ROI&nbsp;
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='container mx-auto overflow-hidden'></div>
          <div className='pt-10 bg-indigo-900 pb-20'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap px-4'>
                <div
                  className='w-full mt-20 text-white md:w-1/2 leading-10 pr-4'
                  contentEditable='false'
                >
                  <h1 className='font-bold'>
                    <span data-metadata='<!--(figmeta)eyJmaWxlS2V5IjoiWjJDM2dJaW9BWVo5WjlFNkt6Y1VQZiIsInBhc3RlSUQiOjE4OTQ2NDYxMDIsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)-->' />
                    <span data-buffer='<!--(figma)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(/figma)-->' />
                    <span
                      style={{ whiteSpace: 'pre-wrap' }}
                      className='font-sans font-heading text-5xl xs:text-6xl md:text-7xl font-bold w-max'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='MMq7Xvf8fG6gNaX5yvx9s'
                    >
                      User Research{' '}
                    </span>
                  </h1>
                  <h6
                    className='font-heading text-white tracking-px mt-5 inline-block font-extrabold mb-2'
                    contentEditable='false'
                  >
                    IS OUR NORTH STAR ✦
                  </h6>
                  <div contentEditable='false' className='text-2xl'>
                    As experienced tech workers, we've consistently applied UX
                    best practices in projects of all sizes, driven by user
                    research and Agile Scrum processes. We've also crafted a
                    unique system to define our industry, business model, and
                    success metrics, setting us apart from competitors.
                    <br />
                  </div>
                  <p />
                  <p
                    className='mb-11 text-lg text-gray-900 font-medium md:max-w-md'
                    contentEditable='false'
                  />
                  <div className='flex flex-wrap -m-2.5 mb-5'>
                    <div className='w-full md:w-auto p-2.5'>
                      <div className='block'>
                        <div className='block'>
                          <button
                            className='w-full text-white focus:ring transition ease-in-out duration-200 font-bold pointer-events-auto bg-red-800 rounded px-7 py-3 rounded-xl'
                            type='button'
                            contentEditable='false'
                          >
                            {' '}
                            <a
                              className='text-white hover:text-gray-200 hover:no-underline font-extrabold'
                              href='ux-process.html'
                              contentEditable='false'
                              data-gramm='false'
                              wt-ignore-input='true'
                              data-quillbot-element='5Tc9R7GUGwQ0tDEZ8vXwB'
                            >
                              LEARN MORE&nbsp; &amp;
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 relative mt-10'>
                  <img
                    className='transition duration-1000 hover:-translate-y-4 ease-in-out transform'
                    src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/Frame-753-4.svg'
                    alt='okto image'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='container mx-auto'>
          <section className='bg-white overflow-hidden pt-0'>
            <div className='inline-block w-full'>
              <h2
                className='mb-5 font-bold font-heading text-center tracking-px-n leading-none pt-20 text-5xl text-gray-900 ease-in duration-300 transform leading-12 xs:text-6xl md:text-7xl'
                contentEditable='false'
              >
                Trusted by{' '}
              </h2>
              <div className='max-w-6xl mx-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <img
                      className='mx-auto'
                      src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/Sharpe.svg'
                      alt=''
                    />
                  </div>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <img
                      className='mx-auto'
                      src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/e-residency-1.svg'
                      alt=''
                    />
                  </div>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <img
                      className='mx-auto p-3'
                      src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/startupfon1.svg'
                      alt=''
                    />
                  </div>
                  <div
                    className='w-full sm:w-1/2 lg:w-1/4 inline-block p-4'
                    contentEditable='false'
                  >
                    <img
                      className='mx-auto p-3'
                      src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/papara-2-1.svg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='max-w-max mx-auto'>
                <a
                  className='inline-flex items-center text-indigo-600 hover:text-indigo-700'
                  href='#'
                ></a>
              </div>
            </div>
            <section className='p-0'>
              <div className='mx-auto container'>
                <div className='text-center max-w-lg mx-auto container px-4'>
                  <h2 className='mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight' />
                  <p
                    className='text-lg text-gray-600 font-medium text-2xl mb-10 mb-16 w-full'
                    contentEditable='false'
                  >
                    We have tackled dozens of design problems for our local and
                    global clients with genuine passion.&nbsp;&nbsp; What are
                    your future plans?
                  </p>
                  <div className='mb-11 md:inline-block'>
                    <button
                      className='py-4 w-full text-white font-semibold border focus:ring focus:ring-indigo-300 transition ease-in-out duration-200 shadow-2xl px-8 bg-black pb-5 font-bold font-black hover:bg-red-800 bg-purple-800 rounded rounded-xl'
                      type='button'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-parent='TMgY8oeRBEHIt4zTnNMZA'
                    >
                      <quillbot-extension-highlights
                        data-element-id='TMgY8oeRBEHIt4zTnNMZA'
                        data-element-type='html'
                        style={{
                          position: 'relative',
                          top: 0,
                          left: 0,
                          zIndex: '1 !important',
                          pointerEvents: 'none',
                        }}
                      />
                      <a
                        href='connect.html'
                        contentEditable='false'
                        data-gramm='false'
                        wt-ignore-input='true'
                        data-quillbot-element='TMgY8oeRBEHIt4zTnNMZA'
                      >
                        LET'S TALK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <section className='relative lg:pb-36 bg-gray-50 overflow-hidden py-20'>
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-wrap -mx-4 items-center mb-10'>
                <div className='w-full lg:w-2/3 px-4 lg:mb-0'>
                  <span className='inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full font-bold'>
                    TESTIMONIALS
                  </span>
                  <h1 className='font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4 ease-in duration-300 transform leading-12 md:text-7xl'>
                    <span className='mb-5 font-bold font-heading text-center tracking-px-n leading-none pt-20 text-5xl text-gray-900 ease-in duration-300 transform leading-12 xs:text-6xl md:text-7xl'>
                      What our clients
                    </span>
                    <span className='font-serif italic'>said</span>
                  </h1>
                </div>
                <div className='w-full lg:w-1/3 px-4'></div>
              </div>
              <div className='max-w-5xl mx-auto'>
                <div className='flex mb-8 items-center'>
                  <img
                    className='block h-5 w-5 mr-1.5'
                    src='saturn-assets/images/testimonials/star.svg'
                    alt=''
                  />
                  <img
                    className='block h-5 w-5 mr-1.5'
                    src='saturn-assets/images/testimonials/star.svg'
                    alt=''
                  />
                  <img
                    className='block h-5 w-5 mr-1.5'
                    src='saturn-assets/images/testimonials/star.svg'
                    alt=''
                  />
                  <img
                    className='block h-5 w-5 mr-1.5'
                    src='saturn-assets/images/testimonials/star.svg'
                    alt=''
                  />
                  <img
                    className='block h-5 w-5'
                    src='saturn-assets/images/testimonials/star.svg'
                    alt=''
                  />
                </div>
                <p className='text-xl sm:text-2xl md:text-4xl text-gray-900 font-semibold mb-10'>
                  "OktoPeople demonstrates remarkable adaptability as a UX &amp;
                  Product team, seamlessly integrating into our organization and
                  effectively functioning as an extension of our in-house design
                  team."
                </p>
                <div className='flex items-center'>
                  <img
                    className='block w-14 h-14 rounded-full'
                    src='images/sami-guzel.png'
                    alt=''
                  />
                  <div className='ml-5'>
                    <span className='block text-lg font-semibold leading-none mb-1 text-base font-black text-2xl'>
                      Sami Güzel
                    </span>
                    <span className='block text-gray-500 Text-base font-black'>
                      Founder, CEO &amp; CTO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative overflow-hidden bg-gray-50'>
          <img
            className='absolute top-0 left-0 mt-44'
            src='saturn-assets/images/faq/light-blue-left.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <div className='text-center mb-16'>
                <span className='inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full font-bold'>
                  BEST FOR ENTERPRISE &amp; SCALE-UPS
                </span>
                <h1 className='font-heading xs:text-6xl md:text-7xl font-bold text-gray-900 ease-in duration-300 transform'>
                  <span
                    contentEditable='true'
                    data-gramm='false'
                    wt-ignore-input='true'
                    data-quillbot-element='JEd30VOYXXHFO3yjtTenC'
                    className='mb-5 font-bold font-heading text-center tracking-px-n leading-none pt-20 text-5xl text-gray-900 ease-in duration-300 transform leading-12 xs:text-6xl md:text-7xl'
                  >
                    Premium Offers
                  </span>
                  <span
                    className='font-serif italic text-5xl'
                    contentEditable='false'
                    data-gramm='false'
                    wt-ignore-input='true'
                    data-quillbot-element='M5GLRrE91JzAdy_HqXfw_'
                  >
                    enterprise
                  </span>
                </h1>
              </div>
              {/*SERVICES SECTION*/}
              <div className='relative container mx-auto rounded-4xl'>
                <div className='max-w-md md:max-w-none mb-6 rounded-3xl mx-auto bg-white shadow-lg'>
                  <div className='absolute top-0 left-0 -mt-50 -ml-32 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl' />
                  <div className='relative sm:max-w-md md:max-w-3xl mx-auto mb-8 rounded-3xl overflow-hidden bg-white w-max max-w-lg p-8 md:max-w-5xl'>
                    <div
                      className='absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md group-hover:bg-violet-400 group-hover:bg-opacity-100 transition duration-150 max-w-md mx-auto px-12 py-8 mb-6 bg-white rounded-3xl shadow-lg container'
                      contentEditable='false'
                    />
                    <div className='relative flex md:flex-nowrap items-center'>
                      <div className='w-full md:w-auto px-4 mb-8 md:mb-0 md:max-w-3xl flex mx-auto'>
                        <div className='sm:flex items-center'>
                          <img
                            src='https://static.shuffle.dev/uploads/files/32/32e116e20f059b6233a59f4812c5ae295c2bbfb2/icon-analysis-2.png'
                            alt=''
                            className='w-40'
                          />
                          <div className='max-w-xs mt-3 sm:mt-0 sm:ml-8'>
                            <h3 className='text-3xl font-medium font-black'>
                              Basic
                            </h3>
                            <p className='font-base font-medium'>
                              Simply dummy text of the printing and typesetting
                              industry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='w-full md:w-auto ml-auto flex-shrink-0 px-4'>
                        <div data-quillbot-parent='pRRLssWxiY7nCg1ODLUQo'>
                          <quillbot-extension-highlights
                            data-element-id='pRRLssWxiY7nCg1ODLUQo'
                            data-element-type='html'
                            style={{
                              position: 'relative',
                              top: 0,
                              left: 0,
                              zIndex: '1 !important',
                              pointerEvents: 'none',
                            }}
                          />
                          <span
                            className='block mb-3 text-4xl font-medium font-black'
                            contentEditable='false'
                            data-gramm='false'
                            wt-ignore-input='true'
                            data-quillbot-element='pRRLssWxiY7nCg1ODLUQo'
                          >
                            $2-5K
                          </span>
                          <a
                            className='group inline-flex w-auto h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-violet-500 hover:bg-white transition duration-200 rounded-full mt-5 bg-gray-50 bg-gray-100'
                            href='#'
                          >
                            <span className='mr-2 font-bold'>DETAILS</span>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z'
                                fill='currentColor'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-18 bg-white rounded-4xl shadow-lg sm:pt-24 sm:px-20 px-8 pt-18'>
                <button
                  className='mb-8 pb-8 group items-start justify-between border-b border-gray-100 text-left flex w-full'
                  contentEditable='false'
                >
                  <div className='pr-0'>
                    <h3 className='text-xl font-semibold mb-3 group-hover:text-orange-900'>
                      Let's improve or re-design your existing service, brand
                      with a design system
                    </h3>
                  </div>
                  <div className='pt-1'>
                    <span>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group items-start justify-between border-b border-gray-100 text-left max-w-8xl'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3
                      className='text-xl font-semibold text-black group-hover:text-orange-900'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='pHRaadJ1n-F00W_spoukr'
                    >
                      Let's understand your customer’s motives with user
                      research
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden' />
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3
                      className='text-xl font-semibold text-black group-hover:text-orange-900'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='s-keA3mgDgFIJV2KtrDZM'
                    >
                      Let's refine your existing and future product road map
                      with our strategic advising
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden' />
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's kick start ideation workshops and UX Design
                      Trainings
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                        className=''
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's fill open positions with our recruitment service of
                      UX and Tech talents.
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                        className=''
                      />
                    </span>
                  </div>
                </button>
                <button className='flex group w-full items-start justify-between text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Hire Frictional Product Owner or Designer on a monthly
                      basis
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        width={17}
                        height={16}
                        viewBox='0 0 17 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 overflow-hidden bg-gray-50'>
          <img
            className='absolute top-0 left-0 mt-44'
            src='saturn-assets/images/faq/light-blue-left.png'
            alt=''
          />
          <img
            className='absolute top-0 right-0'
            src='saturn-assets/images/faq/star-right.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <div className='text-center mb-16'>
                <span className='inline-block py-1 px-3 mb-4 text-xs text-orange-900 bg-orange-50 rounded-full font-bold'>
                  BEST FOR SMALL &amp; MEDIUM BUSINESS&nbsp;
                </span>
                <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 ease-in duration-300 transform leading-12'>
                  <span className='mb-5 font-bold font-heading text-center tracking-px-n leading-none pt-20 text-5xl text-gray-900 ease-in duration-300 transform leading-12 xs:text-6xl md:text-7xl'>
                    Startup Offers{' '}
                  </span>
                  <span className='font-serif italic text-5xl'>
                    small business
                  </span>
                </h1>
              </div>
              <div className='pt-18 sm:pt-24 px-8 sm:px-20 pb-18 bg-white rounded-4xl shadow-lg'>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold mb-3 group-hover:text-orange-900 text-black'>
                      Let's create a new digital product or service from scratch
                      for your startup{' '}
                    </h3>
                  </div>
                  <div className='pt-1'>
                    <span>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's refine or re-design your existing user interface
                      designs
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        width={17}
                        height={16}
                        viewBox='0 0 17 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='max-w-xl pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's put together your Investor pitch deck and one-pager
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        width={17}
                        height={16}
                        viewBox='0 0 17 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's empower your product team with our strategic
                      advising &amp; UX best practices
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        width={17}
                        height={16}
                        viewBox='0 0 17 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
                <button className='flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left'>
                  <div className='pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's launch your website in hours and build your sales,
                      landing pages
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'></span>
                  </div>
                </button>
                <button className='flex group w-full items-start justify-between text-left'>
                  <div className='pr-0 max-w-8xl'>
                    <h3 className='text-xl font-semibold text-black group-hover:text-orange-900'>
                      Let's build stunning Front-end SaaS Dashboard or Sales
                      page with React, Bulma, Bootstrap or Tailwind responsive
                      pages
                    </h3>
                    <p className='hidden group-hover:block mt-3 text-lg text-gray-500'>
                      Pretium ac auctor quis urna orci feugiat. Vulputate tellus
                      velit tellus orci auctor vel nulla facilisi ut. Ante nunc
                      risus viverra vivamus. Eros amet at lectus ac ac nibh
                      dignissim.
                    </p>
                  </div>
                  <div className='pt-1'>
                    <span className='hidden group-hover:block'>
                      <svg
                        width={17}
                        height={3}
                        viewBox='0 0 17 3'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z'
                          fill='#FF460C'
                        />
                      </svg>
                    </span>
                    <span className='block group-hover:hidden'>
                      <svg
                        width={17}
                        height={16}
                        viewBox='0 0 17 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 md:py-32 overflow-hidden'>
          <img
            className='absolute top-0 left-0 md:mt-24'
            src='saturn-assets/images/contact/dots-side-1.svg'
            alt=''
          />
          <img
            className='absolute bottom-0 right-0 mb-8 lg:mb-24'
            src='saturn-assets/images/contact/dots-side-2.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-2xl mx-auto mb-18 text-center'>
              <h1 className='font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4 ease-in duration-300 transform leading-12 md:text-7xl'>
                <span>Anything unclear or</span>
                <span className='font-serif italic'>need help</span>
                <span>?</span>
              </h1>
              <p className='text-xl text-gray-500 font-semibold'>
                We'll respond to you within a maximum of 48 hours.
              </p>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0'>
                <div
                  className='max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl'
                  contentEditable='false'
                >
                  <div className='max-w-2xs mx-auto text-center'>
                    <img
                      className='block mx-auto mb-3'
                      src='saturn-assets/images/contact/icon-orange-email.svg'
                      alt=''
                    />
                    <h5 className='text-2xl font-bold text-gray-900 mb-3'>
                      Contact Us
                    </h5>
                    <p className='text-gray-500 mb-3 font-black'>
                      Contact us to seek help from us, we will help you as soon
                      as possible
                    </p>
                    <span className='block text-sm text-orange-900 mb-8 font-extrabold text-base'>
                      hello@oktopeople.com
                    </span>
                    <a
                      className='relative group inline-block py-4 px-6 text-white font-semibold rounded-full overflow-hidden bg-red-800'
                      href='connect.html'
                    >
                      <div className='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500' />
                      <div className='relative flex items-center justify-center'>
                        <span className='mr-4 font-bold'>Contact</span>
                        <span>
                          <svg
                            width={8}
                            height={12}
                            viewBox='0 0 8 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z'
                              fill='#FAFBFC'
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-auto px-4 xl:px-10'>
                <div className='max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl'>
                  <div className='max-w-2xs mx-auto text-center'>
                    <img
                      className='block mx-auto mb-3'
                      src='saturn-assets/images/contact/icon-orange-headphones.svg'
                      alt=''
                    />
                    <h5 className='text-2xl font-bold text-gray-900 mb-3'>
                      Customer Service
                    </h5>
                    <p className='text-gray-500 mb-3 font-black'>
                      Contact us to seek help from us, we will help you as soon
                      as possible
                    </p>
                    <span className='block text-sm text-orange-900 mb-8 font-extrabold text-base'>
                      +90 5392494569
                    </span>
                    <a
                      className='relative group inline-block py-4 px-6 text-white font-semibold bg-red-800 rounded-full overflow-hidden'
                      href='connect.html'
                    >
                      <div className='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500' />
                      <div className='relative flex items-center justify-center'>
                        <span className='mr-4 font-bold'>Call Now</span>
                        <span>
                          <svg
                            width={21}
                            height={20}
                            viewBox='0 0 21 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17.94 11C17.72 11 17.49 10.93 17.27 10.88C16.8245 10.7818 16.3867 10.6515 15.96 10.49C15.4961 10.3212 14.9861 10.33 14.5283 10.5146C14.0705 10.6992 13.6971 11.0466 13.48 11.49L13.26 11.94C12.286 11.3982 11.391 10.7252 10.6 9.93999C9.81476 9.14901 9.14182 8.25399 8.59999 7.27999L9.01999 6.99999C9.46336 6.78291 9.81078 6.40952 9.99539 5.95168C10.18 5.49384 10.1888 4.9839 10.02 4.51999C9.86122 4.09241 9.73093 3.65479 9.62999 3.20999C9.57999 2.98999 9.53999 2.75999 9.50999 2.52999C9.38856 1.82561 9.01962 1.18773 8.46962 0.731229C7.91961 0.274727 7.22469 0.029599 6.50999 0.0399902H3.50999C3.07903 0.0359436 2.65224 0.124804 2.2587 0.300521C1.86516 0.476238 1.5141 0.734686 1.22942 1.05827C0.944745 1.38186 0.733129 1.76298 0.608982 2.1757C0.484835 2.58842 0.451073 3.02305 0.509994 3.44999C1.04273 7.63937 2.95602 11.5319 5.94765 14.5126C8.93927 17.4934 12.8387 19.3925 17.03 19.91H17.41C18.1474 19.9111 18.8594 19.6405 19.41 19.15C19.7264 18.867 19.9791 18.5202 20.1515 18.1323C20.3238 17.7444 20.412 17.3244 20.41 16.9V13.9C20.3977 13.2054 20.1448 12.5365 19.6943 12.0077C19.2439 11.4788 18.6238 11.1226 17.94 11V11ZM18.44 17C18.4398 17.142 18.4094 17.2823 18.3508 17.4116C18.2922 17.5409 18.2067 17.6563 18.1 17.75C17.9904 17.8498 17.86 17.9241 17.7181 17.9673C17.5763 18.0106 17.4267 18.0217 17.28 18C13.5349 17.5198 10.0562 15.8065 7.39271 13.1303C4.72919 10.4541 3.0324 6.96733 2.56999 3.21999C2.55408 3.07351 2.56803 2.92532 2.611 2.78438C2.65397 2.64344 2.72506 2.51268 2.81999 2.39999C2.9137 2.29332 3.02906 2.20783 3.15837 2.14921C3.28769 2.09058 3.42801 2.06017 3.56999 2.05999H6.56999C6.80254 2.05482 7.02962 2.13087 7.21214 2.27506C7.39466 2.41925 7.5212 2.62256 7.56999 2.84999C7.60999 3.12332 7.65999 3.39332 7.71999 3.65999C7.83551 4.18713 7.98925 4.70517 8.17999 5.20999L6.77999 5.85999C6.66029 5.91491 6.55262 5.99294 6.46315 6.08959C6.37369 6.18624 6.30419 6.2996 6.25867 6.42318C6.21314 6.54677 6.19247 6.67812 6.19784 6.80971C6.20322 6.9413 6.23453 7.07054 6.28999 7.18999C7.72919 10.2727 10.2072 12.7508 13.29 14.19C13.5335 14.29 13.8065 14.29 14.05 14.19C14.1747 14.1454 14.2893 14.0764 14.3872 13.9872C14.485 13.8979 14.5642 13.7901 14.62 13.67L15.24 12.27C15.757 12.4549 16.2846 12.6085 16.82 12.73C17.0867 12.79 17.3567 12.84 17.63 12.88C17.8574 12.9288 18.0607 13.0553 18.2049 13.2378C18.3491 13.4204 18.4252 13.6474 18.42 13.88L18.44 17ZM17.5 7.99999C17.7652 7.99999 18.0196 7.89463 18.2071 7.7071C18.3946 7.51956 18.5 7.26521 18.5 6.99999V2.99999C18.5 2.73477 18.3946 2.48042 18.2071 2.29288C18.0196 2.10535 17.7652 1.99999 17.5 1.99999C17.2348 1.99999 16.9804 2.10535 16.7929 2.29288C16.6054 2.48042 16.5 2.73477 16.5 2.99999V6.99999C16.5 7.26521 16.6054 7.51956 16.7929 7.7071C16.9804 7.89463 17.2348 7.99999 17.5 7.99999ZM13.5 7.99999C13.7652 7.99999 14.0196 7.89463 14.2071 7.7071C14.3946 7.51956 14.5 7.26521 14.5 6.99999V2.99999C14.5 2.73477 14.3946 2.48042 14.2071 2.29288C14.0196 2.10535 13.7652 1.99999 13.5 1.99999C13.2348 1.99999 12.9804 2.10535 12.7929 2.29288C12.6054 2.48042 12.5 2.73477 12.5 2.99999V6.99999C12.5 7.26521 12.6054 7.51956 12.7929 7.7071C12.9804 7.89463 13.2348 7.99999 13.5 7.99999Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <iframe
          id='softr-007a962a-6808-4d38-b990-987bb5961833-cta4'
          src='https://madaline953.softr.app/embed/pages/007a962a-6808-4d38-b990-987bb5961833/blocks/cta4'
          width='100%'
          height={420}
          scrolling='no'
          frameBorder={0}
          style={{ border: 'none', backgroundColor: 'none' }}
        />
        <section className='relative py-20 overflow-hidden'>
          <img
            className='absolute top-0 left-0'
            src='saturn-assets/images/footers/blue-light-left.png'
            alt=''
          />
          <img
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            src='saturn-assets/images/footers/orange-light-bottom.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='pb-10 mb-10 border-b border-gray-100 items-center'>
                <div className='flex flex-wrap -mx-4 items-center'>
                  <div className='w-full lg:w-1/2 px-4 mb-4 lg:mb-0'>
                    <a className='inline-block' href='#'>
                      <img
                        className='h-20'
                        src='images/OktoLogo.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='w-full lg:w-1/2 px-4'></div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-4 mb-18'>
                <div className='w-full lg:w-2/5 px-4 mb-12 lg:mb-0'>
                  <div className='xs:max-w-xs' contentEditable='false'>
                    <h4
                      className='font-heading text-2xl font-semibold text-gray-900 mb-4'
                      contentEditable='true'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='VTsDpNwSylBmG007uVG-_'
                    >
                      OktoPeople OÜ&nbsp;🇪🇪&nbsp;&nbsp;&nbsp;
                      <div>
                        Tallinn, Estonia&nbsp;&nbsp;&nbsp;
                        <div>&nbsp;14399767&nbsp;</div>
                      </div>
                    </h4>
                    <form action=''>
                      <label
                        className='block mb-1.5 text-sm font-semibold text-gray-900 font-black text-orange-900 text-base'
                        htmlFor=''
                        contentEditable='false'
                        data-gramm='false'
                        wt-ignore-input='true'
                        data-quillbot-element='-Ix9ecBBhRuFxrRIHbd6R'
                      >
                        hello@oktopeople.com
                      </label>
                    </form>
                  </div>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-4'>
                    Services
                  </h5>
                  <ul>
                    <li className='mb-4 font-black'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='#'
                      >
                        Our Services
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600 font-black'
                        href='#'
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='#'
                      >
                        Trainings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-3'>
                    About
                  </h5>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-process.html'
                      >
                        Our Process
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-team-story.html'
                      >
                        Story
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-blog.html'
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-4'>
                    Help
                  </h5>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-faq.html'
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600 mb-4'
                        href='connect.html'
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='sitemap.html'
                      >
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='sm:flex items-center justify-between'>
                <div className='sm:flex mb-6 sm:mb-0 items-center'>
                  <a
                    className='inline-block mr-6 sm:mr-12 text-gray-900 hover:text-gray-600'
                    href='#'
                  >
                    Terms &amp; Conditions
                  </a>
                  <a
                    className='inline-block text-gray-900 hover:text-gray-600'
                    href='#'
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className='flex items-center'>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block hover:bg-orange-50 rounded-md p-1'
                    href='https://www.linkedin.com/company/oktopeople'
                  >
                    <img
                      src='saturn-assets/images/footers/icon-linkedin.svg'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

