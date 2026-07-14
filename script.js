document.addEventListener('DOMContentLoaded', () => {
    const infoDiv = document.getElementById('info');
    // Фиксирана табличка с информация за Норвегия
    const mainTitle = document.getElementById('main-title');
    const btnBG = document.getElementById('btn-bg');
    const btnENG = document.getElementById('btn-eng');
    const citiesTitle = document.getElementById('cities-title');
    const citiesSubtitle = document.getElementById('cities-subtitle');
    const cityOsloTitle = document.getElementById('city-oslo-title');
    const cityOsloText = document.getElementById('city-oslo-text');
    const cityBergenTitle = document.getElementById('city-bergen-title');
    const cityBergenText = document.getElementById('city-bergen-text');
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
    const blogOperaLink = document.getElementById('blog-opera-link');
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

    const footer = document.getElementById('site-footer');
    let operaArticleText = '';

    function setOperaArticleContent(lang) {
        if (!blogArticleContent) return;

        if (operaArticleText && operaArticleText.trim().length > 0) {
            blogArticleContent.textContent = operaArticleText;
            return;
        }

        blogArticleContent.textContent = lang === 'bg'
            ? 'Статията се зарежда...'
            : 'Article is loading...';
    }

    fetch('assets/tekst/operaOslo.txt')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to load opera article text');
            }

            return response.text();
        })
        .then((text) => {
            operaArticleText = text;
            const currentLang = btnENG.classList.contains('active') ? 'en' : 'bg';
            setOperaArticleContent(currentLang);
        })
        .catch(() => {
            operaArticleText = '';
            if (blogArticleContent) {
                blogArticleContent.textContent = 'Неуспешно зареждане на статията. Провери файла assets/tekst/operaOslo.txt.';
            }
        });

    function setActiveLanguage(lang) {
        btnBG.classList.toggle('active', lang === 'bg');
        btnENG.classList.toggle('active', lang === 'en');
    }

    function renderBG() {
        setActiveLanguage('bg');
        mainTitle.textContent = 'Norway Explorer';
        if (footer) footer.textContent = 'Този сайт е създаден с учебна цел. Данните са информативни и е възможно да има разминавания при автоматичното обновяване.';
        citiesTitle.textContent = '🏙️ Основни градове';
        citiesSubtitle.textContent = 'Два от най-важните и интересни градове в Норвегия.';
        cityOsloTitle.textContent = 'Осло';
        cityOsloText.textContent = 'Осло е столицата на Норвегия и политически, икономически и културен център на страната. Градът е разположен между фиорд и гори, с отличен обществен транспорт, много музеи и модерна архитектура.';
        cityBergenTitle.textContent = 'Берген';
        cityBergenText.textContent = 'Берген е вторият по големина град в Норвегия и е известен като врата към фиордите. Районът Брюген е част от ЮНЕСКО, а градът е популярен с рибния си пазар, дъждовния климат и красивите планински гледки.';
        museumTitle.textContent = '🏛️ Културни забележителности и Музей';
        museumSubtitle.textContent = 'Два музея, които си заслужава да посетиш в Осло и Берген.';
        museumOsloTitle.textContent = 'Осло: Музей „Мунк“ (Munchmuseet)';
        museumOsloText.textContent = 'Музеят „Мунк“ е посветен на Едвард Мунк, автора на „Крясъкът“. Колекцията включва картини, скици и лични архиви, а модерната сграда до Ослофиорд е сред новите културни символи на столицата.';
        if (museumOsloLink) museumOsloLink.textContent = 'Официален сайт';
        museumBergenTitle.textContent = 'Берген: Галерия KODE';
        museumBergenText.textContent = 'KODE е една от най-големите музейни и музикални институции в Скандинавия. В комплекса могат да се видят творби на Мунк, Пикасо и норвежки художници, както и тематични изложби в центъра на Берген.';
        if (museumBergenLink) museumBergenLink.textContent = 'Официален сайт';
        blogTitle.textContent = '📝 Блог и Полезни статий';
        blogSubtitle.textContent = 'Първа статия: Операта на Осло (operaOslo.txt)';
        blogArticleTitle.textContent = '🎭 Операта на Осло (Operahuset Oslo)';
        setOperaArticleContent('bg');
        if (blogOperaLink) blogOperaLink.textContent = 'Официален сайт и практична информация';
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
        infoDiv.innerHTML = `
            <table style="width:100%;border-collapse:collapse;font-size:1.1em;">
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Страна</th><td style="padding:8px;border-bottom:1px solid #ccc;">Норвегия</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Столица</th><td style="padding:8px;border-bottom:1px solid #ccc;">Осло</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Регион</th><td style="padding:8px;border-bottom:1px solid #ccc;">Европа</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Население</th><td style="padding:8px;border-bottom:1px solid #ccc;">5,606,944</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Валута</th><td style="padding:8px;border-bottom:1px solid #ccc;">NOK</td></tr>
                <tr><th style="text-align:left;padding:8px;">Език</th><td style="padding:8px;">Норвежки (Nynorsk)</td></tr>
            </table>
        `;
    }

    function renderENG() {
        setActiveLanguage('en');
        mainTitle.textContent = 'Norway Explorer';
        if (footer) footer.textContent = 'This site is created for educational purposes. The data is for informational use and may differ due to automatic updates.';
        citiesTitle.textContent = '🏙️ Key Cities';
        citiesSubtitle.textContent = 'Two of the most important and interesting cities in Norway.';
        cityOsloTitle.textContent = 'Oslo';
        cityOsloText.textContent = 'Oslo is the capital of Norway and the country\'s political, economic, and cultural center. The city sits between a fjord and forests, offering excellent public transport, many museums, and modern architecture.';
        cityBergenTitle.textContent = 'Bergen';
        cityBergenText.textContent = 'Bergen is Norway\'s second-largest city and is known as a gateway to the fjords. The Bryggen district is a UNESCO site, and the city is famous for its fish market, rainy climate, and mountain views.';
        museumTitle.textContent = '🏛️ Cultural Landmarks and Museum';
        museumSubtitle.textContent = 'Two museums worth visiting in Oslo and Bergen.';
        museumOsloTitle.textContent = 'Oslo: MUNCH Museum (Munchmuseet)';
        museumOsloText.textContent = 'The MUNCH Museum is dedicated to Edvard Munch, the artist behind "The Scream." Its collection includes paintings, sketches, and personal archives, and the modern waterfront building is one of Oslo\'s new cultural icons.';
        if (museumOsloLink) museumOsloLink.textContent = 'Official site';
        museumBergenTitle.textContent = 'Bergen: KODE Art Museums';
        museumBergenText.textContent = 'KODE is one of Scandinavia\'s largest museum and music institutions. Visitors can explore works by Munch, Picasso, and Norwegian artists, along with rotating exhibitions in central Bergen.';
        if (museumBergenLink) museumBergenLink.textContent = 'Official site';
        blogTitle.textContent = '📝 Blog and Useful Articles';
        blogSubtitle.textContent = 'First article: Oslo Opera House (operaOslo.txt)';
        blogArticleTitle.textContent = '🎭 Oslo Opera House (Operahuset Oslo)';
        setOperaArticleContent('en');
        if (blogOperaLink) blogOperaLink.textContent = 'Official site and practical information';
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
        infoDiv.innerHTML = `
            <table style="width:100%;border-collapse:collapse;font-size:1.1em;">
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Country</th><td style="padding:8px;border-bottom:1px solid #ccc;">Norway</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Capital</th><td style="padding:8px;border-bottom:1px solid #ccc;">Oslo</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Region</th><td style="padding:8px;border-bottom:1px solid #ccc;">Europe</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Population</th><td style="padding:8px;border-bottom:1px solid #ccc;">5,606,944</td></tr>
                <tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ccc;">Currency</th><td style="padding:8px;border-bottom:1px solid #ccc;">NOK</td></tr>
                <tr><th style="text-align:left;padding:8px;">Language</th><td style="padding:8px;">Norwegian Nynorsk</td></tr>
            </table>
        `;
    }

    btnBG.addEventListener('click', renderBG);
    btnENG.addEventListener('click', renderENG);

    // По подразбиране - български
    renderBG();
});