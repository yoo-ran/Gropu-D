const classA = [255, 0, 0, 0];
const classB = [255, 255, 0, 0];
const classC = [255, 255, 255, 0];
const sendBtn = document.getElementsByTagName("button")[0];
const ipAddress = document.getElementsByTagName("input")[0].value;
const ipA = ipAddress.split('.');
const host = document.getElementsByTagName("input")[4].value;

// function for decimal to binary
function toBinary(num) {
  const binary = num.toString(2);
  return binary;
}

// binary to decimal
function toDecimal(num) {
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[num.length - (i + 1)] === "1") {
      decimal += 2 ** i;
    }
  }
  return decimal;
}

console.log(toDecimal("11111111"));

// get default subnet according to ip address
const getSubnetBinary = () => {
  let subnet = [];
  if (ipAddress1 >= 192 && ipAddress1 <= 223) {
    for (let i = 0; i < 4; i++) {
      subnet.push(toBinary(classC[i]));
      // because we need 8 bits for each
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
  } else if (ipAddress1 >= 128 && ipAddress1 <= 191) {
    for (let i = 0; i < 4; i++) {
      subnet.push(toBinary(classB[i]));
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
  } else if (ipAddress1 >= 0 && ipAddress1 <= 127) {
    for (let i = 0; i < 4; i++) {
      subnet.push(toBinary(classA[i]));
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
  }
  return subnet;
};

console.log(getSubnetBinary());

// according to the number of hosts, change subnet mask binary 0