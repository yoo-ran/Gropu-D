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

// get default subnet according to ip address and make it binary, then make binary decimal
const getSubnetMask = () => {
  // We only need the first octet to check class
  const ipAddress = document.getElementsByTagName("input")[0].value;
  const ipAdd = ipAddress.split(".");
  const ipAdd_1 = ipAdd[0];

  // Get the number of host from input
  const host = document.getElementsByTagName("input")[1].value;

  let subnet = [];
  let ipClass = "";

  // Class A
  // subnet mask of class A makes binary, then add it in an array
  if (ipAdd_1 >= 0 && ipAdd_1 <= 127) {
    ipClass = "A";
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classA[i]));
    }

    // according to the number of host, adjust 0s
    if (host <= 16777214 && host >= 8388605) {
      subnet[1] = "00000000";
    } else if (host <= 8388606 && host >= 4194301) {
      subnet[1] = "10000000";
    } else if (host <= 4194302 && host >= 2097149) {
      subnet[1] = "11000000";
    } else if (host <= 2097150 && host >= 1048573) {
      subnet[1] = "11100000";
    } else if (host <= 1048574 && host >= 524285) {
      subnet[1] = "11110000";
    } else if (host <= 524286 && host >= 262141) {
      subnet[1] = "11111000";
    } else if (host <= 262142 && host >= 131069) {
      subnet[1] = "11111100";
    } else if (host <= 131070 && host >= 65533) {
      subnet[1] = "11111110";
    } else if (host <= 65534 && host >= 32765) {
      subnet[1] = "11111111";
      subnet[2] = "00000000";
    } else if (host <= 32766 && host >= 16381) {
      subnet[1] = "11111111";
      subnet[2] = "10000000";
    } else if (host <= 16382 && host >= 8189) {
      subnet[1] = "11111111";
      subnet[2] = "11000000";
    } else if (host <= 8190 && host >= 4093) {
      subnet[1] = "11111111";
      subnet[2] = "11100000";
    } else if (host <= 4094 && host >= 2045) {
      subnet[1] = "11111111";
      subnet[2] = "11110000";
    } else if (host <= 2046 && host >= 1021) {
      subnet[1] = "11111111";
      subnet[2] = "11111000";
    } else if (host <= 1022 && host >= 511) {
      subnet[1] = "11111111";
      subnet[2] = "11111100";
    } else if (host <= 510 && host >= 253) {
      subnet[1] = "11111111";
      subnet[2] = "11111110";
    } else if (host <= 254 && host >= 125) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "00000000";
    } else if (host <= 126 && host >= 61) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "10000000";
    } else if (host <= 62 && host >= 29) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "11000000";
    } else if (host <= 30 && host >= 13) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "11100000";
    } else if (host <= 14 && host >= 7) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "11110000";
    } else if (host <= 6 && host >= 3) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "11111000";
    } else if (host <= 2) {
      subnet[1] = "11111111";
      subnet[2] = "11111111";
      subnet[3] = "11111100";
    }

    // Class B
  } else if (ipAdd_1 >= 128 && ipAdd_1 <= 191) {
    ipClass = "B";
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classB[i]));
    }
    if (host <= 65534 && host >= 32765) {
      subnet[2] = "00000000";
    } else if (host <= 32766 && host >= 16381) {
      subnet[2] = "10000000";
    } else if (host <= 16382 && host >= 8189) {
      subnet[2] = "11000000";
    } else if (host <= 8190 && host >= 4093) {
      subnet[2] = "11100000";
    } else if (host <= 4094 && host >= 2045) {
      subnet[2] = "11110000";
    } else if (host <= 2046 && host >= 1021) {
      subnet[2] = "11111000";
    } else if (host <= 1022 && host >= 511) {
      subnet[2] = "11111100";
    } else if (host <= 510 && host >= 253) {
      subnet[2] = "11111110";
    } else if (host <= 254 && host >= 125) {
      subnet[2] = "11111111";
      subnet[3] = "00000000";
    } else if (host <= 126 && host >= 61) {
      subnet[2] = "11111111";
      subnet[3] = "10000000";
    } else if (host <= 62 && host >= 29) {
      subnet[2] = "11111111";
      subnet[3] = "11000000";
    } else if (host <= 30 && host >= 13) {
      subnet[2] = "11111111";
      subnet[3] = "11100000";
    } else if (host <= 14 && host >= 7) {
      subnet[2] = "11111111";
      subnet[3] = "11110000";
    } else if (host <= 6 && host >= 3) {
      subnet[2] = "11111111";
      subnet[3] = "11111000";
    } else if (host <= 2) {
      subnet[2] = "11111111";
      subnet[3] = "11111100";
    }

    // Class C
  } else if (ipAdd_1 >= 192 && ipAdd_1 <= 223) {
    ipClass = "C";
    for (let i = 0; i < ipAdd.length; i++) {
      subnet.push(toBinary(classC[i]));
    }
    if (host <= 254 && host >= 125) {
      subnet[3] = "00000000";
    } else if (host <= 126 && host >= 61) {
      subnet[3] = "10000000";
    } else if (host <= 62 && host >= 29) {
      subnet[3] = "11000000";
    } else if (host <= 30 && host >= 13) {
      subnet[3] = "11100000";
    } else if (host <= 14 && host >= 7) {
      subnet[3] = "11110000";
    } else if (host <= 6 && host >= 3) {
      subnet[3] = "11111000";
    } else if (host <= 2) {
      subnet[3] = "11111100";
    }
  } else {
    console.log("Please check your IP address again");
  }

  let subnetmask1 = "";
  let subnetmask2 = "";
  let subnetmask3 = "";
  let subnetmask4 = "";

  subnetmask1 = toDecimal(subnet[0]);
  subnetmask2 = toDecimal(subnet[1]);
  subnetmask3 = toDecimal(subnet[2]);
  subnetmask4 = toDecimal(subnet[3]);
  let subnetmask = `${subnetmask1}.${subnetmask2}.${subnetmask3}.${subnetmask4}`;

  // populate IP class and subnet mask in table
  let tbody = document.getElementsByTagName("tbody")[0];
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  let tdClass = document.createElement("td");
  let td2 = document.createElement("td");
  let td4 = document.createElement("td");
  let tdSubnet = document.createElement("td");
  tdClass.innerText = ipClass;
  td2.innerText = "";
  tdSubnet.innerText = subnetmask;
  td4.innerText = "";
  tr.appendChild(tdClass);
  tr.appendChild(td2);
  tr.appendChild(tdSubnet);
  tr.appendChild(td4);

  console.log(subnetmask);
  console.log(ipClass);
};

clcBtn.addEventListener("click", getSubnetMask);
