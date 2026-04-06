document.addEventListener('DOMContentLoaded', () => {
    const infoDiv = document.getElementById('info');

    fetch('https://restcountries.com/v3.1/name/norway')
        .then(response => {
            if (!response.ok) {
                throw new Error('Грешен отговор от сървъра');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error('Няма намерена информация за Норвегия');
            }
            const country = data[0];
            const info = `
                <p><strong>Страна:</strong> ${country.name.common}</p>
                <p><strong>Столица:</strong> ${country.capital[0]}</p>
                <p><strong>Регион:</strong> ${country.region}</p>
                <p><strong>Население:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Валута:</strong> ${Object.keys(country.currencies)[0]}</p>
                <p><strong>Език:</strong> ${Object.values(country.languages)[0]}</p>
            `;
            infoDiv.innerHTML = info;
        })
        .catch(error => {
            console.error('Грешка при извличане на данни:', error);
            infoDiv.innerHTML = '<p>Грешка при извличане на данни.</p>';
        });
});