  const scriptURL = 'https://script.google.com/macros/s/AKfycbyKS-gHzhkmTulHFq1HYfCCgz5emp7Ph0_sJSFgs-fnb0w6yDQQrky21c1m6NMRLaHN/exec'
  const form = document.forms['contact-form']
  const load = document.querySelector('.load');
  const btnAsli = document.querySelector('.btn-asli');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // tampilkan loading saat blm sukses
    load.classList.toggle('hidden')
    btnAsli.classList.toggle('hidden')

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        // tampilkan kembali tombol kirirm
        load.classList.toggle('hidden');
        btnAsli.classList.toggle('hidden');

        // tampilkan callback pada saat pengiriman data form sukses
        Swal.fire({
          icon: 'success',
          title: 'Data Anda Sudah Terkirim',
          showConfirmButton: false,
          timer: 2000
        });
        // reset form setelah berhasil terkirim
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Terjadi Kesalahan',
          showConfirmButton: false,
          timer: 2000
        });
        console.error('Error!', error.message)
      })
  })