src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

$(document).ready(function () {
    //Xử lý header fixed
    $(function () {
        var header = $('.header-full-top');
        var offset = $(header).offset();
        var topHeader = offset.top;


        $(window).scroll(function () {
            let topWindow = $(this).scrollTop();;

            if (topWindow > topHeader) {
                $(header).addClass('header-top-fixed');
            }
            else {
                $(header).removeClass('header-top-fixed');
            }
        });
    });

    $(function () {
        let btnSearchHeader = $('.header-top .header-container .user-top .menu-list .menu-item .btn-search-click');

        $(btnSearchHeader[0]).click(function (e) {
            e.preventDefault();

            let boxSearch = $('.header-top .header-container .user-top .menu-list .menu-item .box-search');
            let hasClass = $(boxSearch[0]).hasClass('show');

            if (hasClass) {
                $(boxSearch[0]).removeClass('show');
            }
            else {
                $(boxSearch[0]).addClass('show');
            }
        });
    });

    // Xử lý menu toggle
    $(function () {
        let btnToggle = $('.header-top .header-container .toggle-top .btn-toggle');

        $(btnToggle[0]).click(function (e) {
            e.preventDefault();
            let hasClass = $(this).hasClass('active');
            let menu = $('.header-top .header-container .menu-top');

            if (hasClass) {
                $(this).removeClass('active');
                $(menu[0]).removeClass('menu-active');
            }
            else {
                $(this).addClass('active');
                $(menu[0]).addClass('menu-active');
            }
        });
    });


    // Xử lý slide
    $(function () {
        $('.index-page .categories-1 .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    });

    $(function () {
        $('.index-page .categories-1 .owl-slide-1').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

        $('.index-page .categories-3 .owl-slide-2').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1090: {
                    items: 5
                }
            }
        });

        $('.index-page .categories-4 .owl-slide-2').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1090: {
                    items: 5
                }
            }
        });

        $('.technical-detail-page .land-cate-slide .owl-slide-1').owlCarousel({
            loop: true,
            nav: true,
            margin: 0,
            autoplay: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });

    // Nút scroll top
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Xử header trang admin
    $(function () {
        let header = $('.admin-form-header');
        let posHeader = $(header).position();
        let topHeader = posHeader.top;

        $(window).scroll(function () {
            let topWindow = $(this).scrollTop();;

            if (topWindow > topHeader) {
                //$(header).addClass('header-admin-fixed');
            }
            else {
                $(header).removeClass('header-admin-fixed');
            }
        });
    });

    // Hàm bỏ dấu tiếng Việt
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
    }

    // Hàm xử lý item trang personal
    $(function () {
        let itemPer = $('.personal-page .container .body .land-cate:nth-child(1) .land-content .item');
        for (let i = 0; i < itemPer.length; i++) {
            $(itemPer[i]).click(function (e) {
                e.preventDefault();
                let itemDis = $('.personal-page .container .body .land-cate:nth-child(2) .land-content');
                for (var j = 0; j < itemDis.length; j++) {
                    if (i == j) {
                        $(itemDis[i]).addClass('display');
                        $(itemPer[i]).addClass('item-active');
                    }
                    else {
                        $(itemDis[j]).removeClass('display');
                        $(itemPer[j]).removeClass('item-active');
                    }
                }
            });
        }
    });

    // Hàm bỏ checked
    $(function () {
        let itemRadio = $('.personal-technical-page .checkBoxIn');
        for (let i = 0; i < itemRadio.length; i++) {
            $(itemRadio[i]).on("mousedown", function () {
                if (this.checked) {
                    $(this).one("click", function () {
                        this.checked = false;
                        let checkRadio = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table .outcheckBoxIn');
                        for (let k = 0; k < checkRadio.length; k++) {
                            checkRadio[k].checked = false;
                        }
                    });
                }
                else {
                    let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table');
                    let hasClass = $(boxItem[i]).hasClass('active');
                    if (!hasClass) {
                        $(boxItem[i]).addClass('active');
                    }
                    this.checked = true;
                }
            });
        }
    });

    // Hàm lọc table
    $(function () {
        let search = $('.admin-container .box-find .form-find input');
        let rowTable = document.querySelectorAll('.admin-container .table-box tbody tr');

        $(search).keyup(function (e) {
            e.preventDefault();
            let val = $(this).val().toLowerCase();

            $(rowTable).filter(function () {
                let rowText = $(this).text().toLowerCase();

                $(this).toggle(removeVietnameseTones(rowText).indexOf(removeVietnameseTones(val)) > -1)
            });
        });
    });

    $(function () {
        let btnComp = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table .box-container .box-btn .btn-complete');
        for (let i = 0; i < btnComp.length; i++) {
            $(btnComp[i]).click(function (e) { 
                e.preventDefault();
                let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table');
                let hasClass = $(boxItem[i]).hasClass('active');
                if (hasClass) {
                    $(boxItem[i]).removeClass('active');
                    let clear = $(`.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table-${i + 1} .outcheckBoxIn`);
                    let count = 0;
                    for (let k = 0; k < clear.length; k++) {
                        if (clear[k].checked) {
                            count++;
                        }
                    }

                    if (count == 0) {
                        clearCheck(i);
                    }
                }
                let valCheck = $(`.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table .outcheckBoxIn-${i + 1}`);
                let getPar = $(`.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table-${i + 1} table tbody tr`)

                let outVal = $('.personal-technical-page .categories table tbody');
                let html = $(outVal[0]).html();
                for (let j = 0; j < valCheck.length; j++) {
                    if (valCheck[j].checked) {
                        let val = $(valCheck[j]).val();
                        let getVal = $(getPar[j]).html();
                        html += `<tr class='row-${i}-${j}'>${getVal}</tr>`;
                        $(outVal[0]).html(html);
                    }
                    else {
                        clearCheckRe(i, j);
                    }
                }
               
                let obj = $('.personal-technical-page .categories table tbody tr');
                $(obj).each(function () { 
                    let text = $(this).text();
                    if (obj[text]) {
                        $(this).remove();
                    }
                    else {
                        obj[text] = true;
                    }
                });
            });
        }
    });

    function clearCheckRe(x, y) {
        let obj = $(`.personal-technical-page .categories table tbody .row-${x}-${y}`);
        return $(obj[0]).remove();
    };

    function clearCheck(pos) {
        let item = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-table .table-2 tbody tr th .checkBoxGr');
        return item[pos].checked = false;
    }

    $(function () {
        let checkRadio = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table .outcheckBoxIn');
        for (let i = 0; i < checkRadio.length; i++) {
            $(checkRadio[i]).on("mousedown", function () {
                if (this.checked) {
                    $(this).one("click", function () {
                        
                        this.checked = false;
                    });
                }
            });
        }
    });

    chooseGroupTech();

    function chooseGroupTech() {
        let item = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-table .table-2 tbody tr th .checkBoxGr');
        for (let i = 0; i < item.length; i++) {
            $(item[i]).on("mousedown", function () {
                $(this).one('click', function (e) {
                    if (this.checked) {
                        let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table');
                        let hasClass = $(boxItem[i]).hasClass('active');
                        if (!hasClass) {
                            $(boxItem[i]).addClass('active');
                        }
                    }
                    else {
                        this.checked = true;
                    }
                });
                $(this).one('click', function (e) {
                    if (this.checked) {
                        let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table');
                        let hasClass = $(boxItem[i]).hasClass('active');
                        if (!hasClass) {
                            $(boxItem[i]).addClass('active');
                        }
                    }
                    else {
                        this.checked = true;
                    }
                });
                $(this).on('dblclick', function (e) {
                    this.checked = false;
                    let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table');
                    let hasClass = $(boxItem[i]).hasClass('active');
                    if (hasClass) {
                        $(boxItem[i]).removeClass('active');
                    }

                    let clearCheck = $(`.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table-${i + 1} .outcheckBoxIn`);
                    for (let k = 0; k < clearCheck.length; k++) {
                        clearCheck[k].checked = false;
                    }
                });

 
            });
        }
    }

    // getObjGroupTech();

    // function getObjGroupTech() {
    //     let choose = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-table .table-2 tbody tr th .checkBoxGr');
    //     let boxItem = $('.personal-technical-page .body .land-cate:nth-child(2) form .box-out-table table tbody');
    //     let href = window.location.href + '/group';

    //     for (let i = 0; i < choose.length; i++) {
    //         $(choose[i]).on("mousedown", function () {
    //             $.ajax({
    //                 url: href,
    //                 contentType: "application/json",
    //                 method: "POST",
    //                 data: JSON.stringify({ query: $(this).val() }),
    //                 success: function (response) {
    //                     $(boxItem[i]).html(response);
    //                 }
    //             });
    //         });
    //     }
    // }

    new WOW().init();
});
