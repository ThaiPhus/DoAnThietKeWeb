function hiendsgiay()
{
        var dsgiay = [
            {hinh: 'gdt1.jpg', ten: 'Phòng Khách', nd: '1.500.000 VNĐ'},
            {hinh: 'gdt2.jpg', ten: 'Phòng Khách', nd: '1.500.000 VNĐ'},
            {hinh: 'gdt3.jpg', ten: 'Phòng Khách', nd: '1.500.000 VNĐ'},
            {hinh: 'gdt4.jpg', ten: 'Phòng Ngủ', nd: '1.500.000 VNĐ'},
        ];
        var noidung = "<div class='row'>";
        for (t in dsgiay)
        {
            noidung += "<div class='col-md-3 col-sm-6 col-12'>";
            noidung += "<div class='card' style='width: 18rem;'>";
            noidung += "<img src='Hình/"+dsgiay[t].hinh+" 'class='card-img-top' alt='..'>";
            noidung += "<div class='card-body'>";
            noidung += "<h5 class='card-title'>"+dsgiay[t].ten+"</h5>";
            noidung += "<p class='card-text'>"+dsgiay[t].nd+"</p>";
            noidung += "</div></div></div>"
        }
        noidung += "</div>";
        dsnoidung.innerHTML = noidung;
}