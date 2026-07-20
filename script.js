document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY_LANG = 'norwayExplorerLang';
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
    const norwayPartnerEmailHint = document.getElementById('norway-partner-email-hint');

    const footer = document.getElementById('site-footer');
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

    function setActiveLanguage(lang) {
        btnBG.classList.toggle('active', lang === 'bg');
        btnENG.classList.toggle('active', lang === 'en');
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
        navBirds.textContent = 'Птици';
        navLand.textContent = 'Сухоземни';
        navMarine.textContent = 'Морски';
        navMuseum.textContent = 'Музеи';
        navBlog.textContent = 'Блог';
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
        if (norwayPartnerCta) norwayPartnerCta.textContent = 'Изпрати запитване';
        if (norwayPartnerEmailHint) norwayPartnerEmailHint.textContent = 'Или пиши директно на:';
        projectsTitle.textContent = '🌐 Още наши проекти';
        projectsSubtitle.textContent = 'Разгледай и други наши интерактивни уеб проекти.';
        projectATitle.textContent = '🏓 Pin-Pong';
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
        navBirds.textContent = 'Birds';
        navLand.textContent = 'Land';
        navMarine.textContent = 'Marine';
        navMuseum.textContent = 'Museums';
        navBlog.textContent = 'Blog';
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
        if (norwayPartnerCta) norwayPartnerCta.textContent = 'Send inquiry';
        if (norwayPartnerEmailHint) norwayPartnerEmailHint.textContent = 'Or email directly at:';
        projectsTitle.textContent = '🌐 More Projects';
        projectsSubtitle.textContent = 'Explore our other interactive web projects.';
        projectATitle.textContent = '🏓 Pin-Pong';
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
    }

    btnBG.addEventListener('click', renderBG);
    btnENG.addEventListener('click', renderENG);

    if (norwayPartnerCta) {
        norwayPartnerCta.addEventListener('click', () => {
            window.location.href = 'mailto:svetoslav.gochev@gmail.com?subject=Norway%20Explorer%20Partnership';
        });
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