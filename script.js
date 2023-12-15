// koden til natt og dag modus
// venter på at siden laster inn alt innholdet
document.addEventListener('DOMContentLoaded', function() {
    // finner knappen som bytter mellom mørk og lys modus
    const modeSwitchButton = document.getElementById('mode-switch');
    // hele siden
    const body = document.body;
    // sjekker om det er lagret en tidligere mørk-modus preferanse (localStorage)
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    // aktiverer mørk modus hvis den er lagret, ellers viser vanlig modus
    if (isDarkMode) {
        enableDarkMode();
    } else {
        // viser vanlig modus ved å fjerne 'hidden-content' klassen
        body.classList.remove('hidden-content');
    }
    // legger til en hendelseslytter for knappen som bytter modus
    modeSwitchButton.addEventListener('click', () => {
        // bytter mellom mørk og vanlig modus avhengig av nåværende status
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // funksjon for å aktivere mørk modus
    function enableDarkMode() {
        // aktiverer mørk modus for hele siden
        body.classList.add('dark-mode');
        // endrer teksten på knappen til 'Light Mode'
        modeSwitchButton.textContent = 'Light Mode';
        // lagrer mørk-modus preferansen lokalt
        localStorage.setItem('darkMode', 'true');
        // viser innholdet etter å ha aktivert mørk modus
        body.classList.remove('hidden-content');
    }
    // funksjon for å deaktivere mørk modus
    function disableDarkMode() {
        // deaktiverer mørk modus for hele siden
        body.classList.remove('dark-mode');
        // endrer teksten på knappen til 'Dark Mode'
        modeSwitchButton.textContent = 'Dark Mode';
        // lagrer vanlig modus preferansen lokalt
        localStorage.setItem('darkMode', 'false');
        // viser innholdet etter å ha aktivert vanlig modus
        body.classList.remove('hidden-content');
    }
});

// koden til scroll fungsjonen til headeren
// skjuler og viser headeren basert på scroll-bevegelser
document.addEventListener('DOMContentLoaded', function() {
    // henter header-elementet på siden
    const header = document.querySelector('header');
    // holder styr på forrige scroll-posisjon
    let prevScrollpos = window.pageYOffset;
    // lytter etter scroll-hendelser
    window.onscroll = function() {
        // nåværende scroll-posisjon
        let currentScrollPos = window.pageYOffset;
        // sammenligner forrige og nåværende scroll-posisjoner
        if (prevScrollpos > currentScrollPos) {
            // viser headeren ved å flytte den til 'top: 0'
            header.style.top = '0';
        } else {
            // skjuler headeren ved å flytte den utenfor visning ('top: -100px')
            header.style.top = '-100px';
        }
        // oppdaterer forrige scroll-posisjon til nåværende for neste sammenligning
        prevScrollpos = currentScrollPos;
    };
});
