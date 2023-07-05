window.addEventListener("hideForm",event=>{
    if(event.detail.index)
    document.querySelectorAll(".modal")[event.detail.index].style.display='none';
    else
    document.querySelector(".modal").style.display='none';
    const updateForm = document.querySelector(".updateForm");
    if(updateForm){
        updateForm.style.display='none';
    }
    let elem = document.querySelector(".modal-backdrop");
    elem.parentNode.removeChild(elem);
})

window.addEventListener("showDeleteConfirmation",event =>{
    Swal.fire({
        title: 'Vous voulez vraiment suppimer ?',
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--bs-primary)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
            Livewire.emit("deleteConfirmed")
        }
      })
})
window.addEventListener("itemDeleted",event =>{
    Swal.fire({
        icon: 'success',
        title: 'Supprimé avec succès!',
        showConfirmButton: false,
        timer: 1500
    })
})

window.addEventListener("done",event =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'L\'opération s\'est terminée avec succès',
        showConfirmButton: false,
        timer: 1000
      })
})


// delete-confirmation
window.addEventListener('show-delete-confirmation', event => {
    Swal.fire({
        title: 'Es-tu sûr?',
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
        if (result.isConfirmed) {
            Livewire.emit('deleteConfirmed')
        }
    })
})

// Ajouter
window.addEventListener('Ajouter', event => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ajouter avec succès!',
        showConfirmButton: false,
        timer: 1500
    })
});

// Updated
window.addEventListener('Updated', event => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mise à jour avec succès!',
        showConfirmButton: false,
        timer: 1500
    })
});


// Deleted
window.addEventListener('Deleted', event => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Supprimé avec succès!',
        showConfirmButton: false,
        timer: 1500
    })
});

// Err
window.addEventListener('Err', event => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Il ne peut pas être effacé, il a des choses qui lui appartiennent.!',
        // footer: "Vous pauvez l'archiver.!",
    })
});


var loadFile = function (image,event) {
    if (image.nextElementSibling.nextElementSibling){

        image.nextElementSibling.nextElementSibling.value = 0;
    }
    image = image.previousElementSibling ;
    image.src = URL.createObjectURL(event.target.files[0]);
};
var unloadFile = function (image) {
    if(image.nextElementSibling.nextElementSibling)
    image.nextElementSibling.nextElementSibling.value = 1;
    image.value='';
    image = image.previousElementSibling ;
    image.src = 'http://127.0.0.1:8000/assets/img/ImgInput/imgfile.jpg';
};

