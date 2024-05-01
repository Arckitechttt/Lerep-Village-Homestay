// 1. Import the app and db objects from firebase-config.js
import { db, getDownloadURL, ref, storage } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// 2. Create a child reference
const imagesRef = ref(storage, 'images');

const homestays = [];

// 3. Fetch data from Firestore
async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "homestay"));

  // 3.1. Put all data into homestays array
  querySnapshot.forEach((doc) => {
    homestays.push(doc.data());
  });

  // 3.2. Visualize the contents
  const width = window.innerWidth;

  if (width >= 768) {
    setContent();
  }
  else if (width <= 767.8) {
    setContentx();
  }
}

const setContent = () => {
  let carousel_content = document.getElementById("carousel_content");
  let carousel_indicators = document.getElementById("carousel-indicatorsx");

  let content = "";
  let indikators = "";

  for (let i = 0; i < homestays.length / 2; i++) {
    let indikatorr = "";
    let active_ind = i == 0 ? " class='active'" : "";

    indikatorr =
      `
    <li data-target="#we5" data-slide-to="${i}"${active_ind}></li>
    `;

    if (i + 0.5 == homestays.length / 2) {
      indikatorr =
        `
      <li data-target="#we5" data-slide-to="${i * 2}"${active_ind}></li>
      `;
    }

    indikators +=
      `
    ` + indikatorr + `
    `;
  }

  for (let i = 0; i < homestays.length / 2; i++) {
    let first_homestay = homestays[i * 2];

    let first_content = "";

    first_content =
      `
    <div class="col-md-6">
      <div id="bo_ho" class="we_box2 text_align_center" style="margin-top: 20px">
        <i>
          <center>
            <div id="bo_ho1">
              <img src="${first_homestay.images[0]}" alt="#">
            </div>
          </center>
        </i>
        <h3 id="taste">
          ${first_homestay.name} Homestay
          <br>
          <a id="deswita">Desa Wisata Lerep</a>
        </h3>
        <button type="button" id="gamb" class="btn" data-toggle="modal" data-target="#galerih${i * 2}">
          <i class="bi bi-images" aria-hidden="true"></i>
        </button>
        <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#lokasih${i * 2}">
          <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
        </button>
        <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#fasilh${i * 2}">
          <i class="bi bi-info-circle-fill" aria-hidden="true"></i>
        </button>
        <!-- Galeri Pop Up / Modal -->
        <div class="modal fade" id="galerih${i * 2}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><b>GALERI</b></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <i>
                  <center>
                    <div id="bo_ho7">
                      <div id="images_${i * 2}"></div>
                    </div>
                  </center>
                </i>
              </div>
            </div>
          </div>
        </div>
        <!-- end Galeri -->
        <!-- Lokasi Pop Up / Modal -->
        <div class="modal fade" id="lokasih${i * 2}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel"><b>LOKASI</b></h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <iframe class="card img-top homst" src="${first_homestay.iframe}" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p id="rasacoff" align="center">
                  <span class="adres">ALAMAT</span>
                  <br>
                  <a id="locatdet" class="card-link" href="${first_homestay.gmap}" target="blank_">
                    ${first_homestay.almt}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- end Lokasi -->
        <!-- Fasilitas Pop Up / Modal -->
        <div class="modal fade" id="fasilh${i * 2}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel"><b>FASILITAS</b></h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <p id="rasacoff" align="left">
                      <i class="bi bi-lamp-fill"></i> &nbsp;&nbsp;${first_homestay.kamar_tidur} Kamar Tidur
                      <br>
                      <i class="fa-solid fa-bed"></i> &nbsp;Kasur ${first_homestay.kasur}
                      <br>
                      <i class="bi bi-people-fill"></i> &nbsp;&nbsp;${first_homestay.kapasitas} Orang (MAX)
                      <br>
                      <i class="fa-solid fa-shower"></i> &nbsp;&nbsp;${first_homestay.kamar_mandi} Kamar Mandi
                      <br>
                      <i class="fa-solid fa-toilet" style="margin-right: 2px"></i> &nbsp;&nbsp;Kloset ${first_homestay.kloset}
                      <br>
                      <i class="bi bi-lightning-charge-fill"></i> &nbsp;&nbsp;Daya Listrik ${first_homestay.listrik} Watt
                      <br>
                      <i class="bi bi-patch-check-fill"></i> &nbsp;&nbsp;${first_homestay.chse}
                    </p>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <p id="rasacoff" class="atasd" align="left">
                      <i class="bi bi-person-video3"></i> &nbsp;&nbsp;Tinggal ${first_homestay.status_tinggal}
                      <br>
                      <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Lainnya (${first_homestay.lainnya})
                      <br>
                      <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Silahkan memesan Paket Wisata terlebih dahulu untuk menempati Homestay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Fasilitas -->
      </div>
    </div>
    `;

    let second_content = "";

    if ((i * 2 + 1) != homestays.length) {
      let second_homestay = homestays[i * 2 + 1];

      second_content =
        `
      <div class="col-md-6">
        <div id="bo_ho" class="we_box2 text_align_center" style="margin-top: 20px">
          <i>
            <center>
              <div id="bo_ho1">
                <img src="${second_homestay.images[0]}" alt="#">
              </div>
            </center>
          </i>
          <h3 id="taste">
            ${second_homestay.name} Homestay
            <br>
            <a id="deswita">Desa Wisata Lerep</a>
          </h3>
          <button type="button" id="gamb" class="btn" data-toggle="modal" data-target="#galerih${i * 2 + 1}">
            <i class="bi bi-images" aria-hidden="true"></i>
          </button>
          <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#lokasih${i * 2 + 1}">
            <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
          </button>
          <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#fasilh${i * 2 + 1}">
            <i class="bi bi-info-circle-fill" aria-hidden="true"></i>
          </button>
          <!-- Galeri -->
          <div class="modal fade" id="galerih${i * 2 + 1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"><b>GALERI</b></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <i>
                    <center>
                      <div id="bo_ho7">
                        <div id="images_${i * 2 + 1}"></div>
                      </div>
                    </center>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <!-- end Galeri -->
          <!-- Lokasi -->
          <div class="modal fade" id="lokasih${i * 2 + 1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title" id="exampleModalLabel"><b>LOKASI</b></h2>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <iframe class="card img-top homst" src="${second_homestay.iframe}" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  <p id="rasacoff" align="center">
                    <span class="adres">ALAMAT</span>
                    <br>
                    <a id="locatdet" class="card-link" href="${second_homestay.gmap}" target="blank_">
                      ${second_homestay.almt}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end Lokasi -->
          <!-- Fasilitas -->
          <div class="modal fade" id="fasilh${i * 2 + 1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title" id="exampleModalLabel"><b>FASILITAS</b></h2>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <p id="rasacoff" align="left">
                        <i class="bi bi-lamp-fill"></i> &nbsp;&nbsp;${second_homestay.kamar_tidur} Kamar Tidur
                        <br>
                        <i class="fa-solid fa-bed"></i> &nbsp;Kasur ${second_homestay.kasur}
                        <br>
                        <i class="bi bi-people-fill"></i> &nbsp;&nbsp;${second_homestay.kapasitas} Orang (MAX)
                        <br>
                        <i class="fa-solid fa-shower"></i> &nbsp;&nbsp;${second_homestay.kamar_mandi} Kamar Mandi
                        <br>
                        <i class="fa-solid fa-toilet" style="margin-right: 2px"></i> &nbsp;&nbsp;Kloset ${second_homestay.kloset}
                        <br>
                        <i class="bi bi-lightning-charge-fill"></i> &nbsp;&nbsp;Daya Listrik ${second_homestay.listrik} Watt
                        <br>
                        <i class="bi bi-patch-check-fill"></i> &nbsp;&nbsp;${second_homestay.chse}
                      </p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <p id="rasacoff" class="atasd" align="left">
                        <i class="bi bi-person-video3"></i> &nbsp;&nbsp;Tinggal ${second_homestay.status_tinggal}
                        <br>
                        <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Lainnya (${second_homestay.lainnya})
                        <br>
                        <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Silahkan memesan Paket Wisata terlebih dahulu untuk menempati Homestay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end Fasilitas -->
        </div>
      </div>
      `;
    }

    let active = i == 0 ? "active" : "";

    if ((homestays.length % 2) != 0) {
      // Jumlah Homestay Ganjil
      if ((i * 2) != (homestays.length - 1)) {
        content +=
          `
        <div class="carousel-item ${active}">
          <div class="container-fluid">
            <div class="carousel-caption we1_do">
              <div class="row">
                ` + first_content + `
                ` + second_content + `
              </div>
            </div>
          </div>
        </div>
        `;
      } else if ((i * 2) == (homestays.length - 1)) {
        content +=
          `
        <div class="carousel-item ${active}">
          <div class="container-fluid">
            <div class="carousel-caption we1_do">
              <div class="row">
                <div class="col-md-3"></div>
                  ` + first_content + `
                <div class="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    } else {
      // Jumlah Homestay Genap
      content +=
        `
      <div class="carousel-item ${active}">
        <div class="container-fluid">
          <div class="carousel-caption we1_do">
            <div class="row">
              ` + first_content + `
              ` + second_content + `
            </div>
          </div>
        </div>
      </div>
      `;
    }
  }

  carousel_indicators.innerHTML = indikators;
  carousel_content.innerHTML = content;

  for (let i = 0; i < homestays.length / 2; i++) {

    let first_homestay = homestays[i * 2];

    let first_images = "";

    for (let j = 1; j < first_homestay.images.length; j++) {
      first_images += `<img src="${first_homestay.images[j]}" alt="#">`;

      if (j == first_homestay.images.length - 1) {
        console.log(first_images);

        const list_image = document.getElementById(`images_${i * 2}`);

        list_image.innerHTML = first_images;
      }
    }

    if ((i * 2 + 1) != homestays.length) {
      let second_homestay = homestays[i * 2 + 1];

      let second_images = "";

      for (let j = 1; j < second_homestay.images.length; j++) {
        second_images += `<img src="${second_homestay.images[j]}" alt="#">`;

        if (j == second_homestay.images.length - 1) {
          console.log(second_images);

          const list_image = document.getElementById(`images_${i * 2 + 1}`);

          list_image.innerHTML = second_images;
        }
      }
    }
  }
}

const setContentx = () => {
  // Mobile Width
  let carousel_content1 = document.getElementById("carousel_content1");
  let carousel_indicators1 = document.getElementById("carousel-indicatorsx1");

  let content = "";
  let indikators = "";

  for (let i = 0; i < homestays.length; i++) {
    let first_homestay = homestays[i];

    let first_content = "";

    let indikatorr = "";

    let active_ind = i == 0 ? " class='active'" : "";

    indikatorr =
      `
    <li data-target="#we6" data-slide-to="${i}"${active_ind}></li>
    `;

    first_content =
      `
    <div class="col-sm-12 col-12">
      <div id="bo_ho" class="we_box2 text_align_center" style="margin-top: 20px">
        <i>
          <center>
            <div id="bo_ho1">
              <img src="${first_homestay.images[0]}" alt="#">
            </div>
          </center>
        </i>
        <h3 id="taste">
          ${first_homestay.name} Homestay
          <br>
          <a id="deswita">Desa Wisata Lerep</a>
        </h3>
        <button type="button" id="gamb" class="btn" data-toggle="modal" data-target="#galerih${i}">
          <i class="bi bi-images" aria-hidden="true"></i>
        </button>
        <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#lokasih${i}">
          <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
        </button>
        <button type="button" id="gambs" class="btn" data-toggle="modal" data-target="#fasilh${i}">
          <i class="bi bi-info-circle-fill" aria-hidden="true"></i>
        </button>
        <!-- Galeri Pop Up / Modal -->
        <div class="modal fade" id="galerih${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><b>GALERI</b></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <i>
                  <center>
                    <div id="bo_ho7">
                      <div id="images_${i}"></div>
                    </div>
                  </center>
                </i>
              </div>
            </div>
          </div>
        </div>
        <!-- end Galeri -->
        <!-- Lokasi Pop Up / Modal -->
        <div class="modal fade" id="lokasih${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel"><b>LOKASI</b></h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <iframe class="card img-top homst" src="${first_homestay.iframe}" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p id="rasacoff" align="center">
                  <span class="adres">ALAMAT</span>
                  <br>
                  <a id="locatdet" class="card-link" href="${first_homestay.gmap}" target="blank_">
                    ${first_homestay.almt}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- end Lokasi -->
        <!-- Fasilitas Pop Up / Modal -->
        <div class="modal fade" id="fasilh${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel"><b>FASILITAS</b></h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <p id="rasacoff" align="left">
                      <i class="bi bi-lamp-fill"></i> &nbsp;&nbsp;${first_homestay.kamar_tidur} Kamar Tidur
                      <br>
                      <i class="fa-solid fa-bed"></i> &nbsp;Kasur ${first_homestay.kasur}
                      <br>
                      <i class="bi bi-people-fill"></i> &nbsp;&nbsp;${first_homestay.kapasitas} Orang (MAX)
                      <br>
                      <i class="fa-solid fa-shower"></i> &nbsp;&nbsp;${first_homestay.kamar_mandi} Kamar Mandi
                      <br>
                      <i class="fa-solid fa-toilet" style="margin-right: 1.5px"></i> &nbsp;&nbsp;Kloset ${first_homestay.kloset}
                      <br>
                      <i class="bi bi-lightning-charge-fill"></i> &nbsp;&nbsp;Daya Listrik ${first_homestay.listrik} Watt
                      <br>
                      <i class="bi bi-patch-check-fill"></i> &nbsp;&nbsp;${first_homestay.chse}
                    </p>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <p id="rasacoff" class="atasd" align="left">
                      <i class="bi bi-person-video3"></i> &nbsp;&nbsp;Tinggal ${first_homestay.status_tinggal}
                      <br>
                      <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Lainnya (${first_homestay.lainnya})
                      <br>
                      <i class="bi bi-info-circle-fill"></i> &nbsp;&nbsp;Silahkan memesan Paket Wisata terlebih dahulu untuk menempati Homestay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Fasilitas -->
      </div>
    </div>
    `;

    let active = i == 0 ? "active" : "";

    indikators +=
      `
      ` + indikatorr + `
      `;

    content +=
      `
        <div class="carousel-item ${active}">
          <div class="container-fluid">
            <div class="carousel-caption we1_do">
              <div class="row">
                ` + first_content + `
              </div>
            </div>
          </div>
        </div>
        `;
  }

  carousel_indicators1.innerHTML = indikators;
  carousel_content1.innerHTML = content;

  for (let i = 0; i < homestays.length; i++) {

    let first_homestay = homestays[i];

    let first_images = "";

    for (let j = 1; j < first_homestay.images.length; j++) {
      first_images += `<img src="${first_homestay.images[j]}" alt="#">`;

      if (j == first_homestay.images.length - 1) {
        console.log(first_images);

        const list_image = document.getElementById(`images_${i}`);

        list_image.innerHTML = first_images;
      }
    }
  }
}

// Call the fetchData function to fetch data
fetchData();