export default function Organization(name, address) {
  return {
    name: name,
    address: address,
    isValid: function () {
      return address.map((address) => address.isValid);
    },
    countAddress: function () {
      return address.length;
    },
  };
}
