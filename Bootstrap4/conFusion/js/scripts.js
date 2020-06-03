$(document).ready(function () {
    $("#mycar").carousel({ interval: 200 });
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycar").carousel('pause');
            console.log("text");
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else {
            $("#mycar").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });
    $("#reserveSeat").click(function () {
        $("#reserveModal").modal("toggle");
    });
    $("#reserveCancel").click(function () {
        $("#reserveModal").modal("toggle");
    });
    $("#logButton").click(function () {
        $("#loginModal").modal("toggle");
    });   
    $("#logCancel").click(function () {
        $("#loginModal").modal("toggle");
    });        
})