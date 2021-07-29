  const scriptURL = 'https://script.google.com/macros/s/AKfycbyKS-gHzhkmTulHFq1HYfCCgz5emp7Ph0_sJSFgs-fnb0w6yDQQrky21c1m6NMRLaHN/exec'
  const form = document.forms['contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        // tampilkan callback pada saat pengiriman data form sukses
        M.toast({
          html: 'Pesan Anda Telah Terkirim !'
        });
        // reset form setelah berhasil terkirim
        form.reset()
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  })