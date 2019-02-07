import dataQuiz from './quiz.json';

$(document).ready(function () {

})

// Global
$(function globalCloseDialog() {
    $('body').on({
        click: function (e) {
            if (
                $(event.target).hasClass('dialog--show') ||
                $(event.target).hasClass('overlay--show')
            ) {
                handleCloseDialog();
                handleCloseBottomSheet();
            }
        },
    });
});

window.handleOpenDialog = handleOpenDialog;
function handleOpenDialog(target) {
    if(target !== undefined){
        $(target).addClass('dialog--show');
    }
    else{
        $('.dialog').addClass('dialog--show');
    }
    $('body').addClass('lock');
    $('.overlay').addClass('overlay--show');
}

window.handleCloseDialog = handleCloseDialog;
function handleCloseDialog() {
    $('body').removeClass('lock');
    $('.overlay').removeClass('overlay--show');
    $('.dialog').removeClass('dialog--show');
}

function handleOpenBottomSheet() {
    $('.bottom-sheet').addClass('bottom-sheet--show');
    $('.overlay').addClass('overlay--show');
}

window.handleCloseBottomSheet = handleCloseBottomSheet;
function handleCloseBottomSheet() {
    $('.bottom-sheet').removeClass('bottom-sheet--show');
    $('.overlay').removeClass('overlay--show');
    setTimeout(() => {
        $('.bottom-sheet').remove();
    }, 300);
}

function renderPage(html) {
    $('#wrapper').empty();
    $('#wrapper').append(html);
}