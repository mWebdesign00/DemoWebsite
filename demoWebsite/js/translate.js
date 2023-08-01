let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     services = document.querySelector(".services"),
     portfolio = document.querySelector(".portfolio"),
     kontakt = document.querySelector(".kontakt"),
     impressum = document.querySelector(".impressum"),
     willkommen = document.querySelector(".willkommen"),
     willkommensText = document.querySelector(".willkommensText");
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
          portfolio.textContent = data[attr].portfolio
          kontakt.textContent = data[attr].kontakt
          impressum.textContent = data[attr].impressum
          willkommen.textContent = data[attr].willkommen
          willkommensText.textContent = data[attr].willkommensText
          mehrErfahren.textContent = data[attr].mehrErfahren
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
        willkommen: "Willkommen bei xy Montage!",
        willkommensText: "PRÄZISION BEI JEDER MONTAGE - WIR LASSEN KEINE SCHRAUBE LOCKER!",
        mehrErfahren: "Mehr erfahren",
        services2: "Services",
        services2Text: "Unsere Dienstleistungen im Überblick",

        kuechenMontageTitel: "Küchenmontage",
        kuechenMontage: "Unser erfahrenes Team bietet Ihnen eine professionelle und zuverlässige Küchenmontage an.",
        kuechenMontage20Jahre: "Mit mehr als 20 Jahren Erfahrung in der Branche können Sie sich auf uns verlassen. Wir wissen genau, worauf es bei einer erfolgreichen Küchenmontage ankommt und setzen unser Know-how gezielt ein. Egal, ob Sie eine neue Küche kaufen und montieren lassen möchten oder eine bestehende Küche umgestalten wollen - wir stehen Ihnen mit Rat und Tat zur Seite.",

        anschluesseTitel: "Anschlüsse",
        anschluesse1: "Für die perfekte Funktionalität Ihrer Küche sind die richtigen Anschlüsse von großer Bedeutung. Wir sorgen für die fachgerechte Installation von Wasseranschlüssen und Starkstromanschlüssen.",
        anschluesse2: "Unsere erfahrenen Mitarbeiter übernehmen alle erforderlichen Arbeiten und stellen sicher, dass alle Anschlüsse ordnungsgemäß installiert sind und einwandfrei funktionieren. Unser Team ist spezialisiert auf die Installation von Wasseranschlüssen für Spülen, Geschirrspüler und Kühlschränken sowie auf die Installation von Starkstromanschlüssen für Backöfen und Kochfelder. Dabei achten wir stets darauf, dass die Installation sicher und zuverlässig erfolgt und den geltenden Vorschriften entspricht.",

        sonstigeMontagenTitel: "Sonstige Montagen",
        sonstigeMontagen1: "Neben der professionellen Küchenmontage bieten wir auch viele weitere Montageleistungen für Ihr Zuhause oder Ihr Unternehmen an. Unser erfahrenes Team übernimmt für Sie die fachgerechte Montage von Möbeln, Regalen und vielem mehr. Dabei gehen wir auf Ihre individuellen Wünsche ein und setzen diese mit höchster Präzision um.",
        sonstigeMontagen2: "Sie haben einen speziellen Wunsch für eine Montage, den Sie nicht in unserer Liste finden? Kein Problem! Wir sind für Sie da und setzen uns gerne mit Ihnen zusammen, um eine individuelle Lösung zu finden. Kontaktieren Sie uns , um mehr über unser Angebot im Bereich der Sonstigen Montagen zu erfahren und ein unverbindliches Angebot zu erhalten."

    },
    tuerkisch: {
        services: "Hizmetler",
        portfolio: "Portföy",
        kontakt: "Iletişim",
        impressum: "Baski",
        willkommen: "Uçar Montaj'a hoş geldiniz!",
        willkommensText: "Her montaj da üst düzey titizlik",
        mehrErfahren: "Bizim hakkimizda",
        services2: "Hizmetler",
        services2Text: "",

        kuechenMontageTitel: "Mutfak Montaji",
        kuechenMontage: "Deneyimli ekibimiz size profesyonel ve güvenilir mutfak montaji sunuyor.",
        kuechenMontage20Jahre: "20 yili askin deneyimimiz sayesinde basarili bir mutfak montaji icin neyin önemli oldugunu biliyor ve bilgimizi hedefe yönelik bir sekilde devreye sokuyoruz. Gerek yeni bir mutfak satin almak veyahut da mevcut bir mutfagi yeniden sekillendirmek isteyin, size büyük bir mutluluk ile yardimci olmak icin burdayiz.",

        anschluesseTitel: "Bağlantilar",
        anschluesse1: "Mutfağinizin mükemmel işlevselliği için doğru bağlantilar büyük önem taşir. Su bağlantilarinin ve elektrik bağlantilarinin profesyonel kurulumuyla ilgileniyoruz.",
        anschluesse2: "Deneyimli çalişanlarimiz gerekli tüm işlerle ilgilenir ve tüm bağlantilarin düzgün bir şekilde kurulmasini ve mükemmel bir şekilde çalişmasini sağlar. Ekibimiz lavabo, bulaşik makinesi ve buzdolabi için su bağlantilarinin yani sira firin ve ocaklar için yüksek voltaj bağlantilarinin kurulumunda da uzmanlaşmiştir.",

        sonstigeMontagenTitel: "Diger Montajlar",
        sonstigeMontagen1: "Profesyonel mutfak montajinin yani sira, eviniz veya iş yeriniz için başka birçok montaj hizmeti de sunuyoruz. Deneyimli ekibimiz mobilyalarin, raflarin ve çok daha fazlasinin profesyonel montajiyla ilgileniyor. Bunu yaparken, bireysel isteklerinize hitap ediyor ve bunlari en yüksek hassasiyetle uyguluyoruz.",
        sonstigeMontagen2: "Listemizde bulamadiğiniz özel bir montaj talebiniz mi var? Hiç sorun değil! Bireysel bir cözüm bulmak icin elimizden geleni yapacagiz.  Diğer montaj hizmetlerimiz hakkinda daha fazla bilgi edinmek ve ücretsiz bilgi almak için bizimle iletişime gecebilirsiniz."
    },
    englisch: {
        services: "Services",
        portfolio: "Portfolio",
        kontakt: "Contact",
        impressum: "Impressum",
        willkommen: "Welcome to xy Montage!",
        willkommensText: "PRECISION IN EVERY INSTALLATION - WE DON'T LEAVE ANY SCREW LOOSE!",
        mehrErfahren: "Tell me more",
        services2: "Services",
        services2Text: "Overview of our Services",

        kuechenMontageTitel: "Kitchen Installation",
        kuechenMontage: "Our experienced team offers professional and reliable kitchen installation services.",
        kuechenMontage20Jahre: "With over 20 years of experience in the industry, you can count on us. We know exactly what it takes to successfully install a kitchen and use our expertise accordingly. Whether you want to buy and install a new kitchen or redesign an existing one, we are here to help and advise you.",

        anschluesseTitel: "Connections",
        anschluesse1: "For perfect functionality of your kitchen, the proper connections are of great importance. We ensure the professional installation of water and electrical connections.",
        anschluesse2: "Our experienced staff will handle all necessary work and ensure that all connections are properly installed and working seamlessly. Our team specializes in installing water connections for sinks, dishwashers, and refrigerators, as well as electrical connections for ovens and cooktops. We always prioritize safety and reliability, and ensure that our installations comply with relevant regulations.",

        sonstigeMontagenTitel: "Other Installations",
        sonstigeMontagen1: "In addition to professional kitchen installation, we also offer many other installation services for your home or business. Our experienced team will handle the professional installation of furniture, shelves, and much more. We tailor our services to your individual needs and carry them out with the utmost precision.",
        sonstigeMontagen2: "Do you have a special request for an installation that you don't see on our list? No problem! We're here for you and happy to work with you to find a customized solution. Contact us to learn more about our offerings for other types of installations and to receive a non-binding offer."
    }
}
