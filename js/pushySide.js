var optionSideTop = {
    button: "side-top-pushy-button",
    container: "container",
    containerPush: true,
    menuPosition: "top",
    menuOpen: false,
    overlayShow: true                                    
  };
  $("#sideTopPushy").Pushy(optionSideTop);


  var optionSideLeft = {
    button: "side-left-pushy-button, .navbar-toggler",
    container: "container",
    containerPush: false,
    menuPosition: "left",
    menuOpen: false,
    overlayShow: true          
  }
  $("#sideLeftPushy").Pushy(optionSideLeft);


  var optionSideRight = {
    button: "side-right-pushy-button, .close-btn-right",
    container: "container",
    containerPush: true,
    menuPosition: "right",
    menuOpen: false,
    // overlayShow: false
    overlayShow: true
  };
  $("#sideRightPushy").Pushy(optionSideRight);