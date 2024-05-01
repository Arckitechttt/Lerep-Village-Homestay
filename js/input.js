// Import the app and db objects from firebase-config.js
import { db, auth, onAuthStateChanged, getDownloadURL, ref, storage, uploadBytesResumable, collection, addDoc, GeoPoint } from "./firebase-config.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        Swal.fire({
            title: '<b style="color: #252525">ERROR</b>',
            text: 'Anda Belum Login!',
            icon: 'error',
            confirmButtonText: 'OK'
        }).then(function() {
            window.location.href = '../login.html';
        });
    } else {
        // Change Label in Image Input
        document.getElementById('foto1').addEventListener("input", getFileName1);
        document.getElementById('foto2').addEventListener("input", getFileName2);
        document.getElementById('foto3').addEventListener("input", getFileName3);
        document.getElementById('foto4').addEventListener("input", getFileName4);

        function getFileName1() {
            const labelf1 = document.getElementById('pilih1');
            const fail1 = document.getElementById('foto1').files[0].name;

            labelf1.innerHTML = fail1;
        }

        function getFileName2() {
            const labelf2 = document.getElementById('pilih2');
            const fail2 = document.getElementById('foto2').files[0].name;

            labelf2.innerHTML = fail2;
        }

        function getFileName3() {
            const labelf3 = document.getElementById('pilih3');
            const fail3 = document.getElementById('foto3').files[0].name;

            labelf3.innerHTML = fail3;
        }

        function getFileName4() {
            const labelf4 = document.getElementById('pilih4');
            const fail4 = document.getElementById('foto4').files[0].name;

            labelf4.innerHTML = fail4;
        }
        // End Change Label in Image Input

        // Form on Submit
        document.forms['form-homestay'].addEventListener('submit', submitForm);

        // submitForm function
        async function submitForm(event) {
            event.preventDefault();

            // Valid == TRUE
            let valid = "TRUE";

            // Get form inputs (Text and Number input type)
            const name = document.getElementById('name').value;
            const chse = document.getElementById('chse').value;
            const almt = document.getElementById('almt').value;
            const kamar_tidur = document.getElementById('kmrtdur').value;
            const kamar_mandi = document.getElementById('kmrmndi').value;
            const kasur = document.getElementById('kasurt').value;
            const kloset = document.getElementById('klosett').value;
            const kapasitas = document.getElementById('kapasit').value;
            const listrik = document.getElementById('lstrik').value;
            const iframe = document.getElementById('embe').value;
            const gmap = document.getElementById('mapp').value;
            const latitude = document.getElementById('latit').value;
            const longitude = document.getElementById('longit').value;
            const status_tinggal = document.getElementById('ststing').value;
            const lainnya = document.getElementById('othe').value;
            const foto1 = document.getElementById('foto1');
            const foto2 = document.getElementById('foto2');
            const foto3 = document.getElementById('foto3');
            const foto4 = document.getElementById('foto4');

            // Input Error ID
            let name_err = document.getElementById('name_err');
            let chse_err = document.getElementById('chse_err');
            let kasur_err = document.getElementById('kasur_err');
            let kloset_err = document.getElementById('kloset_err');
            let status_tinggal_err = document.getElementById('status_tinggal_err');
            let kamar_tidur_err = document.getElementById('kamar_tidur_err');
            let kamar_mandi_err = document.getElementById('kamar_mandi_err');
            let kapasitas_err = document.getElementById('kapasitas_err');
            let iframe_err = document.getElementById('iframe_err');
            let gmap_err = document.getElementById('gmap_err');
            let almt_err = document.getElementById('almt_err');
            let listrik_err = document.getElementById('listrik_err');
            let latitude_err = document.getElementById('latitude_err');
            let longitude_err = document.getElementById('longitude_err');
            let foto1_err = document.getElementById('foto1_err');
            let foto2_err = document.getElementById('foto2_err');
            let foto3_err = document.getElementById('foto3_err');
            let foto4_err = document.getElementById('foto4_err');

            // Clear previous error messages
            name_err.innerHTML = '';
            chse_err.innerHTML = '';
            kasur_err.innerHTML = '';
            kloset_err.innerHTML = '';
            status_tinggal_err.innerHTML = '';
            kamar_tidur_err.innerHTML = '';
            kamar_mandi_err.innerHTML = '';
            kapasitas_err.innerHTML = '';
            iframe_err.innerHTML = '';
            gmap_err.innerHTML = '';
            almt_err.innerHTML = '';
            listrik_err.innerHTML = '';
            latitude_err.innerHTML = '';
            longitude_err.innerHTML = '';
            foto1_err.innerHTML = '';
            foto2_err.innerHTML = '';
            foto3_err.innerHTML = '';
            foto4_err.innerHTML = '';

            // Form Validation
            /* "FILE" INPUT TYPE VALIDATION */
            // Foto 1 Validation
            if (foto1.files.length === 0) {
                foto1_err.innerHTML = "<b>WARNING •</b> Wajib Masukkan Foto!";
                valid = "FALSE";
            }
            // Foto 2 Validation
            if (foto2.files.length === 0) {
                foto2_err.innerHTML = "<b>WARNING •</b> Wajib Masukkan Foto!";
                valid = "FALSE";
            }
            // Foto 3 Validation
            if (foto3.files.length === 0) {
                foto3_err.innerHTML = "<b>WARNING •</b> Wajib Masukkan Foto!";
                valid = "FALSE";
            }
            // Foto 4 Validation
            if (foto4.files.length === 0) {
                foto4_err.innerHTML = "<b>WARNING •</b> Wajib Masukkan Foto!";
                valid = "FALSE";
            }

            /* "TEXT" INPUT TYPE VALIDATION */
            // Name Validation
            if (name.length == 0 || name == "" || name == null) {
                name_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            } else if (name.includes("Homestay") || name.includes("Home") || name.includes("stay")) {
                name_err.innerHTML = "<b>WARNING •</b> Hanya Masukkan Nama Pemilik!";
                valid = "FALSE";
            } else if (name.includes("0") || name.includes("1") || name.includes("2") || name.includes("3") || name.includes("4") || name.includes("5") || name.includes("6") || name.includes("7") || name.includes("8") || name.includes("9")) {
                name_err.innerHTML = "<b>WARNING •</b> Tidak Boleh Mengandung Angka!";
                valid = "FALSE";
            } else if (name.includes("!") || name.includes(".") || name.includes(",") || name.includes("?") || name.includes("/") || name.includes(";") || name.includes(":") || name.includes("'") || name.includes("]") || name.includes("[") || name.includes("{") || name.includes("}") || name.includes("(") || name.includes(")") || name.includes("*") || name.includes("$") || name.includes("#") || name.includes("@") || name.includes("%") || name.includes("&") || name.includes("^") || name.includes("<") || name.includes(">") || name.includes("+") || name.includes("-") || name.includes("_") || name.includes("=") || name.includes("|")) {
                name_err.innerHTML = "<b>WARNING •</b> Tidak Boleh Mengandung Simbol!";
                valid = "FALSE";
            } else if (name.length > 15) {
                name_err.innerHTML = "<b>WARNING •</b> Maksimal 15 Karakter!";
                valid = "FALSE";
            }
            // Alamat Validation
            if (almt.length == 0 || almt == "" || almt == null) {
                almt_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            } // else if (!almt.includes("RT") || !almt.includes("RW") || !almt.includes("Kelurahan") || !almt.includes("Kecamatan") || !almt.includes("Kabupaten") || !almt.includes("Jawa Tengah") || !almt.includes("50519") || !almt.includes("Indonesia")) {
            //     almt_err.innerHTML = "<b>WARNING •</b> Gunakan Kata 'RT', 'RW', 'Kelurahan', 'Kecamatan', 'Kabupaten', 'Jawa Tengah', '50519' sebagai Kode Pos, dan 'Indonesia'!";
            //     valid = "FALSE";
            // }
            // Iframe Validation
            if (iframe.length == 0 || iframe == "" || iframe == null) {
                iframe_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            } else if (!iframe.includes("https://") || !iframe.includes("https") || !iframe.includes("://")) {
                iframe_err.innerHTML = "<b>WARNING •</b> Gunakan 'https://' atau 'http://' pada Bagian Depan Link!";
                valid = "FALSE";
            } else if (!iframe.includes("maps") || !iframe.includes("embed")) {
                iframe_err.innerHTML = "<b>WARNING •</b> Terdapat Kesalahan pada Link yang Dicantumkan!";
                valid = "FALSE";
            }
            // Gmap Validation
            if (gmap.length == 0 || gmap == "" || gmap == null) {
                gmap_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            } else if (!gmap.includes("https://") || !gmap.includes("https") || !gmap.includes("://")) {
                gmap_err.innerHTML = "<b>WARNING •</b> Gunakan 'https://' atau 'http://' pada Bagian Depan Link!";
                valid = "FALSE";
            } else if (!gmap.includes("maps")) {
                gmap_err.innerHTML = "<b>WARNING •</b> Terdapat Kesalahan pada Link yang Dicantumkan!";
                valid = "FALSE";
            }

            /* "NUMBER" INPUT TYPE VALIDATION */
            // Jumlah Kamar Tidur Validation
            if (kamar_tidur === '' || isNaN(kamar_tidur)) {
                kamar_tidur_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }
            // Jumlah Kamar Mandi Validation
            if (kamar_mandi === '' || isNaN(kamar_mandi)) {
                kamar_mandi_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }
            // Kapasitas Validation
            if (kapasitas === '' || isNaN(kapasitas)) {
                kapasitas_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }
            // Listrik Validation
            if (listrik === '' || isNaN(listrik)) {
                listrik_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }
            // Latitude Validation
            if (latitude === '' || isNaN(latitude)) {
                latitude_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }
            // Longitude Validation
            if (longitude === '' || isNaN(longitude)) {
                longitude_err.innerHTML = "<b>WARNING •</b> Wajib Diisi!";
                valid = "FALSE";
            }

            /* "DROPDOWN" INPUT TYPE VALIDATION */
            // CHSE Validation
            if (chse == "Pilih...") {
                chse_err.innerHTML = "<b>WARNING •</b> Wajib Pilih Salah Satu!";
                valid = "FALSE";
            }
            // Kasur Validation
            if (kasur == "Pilih...") {
                kasur_err.innerHTML = "<b>WARNING •</b> Wajib Pilih Salah Satu!";
                valid = "FALSE";
            }
            // Kloset Validation
            if (kloset == "Pilih...") {
                kloset_err.innerHTML = "<b>WARNING •</b> Wajib Pilih Salah Satu!";
                valid = "FALSE";
            }
            // Status Tinggal Validation
            if (status_tinggal == "Pilih...") {
                status_tinggal_err.innerHTML = "<b>WARNING •</b> Wajib Pilih Salah Satu!";
                valid = "FALSE";
            }

            // If all inputs are valid, then push those inputs to Firebase
            if (valid == "TRUE") {
                // GeoPoint
                // Prepare GeoPoint data to be pushed to Cloud Firestore
                const geopoint = new GeoPoint(Number(latitude), Number(longitude));

                // Images
                // Store image URLs in this array
                const images = [];
                // Upload the first image
                const file1 = document.getElementById('foto1').files[0];
                if (file1) {
                    const imageUrl1 = await uploadImage(file1);
                    images.push(imageUrl1);
                }
                // Upload the second image
                const file2 = document.getElementById('foto2').files[0];
                if (file2) {
                    const imageUrl2 = await uploadImage(file2);
                    images.push(imageUrl2);
                }
                // Upload the third image
                const file3 = document.getElementById('foto3').files[0];
                if (file3) {
                    const imageUrl3 = await uploadImage(file3);
                    images.push(imageUrl3);
                }
                // Upload the fourth image
                const file4 = document.getElementById('foto4').files[0];
                if (file4) {
                    const imageUrl4 = await uploadImage(file4);
                    images.push(imageUrl4);
                }

                // Upload to Firestore
                try {
                    const docRef = await addDoc(collection(db, "homestay"), {
                        name: name,
                        chse: chse,
                        almt: almt,
                        kamar_tidur: kamar_tidur,
                        kamar_mandi: kamar_mandi,
                        kasur: kasur,
                        kloset: kloset,
                        kapasitas: kapasitas,
                        listrik: listrik,
                        iframe: iframe,
                        gmap: gmap,
                        geopoint,
                        status_tinggal: status_tinggal,
                        lainnya: lainnya,
                        images: images
                    });

                    // Clear form fields after successful submission
                    // document.forms['form-homestay'].reset();

                    // Successful Upload Message
                    console.log(`Homestay Berhasil Ditambahkan! ID Homestay : ${docRef.id}`);
                    Swal.fire({
                        title: '<b style="color: #252525">BERHASIL</b>',
                        text: `Homestay Berhasil Ditambahkan! ID Homestay : ${docRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                } catch (error) {
                    // Error Upload Message
                    console.log(`Error: ${error}`);
                    Swal.fire({
                        title: '<b style="color: #252525">ERROR</b>',
                        text: 'Terjadi Error dalam Pengisian, Silahkan Refresh dan Isi Kembali!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            } else if (valid == "FALSE") {
                // FALSE Form Submission Message
                console.log("Terjadi Kesalahan dalam Pengisian, Silahkan Periksa Kembali!");
                Swal.fire({
                    title: '<b style="color: #252525">WARNING</b>',
                    text: 'Terjadi Kesalahan dalam Pengisian, Silahkan Periksa Kembali!',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
        }

        // Uplaod Images to Firebase Storage
        function uploadImage(file) {
            return new Promise((resolve, reject) => {
                // Create a eference
                const imagesRef = ref(storage, `images/${file.name}`);

                // Upload the file to Firebase Storage
                const task = uploadBytesResumable(imagesRef, file);

                task.on(
                    'state_changed',
                    null,
                    (error) => {
                        console.log(`Gagal Mengupload Gambar: ${error}. Silahkan Upload Kembali`);
                        Swal.fire({
                            title: '<b style="color: #252525">ERROR</b>',
                            text: 'Terjadi Error dalam Upload Gambar, Silahkan Refresh dan Upload Kembali!',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                        try {
                            reject(error);
                        } catch (rejectError) {
                            console.error('Error in reject:', rejectError);
                            Swal.fire({
                                title: '<b style="color: #252525">ERROR</b>',
                                text: 'Terjadi Error dalam Upload Gambar, Silahkan Refresh dan Upload Kembali!',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        }
                    },
                    async () => {
                        try {
                            // Get Image URL
                            const downloadURL = await getDownloadURL(imagesRef);
                            resolve(downloadURL);
                        } catch (error) {
                            console.log(`Error: ${error}`);
                            Swal.fire({
                                title: '<b style="color: #252525">ERROR</b>',
                                text: 'Terjadi Error dalam Upload Gambar, Silahkan Refresh dan Upload Kembali!',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                            try {
                                reject(error);
                            } catch (rejectError) {
                                console.error('Error in reject:', rejectError);
                                Swal.fire({
                                    title: '<b style="color: #252525">ERROR</b>',
                                    text: 'Terjadi Error dalam Upload Gambar, Silahkan Refresh dan Upload Kembali!',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                });
                            }
                        }
                    }
                );
            });
        }
    }
});