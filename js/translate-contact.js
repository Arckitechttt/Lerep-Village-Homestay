function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let gall = document.getElementById("gall");
    let cont = document.getElementById("cont");
    let cont1 = document.getElementById("cont1");
    let addr = document.getElementById("addr");
    let locatdet = document.getElementById("locatdet");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futergall = document.getElementById("futergall");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");

    if (language === "ind") {
        home.innerHTML = "Beranda";
        abou.innerHTML = "Tentang Kami";
        prod.innerHTML = "Produk";
        gall.innerHTML = "Galeri";
        cont.innerHTML = "Hubungi Kami";
        cont1.innerHTML = "Hubungi Kami";
        addr.innerHTML = "ALAMAT";
        locatdet.innerHTML = "<div style='text-align: justify; text-justify: inter-word; width: 100%'>Dusun indrokilo, Indrakila, Lerep, Kecamatan Ungaran Barat, Kabupaten Semarang, Jawa Tengah 50519, Indonesia</div>";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Beranda";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> Tentang Kami";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Produk";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galeri";
        futercont.innerHTML = "<span style='color: #A47C00'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "KUB Sekar Wangi merupakan Komunitas Usaha Bersama / KUB yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren.";
        contfut.innerHTML = "Hubungi Kami";
    }
    else {
        home.innerHTML = "Home";
        abou.innerHTML = "About Us";
        prod.innerHTML = "Products";
        gall.innerHTML = "Galleries";
        cont.innerHTML = "Contact Us";
        cont1.innerHTML = "Contact Us";
        addr.innerHTML = "ADDRESS";
        locatdet.innerHTML = "<div style='text-align: justify; text-justify: inter-word; width: 100%'>Indrokilo Hamlet, Indrakila, Lerep, West Ungaran Subdistrict, Semarang Regency, Central Java 50519, Indonesia</div>";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Home";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> About Us";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Products";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galleries";
        futercont.innerHTML = "<span style='color: #A47C00'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "KUB Sekar Wangi is a joint business community / KUB that focuses on coffee beans, cloves, powdered ginger, and palm sugar";
        contfut.innerHTML = "Contact Us";
    }
}