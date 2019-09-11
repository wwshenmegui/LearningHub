import swal from "sweetalert";

function showError(error){
    return swal({
        title: error.name,
        text: error.message,
        icon: "error",
        dangerMode: true
    })

}
export default showError;