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
    let prevScrollpos = window.scrollY;
    // lytter etter scroll-hendelser
    window.onscroll = function() {
        // nåværende scroll-posisjon
        let currentScrollPos = window.scrollY;
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

// robotstemmeoppleser
// lytter etter når nettsiden er helt klar før den starter koden
document.addEventListener('DOMContentLoaded', function() {
    // henter referanser til knappen, lydfilen og bildene
    const robotVoice = document.getElementById('robotVoice'); // lydfilen for tekst-til-tale
    const toggleButton = document.getElementById('toggleButton'); // knappen for avspilling
    const buttonImage = document.getElementById('buttonImage'); // bildet som viser avspillingsstatus
    const playIconPath = '/images/pause.png'; // bilde for pauseknapp
    const pauseIconPath = '/images/sound.png'; // bilde for avspillingsknapp
    const stopIconPath = '/images/off.png'; // bilde for stoppknapp
    let isPlaying = false; // holder styr på om lyden spilles eller ei
    // endrer bildet på knappen til det som blir gitt som sti
    function changeButtonImage(imagePath) {
        buttonImage.src = imagePath;
    }
    // bytter mellom å spille og pause lyden når knappen trykkes
    function toggleRobotVoice() {
        if (isPlaying) {
            robotVoice.pause(); // setter lyden på pause hvis den spiller
            isPlaying = false; // markerer at lyden ikke spilles lenger
        } else {
            robotVoice.play(); // starter avspilling hvis lyden ikke spiller
            isPlaying = true; // markerer at lyden spilles
        }
    }
    // lytter etter klikk på knappen for å starte/pause avspillingen
    toggleButton.addEventListener('click', function() {
        toggleRobotVoice(); // bytter avspillingsstatus når knappen trykkes
        // oppdaterer knappbildet basert på avspillingsstatus
        if (isPlaying) {
            changeButtonImage(pauseIconPath); // viser pause-ikon hvis lyden spilles
        } else {
            changeButtonImage(playIconPath); // viser avspillings-ikon hvis lyden ikke spilles
        }
    });
    // lytter etter når lyden er ferdig avspilt
    robotVoice.addEventListener('ended', function() {
        isPlaying = false; // markerer at lyden ikke spilles lenger når den er ferdig
        changeButtonImage(playIconPath); // viser avspillingsikon på knappen
    });
    // lytter etter når lyden starter å spille
    robotVoice.addEventListener('play', function() {
        isPlaying = true; // markerer at lyden spilles når den starter
        changeButtonImage(pauseIconPath); // viser pauseikon på knappen
    });
    // lytter etter når lyden settes på pause
    robotVoice.addEventListener('pause', function() {
        isPlaying = false; // markerer at lyden ikke spilles når den settes på pause
        changeButtonImage(playIconPath); // viser avspillingsikon på knappen
    });
});