function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let cont = document.getElementById("cont");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");
    let deskabou = document.getElementById("deskabou");
    let cofflp = document.getElementById("cofflp");
    let coffmb = document.getElementById("coffmb");

    if (language === "ind") {
        home.innerHTML = "Desa Kami";
        prod.innerHTML = "Produk Kami";
        abou.innerHTML = "Homestay";
        cont.innerHTML = "Hubungi Kami";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Desa Kami";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Produk Kami";
        futerabou.innerHTML = "<span style='color: #A47C00'>•></span> Homestay";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "Desa kami menyajikan fasilitas Homestay untuk para tamu menginap sembari menikmati berbagai macam wisata yang ada di Desa kami.";
        contfut.innerHTML = "Hubungi Kami";
        deskabou.innerHTML = "<b>Desa Wisata Lerep</b> menyajikan fasilitas Homestay untuk para tamu bersinggah dan menginap selama menikmati berbagai macam wisata yang ada di Desa kami. Homestay kami menyajikan berbagai fasilitas, seperti dapur, kulkas, parkir mobil, kamar mandi dalam, serta balkon untuk menikmati pemandangan indah Gunung Ungaran sembari menikmati udara sejuk Ungaran. Selain itu, Homestay kami juga sudah bersertifikat <b>CHSE</b> sehingga Homestay kami sudah terjamin dari segi Kebersihan / <b>C</b>leanliness, Kesehatan / <b>H</b>ealth, Keamanan / <b>S</b>afety, dan Kelestarian Lingkungan / <b>E</b>nvironment Sustainability.";
        cofflp.innerHTML = "HOMESTAY KAMI";
        coffmb.innerHTML = "HOMESTAY KAMI";
    }
    else {
        home.innerHTML = "Our Village";
        prod.innerHTML = "Our Products";
        abou.innerHTML = "Homestay";
        cont.innerHTML = "Contact Us";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Our Village";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Our Products";
        futerabou.innerHTML = "<span style='color: #A47C00'>•></span> Homestay";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "Our village provides Homestay facilities for guests to stay while enjoying various types of tourism in our village.";
        contfut.innerHTML = "Contact Us";
        deskabou.innerHTML = "<b>Desa Wisata Lerep</b> offers Homestay facilities for guests to stay and enjoy various types of tourism in our village. Our Homestay provides various amenities, such as a kitchen, refrigerator, parking space, en-suite bathrooms, and a balcony to enjoy the beautiful view of Mount Ungaran while breathing in the cool air of Ungaran. Additionally, our Homestay has obtained the <b>CHSE</b> certification, ensuring that it meets the standards of <b>C</b>leanliness, <b>H</b>ealth, <b>S</b>afety, and <b>E</b>nvironmental Sustainability.";
        cofflp.innerHTML = "OUR HOMESTAY";
        coffmb.innerHTML = "OUR HOMESTAY";
    }
}