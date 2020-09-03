import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
  /**
  showClass: {
    popup: "swal2-noanimation",
    backdrop: "swal2-noanimation"
  },
  hideClass: {
    popup: "",
    backdrop: ""
  }
   */
});

export default { Toast, Swal };

export const success = (title, timer) => {
  return Toast.fire({
    title: title,
    icon: "success",
    position: "top",
    timer: timer
  });
};

export const error = (title, timer) => {
  return Toast.fire({
    title: title,
    icon: "error",
    position: "top",
    showCancelButton: false,
    // buttons: false,
    timer: timer
  });
};

export const warning = (title, timer) => {
  return Toast.fire({
    title: title,
    icon: "warning",
    position: "top",
    timer: timer
  });
};

export const question = text => {
  return new Promise(resolve => {
    Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "warning",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, do it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        //Swal.fire("Done!", "Successfully", "success");
        return resolve(true);
      }
    });
  });
};

export const swal_error = text => {
  return new Promise((resolve) => {
    Swal.fire({
      title: "Oops...!! Something went wrong",
      text: text,
      icon: "error",
      showCancelButton: false,
      buttons: false,
    }).then(result => {
      return resolve(result.value);
    })
  })
}

export const question_password = (title) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title || "Enter your password",
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: 30,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    }).then(({ value : password }) => {
      return resolve(password)
    })
  })
}