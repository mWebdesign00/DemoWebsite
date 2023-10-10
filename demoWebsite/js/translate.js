let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     services = document.querySelector(".services"),
     portfolio = document.querySelector(".portfolio"),
     kontakt = document.querySelector(".kontakt"),
     impressum = document.querySelector(".impressum"),
     willkommen = document.querySelector(".willkommen"),
     willkommensText1 = document.querySelector(".willkommensText1");
     willkommensText2 = document.querySelector(".willkommensText2");
     telefonnummer = document.querySelector(".telefonnummer");
     mehrErfahren = document.querySelector(".mehrErfahren");
     services2 = document.querySelector(".services2");
     services2Text = document.querySelector(".services2Text");
     kuechenMontage = document.querySelector(".kuechenMontage");
     kuechenMontageTitel = document.querySelector(".kuechenMontageTitel");
     kuechenMontage20Jahre = document.querySelector(".kuechenMontage20Jahre");
     anschluesseTitel = document.querySelector(".anschluesseTitel");
     anschluesse1 = document.querySelector(".anschluesse1");
     anschluesse2 = document.querySelector(".anschluesse2");
     sonstigeMontagenTitel = document.querySelector(".sonstigeMontagenTitel");
     sonstigeMontagen1 = document.querySelector(".sonstigeMontagen1");
     sonstigeMontagen2 = document.querySelector(".sonstigeMontagen2");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          services.textContent = data[attr].services
          kontakt.textContent = data[attr].kontakt
          impressum.textContent = data[attr].impressum
          willkommen.textContent = data[attr].willkommen
          willkommensText1.textContent = data[attr].willkommensText1
          willkommensText2.textContent = data[attr].willkommensText2
          telefonnummer.textContent = data[attr].telefonnummer
          services2.textContent = data[attr].services2
          services2Text.textContent = data[attr].services2Text
          kuechenMontage.textContent = data[attr].kuechenMontage
          kuechenMontageTitel.textContent = data[attr].kuechenMontageTitel
          kuechenMontage20Jahre.textContent = data[attr].kuechenMontage20Jahre
          anschluesseTitel.textContent = data[attr].anschluesseTitel
          anschluesse1.textContent = data[attr].anschluesse1
          anschluesse2.textContent = data[attr].anschluesse2
          sonstigeMontagenTitel.textContent = data[attr].sonstigeMontagenTitel
          sonstigeMontagen1.textContent = data[attr].sonstigeMontagen1
          sonstigeMontagen2.textContent = data[attr].sonstigeMontagen2
     })
})

let data = {
    deutsch: {
        services: "Services",
        portfolio: "Portfolio",
        kontakt: "Kontakt",
        impressum: "Impressum",
        willkommen: "LD Taxi",
        willkommensText1: "Sie kennen das Ziel.",
        willkommensText2: "Wir kennen den Weg!",
        telefonnummer: "0800 - 123 - 0800",
        mehrErfahren: "Mehr erfahren",
        services2: "Services",
        services2Text: "Unsere Dienstleistungen im Überblick",

        kuechenMontageTitel: "Einzelfahrten",
        kuechenMontage: "Wir bieten zuverlässige Fahrten in der Umgebung von x an und sind rund um die Uhr für Sie da.",
        kuechenMontage20Jahre: "Unser Privattransport-Service ist darauf ausgerichtet, Ihre Mobilität in der Umgebung von x so bequem wie möglich zu gestalten. Egal, ob Sie zu einem wichtigen Geschäftstermin müssen oder einfach einen sicheren Weg von A nach B suchen - wir stehen Ihnen zur Verfügung. Kontaktieren Sie uns noch heute, um Ihre nächste Fahrt zu planen.",

        anschluesseTitel: "Flughafentransfer",
        anschluesse1: "Wir bieten zuverlässige Fahrten in der Umgebung von x an und sind rund um die Uhr für Sie da.",
        anschluesse2: "Unser Privattransport-Service ist darauf ausgerichtet, Ihre Mobilität in der Umgebung von x so bequem wie möglich zu gestalten. Egal, ob Sie zu einem wichtigen Geschäftstermin müssen oder einfach einen sicheren Weg von A nach B suchen - wir stehen Ihnen zur Verfügung. Kontaktieren Sie uns noch heute, um Ihre nächste Fahrt zu planen.",

        sonstigeMontagenTitel: "Shuttleservice",
        sonstigeMontagen1: "Wir bieten zuverlässige Fahrten in der Umgebung von x an und sind rund um die Uhr für Sie da.",
        sonstigeMontagen2: "Unser Privattransport-Service ist darauf ausgerichtet, Ihre Mobilität in der Umgebung von x so bequem wie möglich zu gestalten. Egal, ob Sie zu einem wichtigen Geschäftstermin müssen oder einfach einen sicheren Weg von A nach B suchen - wir stehen Ihnen zur Verfügung. Kontaktieren Sie uns noch heute, um Ihre nächste Fahrt zu planen."
    },
    englisch: {
        services: "Services",
        portfolio: "Portfolio",
        kontakt: "Contact",
        impressum: "Impressum",
        willkommen: "LD Taxi",
        willkommensText1: "YOUR DESTINATION.",
        willkommensText2: "OUR EXPERTISE!",
        telefonnummer: "0800 - 123 - 0800",
        mehrErfahren: "Tell me more",
        services2: "Services",
        services2Text: "Overview of our Services",

        kuechenMontageTitel: "Single Trips",
        kuechenMontage: "We offer reliable rides in the area of x and are here for you around the clock.",
        kuechenMontage20Jahre: "Our private transportation service is designed to make your mobility around x as convenient as possible. Whether you need to get to an important business meeting or are simply looking for a safe way to get from A to B, we're here to help. Contact us today to schedule your next ride.",

        anschluesseTitel: "Airporttransfers",
        anschluesse1: "We offer reliable rides in the area of x and are here for you around the clock.",
        anschluesse2: "OOur private transportation service is designed to make your mobility around x as convenient as possible. Whether you need to get to an important business meeting or are simply looking for a safe way to get from A to B, we're here to help. Contact us today to schedule your next ride.",

        sonstigeMontagenTitel: "Shuttleservice",
        sonstigeMontagen1: "We offer reliable rides in the area of x and are here for you around the clock.",
        sonstigeMontagen2: "Our private transportation service is designed to make your mobility around x as convenient as possible. Whether you need to get to an important business meeting or are simply looking for a safe way to get from A to B, we're here to help. Contact us today to schedule your next ride."
    }
}
