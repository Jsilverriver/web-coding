var links = {
    SetColor: function (color) {
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // while(i < alist.length){
        //     alist[i].style.color=color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
  }
  var body = {
      SetColor: function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
  },
    SetBackgroundColor: function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
  }

  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        body.SetBackgroundColor('grey');
        body.SetColor('white');
        self.value = 'day';
            
    links.SetColor('powderblue')
    } else {
        body.SetBackgroundColor('white');
        body.SetColor('black');
        self.value = 'night';

    links.SetColor('blue')
    }
  }