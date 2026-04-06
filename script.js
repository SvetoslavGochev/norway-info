document.addEventListener('DOMContentLoaded', () => {
    const infoDiv = document.getElementById('info');
    // Фиксирана табличка с информация за Норвегия
    const mainTitle = document.getElementById('main-title');
    const btnBG = document.getElementById('btn-bg');
    const btnENG = document.getElementById('btn-eng');

    function renderBG() {
        mainTitle.textContent = 'Информация за Норвегия';
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
        mainTitle.textContent = 'Norway Information';
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