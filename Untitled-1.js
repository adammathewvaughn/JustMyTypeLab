
$(function () {
    let sentencetext = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate"
    ];
    let eachsentence = 0;
    let sentenceletters = 0;
    let trgtlttrarea = $("#target-letter");
    let feedbackarea = $("#feedback");
    let sentencearea = $("#sentence");
    let yellowblock = $("#yellow-block");
    let prmptarea = $("#prompt-container");
    let trgtcontainer = $("#targetcontainer");
    let upprkybrd = $("#keyboard-upper-container");
    let lwrkybrd = $("#keyboard-lower-container");
    
    upprkybrd.hide();
    
    $(document).keydown((e) => {
        if (e.which === 16) {
            upprkybrd.show();
            lwrkybrd.hide();
        }
    });
    $(document).keyup((e) => {
        if (e.which === 16) {
            upprkybrd.hide();
            lwrkybrd.show();
        }
    });
    $(document).keypress((e) => {
        let anykey = $("#" + e.which);
        anykey.css("backgroundColor", "yellow");
        $(document).keyup(() => {
            //   let anykey = $("#" + e.which);
            anykey.css("backgroundColor", "");
        });
    });
    $(sentencearea).text(sentencetext[eachsentence]);
    $(trgtlttrarea).text(sentencetext[eachsentence][sentenceletters]);
    $(document).keypress((e) => {
        sentenceletters++;
        eachsentence++;
        yellowblock.animate({ left: "+=17.5px" }, { duration: 1, easing: "linear" });
        $(trgtlttrarea).text(sentencetext[eachsentence][sentenceletters]);
        $(sentencearea).text(sentencetext[eachsentence]);
        if (e.which === e.charCode) (eachsentence[sentenceletters])
        $(feedbackarea).append('<i class="glyphicon glyphicon-ok"></i>');
        } else {
        $(feedbackarea).append('<i class="glyphicon glyphicon-remove"></i>');
        }
        
    });
    // `numberOfWords / minutes - 2 * numberOfMistakes`
    //$(document).keyup ((e) => {
       // alert(`Key "${e.key}" released  [event: keyup]`);
      //});
    
});
