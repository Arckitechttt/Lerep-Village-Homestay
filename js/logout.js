// Import the app and db objects from firebase-config.js
import { auth, signOut } from "./firebase-config.js";

// Login On Click
document.getElementById('logout').addEventListener('click', logout_ses);

// Logout function
async function logout_ses(event) {
    event.preventDefault();

    // Logout
    signOut(auth)
        .then(() => {
            // Logout Successful
            // Direct to index.html
            window.location.href = "../";
        }).catch((error) => {
            // Logout Failed
            console.error("Terjadi Kesalahan! Silahkan Ulangi Kembali");
            Swal.fire({
                title: '<b style="color: #252525">ERROR</b>',
                text: 'Terjadi Kesalahan! Silahkan Ulangi Kembali',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        });
}