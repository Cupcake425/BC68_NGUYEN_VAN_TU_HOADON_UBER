const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const kiemTraGiaTienKmDauTien = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};
const kiemTraGiaTienKm1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};
const kiemTraGiaTienKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};
document.getElementById("btnTinhTien").onclick = () => {
  let soKM = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector('input[type="radio"]:checked').value;
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let GiaTienKm1Den19 = kiemTraGiaTienKm1Den19(loaiXe);
  let GiaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  let tongTienCho = 0;
  let tongTien = 0;
  if (soKM <= 1 && soKM > 0) {
    tongTien = soKM * giaTienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    tongTien = giaTienKmDauTien + (soKM - 1) * GiaTienKm1Den19;
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * GiaTienKm1Den19 +
      (soKM - 19) * GiaTienKmTu19TroLen;
  }
  if ((thoiGianCho) => 3) {
    tongTienCho = Math.floor(thoiGianCho / 3) * giaTienCho;
  } else {
    tongTienCho == 0;
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = (
    tongTien + tongTienCho
  ).toLocaleString("vi", { currency: "VND", style: "currency" });
};

document.getElementById("btnInHoaDon").onclick = () => {
  let soKM = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector('input[type="radio"]:checked').value;
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let GiaTienKm1Den19 = kiemTraGiaTienKm1Den19(loaiXe);
  let GiaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  let tongTienCho = 0;
  let tongTienChay = 0;
  let tongTien = 0;
  let tongGiaTienKmDauTien = 0;
  let tongGiaTienKm1Den19 = 0;
  let tongGiaTienKmTu19TroLen = 0;
  let soKmDauTien = 0;
  let soKm1Den19 = 0;
  let soKm1Den19HienThi = 0;
  let soKmTu19TroLen = 0;
  let soKmTu19TroLenHienThi = 0;

  if (soKM <= 1 && soKM > 0) {
    soKmDauTien = soKM;
    tongGiaTienKmDauTien = soKM * giaTienKmDauTien;
  } else {
    soKmDauTien = 1;
    tongGiaTienKmDauTien = giaTienKmDauTien;
  }
  if (soKM > 1 && soKM <= 19) {
    soKm1Den19HienThi = soKM;
    soKm1Den19 = soKM - 1;
    tongGiaTienKm1Den19 = (soKM - 1) * GiaTienKm1Den19;
  } else if (soKM > 19) {
    soKm1Den19HienThi = 19;
    soKm1Den19 = 18;
    tongGiaTienKm1Den19 = 18 * GiaTienKm1Den19;
  } else {
    soKm1Den19HienThi = 0;
  }
  if (soKM > 19) {
    soKmTu19TroLenHienThi = soKM;
    soKmTu19TroLen = soKM - 19;
    tongGiaTienKmTu19TroLen = (soKM - 19) * GiaTienKmTu19TroLen;
  }
  if (soKM <= 1 && soKM > 0) {
    tongTienChay = soKM * giaTienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    tongTienChay = giaTienKmDauTien + (soKM - 1) * GiaTienKm1Den19;
  } else {
    tongTienChay =
      giaTienKmDauTien +
      18 * GiaTienKm1Den19 +
      (soKM - 19) * GiaTienKmTu19TroLen;
  }
  if ((thoiGianCho) => 3) {
    tongTienCho = Math.floor(thoiGianCho / 3) * giaTienCho;
  } else {
    tongTienCho == 0;
  }
  tongTien = tongTienChay + tongTienCho;
  let table =
    '<table border="1px">' +
    '<th style="text-align: center" colspan="4">Chi tiết hóa đơn</th>' +
    "<tbody>" +
    "<tr>" +
    " <td>CHI TIẾT</td>" +
    "<td>SỬ DỤNG</td>" +
    "<td>ĐƠN GIÁ (1000đ)</td>" +
    "<td>THÀNH TIỀN (1000đ)</td>" +
    "</tr>" +
    "<tr>" +
    "<td>KM ĐẦU TIÊN</td>" +
    `<td>${soKmDauTien} KM</td>` +
    `<td>${giaTienKmDauTien.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    `<td>${tongGiaTienKmDauTien.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    "</tr>" +
    "<tr>" +
    `<td>Từ ${soKmDauTien} đến ${soKm1Den19HienThi}</td>` +
    `<td>${soKm1Den19} KM</td>` +
    `<td>${GiaTienKm1Den19.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    `<td>${tongGiaTienKm1Den19.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    "</tr>" +
    "<tr>" +
    `<td>Từ ${soKm1Den19HienThi} đến ${soKmTu19TroLenHienThi}</td>` +
    `<td>${soKmTu19TroLen} KM</td>` +
    `<td>${GiaTienKmTu19TroLen.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    `<td>${tongGiaTienKmTu19TroLen.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    "</tr>" +
    "<tr>" +
    `<td>Thời gian chờ</td>` +
    `<td>${thoiGianCho} phút</td>` +
    `<td>${giaTienCho.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    `<td>${tongTienCho.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    "</tr>" +
    "<tr>" +
    `<td colspan="4">Tổng tiền: ${tongTien.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    })}</td>` +
    "</tr>" +
    "</tbody>" +
    "</table>";
  document.querySelector(".modal-body").innerHTML = table;
  $("#myModal").modal("show");
};
