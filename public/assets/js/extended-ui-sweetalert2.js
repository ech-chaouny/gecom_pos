"use strict";



function my_delete(id) {
    event.preventDefault(); 
    Swal.fire({
        title: "Voulez-vous vraiment supprimer cet élément?",
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "Annuler",
        customClass: {
            confirmButton: "btn btn-primary me-3",
            cancelButton: "btn btn-label-secondary"
        },
        buttonsStyling: false
    }).then((confirmation) => {
        if (confirmation.isConfirmed) {
            document.getElementById(id).submit(); 
            Swal.fire({
                icon: "success",
                title: "Supprimé!",
                text: "Votre enregistrement a été bien supprimé.",
                customClass: {
                    confirmButton: "btn btn-success"
                }
               
            });
        }
    });
}