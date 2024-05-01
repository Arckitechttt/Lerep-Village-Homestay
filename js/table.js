// 1. Import the app and db objects from firebase-config.js
import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const homestays = [];

// 3. Fetch data from Firestore
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "homestay"));

    // 3.1. Put all data into homestays array
    querySnapshot.forEach((doc) => {
        homestays.push(doc.data());
    });

    setContent();
}

const setContent = () => {
    let tabel_body = document.getElementById("tabel_body");

    let content = "";

    for (let i = 0; i < homestays.length; i++) {
        let data_homestay = homestays[i];

        let konten_homestay = "";

        konten_homestay =
            `
            <tr>
            <td>${data_homestay.name}</td>
            <td>${data_homestay.chse}</td>
            <td><small>${data_homestay.almt}</small></td>
            <td>${data_homestay.status_tinggal}</td>
            <td><a href="${data_homestay.gmap}" target="_blank"><i class="bi bi-geo-alt-fill"></i></a></td>
            <td><a href="${data_homestay.iframe}" target="_blank"><i class="fa-solid fa-code"></i></a></td>
            <td>${data_homestay.kamar_tidur}</td>
            <td>${data_homestay.kamar_mandi}</td>
            <td>${data_homestay.kapasitas}</td>
            <td>${data_homestay.kasur}</td>
            <td>${data_homestay.kloset}</td>
            <td>${data_homestay.listrik}</td>
            <td><small>${data_homestay.lainnya}</small></td>
            </tr>
            `;

        content +=
            `
            ` + konten_homestay + `
            `;
    }

    tabel_body.innerHTML = content;
}

// Call the fetchData function to fetch data
fetchData();

$(document).ready(function () {
    $('#tabel_main').DataTable({
        searching: true,
        scrollX: true,
        scrollY: '525px',
        scrollCollapse: true,
        "language": {
            "emptyTable": "<b>--</b> <em style='font-weight: lighter; font-size: 16px;'>Kosong</em> <b>--</b>",
            "info": "<em style='font-size: 14px; color: #252525;'><i class='bi bi-caret-right-fill' style='color: rgb(37, 150, 190)'></i> &nbsp;-- Menampilkan <b>_START_</b> hingga <b>_END_</b> Data dari Total <b>_TOTAL_</b> Data --</em>",
            "infoFiltered": "<b style='font-size: 14px; color: #252525;'>(Difilter dari Total <a style='color: red'>_MAX_</a> Data)</b>",
            "paginate": {
                "first": "<a style='font-size: 20px;'><b>⇇</b></a>",
                "last": "<a style='font-size: 20px;'><b>⇉</b></a>",
                "next": "<a style='font-size: 20px;'><b>→</b></a>",
                "previous": "<a style='font-size: 20px;'><b>←</b></a>"
            },
            "zeroRecords": "<em style='color: #252525;'>Data Tidak Ditemukan</em>",
            "infoEmpty": "<br><em style='font-size: 14px; color: #252525;'><i class='bi bi-caret-right-fill' style='color: rgb(37, 150, 190)'></i> &nbsp;-- Data Belum Tersedia --</em>",
            "lengthMenu": "<br><a style='font-size: 14px; color: #252525;'><i class='bi bi-caret-right-fill' style='color: rgb(37, 150, 190)'></i> &nbsp;<b>Tampilkan _MENU_ Data</b></a>",
            "search": "<em style='font-size: 14px; color: #252525;'>*Contoh: E-Book Free Access, dst.</em><br><i class='bi bi-caret-right-fill' style='color: rgb(37, 150, 190)'></i> &nbsp;<a style='font-size: 18px; color: #252525;'><b><i class='fas fa-search'></i></b> </a>"
        },
        "columnDefs": [
            { "orderable": false, "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "className": "dt-head-center" }
        ],
        "initComplete": function (settings, json) {
            $('body').find('.dataTables_scrollBody').addClass("scrollbar");
        }
    });
});