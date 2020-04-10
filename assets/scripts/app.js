const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "pro-programmer",
        weight: 12.3,
      },
      {
        text: "Priyank",
        weight: 12,
      },
      {
        text: "javascript",
        weight: 14,
      },
      {
        text: "android",
        weight: 11,
      },
      {
        text: "database",
        weight: 13,
      },
      {
        text: "eLearner",
        weight: 12,
      },
      {
        text: "IOT",
        weight: 12.5,
      },
      {
        text: "scrum-master",
        weight: 15,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Full-Stack Web Developer.",
        "write fast algorithms.",
        "develop android mobile application.",
        "solve realtime problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#C8412B",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

function alertUpcoming() {
  alert("Upcoming Product");
}

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
