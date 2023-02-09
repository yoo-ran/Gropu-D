const clcBtn = document.getElementsByTagName("button")[0];
const classA = [255, 0, 0, 0];
const classB = [255, 255, 0, 0];
const classC = [255, 255, 255, 0];

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

// get default subnet according to ip address and make it binary
const getSubnetBinary = () => {
  const ipAddress = document.getElementsByTagName("input")[0].value;
  const ipAdd = ipAddress.split(".");
  const ipAdd_1 = ipAdd[0];
  //   const ipAdd_2 = ipAdd[1];
  //   const ipAdd_3 = ipAdd[2];
  //   const ipAdd_4 = ipAdd[3];
  const host = document.getElementsByTagName("input")[1].value;

  let subnet = [];
  if (ipAdd_1 >= 0 && ipAdd_1 <= 127) {
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classA[i]));
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
    if (host <= 16777214 && host >= 8388606) {
      subnet[1] = "00000000";
    }

    if (host <= 8388605 && host >= 4194302) {
      subnet[1] = "10000000";
    }

    if (host <= 4194301 && host >= 2097150) {
      subnet[1] = "11000000";
    }

    if (host <= 2097149 && host >= 1048574) {
      subnet[1] = "11100000";
    }

    if (host <= 1048573 && host >= 524286) {
      subnet[1] = "11110000";
    }

    if (host <= 524285 && host >= 262142) {
      subnet[1] = "11111000";
    }

    if (host <= 262141 && host >= 131070) {
      subnet[1] = "11111100";
    }

    if (host <= 131069 && host >= 65534) {
      subnet[1] = "11111110";
    }
  } else if (ipAdd_1 >= 128 && ipAdd_1 <= 191) {
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classB[i]));
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
    if (host <= 65533 && host >= 32766) {
      subnet[2] = "00000000";
    }

    if (host <= 32765 && host >= 16382) {
      subnet[2] = "10000000";
    }

    if (host <= 16381 && host >= 8190) {
      subnet[2] = "11000000";
    }

    if (host <= 8189 && host >= 4094) {
      subnet[2] = "11100000";
    }

    if (host <= 4093 && host >= 2046) {
      subnet[2] = "11110000";
    }

    if (host <= 2045 && host >= 1022) {
      subnet[2] = "11111000";
    }

    if (host <= 1021 && host >= 512) {
      subnet[2] = "11111100";
    }

    if (host <= 511 && host >= 256) {
      subnet[2] = "11111110";
    }
  } else if (ipAdd_1 >= 192 && ipAdd_1 <= 223) {
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classC[i]));
      // because we need 8 bits for each
      if (subnet[i] == "0") {
        subnet[i] = "00000000";
      }
    }
    if (host <= 255 && host >= 126) {
      subnet[3] = "00000000";
    }

    if (host <= 125 && host >= 62) {
      subnet[3] = "10000000";
    }

    if (host <= 61 && host >= 30) {
      subnet[3] = "11000000";
    }

    if (host <= 29 && host >= 14) {
      subnet[3] = "11100000";
    }

    if (host <= 13 && host >= 6) {
      subnet[3] = "11110000";
    }

    if (host <= 5 && host >= 4) {
      subnet[3] = "11111000";
    }

    if (host <= 3 && host >= 2) {
      subnet[3] = "11111100";
    }

    if (host == 1) {
      subnet[3] = "11111110";
    }
  } else {
    console.log("Check your IP address again");
  }
  let subnetmask = [];
  for (let i = 0; i < 4; i++) {
    subnetmask.push(toDecimal(subnet[i]));
  }

  return console.log(`Your subnet mask is.. ${subnetmask}`);
};

// console.log(getSubnetBinary());
clcBtn.addEventListener("click", getSubnetBinary);

// according to the number of hosts, change subnet mask binary 0
