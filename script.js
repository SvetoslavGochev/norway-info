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

    const conversationGuideData = {
        bg: {
            kicker: 'Разговорник',
            title: 'Разговорник за Норвегия',
            subtitle: 'Избери категория и виж 10 практически реплики за реални ситуации.',
            categories: [
                {
                    id: 'airport',
                    label: 'Летище',
                    phrases: [
                        { q: 'Къде е изходът за багажа?', a: 'Baggage claim is on the lower level near the arrivals hall.' },
                        { q: 'Къде мога да взема такси?', a: 'You can take a taxi outside the main terminal.' },
                        { q: 'Има ли Wi-Fi в летището?', a: 'Yes, free airport Wi‑Fi is available in most areas.' },
                        { q: 'Къде е регистрацията?', a: 'Check-in is usually on the ground floor, near the airline desks.' },
                        { q: 'Как да стигна до центъра?', a: 'You can use the airport train or a taxi to the city center.' },
                        { q: 'Колко време отнема пътуването до Осло?', a: 'It usually takes around 20–35 minutes by train, depending on the station.' },
                        { q: 'Къде е пунктът за информация?', a: 'The information desk is near the arrivals area.' },
                        { q: 'Има ли място за съхранение на багаж?', a: 'Yes, there are luggage storage services in the terminal.' },
                        { q: 'Дали мога да сменя валута тук?', a: 'Yes, there are currency exchange offices at the airport.' },
                        { q: 'Как да стигна до хотел?', a: 'Ask for the most direct taxi or train route to your hotel.' }
                    ]
                },
                {
                    id: 'cafe',
                    label: 'Кафене',
                    phrases: [
                        { q: 'Може ли да имам карта?', a: 'Of course, here is the menu and today\'s specials.' },
                        { q: 'Какво препоръчвате?', a: 'The coffee and pastries are very popular here.' },
                        { q: 'Искам без лактоза кафе.', a: 'No problem, we can prepare a dairy-free option.' },
                        { q: 'Колко струва капучино?', a: 'A cappuccino usually costs around 40–60 NOK.' },
                        { q: 'Мога ли да седна навън?', a: 'Yes, the outdoor seating area is available.' },
                        { q: 'Има ли вегански десерти?', a: 'Yes, we have a few vegan options on the menu.' },
                        { q: 'Мога ли да получа сметката?', a: 'Certainly, I will bring it right away.' },
                        { q: 'Има ли безкофеинови напитки?', a: 'Yes, we have tea and decaf coffee.' },
                        { q: 'Може ли да взема и със себе си?', a: 'Yes, we can offer a takeaway cup.' },
                        { q: 'Това е достатъчно?', a: 'Yes, it is perfect. Thank you.' }
                    ]
                },
                {
                    id: 'restaurant',
                    label: 'Ресторант',
                    phrases: [
                        { q: 'Има ли свободна маса за двама?', a: 'Yes, we have a table available for two.' },
                        { q: 'Какво препоръчвате?', a: 'I recommend the local fish and the seasonal menu.' },
                        { q: 'Имате ли вегетариански ястия?', a: 'Yes, we offer vegetarian dishes and gluten-free options.' },
                        { q: 'Може ли да поръчам без сол?', a: 'Of course, we can prepare it without extra salt.' },
                        { q: 'Кога се сервира вечеря?', a: 'Dinner is served from 17:00 onwards.' },
                        { q: 'Има ли рибни специалитети?', a: 'Yes, the salmon and cod are especially popular.' },
                        { q: 'Мога ли да получа сметката?', a: 'Absolutely, I will bring the bill right away.' },
                        { q: 'Това има ли лактоза?', a: 'This dish does contain dairy, but we can suggest alternatives.' },
                        { q: 'Може ли да направите без глутен?', a: 'Yes, we can adjust the order for gluten-free needs.' },
                        { q: 'Искам да поръчам без месо.', a: 'No problem, we can prepare a vegetarian version.' }
                    ]
                },
                {
                    id: 'hotel',
                    label: 'Хотел',
                    phrases: [
                        { q: 'Имам резервация под името…', a: 'Certainly, let me check your booking in the system.' },
                        { q: 'Има ли свободни стаи?', a: 'Yes, we have rooms available for tonight.' },
                        { q: 'Колко струва една нощувка?', a: 'The nightly rate depends on the room type and booking date.' },
                        { q: 'Къде е входът?', a: 'The entrance is just through the main lobby on the left.' },
                        { q: 'Мога ли да получа ключ от стаята?', a: 'Yes, here is your key card and welcome information.' },
                        { q: 'Има ли Wi‑Fi в стаята?', a: 'Yes, the internet is free in all rooms.' },
                        { q: 'Къде е банята?', a: 'The bathroom is connected to the room and includes a shower.' },
                        { q: 'Мога ли да взема такси до летището?', a: 'We can arrange a taxi or help with directions.' },
                        { q: 'Има ли перилня и сушилня?', a: 'Yes, laundry facilities are available on the ground floor.' },
                        { q: 'Кога е проверката?', a: 'Check-out is usually by 11:00 or 12:00.' }
                    ]
                },
                {
                    id: 'transport',
                    label: 'Транспорт',
                    phrases: [
                        { q: 'Къде мога да взема автобус?', a: 'The bus stop is just outside the station building.' },
                        { q: 'Къде е най-близката спирка?', a: 'The nearest stop is two minutes away on the main road.' },
                        { q: 'Колко струва билетът до центъра?', a: 'A single ride usually costs around 40 NOK.' },
                        { q: 'Може ли да платя с карта?', a: 'Yes, contactless and card payments are accepted.' },
                        { q: 'Кога тръгва следващият автобус?', a: 'The next one leaves in about ten minutes.' },
                        { q: 'Има ли влак до летището?', a: 'Yes, the airport train runs regularly from the city center.' },
                        { q: 'Мога ли да взема такси?', a: 'Certainly, there are taxis available nearby.' },
                        { q: 'Как да стигна до пристанището?', a: 'Follow the signs for the harbor, it is well marked.' },
                        { q: 'Къде мога да наема кола?', a: 'Car rental desks are at the terminal and near the station.' },
                        { q: 'Как да се придвижвам с обществен транспорт?', a: 'Use the city app or ask for the nearest local route map.' }
                    ]
                },
                {
                    id: 'bar',
                    label: 'Бар',
                    phrases: [
                        { q: 'Какво препоръчвате?', a: 'A local lager or Norwegian craft beer is a great choice.' },
                        { q: 'Имате ли безалкохолни напитки?', a: 'Yes, we have a wide selection of non-alcoholic drinks.' },
                        { q: 'Колко струва едно пиво?', a: 'A beer usually costs around 80–120 NOK.' },
                        { q: 'Мога ли да получа меню?', a: 'Of course, here is the drinks menu.' },
                        { q: 'Има ли тапас?', a: 'Yes, we have snacks and small plates available.' },
                        { q: 'Къде е барът?', a: 'The bar is on the first floor, near the lounge area.' },
                        { q: 'Има ли жива музика?', a: 'Yes, there is live music on Fridays and weekends.' },
                        { q: 'Има ли време за друго питие?', a: 'Absolutely, I can bring another round.' },
                        { q: 'Мога ли да платя с карта?', a: 'Yes, card payments work perfectly here.' },
                        { q: 'Къде се намира банкоматът?', a: 'There is an ATM near the entrance.' }
                    ]
                },
                {
                    id: 'date',
                    label: 'Среща',
                    phrases: [
                        { q: 'Hi, what are you doing this weekend?', a: 'I am planning to go out and explore the city.' },
                        { q: 'Would you like to grab a coffee?', a: 'Yes, that sounds nice. I would love to.' },
                        { q: 'How are you?', a: 'I am good, thanks for asking.' },
                        { q: 'Do you have any favorite places here?', a: 'I like cozy cafés and scenic viewpoints.' },
                        { q: 'Can we meet later?', a: 'Yes, I am free after work this evening.' },
                        { q: 'Are you free on Saturday?', a: 'Yes, Saturday works well for me.' },
                        { q: 'What would you like to do?', a: 'Maybe we can walk around the harbor and get dinner.' },
                        { q: 'Where should we meet?', a: 'Let\'s meet near the station square.' },
                        { q: 'Do you want to take a walk?', a: 'Yes, I would enjoy that very much.' },
                        { q: 'I had a great time tonight.', a: 'Me too, I really enjoyed it.' }
                    ]
                },
                {
                    id: 'work',
                    label: 'Работа',
                    phrases: [
                        { q: 'I am interested in the job position.', a: 'Great, tell me more about your experience and skills.' },
                        { q: 'What are the working hours?', a: 'The schedule is usually 08:00–16:00, depending on the role.' },
                        { q: 'Do you speak English at work?', a: 'Yes, English is commonly used in the workplace.' },
                        { q: 'Could you explain the responsibilities?', a: 'Of course, the role includes customer service and daily operations.' },
                        { q: 'When can I start?', a: 'You can start as soon as the paperwork is completed.' },
                        { q: 'Is the contract full-time?', a: 'Yes, it is a permanent full-time position.' },
                        { q: 'Do you offer training?', a: 'Yes, we provide an onboarding and training period.' },
                        { q: 'What is the salary range?', a: 'The pay depends on the role and experience level.' },
                        { q: 'Can I send my CV?', a: 'Yes, please send it in PDF format by email.' },
                        { q: 'Can we schedule an interview?', a: 'Absolutely, we can arrange a short interview next week.' }
                    ]
                },
                {
                    id: 'shopping',
                    label: 'Пазаруване',
                    phrases: [
                        { q: 'How much is this?', a: 'This costs 150 NOK.' },
                        { q: 'Do you have a smaller size?', a: 'Yes, we have this model in a smaller size too.' },
                        { q: 'Can I pay by card?', a: 'Yes, card payment is available.' },
                        { q: 'Do you have this in another color?', a: 'Yes, we have it in black and blue.' },
                        { q: 'Is this product local?', a: 'Yes, it is made in Norway.' },
                        { q: 'Can I try this on?', a: 'Of course, the fitting room is just over there.' },
                        { q: 'Where are the discounts?', a: 'The sale section is on the lower floor.' },
                        { q: 'Do you have any souvenirs?', a: 'Yes, we have local items and gifts from the region.' },
                        { q: 'Can I get a bag?', a: 'Yes, here is a shopping bag for you.' },
                        { q: 'Is it possible to return this?', a: 'Yes, returns are accepted within the policy period.' }
                    ]
                },
                {
                    id: 'help',
                    label: 'Помощ',
                    phrases: [
                        { q: 'I need help, please.', a: 'Of course, I will help you right away.' },
                        { q: 'Where is the nearest hospital?', a: 'The nearest hospital is a short taxi ride away.' },
                        { q: 'Can you call emergency services?', a: 'Yes, I can call for help immediately.' },
                        { q: 'I lost my phone.', a: 'Let\'s go to the information desk and report it.' },
                        { q: 'Where is the pharmacy?', a: 'The pharmacy is next to the main square.' },
                        { q: 'I am feeling unwell.', a: 'Please sit down and I will call for assistance.' },
                        { q: 'Can you help me with directions?', a: 'Yes, I can explain the quickest route.' },
                        { q: 'I need a doctor.', a: 'I can help you find the nearest clinic.' },
                        { q: 'I cannot find my hotel.', a: 'Let me help you look up the address and route.' },
                        { q: 'Can someone speak English?', a: 'Yes, many staff members can speak English here.' }
                    ]
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
                    phrases: [
                        { q: 'Where is the baggage claim?', a: 'Baggage claim is on the lower level near the arrivals hall.' },
                        { q: 'Where can I get a taxi?', a: 'You can take a taxi outside the main terminal.' },
                        { q: 'Is there Wi‑Fi at the airport?', a: 'Yes, free airport Wi‑Fi is available in most areas.' },
                        { q: 'Where is check-in?', a: 'Check-in is usually on the ground floor near the airline desks.' },
                        { q: 'How do I get to the city center?', a: 'You can use the airport train or a taxi to the city center.' },
                        { q: 'How long does it take to get to Oslo?', a: 'It usually takes around 20–35 minutes by train.' },
                        { q: 'Where is the information desk?', a: 'The information desk is near the arrivals area.' },
                        { q: 'Is there luggage storage?', a: 'Yes, luggage storage services are available in the terminal.' },
                        { q: 'Can I exchange money here?', a: 'Yes, there are currency exchange offices at the airport.' },
                        { q: 'How do I get to my hotel?', a: 'Ask for the most direct taxi or train route to your hotel.' }
                    ]
                },
                {
                    id: 'cafe',
                    label: 'Café',
                    phrases: [
                        { q: 'Can I see the menu?', a: 'Of course, here is the menu and today\'s specials.' },
                        { q: 'What do you recommend?', a: 'The coffee and pastries are very popular here.' },
                        { q: 'I want a lactose-free coffee.', a: 'No problem, we can prepare a dairy-free option.' },
                        { q: 'How much is a cappuccino?', a: 'A cappuccino usually costs around 40–60 NOK.' },
                        { q: 'Can I sit outside?', a: 'Yes, the outdoor seating area is available.' },
                        { q: 'Do you have vegan desserts?', a: 'Yes, we have a few vegan options on the menu.' },
                        { q: 'Can I get the bill?', a: 'Certainly, I will bring it right away.' },
                        { q: 'Do you have decaf drinks?', a: 'Yes, we have tea and decaf coffee.' },
                        { q: 'Can I take this with me?', a: 'Yes, we can offer a takeaway cup.' },
                        { q: 'Is this enough?', a: 'Yes, it is perfect. Thank you.' }
                    ]
                },
                {
                    id: 'restaurant',
                    label: 'Restaurant',
                    phrases: [
                        { q: 'Do you have a table for two?', a: 'Yes, we have a table available for two.' },
                        { q: 'What would you recommend?', a: 'I recommend the local fish and the seasonal menu.' },
                        { q: 'Do you have vegetarian dishes?', a: 'Yes, we offer vegetarian dishes and gluten-free options.' },
                        { q: 'Can I order without salt?', a: 'Of course, we can prepare it without extra salt.' },
                        { q: 'When is dinner served?', a: 'Dinner is served from 17:00 onwards.' },
                        { q: 'Do you have fish specialties?', a: 'Yes, the salmon and cod are especially popular.' },
                        { q: 'Can I have the bill?', a: 'Absolutely, I will bring the bill right away.' },
                        { q: 'Does this contain dairy?', a: 'This dish does contain dairy, but we can suggest alternatives.' },
                        { q: 'Can you make this gluten-free?', a: 'Yes, we can adjust the order for gluten-free needs.' },
                        { q: 'I would like a meat-free dish.', a: 'No problem, we can prepare a vegetarian version.' }
                    ]
                },
                {
                    id: 'hotel',
                    label: 'Hotel',
                    phrases: [
                        { q: 'I have a reservation under the name…', a: 'Certainly, let me check your booking in the system.' },
                        { q: 'Do you have any rooms available?', a: 'Yes, we have rooms available for tonight.' },
                        { q: 'How much is one night?', a: 'The nightly rate depends on the room type and date.' },
                        { q: 'Where is the entrance?', a: 'The entrance is just through the main lobby on the left.' },
                        { q: 'Can I get the room key?', a: 'Yes, here is your key card and welcome information.' },
                        { q: 'Is there Wi‑Fi in the room?', a: 'Yes, the internet is free in all rooms.' },
                        { q: 'Where is the bathroom?', a: 'The bathroom is connected to the room and includes a shower.' },
                        { q: 'Can I get a taxi to the airport?', a: 'We can arrange a taxi or help with directions.' },
                        { q: 'Is there laundry service?', a: 'Yes, laundry facilities are available on the ground floor.' },
                        { q: 'When is check-out?', a: 'Check-out is usually by 11:00 or 12:00.' }
                    ]
                },
                {
                    id: 'transport',
                    label: 'Transport',
                    phrases: [
                        { q: 'Where can I catch the bus?', a: 'The bus stop is just outside the station building.' },
                        { q: 'Where is the nearest stop?', a: 'The nearest stop is two minutes away on the main road.' },
                        { q: 'How much is a ticket to the center?', a: 'A single ride usually costs around 40 NOK.' },
                        { q: 'Can I pay by card?', a: 'Yes, contactless and card payments are accepted.' },
                        { q: 'When is the next bus?', a: 'The next one leaves in about ten minutes.' },
                        { q: 'Is there a train to the airport?', a: 'Yes, the airport train runs regularly from the city center.' },
                        { q: 'Can I catch a taxi?', a: 'Certainly, there are taxis available nearby.' },
                        { q: 'How do I get to the harbor?', a: 'Follow the signs for the harbor, it is well marked.' },
                        { q: 'Where can I rent a car?', a: 'Car rental desks are at the terminal and near the station.' },
                        { q: 'How do I use public transport?', a: 'Use the city app or ask for the nearest local route map.' }
                    ]
                },
                {
                    id: 'bar',
                    label: 'Bar',
                    phrases: [
                        { q: 'What do you recommend?', a: 'A local lager or Norwegian craft beer is a great choice.' },
                        { q: 'Do you have non-alcoholic drinks?', a: 'Yes, we have a wide selection of non-alcoholic drinks.' },
                        { q: 'How much is a beer?', a: 'A beer usually costs around 80–120 NOK.' },
                        { q: 'Can I see the drinks menu?', a: 'Of course, here is the drinks menu.' },
                        { q: 'Do you have snacks?', a: 'Yes, we have snacks and small plates available.' },
                        { q: 'Where is the bar?', a: 'The bar is on the first floor near the lounge area.' },
                        { q: 'Is there live music?', a: 'Yes, there is live music on Fridays and weekends.' },
                        { q: 'Can I order another drink?', a: 'Absolutely, I can bring another round.' },
                        { q: 'Can I pay by card?', a: 'Yes, card payments work perfectly here.' },
                        { q: 'Where is the ATM?', a: 'There is an ATM near the entrance.' }
                    ]
                },
                {
                    id: 'date',
                    label: 'Date',
                    phrases: [
                        { q: 'Hi, what are you doing this weekend?', a: 'I am planning to go out and explore the city.' },
                        { q: 'Would you like to grab a coffee?', a: 'Yes, that sounds nice. I would love to.' },
                        { q: 'How are you?', a: 'I am good, thanks for asking.' },
                        { q: 'Do you have any favorite places here?', a: 'I like cozy cafés and scenic viewpoints.' },
                        { q: 'Can we meet later?', a: 'Yes, I am free after work this evening.' },
                        { q: 'Are you free on Saturday?', a: 'Yes, Saturday works well for me.' },
                        { q: 'What would you like to do?', a: 'Maybe we can walk around the harbor and get dinner.' },
                        { q: 'Where should we meet?', a: 'Let\'s meet near the station square.' },
                        { q: 'Do you want to take a walk?', a: 'Yes, I would enjoy that very much.' },
                        { q: 'I had a great time tonight.', a: 'Me too, I really enjoyed it.' }
                    ]
                },
                {
                    id: 'work',
                    label: 'Work',
                    phrases: [
                        { q: 'I am interested in this position.', a: 'Great, tell me more about your experience and skills.' },
                        { q: 'What are the working hours?', a: 'The schedule is usually 08:00–16:00, depending on the role.' },
                        { q: 'Do you speak English at work?', a: 'Yes, English is commonly used in the workplace.' },
                        { q: 'Could you explain the responsibilities?', a: 'Of course, the role includes customer service and daily operations.' },
                        { q: 'When can I start?', a: 'You can start as soon as the paperwork is completed.' },
                        { q: 'Is the contract full-time?', a: 'Yes, it is a permanent full-time position.' },
                        { q: 'Do you offer training?', a: 'Yes, we provide an onboarding and training period.' },
                        { q: 'What is the salary range?', a: 'The pay depends on the role and experience level.' },
                        { q: 'Can I send my CV?', a: 'Yes, please send it in PDF format by email.' },
                        { q: 'Can we schedule an interview?', a: 'Absolutely, we can arrange a short interview next week.' }
                    ]
                },
                {
                    id: 'shopping',
                    label: 'Shopping',
                    phrases: [
                        { q: 'How much is this?', a: 'This costs 150 NOK.' },
                        { q: 'Do you have a smaller size?', a: 'Yes, we have this model in a smaller size too.' },
                        { q: 'Can I pay by card?', a: 'Yes, card payment is available.' },
                        { q: 'Do you have this in another color?', a: 'Yes, we have it in black and blue.' },
                        { q: 'Is this product local?', a: 'Yes, it is made in Norway.' },
                        { q: 'Can I try this on?', a: 'Of course, the fitting room is just over there.' },
                        { q: 'Where are the discounts?', a: 'The sale section is on the lower floor.' },
                        { q: 'Do you have any souvenirs?', a: 'Yes, we have local items and gifts from the region.' },
                        { q: 'Can I get a bag?', a: 'Yes, here is a shopping bag for you.' },
                        { q: 'Is it possible to return this?', a: 'Yes, returns are accepted within the policy period.' }
                    ]
                },
                {
                    id: 'help',
                    label: 'Help',
                    phrases: [
                        { q: 'I need help, please.', a: 'Of course, I will help you right away.' },
                        { q: 'Where is the nearest hospital?', a: 'The nearest hospital is a short taxi ride away.' },
                        { q: 'Can you call emergency services?', a: 'Yes, I can call for help immediately.' },
                        { q: 'I lost my phone.', a: 'Let\'s go to the information desk and report it.' },
                        { q: 'Where is the pharmacy?', a: 'The pharmacy is next to the main square.' },
                        { q: 'I am feeling unwell.', a: 'Please sit down and I will call for assistance.' },
                        { q: 'Can you help me with directions?', a: 'Yes, I can explain the quickest route.' },
                        { q: 'I need a doctor.', a: 'I can help you find the nearest clinic.' },
                        { q: 'I cannot find my hotel.', a: 'Let me help you look up the address and route.' },
                        { q: 'Can someone speak English?', a: 'Yes, many staff members can speak English here.' }
                    ]
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
        const renderCategory = (categoryId) => {
            const category = categoryButtons.find((item) => item.id === categoryId) || categoryButtons[0];
            const phrases = category ? category.phrases : [];

            conversationList.innerHTML = phrases.map((phrase) => `
                <article class="conversation-item">
                    <span class="conversation-label">${lang === 'bg' ? 'Въпрос' : 'Question'}</span>
                    <p>${phrase.q}</p>
                    <span class="conversation-label">${lang === 'bg' ? 'Отговор' : 'Answer'}</span>
                    <p>${phrase.a}</p>
                </article>
            `).join('');

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

    let preferredLang = 'bg';
    try {
        preferredLang = localStorage.getItem(STORAGE_KEY_LANG) || 'bg';
    } catch (_error) {
        preferredLang = 'bg';
    }

    if (preferredLang === 'en') {
        renderENG();
    } else {
        renderBG();
    }
});