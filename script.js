document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY_LANG = 'norwayExplorerLang';
    const NORWAY_SUPPORT_WALLET = '0xfca710eC5eB0FB036157Bb1E114BADc2310efE37';
    const NORWAY_PARTNER_INSTAGRAM_URL = (window.NORWAY_PARTNER_INSTAGRAM_URL || 'https://www.instagram.com/').trim();
    const NORWAY_PARTNER_FACEBOOK_URL = (window.NORWAY_PARTNER_FACEBOOK_URL || 'https://www.facebook.com/').trim();
    const NORWAY_PARTNER_X_URL = (window.NORWAY_PARTNER_X_URL || 'https://x.com/').trim();
    const infoDiv = document.getElementById('info');
    // Фиксирана табличка с информация за Норвегия
    const mainTitle = document.getElementById('main-title');
    const heroKicker = document.getElementById('hero-kicker');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const btnBG = document.getElementById('btn-bg');
    const btnENG = document.getElementById('btn-eng');
    const navCities = document.getElementById('nav-cities');
    const navBirds = document.getElementById('nav-birds');
    const navLand = document.getElementById('nav-land');
    const navMarine = document.getElementById('nav-marine');
    const navMuseum = document.getElementById('nav-museum');
    const navBlog = document.getElementById('nav-blog');
    const navConversation = document.getElementById('nav-conversation');
    const citiesTitle = document.getElementById('cities-title');
    const citiesSubtitle = document.getElementById('cities-subtitle');
    const cityOsloTitle = document.getElementById('city-oslo-title');
    const cityOsloText = document.getElementById('city-oslo-text');
    const cityOsloCtaLabel = document.getElementById('city-oslo-cta-label');
    const cityOsloLink = document.getElementById('city-oslo-link');
    const cityOsloRestaurantsLink = document.getElementById('city-oslo-restaurants-link');
    const cityBergenTitle = document.getElementById('city-bergen-title');
    const cityBergenText = document.getElementById('city-bergen-text');
    const cityBergenCtaLabel = document.getElementById('city-bergen-cta-label');
    const cityBergenLink = document.getElementById('city-bergen-link');
    const cityBergenRestaurantsLink = document.getElementById('city-bergen-restaurants-link');
    const cityOsloAffiliateNote = document.getElementById('city-oslo-affiliate-note');
    const cityBergenAffiliateNote = document.getElementById('city-bergen-affiliate-note');
    const birdsTitle = document.getElementById('birds-title');
    const birdsSubtitle = document.getElementById('birds-subtitle');
    const birdsIntro = document.getElementById('birds-intro');
    const birdEagleTitle = document.getElementById('bird-eagle-title');
    const birdEagleText = document.getElementById('bird-eagle-text');
    const birdPuffinTitle = document.getElementById('bird-puffin-title');
    const birdPuffinText = document.getElementById('bird-puffin-text');
    const landAnimalsTitle = document.getElementById('land-animals-title');
    const landAnimalsSubtitle = document.getElementById('land-animals-subtitle');
    const landAnimalsIntro = document.getElementById('land-animals-intro');
    const landAnimalMooseTitle = document.getElementById('land-animal-moose-title');
    const landAnimalMooseText = document.getElementById('land-animal-moose-text');
    const landAnimalReindeerTitle = document.getElementById('land-animal-reindeer-title');
    const landAnimalReindeerText = document.getElementById('land-animal-reindeer-text');
    const marineAnimalsTitle = document.getElementById('marine-animals-title');
    const marineAnimalsSubtitle = document.getElementById('marine-animals-subtitle');
    const marineAnimalsIntro = document.getElementById('marine-animals-intro');
    const marineAnimalSalmonTitle = document.getElementById('marine-animal-salmon-title');
    const marineAnimalSalmonText = document.getElementById('marine-animal-salmon-text');
    const marineAnimalCodTitle = document.getElementById('marine-animal-cod-title');
    const marineAnimalCodText = document.getElementById('marine-animal-cod-text');
    const museumTitle = document.getElementById('museum-title');
    const museumSubtitle = document.getElementById('museum-subtitle');
    const museumOsloTitle = document.getElementById('museum-oslo-title');
    const museumOsloText = document.getElementById('museum-oslo-text');
    const museumOsloLink = document.getElementById('museum-oslo-link');
    const museumBergenTitle = document.getElementById('museum-bergen-title');
    const museumBergenText = document.getElementById('museum-bergen-text');
    const museumBergenLink = document.getElementById('museum-bergen-link');
    const blogTitle = document.getElementById('blog-title');
    const blogSubtitle = document.getElementById('blog-subtitle');
    const blogArticleTitle = document.getElementById('blog-article-title');
    const blogArticleContent = document.getElementById('blog-article-content');
    const blogArticle2Image = document.getElementById('blog-article2-image');
    const blogArticle2Title = document.getElementById('blog-article2-title');
    const blogArticle2Content = document.getElementById('blog-article2-content');
    const blogArticle3Image1 = document.getElementById('blog-article3-image1');
    const blogArticle3Image2 = document.getElementById('blog-article3-image2');
    const blogArticle3Title = document.getElementById('blog-article3-title');
    const blogArticle3Content = document.getElementById('blog-article3-content');
    const blogOperaLink = document.getElementById('blog-opera-link');
    const blogFjordLink = document.getElementById('blog-fjord-link');
    const blogFjordHotelsLink = document.getElementById('blog-fjord-hotels-link');
    const blogFootballLink = document.getElementById('blog-football-link');
    const blogAffiliateNote = document.getElementById('blog-affiliate-note');
    const projectsTitle = document.getElementById('projects-title');
    const projectsSubtitle = document.getElementById('projects-subtitle');
    const projectATitle = document.getElementById('project-a-title');
    const projectADesc = document.getElementById('project-a-desc');
    const projectALink = document.getElementById('project-a-link');
    const projectBTitle = document.getElementById('project-b-title');
    const projectBDesc = document.getElementById('project-b-desc');
    const projectBLink = document.getElementById('project-b-link');
    const projectCTitle = document.getElementById('project-c-title');
    const projectCDesc = document.getElementById('project-c-desc');
    const projectCLink = document.getElementById('project-c-link');
    const backToTop = document.getElementById('backToTop');

    const norwayPartnerTitle = document.getElementById('norway-partner-title');
    const norwayPartnerText = document.getElementById('norway-partner-text');
    const norwayPartnerCta = document.getElementById('norwayPartnershipBtn');
    const norwayPartnerPaypalBtn = document.getElementById('norwayPartnerPaypalBtn');
    const norwayPartnerContactHint = document.getElementById('norway-partner-contact-hint');
    const norwayPartnerWalletLabel = document.getElementById('norway-partner-wallet-label');
    const norwayPartnerWalletAddress = document.getElementById('norway-partner-wallet-address');
    const norwayPartnerWalletCopy = document.getElementById('norway-partner-wallet-copy');
    const norwayPartnerWalletHint = document.getElementById('norway-partner-wallet-hint');
    const norwayPartnerInstagramBtn = document.getElementById('norwayPartnerInstagramBtn');
    const norwayPartnerFacebookBtn = document.getElementById('norwayPartnerFacebookBtn');
    const norwayPartnerXBtn = document.getElementById('norwayPartnerXBtn');

    const footer = document.getElementById('site-footer');
    const conversationKicker = document.getElementById('conversation-kicker');
    const conversationTitle = document.getElementById('conversation-title');
    const conversationSubtitle = document.getElementById('conversation-subtitle');
    const conversationCategories = document.getElementById('conversation-categories');
    const conversationList = document.getElementById('conversation-list');

    const conversationPhrases = {
        airport: [
            { q: 'Where is the baggage claim?', bg: 'Къде е изходът за багажа?', no: 'Hvor er bagasjeutleveringen?', pronunciation: 'hvor er ba-ga-sjeh oo-tleh-ver-ing-en', a: 'Baggage claim is on the lower level near the arrivals hall.' },
            { q: 'Where can I get a taxi?', bg: 'Къде мога да взема такси?', no: 'Hvor kan jeg ta en taxi?', pronunciation: 'hvor kan yei ta en tak-si?', a: 'You can take a taxi outside the main terminal.' },
            { q: 'Is there Wi‑Fi at the airport?', bg: 'Има ли Wi‑Fi в летището?', no: 'Er det Wi‑Fi på flyplassen?', pronunciation: 'er det wee-fee på fly-plassen?', a: 'Yes, free airport Wi‑Fi is available in most areas.' },
            { q: 'Where is check-in?', bg: 'Къде е регистрацията?', no: 'Hvor er inncheckingen?', pronunciation: 'hvor er in-check-ing-en?', a: 'Check-in is usually on the ground floor near the airline desks.' },
            { q: 'How do I get to the city center?', bg: 'Как да стигна до центъра?', no: 'Hvordan kommer jeg til sentrum?', pronunciation: 'vor-dan kom-mer yei til sen-trum?', a: 'You can use the airport train or a taxi to the city center.' },
            { q: 'How long does it take to get to Oslo?', bg: 'Колко време отнема пътуването до Осло?', no: 'Hvor lang tid tar det å komme til Oslo?', pronunciation: 'hvor lang tid tar deh o kom-me til Ohs-lo?', a: 'It usually takes around 20–35 minutes by train.' },
            { q: 'Where is the information desk?', bg: 'Къде е пунктът за информация?', no: 'Hvor er informasjonsdisken?', pronunciation: 'hvor er in-for-ma-sjons-dis-ken?', a: 'The information desk is near the arrivals area.' },
            { q: 'Is there luggage storage?', bg: 'Има ли място за съхранение на багаж?', no: 'Er det bagasjedepot?', pronunciation: 'er det ba-ga-sje-de-pot?', a: 'Yes, luggage storage services are available in the terminal.' },
            { q: 'Can I exchange money here?', bg: 'Дали мога да сменя валута тук?', no: 'Kan jeg bytte penger her?', pronunciation: 'kan yei byt-te pen-ger her?', a: 'Yes, there are currency exchange offices at the airport.' },
            { q: 'How do I get to my hotel?', bg: 'Как да стигна до хотел?', no: 'Hvordan kommer jeg til hotellet?', pronunciation: 'vor-dan kom-mer yei til ho-tel-let?', a: 'Ask for the most direct taxi or train route to your hotel.' }
        ],
        cafe: [
            { q: 'Can I see the menu?', bg: 'Може ли да видя менюто?', no: 'Kan jeg få se menyen?', pronunciation: 'kan yei fo seh meh-nee-en?', a: 'Of course, here is the menu and today\'s specials.' },
            { q: 'What do you recommend?', bg: 'Какво препоръчвате?', no: 'Hva anbefaler du?', pronunciation: 'va an-beh-fa-ler doo?', a: 'The coffee and pastries are very popular here.' },
            { q: 'I would like a lactose-free coffee.', bg: 'Искам кафе без лактоза.', no: 'Jeg vil gjerne ha en laktosefri kaffe.', pronunciation: 'yei vil yer-neh ha en lak-too-seh-free kaf-feh', a: 'No problem, we can prepare a dairy-free option.' },
            { q: 'How much is a cappuccino?', bg: 'Колко струва едно капучино?', no: 'Hvor mye koster en cappuccino?', pronunciation: 'vor mee-eh kos-ter en ka-pu-chee-no?', a: 'A cappuccino usually costs around 40–60 NOK.' },
            { q: 'Can I sit outside?', bg: 'Мога ли да седна навън?', no: 'Kan jeg sitte ute?', pronunciation: 'kan yei sit-teh oo-teh?', a: 'Yes, the outdoor seating area is available.' },
            { q: 'Do you have vegan desserts?', bg: 'Имате ли вегански десерти?', no: 'Har dere veganske desserter?', pronunciation: 'har deh-reh veh-gan-skeh deh-ser-ter?', a: 'Yes, we have a few vegan options on the menu.' },
            { q: 'Can I have the bill?', bg: 'Може ли сметката?', no: 'Kan jeg få regningen?', pronunciation: 'kan yei fo rai-ning-en?', a: 'Certainly, I will bring it right away.' },
            { q: 'Do you have decaf coffee?', bg: 'Имате ли безкофеиново кафе?', no: 'Har dere koffeinfri kaffe?', pronunciation: 'har deh-reh kof-feh-een-free kaf-feh?', a: 'Yes, we have tea and decaf coffee.' },
            { q: 'Can I get it to go?', bg: 'Може ли за вкъщи?', no: 'Kan jeg få det til å ta med?', pronunciation: 'kan yei fo deh til o ta meh?', a: 'Yes, we can offer a takeaway cup.' },
            { q: 'Is this enough?', bg: 'Това достатъчно ли е?', no: 'Er dette nok?', pronunciation: 'er det-teh nok?', a: 'Yes, it is perfect. Thank you.' }
        ],
        restaurant: [
            { q: 'Do you have a table for two?', bg: 'Имате ли свободна маса за двама?', no: 'Har dere et bord til to?', pronunciation: 'har deh-reh et boor til too?', a: 'Yes, we have a table available for two.' },
            { q: 'What would you recommend?', bg: 'Какво препоръчвате?', no: 'Hva vil du anbefale?', pronunciation: 'va vil doo an-beh-fa-leh?', a: 'I recommend the local fish and the seasonal menu.' },
            { q: 'Do you have vegetarian dishes?', bg: 'Имате ли вегетариански ястия?', no: 'Har dere vegetarretter?', pronunciation: 'har deh-reh veh-geh-tar-ret-ter?', a: 'Yes, we offer vegetarian dishes and gluten-free options.' },
            { q: 'Can I order it without salt?', bg: 'Може ли да поръчам без сол?', no: 'Kan jeg få den uten salt?', pronunciation: 'kan yei fo den oo-ten salt?', a: 'Of course, we can prepare it without extra salt.' },
            { q: 'When is dinner served?', bg: 'Кога се сервира вечеря?', no: 'Når serveres middag?', pronunciation: 'nor ser-veh-res mid-dag?', a: 'Dinner is served from 17:00 onwards.' },
            { q: 'Do you have fish specialties?', bg: 'Имате ли рибни специалитети?', no: 'Har dere fiskeretter?', pronunciation: 'har deh-reh fis-keh-ret-ter?', a: 'Yes, the salmon and cod are especially popular.' },
            { q: 'Can I have the bill?', bg: 'Може ли сметката?', no: 'Kan jeg få regningen?', pronunciation: 'kan yei fo rai-ning-en?', a: 'Absolutely, I will bring the bill right away.' },
            { q: 'Does this contain dairy?', bg: 'Това съдържа ли млечни продукти?', no: 'Inneholder dette melk?', pronunciation: 'in-neh-hol-ler det-teh melk?', a: 'This dish does contain dairy, but we can suggest alternatives.' },
            { q: 'Can you make this gluten-free?', bg: 'Може ли да го направите без глутен?', no: 'Kan dere lage dette glutenfritt?', pronunciation: 'kan deh-reh la-geh det-teh gloo-ten-fritt?', a: 'Yes, we can adjust the order for gluten-free needs.' },
            { q: 'I would like a meat-free dish.', bg: 'Искам ястие без месо.', no: 'Jeg vil gjerne ha en rett uten kjøtt.', pronunciation: 'yei vil yer-neh ha en rett oo-ten shøtt', a: 'No problem, we can prepare a vegetarian version.' }
        ],
        hotel: [
            { q: 'I have a reservation under the name…', bg: 'Имам резервация на името…', no: 'Jeg har en reservasjon i navnet…', pronunciation: 'yei har en reh-ser-va-shoon ee nav-neh…', a: 'Certainly, let me check your booking in the system.' },
            { q: 'Do you have any rooms available?', bg: 'Имате ли свободни стаи?', no: 'Har dere ledige rom?', pronunciation: 'har deh-reh leh-dee-eh room?', a: 'Yes, we have rooms available for tonight.' },
            { q: 'How much is one night?', bg: 'Колко струва една нощувка?', no: 'Hvor mye koster en natt?', pronunciation: 'vor mee-eh kos-ter en natt?', a: 'The nightly rate depends on the room type and date.' },
            { q: 'Where is the entrance?', bg: 'Къде е входът?', no: 'Hvor er inngangen?', pronunciation: 'vor er in-gang-en?', a: 'The entrance is just through the main lobby on the left.' },
            { q: 'Can I get the room key?', bg: 'Мога ли да получа ключа от стаята?', no: 'Kan jeg få romnøkkelen?', pronunciation: 'kan yei fo room-nøk-kel-en?', a: 'Yes, here is your key card and welcome information.' },
            { q: 'Is there Wi‑Fi in the room?', bg: 'Има ли Wi‑Fi в стаята?', no: 'Er det Wi‑Fi på rommet?', pronunciation: 'er deh wee-fee po room-meh?', a: 'Yes, the internet is free in all rooms.' },
            { q: 'Where is the bathroom?', bg: 'Къде е банята?', no: 'Hvor er badet?', pronunciation: 'vor er ba-deh?', a: 'The bathroom is connected to the room and includes a shower.' },
            { q: 'Can I get a taxi to the airport?', bg: 'Мога ли да взема такси до летището?', no: 'Kan jeg få en taxi til flyplassen?', pronunciation: 'kan yei fo en tak-si til flee-plas-sen?', a: 'We can arrange a taxi or help with directions.' },
            { q: 'Is there a laundry service?', bg: 'Има ли пералня?', no: 'Har dere vaskeri?', pronunciation: 'har deh-reh vas-keh-ree?', a: 'Yes, laundry facilities are available on the ground floor.' },
            { q: 'When is check-out?', bg: 'До колко часа трябва да освободя стаята?', no: 'Når er utsjekk?', pronunciation: 'nor er oot-shekk?', a: 'Check-out is usually by 11:00 or 12:00.' }
        ],
        transport: [
            { q: 'Where can I catch the bus?', bg: 'Къде мога да хвана автобус?', no: 'Hvor kan jeg ta bussen?', pronunciation: 'vor kan yei ta bus-sen?', a: 'The bus stop is just outside the station building.' },
            { q: 'Where is the nearest stop?', bg: 'Къде е най-близката спирка?', no: 'Hvor er nærmeste holdeplass?', pronunciation: 'vor er nær-mes-teh hol-leh-plass?', a: 'The nearest stop is two minutes away on the main road.' },
            { q: 'How much is a ticket to the center?', bg: 'Колко струва билетът до центъра?', no: 'Hvor mye koster en billett til sentrum?', pronunciation: 'vor mee-eh kos-ter en bil-lett til sen-trum?', a: 'A single ride usually costs around 40 NOK.' },
            { q: 'Can I pay by card?', bg: 'Мога ли да платя с карта?', no: 'Kan jeg betale med kort?', pronunciation: 'kan yei beh-ta-leh meh kort?', a: 'Yes, contactless and card payments are accepted.' },
            { q: 'When does the next bus leave?', bg: 'Кога тръгва следващият автобус?', no: 'Når går neste buss?', pronunciation: 'nor gor nes-teh buss?', a: 'The next one leaves in about ten minutes.' },
            { q: 'Is there a train to the airport?', bg: 'Има ли влак до летището?', no: 'Går det tog til flyplassen?', pronunciation: 'gor deh tawg til flee-plas-sen?', a: 'Yes, the airport train runs regularly from the city center.' },
            { q: 'Can I take a taxi?', bg: 'Мога ли да взема такси?', no: 'Kan jeg ta en taxi?', pronunciation: 'kan yei ta en tak-si?', a: 'Certainly, there are taxis available nearby.' },
            { q: 'How do I get to the harbor?', bg: 'Как да стигна до пристанището?', no: 'Hvordan kommer jeg til havna?', pronunciation: 'vor-dan kom-mer yei til hav-na?', a: 'Follow the signs for the harbor, it is well marked.' },
            { q: 'Where can I rent a car?', bg: 'Къде мога да наема кола?', no: 'Hvor kan jeg leie bil?', pronunciation: 'vor kan yei lai-eh beel?', a: 'Car rental desks are at the terminal and near the station.' },
            { q: 'How do I use public transport?', bg: 'Как да ползвам градския транспорт?', no: 'Hvordan bruker jeg kollektivtransport?', pronunciation: 'vor-dan broo-ker yei kol-lek-teev-trans-port?', a: 'Use the city app or ask for the nearest local route map.' }
        ],
        bar: [
            { q: 'What do you recommend?', bg: 'Какво препоръчвате?', no: 'Hva anbefaler du?', pronunciation: 'va an-beh-fa-ler doo?', a: 'A local lager or Norwegian craft beer is a great choice.' },
            { q: 'Do you have non-alcoholic drinks?', bg: 'Имате ли безалкохолни напитки?', no: 'Har dere alkoholfrie drikker?', pronunciation: 'har deh-reh al-ko-hool-free-eh drik-ker?', a: 'Yes, we have a wide selection of non-alcoholic drinks.' },
            { q: 'How much is a beer?', bg: 'Колко струва една бира?', no: 'Hvor mye koster en øl?', pronunciation: 'vor mee-eh kos-ter en øl?', a: 'A beer usually costs around 80–120 NOK.' },
            { q: 'Can I see the drinks menu?', bg: 'Може ли менюто с напитки?', no: 'Kan jeg få se drikkekartet?', pronunciation: 'kan yei fo seh drik-keh-kar-teh?', a: 'Of course, here is the drinks menu.' },
            { q: 'Do you have snacks?', bg: 'Имате ли нещо за хапване?', no: 'Har dere noe småmat?', pronunciation: 'har deh-reh noo-eh smo-mat?', a: 'Yes, we have snacks and small plates available.' },
            { q: 'Where is the bar?', bg: 'Къде е барът?', no: 'Hvor er baren?', pronunciation: 'vor er ba-ren?', a: 'The bar is on the first floor near the lounge area.' },
            { q: 'Is there live music?', bg: 'Има ли музика на живо?', no: 'Er det livemusikk her?', pronunciation: 'er deh laiv-moo-sikk her?', a: 'Yes, there is live music on Fridays and weekends.' },
            { q: 'Can I order another drink?', bg: 'Може ли още едно питие?', no: 'Kan jeg få en drink til?', pronunciation: 'kan yei fo en drink til?', a: 'Absolutely, I can bring another round.' },
            { q: 'Can I pay by card?', bg: 'Мога ли да платя с карта?', no: 'Kan jeg betale med kort?', pronunciation: 'kan yei beh-ta-leh meh kort?', a: 'Yes, card payments work perfectly here.' },
            { q: 'Where is the ATM?', bg: 'Къде има банкомат?', no: 'Hvor er nærmeste minibank?', pronunciation: 'vor er nær-mes-teh mee-nee-bank?', a: 'There is an ATM near the entrance.' }
        ],
        date: [
            { q: 'Hi, what are you doing this weekend?', bg: 'Здравей, какво правиш този уикенд?', no: 'Hei, hva gjør du i helgen?', pronunciation: 'hai, va yør doo ee hel-gen?', a: 'I am planning to go out and explore the city.' },
            { q: 'Would you like to grab a coffee?', bg: 'Искаш ли да пием по кафе?', no: 'Vil du ta en kaffe?', pronunciation: 'vil doo ta en kaf-feh?', a: 'Yes, that sounds nice. I would love to.' },
            { q: 'How are you?', bg: 'Как си?', no: 'Hvordan har du det?', pronunciation: 'vor-dan har doo deh?', a: 'I am good, thanks for asking.' },
            { q: 'Do you have any favorite places here?', bg: 'Имаш ли любими места тук?', no: 'Har du noen favorittsteder her?', pronunciation: 'har doo noo-en fa-vo-ritt-steh-der her?', a: 'I like cozy cafés and scenic viewpoints.' },
            { q: 'Can we meet later?', bg: 'Може ли да се видим по-късно?', no: 'Kan vi møtes senere?', pronunciation: 'kan vee mø-tes seh-neh-reh?', a: 'Yes, I am free after work this evening.' },
            { q: 'Are you free on Saturday?', bg: 'Свободен ли си в събота?', no: 'Er du ledig på lørdag?', pronunciation: 'er doo leh-dee po lør-dag?', a: 'Yes, Saturday works well for me.' },
            { q: 'What would you like to do?', bg: 'Какво ти се прави?', no: 'Hva har du lyst til å gjøre?', pronunciation: 'va har doo lüst til o yø-reh?', a: 'Maybe we can walk around the harbor and get dinner.' },
            { q: 'Where should we meet?', bg: 'Къде да се срещнем?', no: 'Hvor skal vi møtes?', pronunciation: 'vor skal vee mø-tes?', a: 'Let\'s meet near the station square.' },
            { q: 'Do you want to take a walk?', bg: 'Искаш ли да се разходим?', no: 'Vil du gå en tur?', pronunciation: 'vil doo go en toor?', a: 'Yes, I would enjoy that very much.' },
            { q: 'I had a great time tonight.', bg: 'Прекарах страхотно тази вечер.', no: 'Jeg hadde det veldig hyggelig i kveld.', pronunciation: 'yei had-deh deh vel-dee hüg-geh-lee ee kvell', a: 'Me too, I really enjoyed it.' }
        ],
        work: [
            { q: 'I am interested in this position.', bg: 'Интересувам се от тази позиция.', no: 'Jeg er interessert i denne stillingen.', pronunciation: 'yei er in-teh-reh-sert ee den-neh stil-ling-en', a: 'Great, tell me more about your experience and skills.' },
            { q: 'What are the working hours?', bg: 'Какво е работното време?', no: 'Hva er arbeidstiden?', pronunciation: 'va er ar-baids-tee-den?', a: 'The schedule is usually 08:00–16:00, depending on the role.' },
            { q: 'Do you speak English at work?', bg: 'Говори ли се английски на работа?', no: 'Snakker dere engelsk på jobben?', pronunciation: 'snak-ker deh-reh eng-elsk po yob-ben?', a: 'Yes, English is commonly used in the workplace.' },
            { q: 'Could you explain the responsibilities?', bg: 'Бихте ли обяснили задълженията?', no: 'Kan du forklare arbeidsoppgavene?', pronunciation: 'kan doo for-kla-reh ar-baids-op-ga-veh-neh?', a: 'Of course, the role includes customer service and daily operations.' },
            { q: 'When can I start?', bg: 'Кога мога да започна?', no: 'Når kan jeg begynne?', pronunciation: 'nor kan yei beh-yün-neh?', a: 'You can start as soon as the paperwork is completed.' },
            { q: 'Is the contract full-time?', bg: 'Работата на пълен работен ден ли е?', no: 'Er det en heltidsstilling?', pronunciation: 'er deh en hel-teeds-stil-ling?', a: 'Yes, it is a permanent full-time position.' },
            { q: 'Do you offer training?', bg: 'Предлагате ли обучение?', no: 'Tilbyr dere opplæring?', pronunciation: 'til-büür deh-reh op-lær-ing?', a: 'Yes, we provide an onboarding and training period.' },
            { q: 'What is the salary range?', bg: 'Какво е заплащането?', no: 'Hva er lønnen?', pronunciation: 'va er løn-nen?', a: 'The pay depends on the role and experience level.' },
            { q: 'Can I send my CV?', bg: 'Мога ли да изпратя CV-то си?', no: 'Kan jeg sende CV-en min?', pronunciation: 'kan yei sen-neh seh-veh-en min?', a: 'Yes, please send it in PDF format by email.' },
            { q: 'Can we schedule an interview?', bg: 'Можем ли да насрочим интервю?', no: 'Kan vi avtale et intervju?', pronunciation: 'kan vee av-ta-leh et in-ter-vyoo?', a: 'Absolutely, we can arrange a short interview next week.' }
        ],
        shopping: [
            { q: 'How much is this?', bg: 'Колко струва това?', no: 'Hvor mye koster dette?', pronunciation: 'vor mee-eh kos-ter det-teh?', a: 'This costs 150 NOK.' },
            { q: 'Do you have a smaller size?', bg: 'Имате ли по-малък размер?', no: 'Har dere en mindre størrelse?', pronunciation: 'har deh-reh en min-dreh stør-rel-seh?', a: 'Yes, we have this model in a smaller size too.' },
            { q: 'Can I pay by card?', bg: 'Мога ли да платя с карта?', no: 'Kan jeg betale med kort?', pronunciation: 'kan yei beh-ta-leh meh kort?', a: 'Yes, card payment is available.' },
            { q: 'Do you have this in another color?', bg: 'Имате ли го в друг цвят?', no: 'Har dere denne i en annen farge?', pronunciation: 'har deh-reh den-neh ee en an-nen far-geh?', a: 'Yes, we have it in black and blue.' },
            { q: 'Is this product local?', bg: 'Местен продукт ли е това?', no: 'Er dette et lokalt produkt?', pronunciation: 'er det-teh et lo-kalt pro-dukt?', a: 'Yes, it is made in Norway.' },
            { q: 'Can I try this on?', bg: 'Мога ли да го пробвам?', no: 'Kan jeg prøve denne?', pronunciation: 'kan yei prø-veh den-neh?', a: 'Of course, the fitting room is just over there.' },
            { q: 'Where are the discounts?', bg: 'Къде са намаленията?', no: 'Hvor er tilbudene?', pronunciation: 'vor er til-boo-deh-neh?', a: 'The sale section is on the lower floor.' },
            { q: 'Do you have any souvenirs?', bg: 'Имате ли сувенири?', no: 'Har dere suvenirer?', pronunciation: 'har deh-reh soo-veh-nee-rer?', a: 'Yes, we have local items and gifts from the region.' },
            { q: 'Can I get a bag?', bg: 'Може ли торбичка?', no: 'Kan jeg få en pose?', pronunciation: 'kan yei fo en poo-seh?', a: 'Yes, here is a shopping bag for you.' },
            { q: 'Is it possible to return this?', bg: 'Мога ли да върна това?', no: 'Kan jeg returnere denne?', pronunciation: 'kan yei reh-tur-neh-reh den-neh?', a: 'Yes, returns are accepted within the policy period.' }
        ],
        help: [
            { q: 'I need help, please.', bg: 'Имам нужда от помощ, моля.', no: 'Jeg trenger hjelp, vær så snill.', pronunciation: 'yei treng-er yelp, vær so snill', a: 'Of course, I will help you right away.' },
            { q: 'Where is the nearest hospital?', bg: 'Къде е най-близката болница?', no: 'Hvor er nærmeste sykehus?', pronunciation: 'vor er nær-mes-teh sü-keh-hoos?', a: 'The nearest hospital is a short taxi ride away.' },
            { q: 'Can you call emergency services?', bg: 'Можете ли да се обадите на спешна помощ?', no: 'Kan du ringe nødnummeret?', pronunciation: 'kan doo ring-eh nød-num-meh-reh?', a: 'Yes, I can call for help immediately.' },
            { q: 'I lost my phone.', bg: 'Изгубих телефона си.', no: 'Jeg har mistet telefonen min.', pronunciation: 'yei har mis-tet teh-leh-foo-nen min', a: 'Let\'s go to the information desk and report it.' },
            { q: 'Where is the pharmacy?', bg: 'Къде е аптеката?', no: 'Hvor er apoteket?', pronunciation: 'vor er a-poo-teh-keh?', a: 'The pharmacy is next to the main square.' },
            { q: 'I am feeling unwell.', bg: 'Не се чувствам добре.', no: 'Jeg føler meg dårlig.', pronunciation: 'yei fø-ler mai dor-lee', a: 'Please sit down and I will call for assistance.' },
            { q: 'Can you help me with directions?', bg: 'Можете ли да ми покажете пътя?', no: 'Kan du vise meg veien?', pronunciation: 'kan doo vee-seh mai vai-en?', a: 'Yes, I can explain the quickest route.' },
            { q: 'I need a doctor.', bg: 'Трябва ми лекар.', no: 'Jeg trenger en lege.', pronunciation: 'yei treng-er en leh-geh', a: 'I can help you find the nearest clinic.' },
            { q: 'I cannot find my hotel.', bg: 'Не мога да намеря хотела си.', no: 'Jeg finner ikke hotellet mitt.', pronunciation: 'yei fin-ner ik-keh ho-tel-leh mitt', a: 'Let me help you look up the address and route.' },
            { q: 'Does anyone speak English?', bg: 'Някой говори ли английски?', no: 'Er det noen som snakker engelsk?', pronunciation: 'er deh noo-en som snak-ker eng-elsk?', a: 'Yes, many staff members can speak English here.' }
        ]
    };

    const conversationGuideData = {
        bg: {
            kicker: 'Разговорник',
            title: 'Разговорник за Норвегия',
            subtitle: 'Избери категория и виж 10 практически реплики за реални ситуации.',
            categories: [
                {
                    id: 'airport',
                    label: 'Летище',
                    phrases: conversationPhrases.airport
                },
                {
                    id: 'cafe',
                    label: 'Кафене',
                    phrases: conversationPhrases.cafe
                },
                {
                    id: 'restaurant',
                    label: 'Ресторант',
                    phrases: conversationPhrases.restaurant
                },
                {
                    id: 'hotel',
                    label: 'Хотел',
                    phrases: conversationPhrases.hotel
                },
                {
                    id: 'transport',
                    label: 'Транспорт',
                    phrases: conversationPhrases.transport
                },
                {
                    id: 'bar',
                    label: 'Бар',
                    phrases: conversationPhrases.bar
                },
                {
                    id: 'date',
                    label: 'Среща',
                    phrases: conversationPhrases.date
                },
                {
                    id: 'work',
                    label: 'Работа',
                    phrases: conversationPhrases.work
                },
                {
                    id: 'shopping',
                    label: 'Пазаруване',
                    phrases: conversationPhrases.shopping
                },
                {
                    id: 'help',
                    label: 'Помощ',
                    phrases: conversationPhrases.help
                }
            ]
        },
        en: {
            kicker: 'Conversation Guide',
            title: 'Norway Conversation Guide',
            subtitle: 'Choose a category and see 10 practical phrases for real-life situations.',
            categories: [
                {
                    id: 'airport',
                    label: 'Airport',
                    phrases: conversationPhrases.airport
                },
                {
                    id: 'cafe',
                    label: 'Café',
                    phrases: conversationPhrases.cafe
                },
                {
                    id: 'restaurant',
                    label: 'Restaurant',
                    phrases: conversationPhrases.restaurant
                },
                {
                    id: 'hotel',
                    label: 'Hotel',
                    phrases: conversationPhrases.hotel
                },
                {
                    id: 'transport',
                    label: 'Transport',
                    phrases: conversationPhrases.transport
                },
                {
                    id: 'bar',
                    label: 'Bar',
                    phrases: conversationPhrases.bar
                },
                {
                    id: 'date',
                    label: 'Date',
                    phrases: conversationPhrases.date
                },
                {
                    id: 'work',
                    label: 'Work',
                    phrases: conversationPhrases.work
                },
                {
                    id: 'shopping',
                    label: 'Shopping',
                    phrases: conversationPhrases.shopping
                },
                {
                    id: 'help',
                    label: 'Help',
                    phrases: conversationPhrases.help
                }
            ]
        }
    };

    function renderConversationGuide(lang) {
        if (!conversationCategories || !conversationList) {
            return;
        }

        const config = conversationGuideData[lang] || conversationGuideData.bg;
        const categoryButtons = config.categories || [];

        if (conversationKicker) conversationKicker.textContent = config.kicker;
        if (conversationTitle) conversationTitle.textContent = config.title;
        if (conversationSubtitle) conversationSubtitle.textContent = config.subtitle;

        conversationCategories.innerHTML = categoryButtons
            .map((category, index) => `
                <button
                    type="button"
                    class="conversation-category-btn ${index === 0 ? 'active' : ''}"
                    data-category-id="${category.id}"
                    aria-pressed="${index === 0 ? 'true' : 'false'}"
                >
                    ${category.label}
                </button>
            `)
            .join('');

        const buttons = conversationCategories.querySelectorAll('.conversation-category-btn');
        const getLanguageForText = (text) => {
            if (!text) return null;
            if (/[А-Яа-яЁё]/.test(text)) return 'bg';
            if (/[A-Za-z]/.test(text)) return 'en';
            return null;
        };

        const renderLanguageRow = (fieldLabel, text, flag, isMainRow, extraClass = '') => {
            if (!text) return '';
            return `
                <div class="conversation-language-row ${isMainRow ? 'conversation-language-row--main' : ''} ${extraClass}">
                    <span class="conversation-flag" aria-hidden="true">${flag}</span>
                    <span class="conversation-label">${fieldLabel}</span>
                    <p>${text}</p>
                </div>
            `;
        };

        const renderCategory = (categoryId) => {
            const category = categoryButtons.find((item) => item.id === categoryId) || categoryButtons[0];
            const phrases = category ? category.phrases : [];

            conversationList.innerHTML = phrases.map((phrase) => {
                const rows = [];
                const primaryKey = lang === 'bg' ? 'bg' : 'en';
                const primaryText = lang === 'bg' ? (phrase.bg || phrase.q || '') : (phrase.q || phrase.bg || '');
                const primaryLabel = lang === 'bg' ? 'Translation' : 'Question';
                const primaryFlag = lang === 'bg' ? '🇧🇬' : '🇬🇧';

                if (primaryText) {
                    rows.push({
                        lang: primaryKey,
                        text: primaryText,
                        label: primaryLabel,
                        flag: primaryFlag
                    });
                }

                if (phrase.no) {
                    rows.push({
                        lang: 'no',
                        text: phrase.no,
                        label: '🇳🇴',
                        flag: '🇳🇴'
                    });
                }

                if (phrase.pronunciation) {
                    rows.push({
                        lang: 'pronunciation',
                        text: phrase.pronunciation,
                        label: lang === 'bg' ? 'Pronunciation' : 'Pronunciation',
                        flag: '🔊',
                        extraClass: 'conversation-pronunciation'
                    });
                }

                if (!rows.length && phrase.a) {
                    rows.push({
                        lang: 'en',
                        text: phrase.a,
                        label: lang === 'bg' ? 'Отговор' : 'Answer',
                        flag: '🇬🇧'
                    });
                }

                const builtRows = rows.map((row, index) => renderLanguageRow(
                    row.label,
                    row.text,
                    row.flag,
                    index === 0,
                    row.extraClass || ''
                )).join('');

                return `
                    <article class="conversation-item">
                        ${builtRows}
                    </article>
                `;
            }).join('');

            buttons.forEach((button) => {
                const active = button.dataset.categoryId === category.id;
                button.classList.toggle('active', active);
                button.setAttribute('aria-pressed', String(active));
            });
        };

        buttons.forEach((button) => {
            button.addEventListener('click', () => renderCategory(button.dataset.categoryId));
        });

        renderCategory(categoryButtons[0].id);
    }

    let operaArticleTextBg = '';
    let operaArticleTextEn = '';
    let fjordArticleTextBg = '';
    let fjordArticleTextEn = '';
    let footballArticleTextBg = '';
    let footballArticleTextEn = '';

    function setOperaArticleContent(lang) {
        if (!blogArticleContent) return;

        const articleText = lang === 'en' ? operaArticleTextEn : operaArticleTextBg;

        if (articleText && articleText.trim().length > 0) {
            blogArticleContent.textContent = articleText;
            return;
        }

        blogArticleContent.textContent = lang === 'bg'
            ? 'Статията се зарежда...'
            : 'Article is loading...';
    }

    function setFjordArticleContent(lang) {
        if (!blogArticle2Content) return;

        const articleText = lang === 'en' ? fjordArticleTextEn : fjordArticleTextBg;

        if (articleText && articleText.trim().length > 0) {
            blogArticle2Content.textContent = articleText;
            return;
        }

        blogArticle2Content.textContent = lang === 'bg'
            ? 'Статията се зарежда...'
            : 'Article is loading...';
    }

    function setFootballArticleContent(lang) {
        if (!blogArticle3Content) return;

        const articleText = lang === 'en' ? footballArticleTextEn : footballArticleTextBg;

        if (articleText && articleText.trim().length > 0) {
            blogArticle3Content.textContent = articleText;
            return;
        }

        blogArticle3Content.textContent = lang === 'bg'
            ? 'Статията се зарежда...'
            : 'Article is loading...';
    }

    const articleTextLoaders = [
        ['assets/tekst/operaOslo.txt', 'bg'],
        ['assets/tekst/operaOslo.en.txt', 'en'],
        ['assets/tekst/fjordNorway.txt', 'bg'],
        ['assets/tekst/fjordNorway.en.txt', 'en'],
        ['assets/tekst/NorwayFotball.txt', 'bg'],
        ['assets/tekst/NorwayFotball.en.txt', 'en']
    ];

    Promise.all(
        articleTextLoaders.map(([path]) => fetch(path).then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
            }

            return response.text();
        }))
    )
        .then(([operaBg, operaEn, fjordBg, fjordEn, footballBg, footballEn]) => {
            operaArticleTextBg = operaBg;
            operaArticleTextEn = operaEn;
            fjordArticleTextBg = fjordBg;
            fjordArticleTextEn = fjordEn;
            footballArticleTextBg = footballBg;
            footballArticleTextEn = footballEn;
            const currentLang = btnENG.classList.contains('active') ? 'en' : 'bg';
            setOperaArticleContent(currentLang);
            setFjordArticleContent(currentLang);
            setFootballArticleContent(currentLang);
        })
        .catch(() => {
            operaArticleTextBg = '';
            operaArticleTextEn = '';
            fjordArticleTextBg = '';
            fjordArticleTextEn = '';
            footballArticleTextBg = '';
            footballArticleTextEn = '';
            if (blogArticleContent) {
                blogArticleContent.textContent = 'Неуспешно зареждане на статията. Провери файловете assets/tekst/operaOslo.txt и assets/tekst/operaOslo.en.txt.';
            }
            if (blogArticle2Content) {
                blogArticle2Content.textContent = 'Неуспешно зареждане на статията. Провери файловете assets/tekst/fjordNorway.txt и assets/tekst/fjordNorway.en.txt.';
            }
            if (blogArticle3Content) {
                blogArticle3Content.textContent = 'Неуспешно зареждане на статията. Провери файловете assets/tekst/NorwayFotball.txt и assets/tekst/NorwayFotball.en.txt.';
            }
        });

    const toggleSectionButtons = Array.from(document.querySelectorAll('.toggle-section-btn'));

    function setSectionToggleState(button, expanded, lang) {
        if (!button) return;
        const targetId = button.dataset.toggleTarget;
        const targetSection = targetId ? document.getElementById(targetId) : null;
        const sectionRoot = button.closest('.collapsible-section');
        if (sectionRoot) {
            sectionRoot.classList.toggle('collapsed', !expanded);
        }
        if (targetSection) {
            targetSection.hidden = !expanded;
        }
        button.setAttribute('aria-expanded', String(expanded));
        button.textContent = expanded ? (lang === 'bg' ? 'Скрий' : 'Hide') : (lang === 'bg' ? 'Виж' : 'Show');
    }

    function applySectionToggleLanguage(lang) {
        toggleSectionButtons.forEach((button) => {
            const sectionRoot = button.closest('.collapsible-section');
            const isExpanded = !sectionRoot || !sectionRoot.classList.contains('collapsed');
            setSectionToggleState(button, isExpanded, lang);
        });
    }

    function setActiveLanguage(lang) {
        btnBG.classList.toggle('active', lang === 'bg');
        btnENG.classList.toggle('active', lang === 'en');
        applySectionToggleLanguage(lang);
        try {
            localStorage.setItem(STORAGE_KEY_LANG, lang);
        } catch (_error) {
            // Ignore storage issues in restricted contexts.
        }
    }

    function renderHeroFacts(items) {
        infoDiv.innerHTML = `
            <div class="hero-facts-grid">
                ${items.map(({ label, value }) => `
                    <div class="hero-fact">
                        <span class="hero-fact-label">${label}</span>
                        <span class="hero-fact-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderBG() {
        setActiveLanguage('bg');
        mainTitle.textContent = 'Norway Explorer';
        if (heroKicker) heroKicker.textContent = 'Скандинавски пътеводител';
        if (heroSubtitle) heroSubtitle.textContent = 'Практичен гид за градове, фиорди, див живот и културни акценти в Норвегия.';
        if (footer) footer.textContent = 'Този сайт е създаден с учебна цел. Данните са информативни и е възможно да има разминавания при автоматичното обновяване.';
        citiesTitle.textContent = '🏙️ Основни градове';
        citiesSubtitle.textContent = 'Два от най-важните и интересни градове в Норвегия.';
        navCities.textContent = 'Градове';
        if (navBirds) navBirds.textContent = 'Животни';
        if (navLand) navLand.textContent = 'Животни';
        if (navMarine) navMarine.textContent = 'Животни';
        if (navMuseum) navMuseum.textContent = 'Музеи';
        if (navBlog) navBlog.textContent = 'Блог';
        if (navConversation) navConversation.textContent = 'Разговорник';
        cityOsloTitle.textContent = 'Осло';
        cityOsloText.textContent = 'Осло е столицата на Норвегия и политически, икономически и културен център на страната. Градът е разположен между фиорд и гори, с отличен обществен транспорт, много музеи и модерна архитектура.';
        if (cityOsloCtaLabel) cityOsloCtaLabel.textContent = 'Хотели и престой';
        if (cityOsloLink) cityOsloLink.textContent = 'Намери хотел в Осло';
        if (cityOsloRestaurantsLink) cityOsloRestaurantsLink.textContent = 'Ресторанти в Осло';
        cityBergenTitle.textContent = 'Берген';
        cityBergenText.textContent = 'Берген е вторият по големина град в Норвегия и е известен като врата към фиордите. Районът Брюген е част от ЮНЕСКО, а градът е популярен с рибния си пазар, дъждовния климат и красивите планински гледки.';
        if (cityBergenCtaLabel) cityBergenCtaLabel.textContent = 'Хотели и престой';
        if (cityBergenLink) cityBergenLink.textContent = 'Намери хотел в Берген';
        if (cityBergenRestaurantsLink) cityBergenRestaurantsLink.textContent = 'Ресторанти в Берген';
        if (cityOsloAffiliateNote) cityOsloAffiliateNote.textContent = 'Партньорски линкове';
        if (cityBergenAffiliateNote) cityBergenAffiliateNote.textContent = 'Партньорски линкове';
        birdsTitle.textContent = '🕊️ Птици';
        birdsSubtitle.textContent = 'Норвегия е дом на над 400 вида птици и едни от най-големите морски колонии в Европа.';
        birdsIntro.textContent = 'Крайбрежието и северните райони са ключови за наблюдение на редки и впечатляващи видове.';
        birdEagleTitle.textContent = '🦅 Морски орел';
        birdEagleText.textContent = 'Най-голямата граблива птица в Европа, с размах на крилата до 2.6 метра. Тегло: около 3.5-7 кг. Максимална скорост: до около 70 км/ч (при пикиране значително повече). Среща се по норвежкото крайбрежие и често се наблюдава над фиордите.';
        birdPuffinTitle.textContent = '🐧 Атлантически тундрик';
        birdPuffinText.textContent = 'Емблематична морска птица на северната природа. Тегло: около 300-600 г. Максимална скорост: до около 88 км/ч при полет. Гнезди на големи колонии по скалистите брегове и се разпознава лесно по цветния си клюн.';
        landAnimalsTitle.textContent = '🦌 Сухоземни Животни';
        landAnimalsSubtitle.textContent = 'Норвежката сухоземна фауна включва видове, адаптирани към суров климат, гори и тундра.';
        landAnimalsIntro.textContent = 'Най-емблематичните представители са лосът и северният елен.';
        landAnimalMooseTitle.textContent = '🫎 Лос';
        landAnimalMooseText.textContent = 'Най-голямото сухоземно животно в Европа. Тегло: около 400-700 кг (при големи мъжки до ~800 кг). Максимална скорост: до около 56 км/ч.';
        landAnimalReindeerTitle.textContent = '🦌 Северен елен';
        landAnimalReindeerText.textContent = 'Символ на Арктика, обитаващ тундрата и северните плата на Норвегия. Тегло: около 80-180 кг. Максимална скорост: до около 80 км/ч.';
        marineAnimalsTitle.textContent = '🐟 Морски Животни';
        marineAnimalsSubtitle.textContent = 'Норвежките морета са сред най-богатите на рибни видове в Северния Атлантик.';
        marineAnimalsIntro.textContent = 'Два от най-познатите видове са атлантическата сьомга и норвежката треска.';
        marineAnimalSalmonTitle.textContent = '🐟 Атлантическа сьомга';
        marineAnimalSalmonText.textContent = 'Емблематичен вид за Норвегия и важен за рибарството и аквакултурите. Тегло: обикновено 3-7 кг (големи екземпляри до ~20 кг). Максимална скорост: до около 35 км/ч.';
        marineAnimalCodTitle.textContent = '🐟 Норвежка треска';
        marineAnimalCodText.textContent = 'Студенолюбива риба, ключова за северните риболовни общности и традиционната кухня. Тегло: обикновено 2-10 кг (едри екземпляри над 20 кг). Максимална скорост: до около 30 км/ч.';
        museumTitle.textContent = '🏛️ Културни забележителности и Музей';
        museumSubtitle.textContent = 'Два музея, които си заслужава да посетиш в Осло и Берген.';
        museumOsloTitle.textContent = 'Осло: Музей „Мунк“ (Munchmuseet)';
        museumOsloText.textContent = 'Музеят „Мунк“ е посветен на Едвард Мунк, автора на „Крясъкът“. Колекцията включва картини, скици и лични архиви, а модерната сграда до Ослофиорд е сред новите културни символи на столицата.';
        if (museumOsloLink) museumOsloLink.textContent = 'Официален сайт';
        museumBergenTitle.textContent = 'Берген: Галерия KODE';
        museumBergenText.textContent = 'KODE е една от най-големите музейни и музикални институции в Скандинавия. В комплекса могат да се видят творби на Мунк, Пикасо и норвежки художници, както и тематични изложби в центъра на Берген.';
        if (museumBergenLink) museumBergenLink.textContent = 'Официален сайт';
        blogTitle.textContent = '📝 Блог и Полезни статий';
        blogSubtitle.textContent = 'Три статии: Операта на Осло, Норвежките фиорди и Футбол в Норвегия.';
        blogArticleTitle.textContent = '🎭 Операта на Осло (Operahuset Oslo)';
        setOperaArticleContent('bg');
        blogArticle2Title.textContent = '🌊 Норвежките фиорди';
        if (blogArticle2Image) blogArticle2Image.alt = 'Норвежки фиорд';
        setFjordArticleContent('bg');
        blogArticle3Title.textContent = '⚽ Футбол в Норвегия';
        if (blogArticle3Image1) blogArticle3Image1.alt = 'Футболен мач в Норвегия';
        if (blogArticle3Image2) blogArticle3Image2.alt = 'Норвежки футболни фенове';
        setFootballArticleContent('bg');
        if (blogOperaLink) blogOperaLink.textContent = 'Официален сайт и практична информация';
        if (blogFjordLink) blogFjordLink.textContent = 'Круиз почивки (Havila Voyages)';
        if (blogFjordHotelsLink) blogFjordHotelsLink.textContent = 'Хотели край фиордите';
        if (blogFootballLink) blogFootballLink.textContent = 'Официален сайт на Норвежкия футболен съюз';
        if (blogAffiliateNote) blogAffiliateNote.textContent = 'Партньорски линкове';
        if (norwayPartnerTitle) norwayPartnerTitle.textContent = 'Партньорство с Norway Explorer';
        if (norwayPartnerText) norwayPartnerText.textContent = 'Промоцирайте вашия хотел, тур, ресторант или туристическа услуга пред 50,000+ пътешественици в Норвегия. Ние ще включим вашата оферта в нашите интерактивни пътеводители и карти. За успешни партньорства предлагаме revenue-share модел от 15% за всяка резервация или покупка, направена чрез нашите линкове.';
        if (norwayPartnerCta) norwayPartnerCta.textContent = 'Свържи се с нас';
        if (norwayPartnerPaypalBtn) norwayPartnerPaypalBtn.textContent = 'PayPal Подкрепа';
        if (norwayPartnerWalletLabel) norwayPartnerWalletLabel.textContent = 'MetaMask адрес за подкрепа:';
        if (norwayPartnerWalletAddress) norwayPartnerWalletAddress.textContent = NORWAY_SUPPORT_WALLET;
        if (norwayPartnerWalletCopy) {
            norwayPartnerWalletCopy.textContent = 'Копирай адрес';
            norwayPartnerWalletCopy.dataset.defaultLabel = 'Копирай адрес';
        }
        if (norwayPartnerWalletHint) norwayPartnerWalletHint.textContent = 'Изпращай само през съвместима EVM мрежа.';
        if (norwayPartnerContactHint) norwayPartnerContactHint.textContent = 'Пиши ни директно през социалните мрежи за партньорства.';
        if (norwayPartnerInstagramBtn) norwayPartnerInstagramBtn.href = NORWAY_PARTNER_INSTAGRAM_URL;
        if (norwayPartnerFacebookBtn) norwayPartnerFacebookBtn.href = NORWAY_PARTNER_FACEBOOK_URL;
        if (norwayPartnerXBtn) norwayPartnerXBtn.href = NORWAY_PARTNER_X_URL;
        projectsTitle.textContent = '🌐 Още наши проекти';
        projectsSubtitle.textContent = 'Разгледай и други наши интерактивни уеб проекти.';
        projectATitle.textContent = '� Game Explorer';
        projectADesc.textContent = 'Бърза мини игра с изчистен интерфейс и динамичен геймплей.';
        projectALink.textContent = 'Посети';
        projectBTitle.textContent = '⚽ CSKA Explorer';
        projectBDesc.textContent = 'Фен сайт с акценти, история и полезна информация за ЦСКА.';
        projectBLink.textContent = 'Посети';
        projectCTitle.textContent = '🇮🇩 Indonesia Explorer';
        projectCDesc.textContent = 'Пътеводител с градове, природа, животни и полезни статии.';
        projectCLink.textContent = 'Посети';
        renderHeroFacts([
            { label: 'Страна', value: 'Норвегия' },
            { label: 'Столица', value: 'Осло' },
            { label: 'Регион', value: 'Европа' },
            { label: 'Население', value: '5,606,944' },
            { label: 'Валута', value: 'NOK' },
            { label: 'Език', value: 'Норвежки (Nynorsk)' }
        ]);
        renderConversationGuide('bg');
    }

    function renderENG() {
        setActiveLanguage('en');
        mainTitle.textContent = 'Norway Explorer';
        if (heroKicker) heroKicker.textContent = 'Nordic travel guide';
        if (heroSubtitle) heroSubtitle.textContent = 'A practical guide to Norway\'s cities, fjords, wildlife, and cultural highlights.';
        if (footer) footer.textContent = 'This site is created for educational purposes. The data is for informational use and may differ due to automatic updates.';
        citiesTitle.textContent = '🏙️ Key Cities';
        citiesSubtitle.textContent = 'Two of the most important and interesting cities in Norway.';
        navCities.textContent = 'Cities';
        if (navBirds) navBirds.textContent = 'Animals';
        if (navLand) navLand.textContent = 'Animals';
        if (navMarine) navMarine.textContent = 'Animals';
        if (navMuseum) navMuseum.textContent = 'Museums';
        if (navBlog) navBlog.textContent = 'Blog';
        if (navConversation) navConversation.textContent = 'Conversation';
        cityOsloTitle.textContent = 'Oslo';
        cityOsloText.textContent = 'Oslo is the capital of Norway and the country\'s political, economic, and cultural center. The city sits between a fjord and forests, offering excellent public transport, many museums, and modern architecture.';
        if (cityOsloCtaLabel) cityOsloCtaLabel.textContent = 'Hotels and stays';
        if (cityOsloLink) cityOsloLink.textContent = 'Find hotels in Oslo';
        if (cityOsloRestaurantsLink) cityOsloRestaurantsLink.textContent = 'Restaurants in Oslo';
        cityBergenTitle.textContent = 'Bergen';
        cityBergenText.textContent = 'Bergen is Norway\'s second-largest city and is known as a gateway to the fjords. The Bryggen district is a UNESCO site, and the city is famous for its fish market, rainy climate, and mountain views.';
        if (cityBergenCtaLabel) cityBergenCtaLabel.textContent = 'Hotels and stays';
        if (cityBergenLink) cityBergenLink.textContent = 'Find hotels in Bergen';
        if (cityBergenRestaurantsLink) cityBergenRestaurantsLink.textContent = 'Restaurants in Bergen';
        if (cityOsloAffiliateNote) cityOsloAffiliateNote.textContent = 'Affiliate links';
        if (cityBergenAffiliateNote) cityBergenAffiliateNote.textContent = 'Affiliate links';
        birdsTitle.textContent = '🕊️ Birds';
        birdsSubtitle.textContent = 'Norway is home to over 400 bird species and some of Europe\'s largest seabird colonies.';
        birdsIntro.textContent = 'The coastline and northern regions are prime areas for spotting rare and impressive birdlife.';
        birdEagleTitle.textContent = '🦅 White-tailed eagle';
        birdEagleText.textContent = 'The largest bird of prey in Europe, with a wingspan up to 2.6 meters. Weight: around 3.5-7 kg. Top speed: up to about 70 km/h (much higher in dives). It is commonly seen along the Norwegian coast and above fjords.';
        birdPuffinTitle.textContent = '🐧 Atlantic puffin';
        birdPuffinText.textContent = 'An iconic seabird of the north. Weight: around 300-600 g. Top speed: up to about 88 km/h in flight. It nests in large colonies on rocky cliffs and is easy to recognize by its colorful bill.';
        landAnimalsTitle.textContent = '🦌 Land Animals';
        landAnimalsSubtitle.textContent = 'Norway\'s terrestrial fauna includes species adapted to harsh climate, forests, and tundra.';
        landAnimalsIntro.textContent = 'Two iconic representatives are the moose and the reindeer.';
        landAnimalMooseTitle.textContent = '🫎 Moose';
        landAnimalMooseText.textContent = 'The largest land animal in Europe. Weight: around 400-700 kg (large males can reach ~800 kg). Top speed: up to about 56 km/h.';
        landAnimalReindeerTitle.textContent = '🦌 Reindeer';
        landAnimalReindeerText.textContent = 'An Arctic symbol living in tundra and northern plateaus of Norway. Weight: around 80-180 kg. Top speed: up to about 80 km/h.';
        marineAnimalsTitle.textContent = '🐟 Marine Animals';
        marineAnimalsSubtitle.textContent = 'Norwegian seas are among the richest fishing grounds in the North Atlantic.';
        marineAnimalsIntro.textContent = 'Two of the best-known species are the Atlantic salmon and the Norwegian cod.';
        marineAnimalSalmonTitle.textContent = '🐟 Atlantic salmon';
        marineAnimalSalmonText.textContent = 'An iconic species for Norway and highly important for fisheries and aquaculture. Weight: usually 3-7 kg (large individuals up to ~20 kg). Top speed: up to about 35 km/h.';
        marineAnimalCodTitle.textContent = '🐟 Norwegian cod';
        marineAnimalCodText.textContent = 'A cold-water species central to northern fishing communities and traditional cuisine. Weight: usually 2-10 kg (large individuals over 20 kg). Top speed: up to about 30 km/h.';
        museumTitle.textContent = '🏛️ Cultural Landmarks and Museum';
        museumSubtitle.textContent = 'Two museums worth visiting in Oslo and Bergen.';
        museumOsloTitle.textContent = 'Oslo: MUNCH Museum (Munchmuseet)';
        museumOsloText.textContent = 'The MUNCH Museum is dedicated to Edvard Munch, the artist behind "The Scream." Its collection includes paintings, sketches, and personal archives, and the modern waterfront building is one of Oslo\'s new cultural icons.';
        if (museumOsloLink) museumOsloLink.textContent = 'Official site';
        museumBergenTitle.textContent = 'Bergen: KODE Art Museums';
        museumBergenText.textContent = 'KODE is one of Scandinavia\'s largest museum and music institutions. Visitors can explore works by Munch, Picasso, and Norwegian artists, along with rotating exhibitions in central Bergen.';
        if (museumBergenLink) museumBergenLink.textContent = 'Official site';
        blogTitle.textContent = '📝 Blog and Useful Articles';
        blogSubtitle.textContent = 'Three articles: Oslo Opera House, Norwegian Fjords, and Football in Norway.';
        blogArticleTitle.textContent = '🎭 Oslo Opera House (Operahuset Oslo)';
        setOperaArticleContent('en');
        blogArticle2Title.textContent = '🌊 Norwegian Fjords';
        if (blogArticle2Image) blogArticle2Image.alt = 'Norwegian fjord';
        setFjordArticleContent('en');
        blogArticle3Title.textContent = '⚽ Football in Norway';
        if (blogArticle3Image1) blogArticle3Image1.alt = 'Football match in Norway';
        if (blogArticle3Image2) blogArticle3Image2.alt = 'Norwegian football fans';
        setFootballArticleContent('en');
        if (blogOperaLink) blogOperaLink.textContent = 'Official site and practical information';
        if (blogFjordLink) blogFjordLink.textContent = 'Cruise holidays (Havila Voyages)';
        if (blogFjordHotelsLink) blogFjordHotelsLink.textContent = 'Hotels near the fjords';
        if (blogFootballLink) blogFootballLink.textContent = 'Official website of the Norwegian Football Federation';
        if (blogAffiliateNote) blogAffiliateNote.textContent = 'Affiliate links';
        if (norwayPartnerTitle) norwayPartnerTitle.textContent = 'Partnership with Norway Explorer';
        if (norwayPartnerText) norwayPartnerText.textContent = 'Promote your hotel, tour, restaurant or tourism service to 50,000+ travelers in Norway. We will include your offer in our interactive guides and maps. For successful partnerships, we offer a revenue-share model of 15% for each booking or purchase made through our links.';
        if (norwayPartnerCta) norwayPartnerCta.textContent = 'Contact us';
        if (norwayPartnerPaypalBtn) norwayPartnerPaypalBtn.textContent = 'Support via PayPal';
        if (norwayPartnerWalletLabel) norwayPartnerWalletLabel.textContent = 'MetaMask support address:';
        if (norwayPartnerWalletAddress) norwayPartnerWalletAddress.textContent = NORWAY_SUPPORT_WALLET;
        if (norwayPartnerWalletCopy) {
            norwayPartnerWalletCopy.textContent = 'Copy address';
            norwayPartnerWalletCopy.dataset.defaultLabel = 'Copy address';
        }
        if (norwayPartnerWalletHint) norwayPartnerWalletHint.textContent = 'Send only on a compatible EVM network.';
        if (norwayPartnerContactHint) norwayPartnerContactHint.textContent = 'For partnerships, message us directly on social media.';
        if (norwayPartnerInstagramBtn) norwayPartnerInstagramBtn.href = NORWAY_PARTNER_INSTAGRAM_URL;
        if (norwayPartnerFacebookBtn) norwayPartnerFacebookBtn.href = NORWAY_PARTNER_FACEBOOK_URL;
        if (norwayPartnerXBtn) norwayPartnerXBtn.href = NORWAY_PARTNER_X_URL;
        projectsTitle.textContent = '🌐 More Projects';
        projectsSubtitle.textContent = 'Explore our other interactive web projects.';
        projectATitle.textContent = '� Game Explorer';
        projectADesc.textContent = 'A fast mini game with a clean interface and dynamic gameplay.';
        projectALink.textContent = 'Visit';
        projectBTitle.textContent = '⚽ CSKA Explorer';
        projectBDesc.textContent = 'A fan website with highlights, history, and useful CSKA content.';
        projectBLink.textContent = 'Visit';
        projectCTitle.textContent = '🇮🇩 Indonesia Explorer';
        projectCDesc.textContent = 'A guide with cities, nature, wildlife, and useful blog articles.';
        projectCLink.textContent = 'Visit';
        renderHeroFacts([
            { label: 'Country', value: 'Norway' },
            { label: 'Capital', value: 'Oslo' },
            { label: 'Region', value: 'Europe' },
            { label: 'Population', value: '5,606,944' },
            { label: 'Currency', value: 'NOK' },
            { label: 'Language', value: 'Norwegian Nynorsk' }
        ]);
        renderConversationGuide('en');
    }

    toggleSectionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const sectionRoot = button.closest('.collapsible-section');
            const willExpand = sectionRoot ? sectionRoot.classList.contains('collapsed') : false;
            const currentLang = btnENG.classList.contains('active') ? 'en' : 'bg';
            setSectionToggleState(button, willExpand, currentLang);
        });
    });

    btnBG.addEventListener('click', renderBG);
    btnENG.addEventListener('click', renderENG);

    if (norwayPartnerWalletCopy) {
        norwayPartnerWalletCopy.addEventListener('click', copyNorwayPartnerWalletAddress);
    }

    function copyNorwayPartnerWalletAddress() {
        if (!norwayPartnerWalletCopy) {
            return;
        }

        const defaultLabel = norwayPartnerWalletCopy.dataset.defaultLabel || getFormTextByLang('Копирай адрес', 'Copy address');
        const copiedLabel = getFormTextByLang('Копирано', 'Copied');

        function onSuccess() {
            norwayPartnerWalletCopy.textContent = copiedLabel;
            setTimeout(() => {
                norwayPartnerWalletCopy.textContent = defaultLabel;
            }, 1400);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(NORWAY_SUPPORT_WALLET).then(onSuccess).catch(() => {
                copyNorwayWalletFallback(onSuccess);
            });
            return;
        }

        copyNorwayWalletFallback(onSuccess);
    }

    function copyNorwayWalletFallback(onSuccess) {
        const textArea = document.createElement('textarea');
        textArea.value = NORWAY_SUPPORT_WALLET;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            const copied = document.execCommand('copy');
            if (copied) {
                onSuccess();
            }
        } catch (_error) {
        }

        document.body.removeChild(textArea);
    }


    if (backToTop) {
        const handleBackToTopVisibility = () => {
            backToTop.classList.toggle('show', window.scrollY > 260);
        };

        window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        handleBackToTopVisibility();
    }

    let preferredLang = 'en';
    try {
        preferredLang = localStorage.getItem(STORAGE_KEY_LANG) || 'en';
    } catch (_error) {
        preferredLang = 'en';
    }

    if (preferredLang === 'en') {
        renderENG();
    } else {
        renderBG();
    }
});