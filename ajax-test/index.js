$(function () {
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        type: 'get',
        beforeSend: function () {
            $('.loading').fadeIn();
        },
        success: function (data) {
            var photo = '',
                pop = '',
                text = '',
                idx = 0;
            $(data).find('article').each(function () {
                photo = '<article class="thumb">' + $(this).html() + '</article>';
                $('#main').append(photo);
            });
            $('#main').on('click', 'article', function (e) {
                e.preventDefault();
                $('.poptrox-overlay').show();
                idx = $(this).index();
                dataInfo();
                //                var url = $(this).find('a').attr('href'),
                //                    text = $(this).find('h2').text(),
                //                    pop = '';
                //
                //                pop = '<img src = "' + url + '" > ';
                //                $('.poptrox-overlay').show();
                //                $('.poptrox-popup .pic').html(pop);
                //                $('.poptrox-popup .caption').html(text);
                //                //my code

            $(data).find('item')
            });
            $('.nav-previous').click(function () {
                if (idx <= 0) {

                } else {
                    idx--;
                }
                dataInfo();
            });
            $('.nav-next').click(function () {
                idx++;
                dataInfo();
            });

            function dataInfo() {
                pop = $('article').eq(idx).find('a').attr('href');
                text = $('article').eq(idx).find('h2').text();
                $('.poptrox-popup .pic img').attr('src', pop);
                console.log(pop);
                $('.caption').text(text);
            }

            $('.icon').click(function () {
                $('footer').toggleClass('active');
            });

            $('.closer').click(function () {
                $('.poptrox-overlay').hide();
            })

            $('.primary').click(function (e) {
                e.preventDefault();
                if ($('#name').val() == '' || $('#email').val() == '') {
                    alert('warning');
                } else {
                    $('footer').removeClass('active');
                }
            });




        },
        complete: function () {
            $('.loading').fadeIn();
            0
        },
        error: function () {
            alert('fail');
        }
    });
});
