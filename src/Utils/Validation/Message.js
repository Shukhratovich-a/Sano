const validation = {
  name: (input) => {
    const name = input.value.trim();
    if (name.length <= 2 || name.length > 45) {
      input.focus();
      return false;
    } else return true;
  },

  mail: (input) => {
    const mail = input.value.trim();
    if (!mail.includes(".com", ".net", ".uz", ".ru") || !mail.includes("@")) {
      input.focus();
      return false;
    } else return true;
  },

  phone: (input) => {
    const phone = input.value.trim().split("+").join("").split(" ").join("");

    if (phone.length !== 12) {
      input.focus();
      return false;
    } else return true;
  },
};

export default validation;
