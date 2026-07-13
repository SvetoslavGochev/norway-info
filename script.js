document.addEventListener('DOMContentLoaded', () => {
    const infoDiv = document.getElementById('info');
    // Фиксирана табличка с информация за Норвегия
    const mainTitle = document.getElementById('main-title');
    const btnBG = document.getElementById('btn-bg');
    const btnENG = document.getElementById('btn-eng');
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

    function setActiveLanguage(lang) {
        btnBG.classList.toggle('active', lang === 'bg');
        btnENG.classList.toggle('active', lang === 'en');
    }

    function renderBG() {
        setActiveLanguage('bg');
        mainTitle.textContent = 'Информация за Норвегия';
        if (footer) footer.textContent = 'Този сайт е създаден с учебна цел. Данните са информативни и е възможно да има разминавания при автоматичното обновяване.';
        projectsTitle.textContent = '🌐 Още наши проекти';
        projectsSubtitle.textContent = 'Разгледай и други наши интерактивни уеб сайтове.';
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
        mainTitle.textContent = 'Norway Information';
        if (footer) footer.textContent = 'This site is created for educational purposes. The data is for informational use and may differ due to automatic updates.';
        projectsTitle.textContent = '🌐 More Projects';
        projectsSubtitle.textContent = 'Explore our other interactive websites.';
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