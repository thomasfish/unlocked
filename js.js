// Declaring Vars
var achs = [];
var totalachs = 16;

///////////////
// FUNCTIONS //
///////////////

// Achievement Messages
function achmsg(msg) {
  var ach = document.getElementById("ach");
  ach.innerHTML = msg;
  ach.style.opacity = 0.7;
  setTimeout(function(){ ach.style.opacity = 0; }, 3000);
}

// Background Functions
function updatebg() {
  var height = (100 / totalachs) * achs.length;
  document.getElementById("num").style.height = height + "vh";
}

// Achievement Adding Function
function achgive(num, msg) {
  if (achs.indexOf(num) == -1) {
    achmsg(msg);
    achs.push(num);
    $("h1").text(achs.length);
    updatebg();
    console.log(achs);
  }
}

// Clearing Function
function clearachs() {
  location.reload();
}

// 1 - Lets-a Go!
setTimeout(function() {
  achgive(1, "Lets-a go!");
}, 200);

// 2 - Entering
Mousetrap.bind('enter', function() {
  achgive(2, "Entering");
});

// 3 - Konami Code
Mousetrap.bind('up up down down left right left right b a', function() {
  achgive(3, "Konami Code");
});

// 4 - Slightly Bored
Mousetrap.bind('q w e r t y', function() {
  achgive(4, "Slightly Bored");
});

// 5 - A Little Bit Bored
Mousetrap.bind('1 2 3 4 5 6 7 8 9 0', function() {
  achgive(5, "A Little Bit Bored");
});

// 6 - Very Bored
Mousetrap.bind('a b c d e f g h i j k l m n o p q r s t u v w x y z', function() {
  achgive(6, "Very Bored");
});

// 7 - You Can't Leave
Mousetrap.bind('esc', function() {
  achgive(7, "You Can't Leave");
});

// 8 - Into Space
Mousetrap.bind('space', function() {
  achgive(8, "Into Space");
});

// 9 - Dogs and Foxes
Mousetrap.bind('t h e space q u i c k space b r o w n space f o x space j u m p s space o v e r space t h e space l a z y space d o g', function() {
  achgive(9, "Dogs and Foxes");
});

// 10 - Clickety Click
$(document).click(function() {
  achgive(10, "Clickety Click");
});

// 11 - Clicky on the Achievement
$(".ach").click(function() {
  achgive(11, "Clicky on the Achievement");
});

// 12 - Bookmarked
Mousetrap.bind('ctrl+d', function() {
  achgive(12, "Bookmarked");
});

// 13 - Copied
Mousetrap.bind('ctrl+c', function() {
  achgive(13, "Plaguarism");
});

// 14 - Pasted
Mousetrap.bind('ctrl+v', function() {
  achgive(14, "Pasted");
});

// 15 - Cutted
Mousetrap.bind('ctrl+x', function() {
  achgive(15, "Cutted");
});

// 16 - Redone
Mousetrap.bind('ctrl+z', function() {
  achgive(16, "Redone");
});

//////////////
// AUTOSAVE //
//////////////

(function() {
  function supportsLocalStorage() {
    return typeof(Storage)!== 'undefined';
  }
  if (!supportsLocalStorage()) {
     alert("No HTML5 localStorage support, soz.");
  } else {
    try {
      setInterval(function() {
        localStorage.setItem('autosave', JSON.stringify(achs));
      }, 1000);
    } catch (e) {
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!');
      }
    }
    if (localStorage.getItem('autosave')) {
      var result = JSON.parse(localStorage.getItem('autosave'));
      console.log(localStorage.getItem('autosave'));
      console.log(result);
      achs = result;
      $("h1").text(achs.length);
      setTimeout(function() {
        updatebg();
      }, 50);
    }
    document.querySelector('.clear').onclick = function() {
      clearachs();
      localStorage.clear(); 
    };
  }
})();
