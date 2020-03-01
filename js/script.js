function tampilMenu() {
    $.getJSON('pizza.json', function(data) {
        let menu = data.menu;
        
        $.each(menu, function(i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mt-3 mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-danger">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilMenu();


$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    
    let kategori = $(this).html();
    $('#category-text').html(kategori);

    if(kategori == 'All Menu') {
        $('#daftar-menu').html('');
        tampilMenu();
        return;
    }
    

    $.getJSON('pizza.json', function(data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data) {
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mt-3 mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-danger">Pesan Sekarang</a></div></div></div>';
            }
        })

        $('#daftar-menu').html(content);
    });

});