// Import the app and db objects from firebase-config.js
import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

// Login Form on Submit
document.forms['form-login'].addEventListener('submit', loginForm);

// loginForm function
async function loginForm(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                // Direct to input.html
                window.location.href = "../input.html";
            }).catch((error) => {
                // Logout Failed
                console.error("Username atau Password Anda Salah! Silahkan Periksa Kembali");
                Swal.fire({
                    title: '<b style="color: #252525">WARNING</b>',
                    text: 'Username atau Password Anda Salah! Silahkan Periksa Kembali',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
            });
    } catch (error) {
        // Failed Login
        console.error("Terjadi Kesalahan! Silahkan Ulangi Kembali");
        Swal.fire({
            title: '<b style="color: #252525">WARNING</b>',
            text: 'Username atau Password Anda Salah!',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    }
}